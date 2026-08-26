export interface Character {
  name: string;
  subtitle: string;
  description: string;
  traits: string[];
  color: string;
  icon: string;
}

export const characters: Character[] = [
  {
    name: "Nomvula of the Carved Reed",
    subtitle: "The Zulu Woodcarver",
    description:
      "Born during the great rain, Nomvula is a young Zulu woman whose hands speak where her voice stays quiet. Her curved carving knife — inherited from her grandmother — moves across wood with meditative precision. She discovers the ancient painted cave door and, through patience and empathy rather than force, unlocks the path to Mavungula's prison. Nomvula represents the Ubuntu ideal: she listens to the world rather than commanding it.",
    traits: ["Patience", "Empathy", "Reverence for craft", "Silent strength"],
    color: "#BD542F",
    icon: "🪵",
  },
  {
    name: "Nhlava the Honeyguide",
    subtitle: "The Sacred Trickster Bird",
    description:
      "The greater honeyguide (Indicator indicator) is a sacred bird in Southern African mythology. Nhlava whistles with a distinctive two-note call and guides humans to hidden honey — but only for those with generous hearts. In the tale, Nhlava has waited three hundred seasons for a carver patient enough to hear. The honeyguide represents knowledge that reveals itself only to the worthy.",
    traits: ["Cunning", "Loyal to the generous", "Ancient wisdom", "Joyful mischief"],
    color: "#D97706",
    icon: "🐦",
  },
  {
    name: "Mavungula, Weaver of Starlight",
    subtitle: "The Celestial Orb-Spider",
    description:
      "An ancient being of amber and starlight, Mavungula dwells within an 800-year-old baobab tree deep underground. She weaves the mist between sunset and first star, creating the rivers of light that become rain. Bound by the Thunder-Bull's wrath, she awaits one who understands that creation requires listening, not controlling. She embodies the creative force of nature itself.",
    traits: ["Infinite creativity", "Cosmic patience", "Self-sacrifice", "Ancient knowledge"],
    color: "#F59E0B",
    icon: "🕷️",
  },
  {
    name: "!Khwa, The Thunder-Bull",
    subtitle: "The San Rain-Animal",
    description:
      "Stepping from an ochre rock art wall, !Khwa is the San Rain-Animal — a colossal bull carved from living stone with lightning crackling along its horns. He hoarded the clouds to protect the people from drowning floods, but his protection became imprisonment. His transformation — from storm-wrath to gentle rain — mirrors the tale's core message: control is not love; release is.",
    traits: ["Fierce protection", "Storm power", "Hidden vulnerability", "Capacity for change"],
    color: "#6D28D9",
    icon: "🐂",
  },
];

export interface Proverb {
  language: string;
  culture: string;
  original: string;
  translation: string;
  explanation: string;
}

export const proverbs: Proverb[] = [
  {
    language: "isiZulu",
    culture: "Zulu",
    original: "Umuntu ngumuntu ngabantu.",
    translation: "A person is a person through other people.",
    explanation:
      "The foundational Ubuntu principle — individual identity is formed through community. No one stands alone.",
  },
  {
    language: "isiXhosa",
    culture: "Xhosa",
    original: "Umntwana ophunywa emakhithini awukwazi ukubhala.",
    translation: "A child not given a pen cannot write.",
    explanation:
      "Opportunity must be provided. Talent without resources cannot flourish — a call for equity in education.",
  },
  {
    language: "/Xam San",
    culture: "!Xam San",
    original: "Izaga: The eland that dances alone wakes hungry.",
    translation: "The eland that dances alone wakes hungry.",
    explanation:
      "From /Xam San lore — even the sacred eland, most revered in rock art, benefits from communal trance-dancing.",
  },
  {
    language: "Sesotho",
    culture: "Sotho",
    original: "Nthja ha e tshole molomo ha e shome.",
    translation: "The dog does not bare its teeth while working.",
    explanation:
      "True service requires humility. One who serves the community should not demand recognition.",
  },
  {
    language: "isiZulu",
    culture: "Zulu",
    original: "Izandla ziyagqoka.",
    translation: "Clothes make the person / Hands clothe.",
    explanation:
      "Hard work (hands) provides for you. Collective effort sustains the community.",
  },
  {
    language: "Sesotho",
    culture: "Sotho",
    original: "Lefika le le leng le haufi le mong'a lona.",
    translation: "A stone is always near its owner.",
    explanation:
      "Actions return to their origin. What you throw back to the world comes back to you.",
  },
  {
    language: "isiXhosa",
    culture: "Xhosa",
    original: "Inkunkuma ayikhalani.",
    translation: "The lion does not weep.",
    explanation:
      "Courage in the face of adversity. The mighty do not dwell in sorrow — they act.",
  },
  {
    language: "/Xam San",
    culture: "!Xam San",
    original: "Maele: The moon borrows the sun's light.",
    translation: "The moon borrows the sun's light.",
    explanation:
      "Even that which shines may borrow brilliance from another — interdependence is the cosmic order.",
  },
];
