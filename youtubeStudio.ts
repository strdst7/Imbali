export interface LorePin {
  id: number;
  label: string;
  lore: string;
  symbolism: string;
  promptDetail: string;
  x: number;
  y: number;
}

export const lorePins: LorePin[] = [
  {
    id: 1,
    label: "Nomvula",
    lore: "A young Zulu woodcarver from eMakhosini village in the KwaZulu-Natal Drakensberg highlands.",
    symbolism: "Represents patience as power — the quiet strength of listening to materials, people, and nature.",
    promptDetail: "Young dark-skinned Zulu woman, beaded leather apron, carved reed tool in hand, determined but gentle expression, golden hour backlighting, standing confidently on rocky outcrop.",
    x: 35,
    y: 55,
  },
  {
    id: 2,
    label: "Mavungula",
    lore: "The golden sun-spider, an ancient celestial being who weaves the mist between sunset and starlight.",
    symbolism: "Embodies creative force and the cosmic web connecting all living things — the San concept of !gi:ǂaesi (spiritual web).",
    promptDetail: "Majestic golden orb-weaver spider with iridescent amber body, eight luminous legs trailing threads of golden light, hovering mid-air like a celestial body, intricate web of starlight radiating outward.",
    x: 55,
    y: 30,
  },
  {
    id: 3,
    label: "Nhlava",
    lore: "The greater honeyguide bird (Indicator indicator), a sacred trickster of Southern African folklore.",
    symbolism: "Knowledge that reveals itself only to the patient and generous — the price of wisdom is an open heart.",
    promptDetail: "Small African honeyguide bird with distinctive yellow patches behind eyes, green-gold wing flash, hovering near the spider with wings blurred mid-flight, bright intelligent eyes.",
    x: 65,
    y: 48,
  },
  {
    id: 4,
    label: "Drakensberg Escarpment",
    lore: "The 'Cursed Mountains' — the longest mountain range in Africa, sacred to San, Ndebele, and Zulu peoples.",
    symbolism: "The boundary between the earthly and spiritual worlds; a place where rock art preserves 20,000 years of human consciousness.",
    promptDetail: "Massive sandstone escarpment rising dramatically in the background, layered cliffs in warm ochre and burnt sienna tones, distant misty valleys, ancient baobab tree on a distant ridge, epic scale.",
    x: 75,
    y: 65,
  },
  {
    id: 5,
    label: "Sunset Palette",
    lore: "The color palette of Southern African sunset: amber, ochre, burnt sienna, and indigo twilight.",
    symbolism: "The liminal hour between day and night — when, in San belief, the veil between worlds grows thin.",
    promptDetail: "Dramatic sunset sky in gradient from golden amber through burnt orange to deep indigo, warm light casting long shadows, atmospheric haze over the valley, cinematic golden hour glow.",
    x: 20,
    y: 20,
  },
  {
    id: 6,
    label: "Baobab Tree",
    lore: "The ancient baobab — 'the tree of life' — can live over 2,000 years and stores water in its massive trunk.",
    symbolism: "Wisdom, endurance, and the living archive of oral tradition. In San myth, baobabs are gateways to the spirit world.",
    promptDetail: "Ancient baobab tree with massive gnarled trunk, split open like cupped hands, glowing from within with amber light, golden strands of light woven through its branches, deep in the cave.",
    x: 48,
    y: 78,
  },
];

export interface TeleprompterBlock {
  timecode: string;
  section: string;
  script: string;
  broll: string;
  camera: string;
  sfx: string;
}

export const teleprompter: TeleprompterBlock[] = [
  {
    timecode: "00:00",
    section: "COLD OPEN HOOK",
    script: "[Low, intimate voice] Have you ever heard a story that was told in a cave, over and over, for twenty thousand years? Before libraries. Before books. Before writing. There's a painting on a rock wall in the Drakensberg mountains of South Africa — older than the pyramids — that shows a spider spinning light. Tonight, we enter that painting.",
    broll: "Drone shot of Drakensberg escarpment at golden hour → slow zoom to rock art panel → animated overlay of the spider painting glowing.",
    camera: "Ken Burns slow push-in on the spider painting; cut to wide drone establishing shot.",
    sfx: "Wind over mountains, distant thunder rumble, subtle heartbeat.",
  },
  {
    timecode: "01:30",
    section: "ACT I — THE CARVED REED",
    script: "In the highveld village of eMakhosini, where the Drakensberg peaks wear crowns of clouds, lived a young Zulu woodcarver named Nomvula — Rain. She earned her name the very day she was born, when the skies opened over the escarpment and the drought-starved valley drank deeply.\n\nNomvula's hands spoke a language her lips rarely did. Her knife moved across wood like a scribe across paper. But patience was not slowness — it was reverence.\n\nAnd on an evening when the sky bruised purple, she found something beneath an ancient riverine fig: a hollow stone door covered in painted hand-prints older than memory. San rock art. And three words she understood without knowing the language: Come, Weaver, Come.",
    broll: "Close-up of hands carving wood → time-lapse of sunset over village → Nomvula discovering the stone door → glow of rock art illuminating.",
    camera: "Extreme close-up on carving hands (macro lens), transition to wide establishing shot of village, slow push to stone door.",
    sfx: "Carving knife sounds, ambient village sounds, wind, heartbeat accelerating as she finds the door.",
  },
  {
    timecode: "04:00",
    section: "ACT II — THE HONEYGUIDE'S BARGAIN",
    script: "From the darkness came a whistle — two notes, bright and insistent. The unmistakable call of the Nhlava, the greater honeyguide bird.\n\n'You hear me?' the bird's voice echoed. 'Good. Most humans have forgotten how to hear.'\n\nNhlava led Nomvula through spiraling passages carved by bare feet, past chambers where San rock art covered every surface — eland in trance-dance, hunters with poisoned arrows. And at the deepest level: a colossal spider painting whose web stretched across the entire ceiling.\n\n'That's Mavungula — the Weaver of Starlight,' the honeyguide whispered. 'She's been sleeping in the baobab at the cave's heart since the first drought.'\n\nNomvula found it: an ancient baobab growing underground, its trunk split like open hands, its branches woven with strands of golden light. And at the center — a massive spider made of amber and starlight, bound in a cocoon of spun sunset.",
    broll: "Bioluminescent cave exploration → honeyguide bird flying through passage → rock art panels scrolling past → the underground baobab revealing → Mavungula in her cocoon.",
    camera: "Handheld feel for cave traversal (slight shake), smooth gimbal on the baobab reveal, dramatic slow orbit around Mavungula.",
    sfx: "Nhlava's two-note whistle, cave drips, echoing footsteps, ambient cave drone, wonder swell.",
  },
  {
    timecode: "07:00",
    section: "ACT III — THE WEB AND THE THUNDER",
    script: "Nomvula placed her carved reed against the baobab's split trunk and began to carve — not wood, but light. Where her knife touched the golden strands, they brightened. Where she sang, the web began to re-weave.\n\nThen the cave shook. From the rock wall, a massive shape emerged: a bull carved from living stone, its horns crackling with lightning. !Khwa, the Thunder-Bull.\n\n'Little carver,' the Bull rumbled, his voice thunder inside a mountain. 'You think to free the Weaver? I hold the clouds because I love the children below me.'\n\nNomvula did not raise her knife. She lowered it. 'I do not carve to control, Great One. I carve to listen. The wood tells me what shape it wants to be. You must let the rain tell you when to fall.'\n\nThe Thunder-Bull's lightning flickered. The cave held its breath. Then — with the sound of a mountain sighing — !Khwa stepped back. And from the ceiling, a single drop of rain fell onto Nomvula's palm.\n\nAbove ground, the first rain in years fell on eMakhosini. Children danced barefoot. Elders wept. And the Weaver rose.",
    broll: "Close-up of knife touching golden light → Thunder-Bull emerging from rock wall with lightning effects → Nomvula lowering knife (slow motion) → rain beginning above ground → children dancing in puddles.",
    camera: "Dynamic — low angle on Thunder-Bull for menace, close-up on Nomvula's face during dialogue, slow-motion rain drop falling, aerial shot of village in rain.",
    sfx: "Cave rumbling, lightning crackle, thunder (multiple layers), rain beginning (close then wide), children's laughter, swelling orchestral/mbira music.",
  },
  {
    timecode: "10:30",
    section: "OUTRO CTA",
    script: "Umuntu ngumuntu ngabantu. A person is a person through other people.\n\nA single thread breaks in the wind — woven together, we hold the sky.\n\nIf this story moved you, if it made you think about patience, about listening, about the ancient wisdom hidden in rock walls and spider webs — then hit subscribe. Every week, IMBALI brings you a new South African folktale, retold for the modern world but rooted in tradition that stretches back thousands of years.\n\nComment below: what proverb from your culture means the most to you? And share this with someone who needs to hear it.\n\nKwa kugcina — until next time.",
    broll: "Montage of story highlights → end card with subscribe animation → proverb text on screen → channel logo over African landscape.",
    camera: "Warm, intimate framing. Slow zoom on end card. Logo reveal with particle effect.",
    sfx: "Gentle mbira and voice, subtle rain fade, call-to-action bell sound.",
  },
];

export const youtubeMetadata = {
  titles: [
    "The Spider Who Wove Starlight — A South African Folktale (4K)",
    "South Africa's Greatest Folktale — The Weaver of Starlight",
    "This Ancient African Story Will Change How You See Spiders Forever",
    "The 20,000-Year-Old Painting That Tells a Story About Rain",
    "Ubuntu: The African Philosophy That Explains Everything (Animated Folktale)",
  ],
  description: `In the Drakensberg mountains of South Africa, a young Zulu woodcarver discovers a stone door covered in rock art 20,000 years old. Inside lies an ancient baobab tree, a sleeping celestial spider, a trickster honeyguide bird, and a Thunder-Bull who stole the rain.

This is "Nomvula & The Weaver of Starlight" — an original South African folktale rooted in Zulu, San, Xhosa, and Sotho oral traditions. A story about patience, Ubuntu, and the web that connects us all.

🎬 CHAPTERS:
00:00 — Cold Open: The 20,000-Year-Old Painting
01:30 — Act I: The Carved Reed (Nomvula's Discovery)
04:00 — Act II: The Honeyguide's Bargain
07:00 — Act III: The Web and the Thunder
10:30 — The Moral: Ubuntu

📚 CULTURAL ORIGINS:
• isiZulu proverbs and Ubuntu philosophy
• /Xam San rock art mythology
• Sotho thunder traditions
• Greater Honeyguide bird folklore

🎨 AI ART & MUSIC:
All storybook illustrations created with AI. Traditional South African instruments (mbira, ubuntu choir, marimba) blended with cinematic orchestration.

—
IMBALI • South African Folktale & Visual Storytelling
New stories every week. Subscribe for more.

#SouthAfrica #Folktale #Ubuntu #AfricanStories #Drakensberg #SanRockArt #Animation #Storytelling`,
  tags: [
    "South African folktale",
    "Ubuntu philosophy",
    "African stories",
    "San rock art",
    "Zulu mythology",
    "Drakensberg",
    "animated folktale",
    "African bedtime story",
    "honeyguide bird",
    "African folklore",
    "oral tradition",
    "African mythology",
    "Khoisan",
    "Sotho culture",
    "Xhosa proverbs",
    "African storytelling",
    "4K animation",
    "IMBALI",
    "African fairy tale",
    "Baobab tree",
  ],
  pinnedComment: `🌍 Welcome to the story circle!

"Umuntu ngumuntu ngabantu" — A person is a person through other people.

If this tale moved you, tell us:
👇 What proverb from YOUR culture holds the most wisdom?

We read every comment. Every voice matters in the circle. ✊🏾

— IMBALI`,
};

export const biomes = [
  { name: "Drakensberg Escarpment", description: "Sandstone peaks, misty valleys, ancient rock art caves" },
  { name: "Blyde River Canyon", description: "Lush green canyon, Waterberg Mountain, panoramic vistas" },
  { name: "Kalahari Red Dunes", description: "Endless ochre dunes, starlit skies, San desert pathways" },
  { name: "Wild Coast", description: "Rugged Atlantic shoreline, storm beaches, Xhosa homelands" },
];

export const heroArchetypes = [
  { name: "Woodcarver", tool: "curved carving knife" },
  { name: "Herb-Whisperer", tool: "bundle of medicinal reeds" },
  { name: "Star-Reader", tool: "polished obsidian mirror" },
  { name: "Song-Keeper", tool: "calabash flute" },
];

export const creatureTypes = [
  { name: "Celestial Spider", domain: "starlight and mist" },
  { name: "Thunder-Bull", domain: "storms and rain" },
  { name: "Rainbow Serpent", domain: "rivers and underground water" },
  { name: "Fire-Beetle", domain: "embers and forest clearing" },
];
