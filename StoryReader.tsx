import { useState, useEffect, useRef } from "react";
import { acts, moralPlaque, type StoryAct } from "../data/folklore";

const SPEEDS = [
  { label: "Fireside", value: 0.85 },
  { label: "Normal", value: 0.95 },
  { label: "Dynamic", value: 1.1 },
] as const;

export default function StoryReader() {
  const [activeAct, setActiveAct] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speedIdx, setSpeedIdx] = useState(1);
  const [activeFootnote, setActiveFootnote] = useState<string | null>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const act = acts[activeAct] as StoryAct;
  const speed = SPEEDS[speedIdx].value;

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.rate = speed;
      utt.pitch = 0.95;
      utt.onstart = () => setIsPlaying(true);
      utt.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utt);
    }
  };

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlayAct = () => {
    if (isPlaying) {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const fullText = act.paragraphs.join(" ");
      speak(fullText);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-[#f3ecdd]" id="story" ref={storyRef}>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[#BD542F] text-xs font-bold tracking-[0.3em] uppercase">
            The Full Tale
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3b3028]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Three Acts of <span className="text-[#BD542F]">Ubuntu</span>
          </h2>
        </div>

        {/* Act Navigation */}
        <div className="flex items-center justify-center gap-2">
          {acts.map((_a, i) => (
            <button
              key={i}
              onClick={() => {
                if ("speechSynthesis" in window) window.speechSynthesis.cancel();
                setIsPlaying(false);
                setActiveAct(i);
              }}
              className={`px-4 md:px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeAct === i
                  ? "bg-[#BD542F] text-white shadow-lg shadow-[#BD542F]/30"
                  : "bg-white/80 text-[#3b3028]/70 hover:bg-white hover:text-[#BD542F]"
              }`}
            >
              Act {i + 1}
            </button>
          ))}
        </div>

        {/* Sensory Tri-Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { icon: "👁️", label: "Sight", value: act.sensory.sight, color: "bg-amber-100 border-amber-300/50" },
            { icon: "👂", label: "Sound", value: act.sensory.sound, color: "bg-orange-100 border-orange-300/50" },
            { icon: "🌿", label: "Scent", value: act.sensory.scent, color: "bg-emerald-100 border-emerald-300/50" },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl p-4 border ${s.color}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span>{s.icon}</span>
                <span className="text-xs font-bold text-[#3b3028]/60 uppercase tracking-wider">{s.label}</span>
              </div>
              <p className="text-[#3b3028]/70 text-xs leading-relaxed italic">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Story Content */}
        <div className="relative">
          {/* Act Title */}
          <div className="mb-6 pb-4 border-b border-[#3b3028]/10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3b3028]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              {act.title}
            </h3>
            <p className="text-[#BD542F]/80 text-sm mt-1 italic">{act.subtitle}</p>
          </div>

          {/* Play Controls */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handlePlayAct}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                isPlaying
                  ? "bg-[#BD542F] text-white shadow-lg shadow-[#BD542F]/30"
                  : "bg-[#3b3028]/10 text-[#3b3028] hover:bg-[#3b3028]/20"
              }`}
            >
              {isPlaying ? "⏸ Pause Narrator" : "▶ Listen to This Act"}
            </button>
            <div className="flex items-center gap-1">
              {SPEEDS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setSpeedIdx(i)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    speedIdx === i
                      ? "bg-[#3b3028] text-white"
                      : "bg-white/60 text-[#3b3028]/60 hover:text-[#3b3028]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Paragraphs with footnotes */}
          <div className="space-y-5">
            {act.paragraphs.map((p, pi) => (
              <p
                key={pi}
                className="text-[#3b3028] leading-relaxed"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "1.1rem",
                  lineHeight: "1.85",
                }}
              >
                {pi === 0 && (
                  <span className="float-left mr-1.5 mt-1 text-5xl font-bold text-[#BD542F]" style={{ lineHeight: "0.75" }}>
                    {p[0]}
                  </span>
                )}
                {p.slice(pi === 0 ? 1 : 0)}
              </p>
            ))}

            {/* Footnotes */}
            {act.footnotes.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#3b3028]/10 space-y-2">
                <h4 className="text-xs font-bold text-[#BD542F]/70 uppercase tracking-wider">
                  📜 Oral Heritage Footnotes
                </h4>
                {act.footnotes.map((fn) => (
                  <div key={fn.label} className="relative group">
                    <button
                      onClick={() => setActiveFootnote(activeFootnote === fn.label ? null : fn.label)}
                      className="flex items-center gap-2 text-sm text-[#BD542F] hover:text-[#9e482b] transition-colors"
                    >
                      <span className="font-bold">{fn.label}</span>
                      <span className="text-xs text-[#3b3028]/40 transition-transform">
                        {activeFootnote === fn.label ? "▲" : "▼"}
                      </span>
                    </button>
                    {activeFootnote === fn.label && (
                      <p className="mt-1 ml-4 text-sm text-[#3b3028]/60 leading-relaxed italic">
                        {fn.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Act Pagination */}
        <div className="flex items-center justify-between pt-4">
          <button
            onClick={() => {
              if ("speechSynthesis" in window) window.speechSynthesis.cancel();
              setIsPlaying(false);
              setActiveAct(Math.max(0, activeAct - 1));
            }}
            disabled={activeAct === 0}
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all disabled:opacity-30 bg-white text-[#3b3028] hover:bg-[#3b3028] hover:text-white"
          >
            ← Previous Act
          </button>
          <span className="text-xs text-[#3b3028]/40 font-bold">Act {activeAct + 1} of 3</span>
          <button
            onClick={() => {
              if ("speechSynthesis" in window) window.speechSynthesis.cancel();
              setIsPlaying(false);
              setActiveAct(Math.min(acts.length - 1, activeAct + 1));
            }}
            disabled={activeAct === acts.length - 1}
            className="px-5 py-2.5 rounded-full text-sm font-bold transition-all disabled:opacity-30 bg-white text-[#3b3028] hover:bg-[#3b3028] hover:text-white"
          >
            Next Act →
          </button>
        </div>

        {/* Moral Plaque */}
        <div className="mt-8 bg-gradient-to-br from-[#3b3028] to-[#2a2218] rounded-2xl p-8 md:p-12 text-center border border-amber-900/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f59e0b 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="text-3xl mb-2">✊🏾</div>
            <h4 className="text-2xl md:text-3xl font-bold text-amber-400" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              {moralPlaque.proverb}
            </h4>
            <p className="text-white/80 text-lg italic">{moralPlaque.translation}</p>
            <div className="w-16 h-px bg-amber-600/50 mx-auto my-4" />
            <p className="text-white/50 text-sm leading-relaxed max-w-md mx-auto">
              {moralPlaque.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
