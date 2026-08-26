import { useMemo, useState, useCallback } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  hue: string;
}

const HUES = ["#FCD34D", "#FBBF24", "#FDE68A", "#F59E0B", "#FFF7ED"];

/** Deterministic pseudo-random so the sky never re-shuffles on re-render. */
function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export default function DedicationPage() {
  const [personalStars, setPersonalStars] = useState<Star[]>([]);
  const [threadCount, setThreadCount] = useState(0);

  const skyStars = useMemo<Star[]>(() => {
    const stars: Star[] = [];
    for (let i = 0; i < 70; i++) {
      stars.push({
        id: i,
        x: seeded(i + 1) * 100,
        y: seeded(i + 91) * 78,
        size: 1 + seeded(i + 211) * 2.4,
        delay: seeded(i + 311) * 6,
        duration: 2.6 + seeded(i + 411) * 4,
        hue: HUES[Math.floor(seeded(i + 511) * HUES.length)],
      });
    }
    return stars;
  }, []);

  const weaveStar = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPersonalStars((prev) => [
      ...prev.slice(-24),
      {
        id: Date.now() + Math.random(),
        x,
        y,
        size: 2.5 + Math.random() * 2.5,
        delay: 0,
        duration: 2.4 + Math.random() * 2.4,
        hue: HUES[Math.floor(Math.random() * HUES.length)],
      },
    ]);
    setThreadCount((c) => c + 1);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="dedication"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 8%, #2b1d3f 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 85% 90%, #4a2410 0%, transparent 65%), linear-gradient(175deg, #0d0b14 0%, #16111a 38%, #1d1512 72%, #241813 100%)",
      }}
    >
      {/* Starlight sky */}
      <div
        className="absolute inset-0 cursor-crosshair"
        onClick={weaveStar}
        aria-hidden={false}
        role="presentation"
      >
        {skyStars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              backgroundColor: s.hue,
              boxShadow: `0 0 ${s.size * 3}px ${s.hue}`,
              animation: `afsana-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}

        {personalStars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              backgroundColor: s.hue,
              boxShadow: `0 0 ${s.size * 5}px ${s.hue}`,
              animation: `afsana-born 900ms ease-out both, afsana-twinkle ${s.duration}s ease-in-out 900ms infinite`,
            }}
          />
        ))}

        {/* Weaver threads */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.18]" preserveAspectRatio="none" viewBox="0 0 100 100">
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 12.5}
              y1="-5"
              x2={50 + (i - 4) * 6}
              y2="105"
              stroke="#FCD34D"
              strokeWidth="0.12"
              strokeDasharray="1.4 2.6"
              style={{ animation: `afsana-thread ${9 + i}s linear ${i * 0.4}s infinite` }}
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={`c${i}`}
              d={`M -5 ${12 + i * 16} Q 50 ${2 + i * 16} 105 ${12 + i * 16}`}
              fill="none"
              stroke="#FBBF24"
              strokeWidth="0.1"
              strokeDasharray="1.2 3"
              style={{ animation: `afsana-thread ${11 + i * 1.5}s linear ${i * 0.5}s infinite` }}
            />
          ))}
        </svg>
      </div>

      {/* Soft vignette for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(8,6,12,0.55) 0%, rgba(8,6,12,0.15) 55%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 py-24 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-amber-200/90">
            Crafted with love
          </span>
        </div>

        {/* Monogram medallion */}
        <div className="relative mt-9 mb-7">
          <svg className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)]" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="47" fill="none" stroke="#FCD34D" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.45" style={{ animation: "afsana-spin 44s linear infinite", transformOrigin: "50% 50%" }} />
            <circle cx="50" cy="50" r="41" fill="none" stroke="#FBBF24" strokeWidth="0.35" strokeDasharray="1 5" opacity="0.3" style={{ animation: "afsana-spin 30s linear infinite reverse", transformOrigin: "50% 50%" }} />
          </svg>
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-300/30 shadow-2xl"
            style={{
              background:
                "radial-gradient(circle at 32% 26%, rgba(252,211,77,0.35) 0%, rgba(180,83,9,0.28) 45%, rgba(24,17,22,0.9) 100%)",
              boxShadow: "0 0 60px rgba(251,191,36,0.22), inset 0 0 30px rgba(252,211,77,0.12)",
            }}
          >
            <span
              className="text-2xl font-bold tracking-[0.12em] text-amber-100"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              AM
            </span>
          </div>
        </div>

        {/* Dedication label */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/35">
          For
        </p>

        {/* Her name */}
        <h1
          className="mt-3 text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-7xl font-bold"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #FFF7ED 0%, #FDE68A 26%, #FCD34D 48%, #FBBF24 66%, #FFF7ED 100%)",
              backgroundSize: "220% 100%",
              animation: "afsana-shimmer 9s ease-in-out infinite",
              filter: "drop-shadow(0 4px 30px rgba(251,191,36,0.28))",
            }}
          >
            Afsana
          </span>
          <span className="mt-1 block text-[1.35rem] font-normal tracking-[0.16em] text-amber-100/75 sm:text-2xl lg:text-3xl">
            Mohamed Moolla
          </span>
        </h1>

        {/* Meaning of her name */}
        <div className="mt-7 max-w-xl">
          <p
            className="text-base italic leading-relaxed text-amber-50/80 sm:text-lg"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            “Afsana” — <span className="text-amber-300/90">a story, a tale worth telling.</span>
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50">
            This studio was built for a bright girl who carries a whole constellation in her
            imagination. May every thread of starlight woven here remind you that your voice,
            like Nomvula’s carved reed, can open doors older than memory.
          </p>
        </div>

        {/* Thread divider */}
        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span className="text-amber-300/70 text-sm">✦</span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollTo("story")}
            className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-[#1a1207] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_10px_40px_rgba(251,191,36,0.4)]"
            style={{
              background: "linear-gradient(100deg, #FCD34D 0%, #FBBF24 50%, #F59E0B 100%)",
              boxShadow: "0 8px 30px rgba(245,158,11,0.28)",
            }}
          >
            Open the Story Circle
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <button
            onClick={() => scrollTo("characters")}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-bold text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/35 hover:bg-white/10 hover:text-amber-200"
          >
            Meet the Storykeepers
          </button>
        </div>

        {/* Interaction hint */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25">
            Tap the sky to weave a star for her
          </p>
          {threadCount > 0 && (
            <p className="text-xs text-amber-300/70">
              ✦ {threadCount} {threadCount === 1 ? "thread" : "threads"} woven —{" "}
              {threadCount === 1 ? "a constellation begins" : "her constellation grows"}
            </p>
          )}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-8">
        <button
          onClick={() => scrollTo("story")}
          className="flex flex-col items-center gap-2 text-white/25 transition-colors hover:text-amber-300/70"
          aria-label="Scroll to the tale"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
            <span
              className="h-1.5 w-1 rounded-full bg-current"
              style={{ animation: "afsana-scroll 1.9s ease-in-out infinite" }}
            />
          </span>
        </button>
      </div>
    </section>
  );
}
