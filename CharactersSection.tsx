import { useState } from "react";
import { characters, proverbs, type Character, type Proverb } from "../data/characters";

export default function CharactersSection() {
  const [activeChar, setActiveChar] = useState(0);
  const [activeProverb, setActiveProverb] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const char = characters[activeChar] as Character;
  const proverb = proverbs[activeProverb] as Proverb;

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.rate = 0.85;
      utt.pitch = 0.9;
      utt.onstart = () => setIsSpeaking(true);
      utt.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utt);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-[#1a1714]" id="characters">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[#BD542F] text-xs font-bold tracking-[0.3em] uppercase">
            Cast of Characters
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            The Circle of <span className="text-amber-400">Storykeepers</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Meet the heroes, guides, weavers, and thunder-beasts whose stories have been told for thousands of years around Southern African fires.
          </p>
        </div>

        {/* Character Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-3">
            {characters.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveChar(i)}
                className={`relative rounded-2xl p-5 text-left transition-all duration-300 overflow-hidden ${
                  activeChar === i
                    ? "ring-2 ring-amber-400 bg-[#2a2520] shadow-lg shadow-amber-900/20"
                    : "bg-[#222019] hover:bg-[#2a2520]"
                }`}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all"
                  style={{ backgroundColor: c.color, opacity: activeChar === i ? 1 : 0.3 }}
                />
                <span className="text-3xl">{c.icon}</span>
                <h4 className="text-white font-bold text-sm mt-2 leading-tight">{c.name}</h4>
                <p className="text-white/40 text-xs mt-1">{c.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Active Character Detail */}
          <div className="bg-[#222019] rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{char.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{char.name}</h3>
                  <p className="text-amber-400/80 text-sm">{char.subtitle}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{char.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {char.traits.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{ borderColor: char.color + "50", color: char.color, backgroundColor: char.color + "15" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Proverb Carousel */}
        <div>
          <div className="text-center space-y-2 mb-8">
            <span className="text-[#BD542F] text-xs font-bold tracking-[0.3em] uppercase">
              Proverb Archive
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Izaga & Maele — <span className="text-amber-400">Words of the Elders</span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Proverb Card */}
            <div className="bg-gradient-to-br from-[#2a2520] to-[#222019] rounded-2xl p-6 md:p-10 border border-amber-900/20 text-center space-y-5 min-h-[280px] flex flex-col justify-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="bg-amber-600/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                  {proverb.language}
                </span>
                <span className="text-white/30 text-xs">•</span>
                <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                  {proverb.culture}
                </span>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-amber-400 leading-snug" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                "{proverb.original}"
              </blockquote>
              <p className="text-white/60 text-base italic">
                — {proverb.translation}
              </p>
              <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto">
                {proverb.explanation}
              </p>
              <button
                onClick={() => speak(proverb.original)}
                disabled={isSpeaking}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  isSpeaking
                    ? "bg-amber-400 text-[#121110]"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {isSpeaking ? "🔊 Speaking..." : "🔊 Listen to Pronunciation"}
              </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {proverbs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProverb(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeProverb === i ? "bg-amber-400 w-8" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Proverb ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => setActiveProverb((activeProverb - 1 + proverbs.length) % proverbs.length)}
                className="bg-white/10 text-white/60 hover:text-white hover:bg-white/20 rounded-full px-4 py-2 text-sm font-bold transition-all"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveProverb((activeProverb + 1) % proverbs.length)}
                className="bg-white/10 text-white/60 hover:text-white hover:bg-white/20 rounded-full px-4 py-2 text-sm font-bold transition-all"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
