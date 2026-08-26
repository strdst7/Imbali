import { useState } from "react";
import {
  teleprompter,
  youtubeMetadata,
  biomes,
  heroArchetypes,
  creatureTypes,
  type TeleprompterBlock,
} from "../data/youtubeStudio";

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
        copied
          ? "bg-green-600/20 text-green-400"
          : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
      }`}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

export default function YouTubeStudio() {
  const [activeTab, setActiveTab] = useState<"teleprompter" | "metadata" | "generator">("teleprompter");
  const [expandedBlock, setExpandedBlock] = useState<number | null>(null);
  const [titleIdx, setTitleIdx] = useState(0);

  // Generator state
  const [genHero, setGenHero] = useState(0);
  const [genCreature, setGenCreature] = useState(0);
  const [genBiome, setGenBiome] = useState(0);
  const [generatedOutput, setGeneratedOutput] = useState("");

  const generate = () => {
    const hero = heroArchetypes[genHero];
    const creature = creatureTypes[genCreature];
    const biome = biomes[genBiome];

    const hook = `In the heart of the ${biome.name}, a young ${hero.name.toLowerCase()} discovers something older than memory — and it's calling their name.`;
    const mjPrompt = `Cinematic digital painting, 16:9 aspect ratio: A young ${hero.name.toLowerCase()} holding a ${hero.tool} standing in the ${biome.name}, ${biome.description.toLowerCase()}. A magnificent ${creature.name.toLowerCase()} of ${creature.domain} appears before them in a moment of magical revelation. Warm African sunset palette with amber, ochre, and deep indigo tones. Magical realism style, intricate detail, dramatic lighting, storybook illustration. --ar 16:9 --v 6`;
    const dallePrompt = `A cinematic digital painting (16:9): A young ${hero.name.toLowerCase()} holding a ${hero.tool} stands in the breathtaking landscape of the ${biome.name} (${biome.description}). Before them, a magnificent ${creature.name.toLowerCase()} associated with ${creature.domain} appears in a magical, revelatory moment. The scene uses warm African sunset colors — amber, ochre, burnt sienna, and deep indigo. Style: magical realism, highly detailed storybook illustration with dramatic lighting.`;

    setGeneratedOutput(
      `🎬 YOUTUBE HOOK:\n"${hook}"\n\n🎨 MIDJOURNEY v6 PROMPT:\n${mjPrompt}\n\n🎨 DALL·E 3 PROMPT:\n${dallePrompt}`
    );
  };



  return (
    <section className="py-16 md:py-24 px-4 bg-[#121110]" id="studio">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">
            Creator Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            YouTube <span className="text-red-500">Production Studio</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            Everything you need to produce, publish, and promote this folktale as a YouTube video — from timecoded teleprompter scripts to SEO-optimized metadata.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2">
          {(
            [
              { id: "teleprompter", label: "📜 Teleprompter" },
              { id: "metadata", label: "📊 Metadata" },
              { id: "generator", label: "🎨 AI Generator" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TELEPROMPTER */}
        {activeTab === "teleprompter" && (
          <div className="space-y-4">
            {(teleprompter as TeleprompterBlock[]).map((block, i) => (
              <div
                key={i}
                className="bg-[#1a1714] rounded-xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedBlock(expandedBlock === i ? null : i)}
                  className="w-full flex items-center gap-4 p-4 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="bg-red-600/20 text-red-400 text-xs font-bold px-2.5 py-1 rounded-lg font-mono min-w-[60px] text-center">
                    {block.timecode}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm">{block.section}</h4>
                  </div>
                  <span className={`text-white/30 text-lg transition-transform ${expandedBlock === i ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {expandedBlock === i && (
                  <div className="px-4 pb-5 space-y-4 border-t border-white/5 pt-4">
                    <div>
                      <span className="text-xs font-bold text-white/40 uppercase tracking-wider">Script</span>
                      <p className="text-white/80 text-sm leading-relaxed mt-1 whitespace-pre-line font-mono">
                        {block.script}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-[#222019] rounded-lg p-3">
                        <span className="text-xs font-bold text-amber-400/70 uppercase tracking-wider">B-Roll</span>
                        <p className="text-white/60 text-xs mt-1 leading-relaxed">{block.broll}</p>
                      </div>
                      <div className="bg-[#222019] rounded-lg p-3">
                        <span className="text-xs font-bold text-blue-400/70 uppercase tracking-wider">Camera</span>
                        <p className="text-white/60 text-xs mt-1 leading-relaxed">{block.camera}</p>
                      </div>
                      <div className="bg-[#222019] rounded-lg p-3">
                        <span className="text-xs font-bold text-green-400/70 uppercase tracking-wider">SFX</span>
                        <p className="text-white/60 text-xs mt-1 leading-relaxed">{block.sfx}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* METADATA */}
        {activeTab === "metadata" && (
          <div className="space-y-6">
            {/* Titles */}
            <div className="bg-[#1a1714] rounded-xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">High-CTR Titles</h4>
                <CopyButton text={youtubeMetadata.titles.join("\n")} />
              </div>
              <div className="space-y-2">
                {youtubeMetadata.titles.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setTitleIdx(i)}
                    className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                      titleIdx === i
                        ? "bg-red-600/10 border border-red-500/30 text-white"
                        : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-[#1a1714] rounded-xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Video Description</h4>
                <CopyButton text={youtubeMetadata.description} />
              </div>
              <pre className="text-white/60 text-xs leading-relaxed whitespace-pre-wrap font-mono bg-[#121110] rounded-lg p-4 max-h-80 overflow-y-auto">
                {youtubeMetadata.description}
              </pre>
            </div>

            {/* Tags */}
            <div className="bg-[#1a1714] rounded-xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Tags</h4>
                <CopyButton text={youtubeMetadata.tags.join(", ")} />
              </div>
              <div className="flex flex-wrap gap-2">
                {youtubeMetadata.tags.map((tag) => (
                  <span key={tag} className="bg-white/5 text-white/60 text-xs px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pinned Comment */}
            <div className="bg-[#1a1714] rounded-xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Pinned Comment</h4>
                <CopyButton text={youtubeMetadata.pinnedComment} />
              </div>
              <pre className="text-white/60 text-sm leading-relaxed whitespace-pre-wrap font-mono bg-[#121110] rounded-lg p-4">
                {youtubeMetadata.pinnedComment}
              </pre>
            </div>
          </div>
        )}

        {/* AI GENERATOR */}
        {activeTab === "generator" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Hero Selector */}
              <div className="bg-[#1a1714] rounded-xl p-5 border border-white/5">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">🦸🏾 Hero Archetype</h4>
                <div className="space-y-2">
                  {heroArchetypes.map((h, i) => (
                    <button
                      key={h.name}
                      onClick={() => setGenHero(i)}
                      className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                        genHero === i
                          ? "bg-amber-600/10 border border-amber-500/30 text-white"
                          : "bg-white/5 text-white/60 hover:bg-white/10"
                      }`}
                    >
                      <span className="font-bold">{h.name}</span>
                      <span className="text-white/40 text-xs block">{h.tool}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Creature Selector */}
              <div className="bg-[#1a1714] rounded-xl p-5 border border-white/5">
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3">🦎 Mythical Creature</h4>
                <div className="space-y-2">
                  {creatureTypes.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setGenCreature(i)}
                      className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                        genCreature === i
                          ? "bg-purple-600/10 border border-purple-500/30 text-white"
                          : "bg-white/5 text-white/60 hover:bg-white/10"
                      }`}
                    >
                      <span className="font-bold">{c.name}</span>
                      <span className="text-white/40 text-xs block">{c.domain}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Biome Selector */}
              <div className="bg-[#1a1714] rounded-xl p-5 border border-white/5">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">🌍 South African Biome</h4>
                <div className="space-y-2">
                  {biomes.map((b, i) => (
                    <button
                      key={b.name}
                      onClick={() => setGenBiome(i)}
                      className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                        genBiome === i
                          ? "bg-emerald-600/10 border border-emerald-500/30 text-white"
                          : "bg-white/5 text-white/60 hover:bg-white/10"
                      }`}
                    >
                      <span className="font-bold">{b.name}</span>
                      <span className="text-white/40 text-xs block">{b.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={generate}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full text-sm font-bold hover:from-amber-500 hover:to-orange-500 transition-all hover:shadow-xl hover:shadow-amber-600/30"
              >
                ✨ Generate Story Assets
              </button>
            </div>

            {/* Output */}
            {generatedOutput && (
              <div className="bg-[#1a1714] rounded-xl p-5 border border-amber-900/30">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Generated Output</h4>
                  <CopyButton text={generatedOutput} />
                </div>
                <pre className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap font-mono bg-[#121110] rounded-lg p-5">
                  {generatedOutput}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
