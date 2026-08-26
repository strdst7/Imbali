import { useState, useEffect } from "react";
import DedicationPage from "./components/DedicationPage";
import HeroSection from "./components/HeroSection";
import CharactersSection from "./components/CharactersSection";
import StoryReader from "./components/StoryReader";
import YouTubeStudio from "./components/YouTubeStudio";

const navLinks = [
  { label: "Dedication", href: "#dedication" },
  { label: "The Tale", href: "#story" },
  { label: "Characters", href: "#characters" },
  { label: "YouTube Studio", href: "#studio" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#121110] text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#121110]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-sm font-black text-white">
              I
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              IMBALI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-amber-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1a1714]/95 backdrop-blur-md border-t border-white/5">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm text-white/70 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Dedication — Main Page */}
      <DedicationPage />

      {/* Hero */}
      <HeroSection />

      {/* Characters */}
      <CharactersSection />

      {/* Story Reader */}
      <StoryReader />

      {/* YouTube Studio */}
      <YouTubeStudio />

      {/* Footer */}
      <footer className="bg-[#0a0908] py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-xl font-black text-white mx-auto relative">
            I
            <div className="absolute inset-1 rounded-xl border border-amber-400/20" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">IMBALI</h3>
            <p className="text-white/40 text-sm mt-1">
              South African Folktale & YouTube Visual Storytelling Studio
            </p>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent mx-auto" />

          {/* Dedication plaque */}
          <div
            className="mx-auto max-w-lg rounded-2xl border border-amber-400/15 px-6 py-5"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(251,191,36,0.09) 0%, rgba(18,17,16,0) 70%)",
            }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-amber-300/60">
              Crafted with love for
            </p>
            <p
              className="mt-2 text-xl font-bold text-amber-100"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Afsana Mohamed Moolla
            </p>
            <p className="mt-2 text-xs italic leading-relaxed text-white/40">
              “Afsana” — a story, a tale worth telling. May your light thread through every story
              you tell.
            </p>
          </div>

          <p className="text-white/30 text-xs leading-relaxed max-w-md mx-auto">
            Rooted in Zulu, San, Xhosa, and Sotho oral traditions. Every story is a bridge between ancient wisdom and modern storytelling.
          </p>
          <div className="flex items-center justify-center gap-4 text-white/30 text-xs">
            <a href="https://aimirah.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              aimirah.com
            </a>
            <span>•</span>
            <span>MI4INC</span>
          </div>
          <p className="text-white/20 text-[10px]">
            Nur Amirah Mohd Kamil
          </p>
        </div>
      </footer>
    </div>
  );
}
