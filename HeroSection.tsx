import { useState, useRef, useEffect } from "react";
import { lorePins, type LorePin } from "../data/youtubeStudio";

export default function HeroSection() {
  const [selectedPin, setSelectedPin] = useState<LorePin | null>(null);
  const [cosiActive, setCosiActive] = useState(false);
  const [thumbnailMode, setThumbnailMode] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCosi = () => {
    setCosiActive(true);
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(523, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(784, ctx.currentTime + 0.3);
      gain1.gain.setValueAtTime(0.3, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.8);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      osc2.frequency.exponentialRampToValueAtTime(1047, ctx.currentTime + 0.5);
      gain2.gain.setValueAtTime(0, ctx.currentTime);
      gain2.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.1);
      gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.0);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.1);
      osc2.stop(ctx.currentTime + 1.0);
    } catch {
      /* audio not available */
    }
    setTimeout(() => {
      setCosiActive(false);
      setRevealed(true);
    }, 2000);
  };

  useEffect(() => {
    if (cosiActive && containerRef.current) {
      containerRef.current.style.filter = "brightness(1.3) saturate(1.4)";
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.filter = "";
      }, 2000);
    }
  }, [cosiActive]);

  return (
    <section className="relative w-full overflow-hidden bg-[#121110]" ref={containerRef}>
      {/* Key Art Canvas */}
      <div className="relative w-full aspect-video">
        <img
          src="/images/hero-keyart.jpg"
          alt="Nomvula, Mavungula the golden spider, and Nhlava the honeyguide above the Drakensberg at sunset"
          className="w-full h-full object-cover transition-all duration-1000"
          style={{ transform: revealed ? "scale(1)" : "scale(1.08)" }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(18,15,13,0.7) 0%, rgba(18,15,13,0.25) 50%, rgba(18,15,13,0.05) 80%), linear-gradient(0deg, rgba(14,12,11,0.6) 0%, transparent 40%, rgba(14,12,11,0.15) 100%)",
          }}
        />

        {/* Interactive Lore Pins */}
        {revealed &&
          lorePins.map((pin) => (
            <button
              key={pin.id}
              onClick={() => setSelectedPin(selectedPin?.id === pin.id ? null : pin)}
              className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full group z-20 transition-all duration-300 ${
                selectedPin?.id === pin.id
                  ? "bg-amber-400 scale-125 shadow-lg shadow-amber-400/50"
                  : "bg-white/80 hover:bg-amber-400 hover:scale-110"
              }`}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              aria-label={`Lore pin: ${pin.label}`}
            >
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-bold text-white/90 whitespace-nowrap tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {pin.label}
              </span>
              {/* Pulse ring */}
              <span
                className={`absolute inset-0 rounded-full border-2 ${
                  selectedPin?.id === pin.id ? "border-amber-400" : "border-white/60"
                } animate-ping`}
                style={{ animationDuration: "2s" }}
              />
            </button>
          ))}

        {/* Lore Pin Detail Card */}
        {selectedPin && (
          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-[#1e1a17]/95 backdrop-blur-md rounded-2xl border border-amber-900/40 p-5 z-30 shadow-2xl">
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-amber-400 font-bold text-lg">{selectedPin.label}</h4>
              <button
                onClick={() => setSelectedPin(null)}
                className="text-white/50 hover:text-white transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-white/90 leading-relaxed">{selectedPin.lore}</p>
              <p className="text-amber-200/70 leading-relaxed italic">
                <span className="text-amber-400 font-semibold not-italic">Symbolism: </span>
                {selectedPin.symbolism}
              </p>
              <p className="text-white/50 text-xs leading-relaxed font-mono">
                <span className="text-white/70 font-semibold">AI Prompt: </span>
                {selectedPin.promptDetail}
              </p>
            </div>
          </div>
        )}

        {/* YouTube Thumbnail Overlay */}
        {thumbnailMode && (
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 z-20">
            <div className="flex justify-between items-start">
              <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                12:00
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-white text-xl md:text-2xl font-black leading-tight drop-shadow-2xl" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
                The Spider Who Wove Starlight
              </p>
              <p className="text-white/90 text-sm md:text-base font-bold leading-tight drop-shadow-lg" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
                A South African Folktale That Will Change Everything
              </p>
            </div>
          </div>
        )}

        {/* Hero Content (pre-COSI) */}
        {!revealed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#121110]/60 backdrop-blur-sm">
            <div className="text-center px-6 space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                IMBALI Studio Original
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                Nomvula & The
                <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 bg-clip-text text-transparent">
                  Weaver of Starlight
                </span>
              </h1>
              <p className="text-white/70 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                A South African folktale rooted in Zulu, San, Xhosa, and Sotho oral tradition.
              </p>

              {/* COSI Button */}
              <div className="pt-4">
                <button
                  onClick={handleCosi}
                  disabled={cosiActive}
                  className={`relative group inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 ${
                    cosiActive
                      ? "bg-amber-400 text-[#121110] scale-110 shadow-2xl shadow-amber-400/40"
                      : "bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-500 hover:to-orange-500 hover:shadow-xl hover:shadow-amber-600/30 hover:scale-105"
                  }`}
                >
                  {cosiActive ? (
                    <>
                      <span className="text-2xl">✨</span>
                      COSI! — The Tale Opens!
                    </>
                  ) : (
                    <>
                      <span className="text-xl">🌍</span>
                      Shout "COSI!" to Open the Tale
                      <span className="text-xs opacity-70 block -mt-1">
                        Kwasukasukela!
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reveal State Content */}
        {revealed && (
          <div className="absolute inset-0 flex flex-col justify-between z-10 pointer-events-none">
            <div className="flex items-start justify-between p-4 md:p-6">
              <div className="pointer-events-auto">
                <span className="inline-flex items-center gap-1.5 bg-amber-600/30 border border-amber-500/30 rounded-full px-3 py-1 text-amber-400 text-[10px] font-bold tracking-[0.25em] uppercase">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  IMBALI
                </span>
              </div>
              <div className="pointer-events-auto flex gap-2">
                <button
                  onClick={() => setThumbnailMode(!thumbnailMode)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    thumbnailMode
                      ? "bg-red-600 text-white"
                      : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  📺 {thumbnailMode ? "Hide" : "YT Preview"}
                </button>
              </div>
            </div>
            <div className="p-4 md:p-8">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  The Weaver of
                  <span className="block text-amber-400">Starlight</span>
                </h2>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                  Click the glowing pins on the artwork to explore the cultural origins, symbolism, and AI prompt details behind each element.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
