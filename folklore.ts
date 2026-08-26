// ===== STORY DATA =====
export const storyTitle = "Nomvula & The Weaver of Starlight";
export const storySubtitle = "An IMBALI Original — South African Folktale for the Ages";
export const storyAuthor = "IMBALI Studio";

export interface SensoryTag {
  sight: string;
  sound: string;
  scent: string;
}

export interface StoryAct {
  title: string;
  subtitle: string;
  sensory: SensoryTag;
  paragraphs: string[];
  footnotes: { label: string; text: string }[];
}

export const acts: StoryAct[] = [
  {
    title: "Act I — The Carved Reed",
    subtitle: "Patience is the first tool of the wise.",
    sensory: {
      sight: "Sunlight filtering through reed walls, polished wood carvings catching golden hour light",
      sound: "The rhythmic scrape of a carving knife, distant thunder rolling over the escarpment",
      scent: "Sandalwood shavings, damp earth, and wild thyme from the highveld",
    },
    paragraphs: [
      "In the highveld village of eMakhosini, where the Drakensberg peaks wear crowns of clouds, lived a young Zulu woodcarver named Nomvula — Rain. She earned her name the very day she was born, when the skies opened over the escarpment and the drought-starved valley drank deeply.",
      "Nomvula's hands spoke a language her lips rarely did. Her knife — a curved blade of tempered steel passed down from her grandmother — moved across wood like a scribe across paper. Each notch, each curl of birch bark, carried a story too heavy for words.",
      "The village elders said Nomvula carved too slowly. \"A reed that bends too carefully breaks in no wind,\" her grandmother had whispered. But patience was not slowness — it was reverence. Each piece was a prayer in grain and sap.",
      "On an evening when the sky bruised purple over the valley, Nomvula found something extraordinary beneath an ancient riverine fig: a hollow stone door, half-buried in ochre soil, its surface covered in painted hand-prints older than memory. San rock art — the !Xam people's ancestral signatures — glowed faintly in the dying light.",
      "The painting showed a golden spider with eight arms of sunset, a small bird pointing toward the stars, and a figure like herself holding a reed. At the bottom, in faded red ochre, were three words she somehow understood without knowing the language: *Come, Weaver, Come.*",
    ],
    footnotes: [
      { label: "eMakhosini", text: "A sacred place in KwaZulu-Natal's Drakensberg, home to the Ndebele royal palace of the AmaNdebele." },
      { label: "!Xam San", text: "One of the Khoisan groups of South Africa; their rock art tradition spans over 20,000 years." },
      { label: "Ochre", text: "Iron-rich pigment used in Southern African rock art for millennia to convey spiritual meaning." },
    ],
  },
  {
    title: "Act II — The Honeyguide's Bargain",
    subtitle: "The trickster leads those who listen — but demands a price.",
    sensory: {
      sight: "Bioluminescent cave paintings flickering like fireflies, honey dripping in amber threads from honeycomb",
      sound: "Nhlava's distinctive two-note whistle, echoing in stone chambers, the distant rumble of a honey badger",
      scent: "Hot beeswax, wild honey, and the mineral tang of deep cave air",
    },
    paragraphs: [
      "Nomvula pressed her palm against the stone door and felt warmth — as if the rock itself was breathing. From somewhere inside came a whistle: two notes, bright and insistent, the unmistakable call of the Nhlava — the greater honeyguide bird.",
      "\"You hear me?\" the bird's voice echoed, somehow fitting into the space between echo and thought. \"Good. Most humans have forgotten how to hear.\"",
      "A small bird with yellow patches behind its eyes and a green-gold flash beneath its wings hopped from a crack in the rock. \"I am Nhlava. I have waited three hundred seasons for someone who carves with patience. You'll do.\"",
      "The honeyguide led Nomvula through the hidden passage — down spiraling steps worn smooth by bare feet, through chambers where San rock art covered every surface: eland antelopes in trance-dance, hunters with poisoned arrows, and at the deepest level, a colossal spider painting whose web stretched across the entire ceiling.",
      "\"The painting you saw?\" Nhlava whistled, settling on her shoulder. \"That's Mavungula — the Weaver of Starlight. The golden sun-spider who spins the mist between sunset and first star. The !Xam called her the Dream-Weaver. She's been sleeping in the baobab at the cave's heart for… well, since the first drought.\"",
      "Nomvula reached the heart-chamber and found it: an ancient baobab tree growing impossibly deep underground, its trunk split like open hands, its branches woven with strands of golden light that caught the torch-flame like dew. And at the center, a massive spider made of amber and starlight, suspended in a cocoon of spun sunset.",
      "\"She's not dead,\" Nhlava whispered. \"But she's bound. The web that trapped her was woven by the Thunder-Bull — !Khwa, the San Rain-Animal. He said the world had forgotten how to share the rain, so he hoarded the clouds. Mavungula tried to weave new rivers in the sky, but the Bull's thunder shattered her web.\"",
    ],
    footnotes: [
      { label: "Greater Honeyguide", text: "Indicator indicator — a bird found across Africa that guides humans to beehives in exchange for leftover wax and larvae." },
      { label: "Eland", text: "Africa's largest antelope, sacred to the Khoisan San people and the most frequently depicted animal in Southern African rock art." },
      { label: "!Khwa", text: "In /Xam San mythology, the thunder animal associated with rainfall and storm clouds." },
    ],
  },
  {
    title: "Act III — The Web and the Thunder",
    subtitle: "A single thread breaks in the wind; woven together, we hold the sky.",
    sensory: {
      sight: "Lightning cracking across indigo sky, golden web threads igniting like fireworks, rain falling on parched earth",
      sound: "Thunder rolling like drums, the crackle of lightning, Nomvula's carving knife striking stone, the first rain on dry leaves",
      scent: "Petrichor — the smell of rain on dry earth, ozone before lightning, and wild sage after the storm",
    },
    paragraphs: [
      "Nomvula understood then what the painting had shown. The carved reed she carried — her grandmother's reed, marked with notches for every rainless day — was not just a tool. It was a key. Each notch was a prayer. Each groove was a promise.",
      "She placed the reed against the baobab's split trunk and began to carve — not wood, but light. Where her knife touched the golden strands, they brightened. Where she sang the old carver's song her grandmother taught her, the web began to re-weave itself.",
      "\"You can't unbind her with patience alone,\" Nhlava called out as the cave shook. From the rock wall beside them, a massive shape emerged: a bull carved from living stone, its horns crackling with lightning, its eyes two pools of storm-grey sky. !Khwa, the Thunder-Bull, stepped from the painting as if the rock art had always been a doorway.",
      "\"Little carver,\" the Bull rumbled, his voice the sound of thunder inside a mountain. \"You think to free the Weaver? She brings rain that drowns. She weaves rivers that flood. I hold the clouds because I love the children below me.\"",
      "Nomvula did not raise her knife. She lowered it. And in that gesture — that surrender of weapon for tool — she spoke the truth the Bull needed to hear: \"I do not carve to control, Great One. I carve to listen. The wood tells me what shape it wants to be. You must let the rain tell you when to fall.\"",
      "The Thunder-Bull's lightning flickered. The cave held its breath. Then, slowly — with the sound of a mountain sighing — !Khwa stepped back into the wall. The lightning in his horns dimmed to a gentle glow, and from the ceiling, a single drop of rain fell onto Nomvula's upturned palm.",
      "Mavungula's cocoon dissolved into a shower of golden threads. The Weaver rose — eight limbs of light, a body of amber fire, a face like the full moon seen through morning mist. She touched Nomvula's forehead with one delicate leg, and knowledge poured into her: every drought, every flood, every season's song, every star's name.",
      "Above ground, the first rain in years fell on eMakhosini. Children danced barefoot in puddles. Elders wept into the sky. Nomvula stood at the stone door, reed in hand, Nhlava whistling on her shoulder, and knew: the story was not hers. It belonged to the rain, the rock, the spider, and the bull — and to every child who would hear it next.",
      "And so it is told: Umuntu ngumuntu ngabantu. A person is a person through other people. A single thread breaks in the wind; woven together, we hold the sky.",
    ],
    footnotes: [
      { label: "Umuntu ngumuntu ngabantu", text: "The foundational principle of Ubuntu philosophy: 'A person is a person through other people' — communal humanity." },
      { label: "Petrichor", text: "The earthy scent produced when rain falls on dry soil, caused by a compound called geosmin released from bacteria." },
      { label: "Mavungula", text: "From isiZulu 'uvungulu' — a type of spider; here elevated to celestial being, the Weaver of Starlight." },
    ],
  },
];

export const moralPlaque = {
  proverb: "Umuntu ngumuntu ngabantu",
  translation: "A person is a person through other people.",
  closing: "A single thread breaks in the wind; woven together, we hold the sky.",
};
