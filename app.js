
const SECRET_DELETE_CODE = "PB-DELETE-2026";

const styleModes = {
  vivid: { name: "Vivid", label: "Bold gradients and richer depth", preview: ["#7c8cff", "#b34cff"] },
  editorial: { name: "Editorial", label: "Warm magazine look with softer surfaces", preview: ["#d9925b", "#f4ede4"] },
  mono: { name: "Mono", label: "Clean black and white minimalism", preview: ["#111111", "#f4f4f4"] },
  noir: { name: "Noir", label: "Subtle black aesthetic with restrained glow", preview: ["#0a0a0a", "#2b2b2b"] }
};

const colorThemes = {
  aurora: { name: "Aurora", preview: ["#7c8cff", "#b34cff"] },
  mint: { name: "Mint", preview: ["#10b981", "#22d3ee"] },
  sunset: { name: "Sunset", preview: ["#fb7185", "#f59e0b"] },
  electric: { name: "Electric", preview: ["#00c2ff", "#6366f1"] },
  ruby: { name: "Ruby", preview: ["#ef4444", "#ec4899"] },
  ice: { name: "Ice", preview: ["#38bdf8", "#a78bfa"] }
};

const articleData = [
  {
    slug: "dgse-multiplayer-games",
    category: "Gaming News",
    title: "French Intelligence and the Rise of Multiplayer Game Spaces",
    source: "Le Monde",
    date: "January 7, 2019",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
    excerpt: "A story that shows how games such as Fortnite, PUBG and League of Legends can become serious social spaces beyond pure entertainment.",
    intro: "This article adds a wider society angle to PlayerBase and proves that games can be discussed as cultural, social and strategic spaces.",
    url: "https://www.lemonde.fr/pixels/article/2019/01/07/fortnite-pubg-league-of-legends-la-dgse-s-interesse-aux-jeux-video-multijoueur_5405890_4408996.html",
    paragraphs: [
      "Instead of treating games only as products, this article makes them feel like spaces where communities gather, talk, organize and exchange information. That creates a stronger editorial identity for the site.",
      "On PlayerBase, it sits in the Gaming News category and balances the more entertainment-focused stories with a broader perspective on how games intersect with the real world.",
      "It also works visually because the topic naturally supports a darker mood, a serious headline and a more journalistic presentation."
    ],
    bullets: ["Strong social and geopolitical angle", "Great opening piece for a serious news section", "Adds editorial depth to the website"]
  },
  {
    slug: "clair-obscur-expedition-33",
    category: "RPG",
    title: "Clair Obscur: Expedition 33 and the New Prestige of French RPGs",
    source: "CNC",
    date: "December 12, 2025",
    readTime: "4 min",
    image: "https://www.cnc.fr/documents/36995/2323149/clair-obscur-2.jpg/e4c5a9a6-8ad3-6d40-656f-1059916ac7bc?t=1765540067117&thumb=cncThumbImagePrincipale",
    excerpt: "A premium-looking RPG article that gives the site a polished, ambitious and international vibe.",
    intro: "This is the flagship RPG feature of the site and one of the strongest visual cards in the whole project.",
    url: "https://www.cnc.fr/jeu-video/actualites/clair-obscur--expedition-33--aux-game-awards-2025--un-triomphe-pour-le-jeu-francais_2511219",
    paragraphs: [
      "This page strengthens the RPG category immediately. It gives PlayerBase a high-end editorial tone and allows the site to spotlight a French game with strong artistic ambition and awards recognition.",
      "For an oral presentation, it is useful because it lets you talk about art direction, prestige, national game creation and the way modern RPGs can carry a whole category.",
      "Its official image also makes the article card feel premium and gives the layout a more magazine-like feel."
    ],
    bullets: ["Premium RPG feature", "Highlights French game development", "Adds visual impact to the homepage"]
  },
  {
    slug: "outer-wilds-masterpiece",
    category: "Criticism",
    title: "Outer Wilds as One of the Most Memorable Game Experiences Ever Made",
    source: "TheGamer",
    date: "2025",
    readTime: "3 min",
    image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg",
    excerpt: "An editorial article built to represent opinion pieces, deeper criticism and timeless player experiences.",
    intro: "This is the criticism category anchor: it gives the site a more thoughtful and cultural voice.",
    url: "https://www.thegamer.com/outer-wilds-one-of-best-video-game-experiences-ever-created/",
    paragraphs: [
      "This piece makes the site feel richer than a simple news feed. It introduces criticism, perspective and a more reflective writing style centered on player experience and memory.",
      "Outer Wilds is the ideal game for that role because it is often discussed as a discovery-driven, deeply personal journey rather than just another release.",
      "On PlayerBase, it balances the faster news content with a slower, more thoughtful format."
    ],
    bullets: ["Strengthens editorial identity", "Represents opinion and criticism", "Broadens the type of content on the site"]
  },
  {
    slug: "detroit-amnesty-award",
    category: "Narrative Games",
    title: "Detroit: Become Human and the Value of Socially Charged Narrative Design",
    source: "Quantic Dream",
    date: "2025",
    readTime: "4 min",
    image: "https://blog.quanticdream.com/medias/D3A-1110x624.jpg",
    excerpt: "A narrative-focused feature that brings storytelling, choices and social themes into the site’s structure.",
    intro: "This page represents games where story, emotion and social reflection matter as much as mechanics.",
    url: "https://blog.quanticdream.com/detroit-become-human-receives-amnesty-international-special-award/",
    paragraphs: [
      "This category shows that PlayerBase is not only about action, sales or updates. It also includes games where writing, character arcs and social subtext are central.",
      "Detroit: Become Human fits perfectly because it connects interactive storytelling to questions of equality, identity and ethics.",
      "That makes the category easy to explain in an oral exam: it is a space for games that are defined by narrative impact."
    ],
    bullets: ["Clear narrative category identity", "Strong link between games and society", "Useful for presenting storytelling-focused content"]
  },
  {
    slug: "pgw-accessible-gaming",
    category: "Accessibility",
    title: "Accessible Gaming at Paris Games Week Deserves a Spotlight",
    source: "Handicap.fr",
    date: "2025",
    readTime: "4 min",
    image: "https://www.handicap.fr/static/contenu/img3/paris-games-week-le-gaming-adapte-tire-son-epingle-du-jeu-38529.webp",
    excerpt: "A category built around inclusion, adaptive controllers and more open game experiences.",
    intro: "This page makes the site feel more human, modern and inclusive.",
    url: "https://informations.handicap.fr/a-paris-games-week-le-gaming-adapte-tire-son-epingle-du-jeu-38529.php",
    paragraphs: [
      "This article is especially valuable because it shows games as tools for access, comfort and inclusion. It gives the website a broader perspective than simple release coverage.",
      "The category can later expand into subtitles, visual options, controller innovations, menu readability or design standards for accessibility.",
      "It is also excellent for an oral defense because it shows the website has editorial variety and a meaningful social angle."
    ],
    bullets: ["Adds inclusion and human-centered design topics", "Expands the website beyond mainstream news", "Creates a strong talking point for presentation"]
  },
  {
    slug: "steam-malware-security",
    category: "Security",
    title: "Steam, Malware Concerns and Why Platform Safety Matters",
    source: "GameSpot",
    date: "2026",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
    excerpt: "A cyber-security article that gives the website technical credibility and more serious platform coverage.",
    intro: "The Security category turns PlayerBase into more than a culture website: it becomes a place where platform trust and user safety also matter.",
    url: "https://www.gamespot.com/articles/fbi-launches-investigation-into-games-removed-from-steam-over-malware-concerns/1100-6538786/",
    paragraphs: [
      "Security is a smart category because it opens the door to malware concerns, account safety, platform trust and the technical side of gaming ecosystems.",
      "This article in particular gives the project a more professional edge by reminding users that not every game-related story is about entertainment alone.",
      "It helps the site avoid feeling too one-note by mixing culture, business, innovation and technical caution."
    ],
    bullets: ["Technical category with real relevance", "Adds platform and cyber-safety coverage", "Creates more editorial balance"]
  },
  {
    slug: "gaming-copilot",
    category: "AI & Innovation",
    title: "Gaming Copilot: Microsoft’s Push Toward In-Game AI Assistance",
    source: "Xbox Wire",
    date: "March 13, 2025",
    readTime: "4 min",
    image: "https://xboxwire.thesourcemediaassets.com/sites/2/2025/03/CopilotForGaming_Hero-f1b6974b4a53356c6d0b.jpg",
    excerpt: "A future-facing feature about AI, coaching, player guidance and new gaming interfaces.",
    intro: "This page is the technology showcase of the site and one of the strongest modern topics in the whole project.",
    url: "https://news.xbox.com/en-us/2025/03/13/new-copilot-for-gaming-save-time-help-get-good/",
    paragraphs: [
      "This category gives PlayerBase an up-to-date, innovation-focused identity. It makes the website feel connected to current gaming tech instead of looking like a simple static magazine.",
      "Because Gaming Copilot is about player help, coaching and interface evolution, it also connects naturally to accessibility and onboarding for beginners.",
      "Visually, it works extremely well because the Xbox image creates a high-contrast, recognizable modern tech aesthetic."
    ],
    bullets: ["Modern AI and interface topic", "Strong visual and tech identity", "Easy to connect with accessibility and onboarding"]
  },
  {
    slug: "sony-pricing-trial",
    category: "Business",
    title: "Sony on Trial: Are Digital PlayStation Games Too Expensive?",
    source: "CNEWS and related coverage",
    date: "March 10, 2026",
    readTime: "4 min",
    image: "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/000_36h843k-taille1200_69aeccf59d63a.jpg?h=f692311e&itok=mxsv1GP7",
    excerpt: "A business and pricing article focused on platform economics, storefront power and digital game costs.",
    intro: "This page adds market logic to the site and makes the project feel broader than a simple fan page.",
    url: "https://www.cnews.fr/jeux-video/2026-03-10/trop-chers-les-jeux-video-sony-au-coeur-dun-proces-qui-pourrait-changer-la",
    extraSources: [
      { label: "Yahoo News", url: "https://fr.news.yahoo.com/sony-proc%C3%A8s-%C3%A0-londres-g%C3%A9ant-110320898.html" },
      { label: "Le Figaro", url: "https://www.lefigaro.fr/secteur/high-tech/les-prix-sont-trop-eleves-le-monopole-du-playstation-store-sur-l-achat-des-jeux-ps5-au-coeur-d-un-proces-au-royaume-uni-20260310" }
    ],
    paragraphs: [
      "This category introduces prices, storefront policy, digital distribution and market power into the website. That instantly makes the editorial structure feel more complete.",
      "The Sony trial is a particularly useful topic because it speaks directly to players while also touching law, competition and platform economics.",
      "On PlayerBase, it becomes the anchor article for the Business tab and gives the project a more mature market-oriented dimension."
    ],
    bullets: ["Strong business and market topic", "Connects directly to player spending", "Makes the site feel more complete and modern"]
  },
  {
    slug: "top-most-played-games-2025",
    category: "Trends",
    title: "The Top Most Played Games in 2025 and Why They Keep Dominating",
    source: "ESMA 3D",
    date: "2026",
    readTime: "5 min",
    image: "assets/minecraft.svg",
    excerpt: "A trend article built around the biggest games of 2025 and the design patterns that keep huge audiences engaged.",
    intro: "This article gives the site a broader market-trends angle and connects directly to the Games page.",
    url: "https://www.esma-3d.fr/fr/actualites/top-6-des-jeux-video-les-plus-joues-au-monde-en-2025/",
    paragraphs: [
      "This trend piece is useful because it shifts the website from individual game stories to larger market behavior. It looks at what makes titles stay dominant over time instead of focusing on a single release.",
      "It also connects naturally with the Games page because the article highlights familiar names such as Minecraft, Fortnite, Roblox, GTA V and League of Legends, all tied to massive active communities.",
      "On PlayerBase, this category works well as a bridge between editorial writing, player habits and platform-scale popularity."
    ],
    bullets: ["Adds a trends category to the editorial mix", "Connects directly with the Games section", "Useful for discussing popularity, retention and community scale"]
  },
  {
    slug: "esports-industry-growth",
    category: "Esports",
    title: "Esports as a Fast-Growing Industry: Media, Sponsorship and Investment",
    source: "WIN Sport School",
    date: "2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1400&q=80",
    excerpt: "A clean esports industry article focused on media expansion, sponsorship and the rise of team investment.",
    intro: "This article strengthens the esports section by treating competitive gaming as a full industry instead of only a list of matches.",
    url: "https://www.win-sport-school.com/nice/actualite/le-esport-une-industrie-en-pleine-croissance",
    paragraphs: [
      "This page adds business depth to the esports category because it talks about more than tournaments: it covers media growth, sponsor visibility and structural investment.",
      "That makes it useful for PlayerBase because the site can present esports both as entertainment and as an expanding industry with economic logic behind it.",
      "It also reinforces the esports tab by giving it a strong article-based entry point rather than a simple gallery of competitive titles."
    ],
    bullets: ["Adds industry depth to the esports section", "Connects competition with media and sponsorship", "Improves the balance between editorial coverage and catalog sections"]
  }
];

const starterGames = [
  { id: "elden-ring", title: "Elden Ring", genre: "Action RPG", year: "2022", platform: "PC / Console", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg", description: "Open-world dark fantasy action RPG with exploration, bosses and build freedom.", longDescription: "Elden Ring blends open-world exploration with difficult combat, giant bosses and a strong sense of freedom. Players can explore at their own pace, build very different characters and tackle massive areas in different orders. On PlayerBase, this game works as a major flagship title because it is recognizable, critically respected and easy for users to rate and comment on." },
  { id: "baldurs-gate-3", title: "Baldur's Gate 3", genre: "CRPG", year: "2023", platform: "PC / Console", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg", description: "Party-based RPG driven by choices, combat depth and reactive storytelling.", longDescription: "Baldur's Gate 3 is one of the clearest examples of a modern role-playing game built around player choice, party dynamics and world reactivity. It brings tactical combat together with deep writing and many roleplay paths, which makes it a great entry for a game page with ratings and community comments." },
  { id: "cyberpunk-2077", title: "Cyberpunk 2077", genre: "RPG", year: "2020", platform: "PC / Console", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg", description: "Futuristic first-person RPG with strong worldbuilding and build customization.", longDescription: "Cyberpunk 2077 is a futuristic RPG centered on worldbuilding, narrative choices, character builds and an iconic city backdrop. It fits well on the site because it is a familiar major title that also feels visually strong on a dark interface." },
  { id: "red-dead-redemption-2", title: "Red Dead Redemption 2", genre: "Open World", year: "2019", platform: "PC / Console", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg", description: "A cinematic open-world western with a major narrative footprint.", longDescription: "Red Dead Redemption 2 remains one of the most recognizable large-scale open-world games of the last decade. Its story, atmosphere and production value make it ideal for a game page designed to feel premium and cinematic." },
  { id: "gta-v", title: "Grand Theft Auto V", genre: "Action", year: "2015", platform: "PC / Console", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg", description: "One of the most recognizable and enduring action games in modern gaming.", longDescription: "Grand Theft Auto V is a mainstream action pillar and one of the easiest titles for users to recognize instantly. It helps the catalog feel broad, accessible and not limited to one genre." },
  { id: "hogwarts-legacy", title: "Hogwarts Legacy", genre: "Action RPG", year: "2023", platform: "PC / Console", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg", description: "A mainstream fantasy RPG with broad appeal and strong world immersion.", longDescription: "Hogwarts Legacy is useful in the catalog because it represents a very visible mainstream fantasy action RPG. It helps balance the library between critical favorites and broad popular releases." },
  { id: "helldivers-2", title: "Helldivers 2", genre: "Co-op Shooter", year: "2024", platform: "PC / Console", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg", description: "Fast co-op action built around chaos, teamwork and replayable missions.", longDescription: "Helldivers 2 gives the game catalog a strong co-op action identity. It is fast, social and very easy for users to discuss in comments because of its teamwork-heavy structure." },
  { id: "black-myth-wukong", title: "Black Myth: Wukong", genre: "Action RPG", year: "2024", platform: "PC / Console", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg", description: "High-profile action RPG inspired by Chinese mythology.", longDescription: "Black Myth: Wukong is a high-visibility action RPG that immediately gives the site a current, high-end catalog feel. Its visual identity also works especially well with the dark PlayerBase style." },
  { id: "counter-strike-2", title: "Counter-Strike 2", genre: "FPS", year: "2023", platform: "PC", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg", description: "A foundational competitive shooter and one of the core names in esports.", longDescription: "Counter-Strike 2 is both a game catalog staple and an esports bridge. It helps connect the Games and Esports sections while giving users a familiar title to rate, comment on and compare." },
  { id: "dota-2", title: "Dota 2", genre: "MOBA", year: "2013", platform: "PC", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/header.jpg", description: "A landmark MOBA title with a long history in competitive gaming.", longDescription: "Dota 2 is one of the most historically important competitive games in the world and helps make the game library feel serious and broad. It also pairs naturally with the esports page." },
  { id: "minecraft", title: "Minecraft", genre: "Sandbox", year: "2011", platform: "PC / Console / Mobile", image: "assets/minecraft.svg", description: "The defining sandbox giant with endless creation and survival possibilities.", longDescription: "Minecraft is one of the most important long-running games in the world and a perfect addition for the PlayerBase catalog because it connects creativity, survival, community servers and massive mainstream reach." },
  { id: "fortnite", title: "Fortnite", genre: "Battle Royale", year: "2017", platform: "PC / Console / Mobile", image: "assets/fortnite.svg", description: "A cultural battle royale ecosystem built around constant updates and wide audience reach.", longDescription: "Fortnite is more than a single game mode. It has become a giant entertainment platform that mixes battle royale, creator content, events and recurring collaborations, making it an ideal high-visibility page for PlayerBase." }
];

const esportsData = [
  { title: "League of Legends", subtitle: "MOBA powerhouse", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80", text: "One of the biggest names in modern esports, built around leagues, Worlds and a huge international audience.", tags: ["Worlds", "LEC", "Draft", "Teamfights"] },
  { title: "Counter-Strike 2", subtitle: "Tactical FPS icon", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg", text: "A core tactical shooter title with a massive competitive legacy and strong spectator appeal.", tags: ["Majors", "Clutches", "Aim", "Economy"] },
  { title: "VALORANT", subtitle: "Modern agent shooter", image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1400&q=80", text: "A fast-growing tactical game built on hero abilities, strong regional leagues and polished production.", tags: ["VCT", "Agents", "Utility", "Maps"] },
  { title: "Dota 2", subtitle: "Historic international MOBA", image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/header.jpg", text: "Deep strategic gameplay, iconic tournaments and a long competitive legacy keep Dota 2 in the global conversation.", tags: ["TI", "Draft", "Macros", "Roshan"] },
  { title: "Rocket League", subtitle: "Easy to read, hard to master", image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=1400&q=80", text: "Its clean readability makes it one of the easiest esports for casual viewers to follow instantly.", tags: ["RLCS", "Aerials", "Rotations", "Goals"] },
  { title: "Rainbow Six Siege", subtitle: "Siege-style tactical play", image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80", text: "A methodical competitive shooter known for setups, map knowledge and layered team execution.", tags: ["Breach", "Utility", "Maps", "Tactics"] }
];

const aboutHighlights = [
  "Multi-page structure in English with Home, Articles, Games, Game Detail, Esports, Forum, Styles and About tabs.",
  "Separate style and color panels in the header so design direction and accent palette are controlled independently.",
  "An animated intro with the PB mark centered before the site appears.",
  "Full-card clicking for articles and games, not only a small text link.",
  "Games catalog with ratings, local comments, detail pages and protected deletion for user-added content.",
  "Interactive forum with saved usernames, threads, replies and article citations.",
  "Cleaner home layout with much less text and stronger contrast."
];

const forumSeeds = [
  {
    id: "seed-1",
    user: "NoxShadow",
    title: "Outer Wilds really deserves the hype",
    message: "I still think it is one of the best examples of discovery-driven design. Nothing feels over-explained and that is exactly why the payoff is so good.",
    tag: "Criticism",
    articleSlug: "outer-wilds-masterpiece",
    createdAt: "Today",
    replies: [{ id: "seed-r1", user: "LumaCore", text: "Agreed. It rewards curiosity better than almost any modern game.", createdAt: "Today" }]
  },
  {
    id: "seed-2",
    user: "PixelMarv",
    title: "Do you think store prices are getting out of hand?",
    message: "The Sony case is interesting because it finally puts storefront pricing back into the spotlight. I feel like digital should be cheaper more often.",
    tag: "Business",
    articleSlug: "sony-pricing-trial",
    createdAt: "Today",
    replies: []
  },
  {
    id: "seed-3",
    user: "AeroLink",
    title: "AI help in games can be great if it stays optional",
    message: "Gaming Copilot sounds useful for people who are overwhelmed by big games, but I would not want every game to become an assisted experience by default.",
    tag: "AI & Innovation",
    articleSlug: "gaming-copilot",
    createdAt: "Today",
    replies: [{ id: "seed-r2", user: "Volt87", text: "Exactly. Optional assistance feels much better than forced guidance.", createdAt: "Today" }]
  }
];

const storageKeys = {
  styleMode: "playerbase_style_mode",
  colorTheme: "playerbase_color_theme",
  username: "playerbase_username",
  games: "playerbase_custom_games",
  ratings: "playerbase_game_ratings",
  forum: "playerbase_forum_threads",
  gameComments: "playerbase_game_comments"
};

function qs(selector, parent = document) { return parent.querySelector(selector); }
function qsa(selector, parent = document) { return [...parent.querySelectorAll(selector)]; }
function getPage() { return document.body.dataset.page; }
function articleHref(slug) { return `article.html?slug=${encodeURIComponent(slug)}`; }
function gameHref(id) { return `game.html?id=${encodeURIComponent(id)}`; }
function slugToArticle(slug) { return articleData.find(article => article.slug === slug); }
function getGameById(gameId) { return getAllGames().find(game => game.id === gameId); }
function safe(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function writeStorage(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function nowLabel() { return new Date().toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }); }
function uid() { return `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`; }
function normalizeGameId(value) { return String(value || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }

function initializeStorage() {
  if (!localStorage.getItem(storageKeys.forum)) writeStorage(storageKeys.forum, forumSeeds);
  if (!localStorage.getItem(storageKeys.gameComments)) writeStorage(storageKeys.gameComments, {});
}
function getAllGames() { return [...starterGames, ...readStorage(storageKeys.games, [])]; }
function getRatingsMap() { return readStorage(storageKeys.ratings, {}); }
function rateGame(gameId, value) {
  const map = getRatingsMap();
  map[gameId] = [...(map[gameId] || []), value];
  writeStorage(storageKeys.ratings, map);
}
function formatAverageRating(gameId) {
  const entries = getRatingsMap()[gameId] || [];
  if (!entries.length) return "No ratings yet";
  const avg = entries.reduce((sum, value) => sum + value, 0) / entries.length;
  return `${avg.toFixed(1)}★ average`;
}
function getForumThreads() { return readStorage(storageKeys.forum, forumSeeds); }
function setForumThreads(threads) { writeStorage(storageKeys.forum, threads); }
function getGameCommentsMap() { return readStorage(storageKeys.gameComments, {}); }
function getGameComments(gameId) { return getGameCommentsMap()[gameId] || []; }
function setGameComments(gameId, comments) {
  const map = getGameCommentsMap();
  map[gameId] = comments;
  writeStorage(storageKeys.gameComments, map);
}
function addGameComment(gameId, user, text) {
  const comments = getGameComments(gameId);
  comments.unshift({ id: uid(), user, text, createdAt: nowLabel() });
  setGameComments(gameId, comments);
}
function askDeleteCode() {
  const entered = prompt("Enter the protected delete code:");
  if (entered === null) return false;
  if (entered !== SECRET_DELETE_CODE) {
    alert("Wrong code.");
    return false;
  }
  return true;
}
function renderDeleteButton(type, itemId, extra = "") {
  return `<button class="delete-btn" type="button" data-delete-type="${type}" data-delete-id="${itemId}" ${extra}>Delete</button>`;
}
function deleteGame(gameId) {
  if (!askDeleteCode()) return false;
  const customGames = readStorage(storageKeys.games, []);
  const updated = customGames.filter(game => game.id !== gameId);
  if (updated.length === customGames.length) {
    alert("Only user-added games can be deleted in this demo.");
    return false;
  }
  writeStorage(storageKeys.games, updated);
  return true;
}
function deleteGameComment(gameId, commentId) {
  if (!askDeleteCode()) return false;
  setGameComments(gameId, getGameComments(gameId).filter(comment => comment.id !== commentId));
  return true;
}
function deleteForumThread(threadId) {
  if (!askDeleteCode()) return false;
  setForumThreads(getForumThreads().filter(thread => thread.id !== threadId));
  return true;
}
function deleteForumReply(threadId, replyId) {
  if (!askDeleteCode()) return false;
  setForumThreads(getForumThreads().map(thread => thread.id !== threadId ? thread : { ...thread, replies: thread.replies.filter(reply => reply.id !== replyId) }));
  return true;
}

function bindDeleteButtons(onAfter) {
  qsa('[data-delete-type="game"]').forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault(); event.stopPropagation();
      if (deleteGame(button.dataset.deleteId) && onAfter) onAfter("game");
    });
  });
  qsa('[data-delete-type="game-comment"]').forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault(); event.stopPropagation();
      if (deleteGameComment(button.dataset.gameId, button.dataset.deleteId) && onAfter) onAfter("game-comment");
    });
  });
  qsa('[data-delete-type="forum-thread"]').forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault(); event.stopPropagation();
      if (deleteForumThread(button.dataset.deleteId) && onAfter) onAfter("forum-thread");
    });
  });
  qsa('[data-delete-type="forum-reply"]').forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault(); event.stopPropagation();
      if (deleteForumReply(button.dataset.threadId, button.dataset.deleteId) && onAfter) onAfter("forum-reply");
    });
  });
}

function applyStyleMode(modeKey) {
  document.body.dataset.styleMode = styleModes[modeKey] ? modeKey : "vivid";
  localStorage.setItem(storageKeys.styleMode, document.body.dataset.styleMode);
  qsa(".style-swatch").forEach(button => button.classList.toggle("active", button.dataset.style === document.body.dataset.styleMode));
}
function applyColorTheme(themeKey) {
  document.body.dataset.colorTheme = colorThemes[themeKey] ? themeKey : "aurora";
  localStorage.setItem(storageKeys.colorTheme, document.body.dataset.colorTheme);
  qsa(".color-swatch").forEach(button => button.classList.toggle("active", button.dataset.color === document.body.dataset.colorTheme));
}
function initPanels() {
  const stylePanel = qs("#stylePanel");
  const colorPanel = qs("#colorPanel");
  const styleToggle = qs("#styleToggle");
  const colorToggle = qs("#colorToggle");
  const styleGrid = qs("#styleGrid");
  const colorGrid = qs("#colorGrid");

  if (styleGrid) {
    styleGrid.innerHTML = Object.entries(styleModes).map(([key, mode]) => `
      <button class="swatch-btn style-swatch" data-style="${key}" type="button">
        <span style="background: linear-gradient(135deg, ${mode.preview[0]}, ${mode.preview[1]});"></span>
        <strong>${mode.name}</strong>
        <small>${mode.label}</small>
      </button>
    `).join("");
  }
  if (colorGrid) {
    colorGrid.innerHTML = Object.entries(colorThemes).map(([key, theme]) => `
      <button class="swatch-btn color-swatch" data-color="${key}" type="button">
        <span style="background: linear-gradient(135deg, ${theme.preview[0]}, ${theme.preview[1]});"></span>
        <strong>${theme.name}</strong>
        <small>Accent palette</small>
      </button>
    `).join("");
  }

  applyStyleMode(localStorage.getItem(storageKeys.styleMode) || "vivid");
  applyColorTheme(localStorage.getItem(storageKeys.colorTheme) || "aurora");

  styleToggle?.addEventListener("click", () => {
    colorPanel?.classList.add("hidden");
    stylePanel?.classList.toggle("hidden");
  });
  colorToggle?.addEventListener("click", () => {
    stylePanel?.classList.add("hidden");
    colorPanel?.classList.toggle("hidden");
  });

  document.addEventListener("click", event => {
    if (stylePanel && !stylePanel.classList.contains("hidden") && !stylePanel.contains(event.target) && event.target !== styleToggle) stylePanel.classList.add("hidden");
    if (colorPanel && !colorPanel.classList.contains("hidden") && !colorPanel.contains(event.target) && event.target !== colorToggle) colorPanel.classList.add("hidden");
  });

  qsa("[data-style]").forEach(button => button.addEventListener("click", () => applyStyleMode(button.dataset.style)));
  qsa("[data-color]").forEach(button => button.addEventListener("click", () => applyColorTheme(button.dataset.color)));
}

function runIntro() {
  const intro = qs("#siteIntro");
  if (!intro) return;
  if (sessionStorage.getItem("playerbase_intro_done") === "1") {
    intro.classList.add("done");
    return;
  }
  setTimeout(() => {
    intro.classList.add("done");
    sessionStorage.setItem("playerbase_intro_done", "1");
  }, 2200);
}

function initMenu() {
  const menuToggle = qs("#menuToggle");
  const mobileLinks = qs("#mobileLinks");
  if (!menuToggle || !mobileLinks) return;
  menuToggle.addEventListener("click", () => mobileLinks.classList.toggle("open"));
}

function articleCard(article, compact = false) {
  return `
    <article class="card ${compact ? "compact-card compact-article" : ""}">
      <a class="card-stretch" href="${articleHref(article.slug)}" aria-label="Open ${safe(article.title)}"></a>
      <img class="card-cover" src="${article.image}" alt="${safe(article.title)}" />
      <div class="card-body ${compact ? "compact-body" : ""}">
        <div class="card-top">
          <span class="badge badge-accent">${article.category}</span>
          <span class="badge badge-success">${article.source}</span>
        </div>
        <h3>${article.title}</h3>
        ${compact ? "" : `<p>${article.excerpt}</p>`}
        ${compact ? "" : `<div class="card-actions"><span class="text-link">Open article</span><a class="text-link" href="${article.url}" target="_blank" rel="noopener noreferrer">Source ↗</a></div>`}
      </div>
    </article>
  `;
}

function gameCard(game, compact = false) {
  return `
    <article class="game-card ${compact ? "compact-card compact-game" : ""}">
      <a class="card-stretch" href="${gameHref(game.id)}" aria-label="Open ${safe(game.title)}"></a>
      <img class="game-cover" src="${game.image}" alt="${safe(game.title)}" />
      <div class="game-body ${compact ? "compact-body" : ""}">
        <div class="game-top">
          <span class="badge badge-accent">${game.genre}</span>
          <span class="badge">${game.year}</span>
        </div>
        <h3>${game.title}</h3>
        ${compact ? "" : `<p>${game.description}</p>`}
        <div class="tag-list ${compact ? "compact-tags" : ""}">
          <span class="tag">${compact ? formatAverageRating(game.id) : game.platform}</span>
          ${compact ? "" : `<span class="tag">${formatAverageRating(game.id)}</span>`}
        </div>
        ${compact ? "" : `
          <div class="rating-row" style="margin-top: 14px;">
            <div class="stars">${[1,2,3,4,5].map(star => `<button class="star-btn" type="button" data-rate="${game.id}" data-value="${star}">★</button>`).join("")}</div>
          </div>
          <div class="card-actions">
            <span class="text-link">Open game page</span>
            ${renderDeleteButton("game", game.id)}
          </div>
        `}
      </div>
    </article>
  `;
}

function renderHome() {
  qs("#app").innerHTML = `
    <section class="hero">
      <div class="hero-top hero-tight">
        <p class="kicker">Minimal home, stronger contrast</p>
        <h1>PlayerBase</h1>
        <p class="lead short-lead">Gaming stories, game pages, esports coverage and community tools in one cleaner interface.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="articles.html">Articles</a>
          <a class="btn btn-secondary" href="games.html">Games</a>
          <a class="btn btn-secondary" href="styles.html">Styles</a>
        </div>
      </div>
      <div class="hero-bottom">
        <article class="stat"><strong>10</strong><span>articles</span></article>
        <article class="stat"><strong>12</strong><span>games</span></article>
        <article class="stat"><strong>4</strong><span>styles</span></article>
        <article class="stat"><strong>6</strong><span>color themes</span></article>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Featured articles</h2>
        <a class="text-link" href="articles.html">View all</a>
      </div>
      <div class="grid-3">${articleData.slice(0, 6).map(article => articleCard(article, true)).join("")}</div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Popular games</h2>
        <a class="text-link" href="games.html">Open catalog</a>
      </div>
      <div class="grid-4">${getAllGames().slice(0, 4).map(game => gameCard(game, true)).join("")}</div>
    </section>

    <section class="section panel">
      <div class="quick-links-grid">
        <a class="quick-link-card" href="esports.html"><span>Esports</span><strong>Competitive scene</strong></a>
        <a class="quick-link-card" href="forum.html"><span>Forum</span><strong>Community posts</strong></a>
        <a class="quick-link-card" href="styles.html"><span>Styles</span><strong>Mix style and color</strong></a>
      </div>
    </section>
  `;
}

function renderArticlesPage() {
  qs("#app").innerHTML = `
    <section class="top-strip">
      <div>
        <p class="kicker">Editorial archive</p>
        <h1 class="page-title">Articles</h1>
        <p class="page-intro">Browse the full archive and filter it quickly.</p>
      </div>
      <a class="btn btn-secondary" href="index.html">Back to home</a>
    </section>

    <section class="panel">
      <label class="search-box">
        <span>⌕</span>
        <input id="articleSearch" type="text" placeholder="Search articles: Sony, esports, Xbox, Minecraft..." />
      </label>
      <div class="chips" id="articleChips"></div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <p class="kicker">Archive</p>
          <h2>All articles</h2>
        </div>
        <p class="section-note"><span id="articleResults"></span> result(s)</p>
      </div>
      <div class="grid-4" id="articleGrid"></div>
    </section>
  `;

  const categories = ["All", ...new Set(articleData.map(article => article.category))];
  let activeCategory = "All";
  let searchTerm = "";

  function drawChips() {
    qs("#articleChips").innerHTML = categories.map(category => `<button class="chip ${activeCategory === category ? "active" : ""}" data-category="${category}">${category}</button>`).join("");
    qsa("[data-category]").forEach(button => button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      drawChips();
      drawGrid();
    }));
  }

  function drawGrid() {
    const filtered = articleData.filter(article => {
      const categoryOk = activeCategory === "All" || article.category === activeCategory;
      const haystack = `${article.title} ${article.source} ${article.category} ${article.excerpt}`.toLowerCase();
      const searchOk = !searchTerm || haystack.includes(searchTerm.toLowerCase());
      return categoryOk && searchOk;
    });
    qs("#articleResults").textContent = filtered.length;
    qs("#articleGrid").innerHTML = filtered.map(article => articleCard(article)).join("");
  }

  qs("#articleSearch").addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    drawGrid();
  });

  drawChips();
  drawGrid();
}

function renderArticlePage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || articleData[0].slug;
  const article = slugToArticle(slug) || articleData[0];
  const related = articleData.filter(item => item.slug !== article.slug).slice(0, 3);

  qs("#app").innerHTML = `
    <div class="back-bar">
      <div>
        <p class="mini-kicker">Article view</p>
        <strong>${article.category}</strong>
        <p class="meta">Dedicated page with source links and related content.</p>
      </div>
      <div class="inline-actions">
        <a class="btn btn-secondary" href="articles.html">Back to articles</a>
        <a class="btn btn-primary" href="${article.url}" target="_blank" rel="noopener noreferrer">Open source</a>
      </div>
    </div>

    <article class="article-hero section">
      <img class="article-cover" src="${article.image}" alt="${safe(article.title)}" />
      <div class="article-body">
        <div class="card-top">
          <span class="badge badge-accent">${article.category}</span>
          <span class="badge badge-success">${article.source}</span>
        </div>
        <p class="mini-kicker">${article.readTime} • ${article.date}</p>
        <h1>${article.title}</h1>
        <div class="article-meta-row">
          <span class="badge">Source page</span>
          <span class="badge">Editorial feature</span>
          <span class="badge">PlayerBase detail page</span>
        </div>
        <p class="page-intro">${article.intro}</p>
      </div>
    </article>

    <div class="detail-layout">
      <article class="detail-main">
        <h2>Editorial summary</h2>
        ${article.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
        <h2>Why it matters on PlayerBase</h2>
        <ul>${article.bullets.map(point => `<li>${point}</li>`).join("")}</ul>
      </article>

      <aside class="side-stack">
        <article class="detail-side">
          <p class="mini-kicker">Original source</p>
          <h3>${article.source}</h3>
          <p>${article.excerpt}</p>
          <a class="btn btn-primary" href="${article.url}" target="_blank" rel="noopener noreferrer">Go to source</a>
          ${article.extraSources ? `<h3 style="margin-top:18px;">Additional links</h3><ul>${article.extraSources.map(source => `<li><a class="text-link" href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a></li>`).join("")}</ul>` : ""}
        </article>
        <article class="detail-side">
          <p class="mini-kicker">Related articles</p>
          <h3>Read next</h3>
          <ul>${related.map(item => `<li><a class="text-link" href="${articleHref(item.slug)}">${item.title}</a></li>`).join("")}</ul>
        </article>
      </aside>
    </div>
  `;
}

function renderGamesPage() {
  qs("#app").innerHTML = `
    <section class="top-strip">
      <div>
        <p class="kicker">Games database</p>
        <h1 class="page-title">Games</h1>
        <p class="page-intro">Open any game card, rate titles and add your own entries.</p>
      </div>
      <a class="btn btn-secondary" href="esports.html">Go to esports</a>
    </section>

    <div class="games-layout">
      <section>
        <article class="panel">
          <label class="search-box">
            <span>⌕</span>
            <input id="gameSearch" type="text" placeholder="Search games: Elden Ring, Fortnite, Dota 2..." />
          </label>
          <div class="chips" id="genreChips"></div>
        </article>

        <section class="section">
          <div class="section-head">
            <div>
              <p class="kicker">Catalog</p>
              <h2>Known games and community additions</h2>
            </div>
            <p class="section-note"><span id="gameResults"></span> game(s)</p>
          </div>
          <div class="grid-3" id="gamesGrid"></div>
        </section>
      </section>

      <aside class="side-stack">
        <article class="panel">
          <p class="mini-kicker">Add a game</p>
          <h3>Submit a new entry</h3>
          <form id="addGameForm" class="form-grid">
            <input class="input" name="title" placeholder="Game title" required />
            <input class="input" name="genre" placeholder="Genre" required />
            <input class="input" name="year" placeholder="Year" required />
            <input class="input" name="platform" placeholder="Platform" required />
            <input class="input" name="image" placeholder="Image URL" required />
            <input class="input" name="id" placeholder="Optional custom ID" />
            <textarea class="textarea" name="description" placeholder="Short description" style="grid-column: 1 / -1;" required></textarea>
            <textarea class="textarea" name="longDescription" placeholder="Long description for the game detail page" style="grid-column: 1 / -1;"></textarea>
            <div class="form-actions" style="grid-column: 1 / -1;">
              <button class="btn btn-primary" type="submit">Add game</button>
            </div>
          </form>
          <p class="small-note">User-added games are stored locally and can be removed with the protected code prompt.</p>
        </article>

        <article class="side-card">
          <p class="mini-kicker">Suggested tabs</p>
          <h3>Extra game-related sections</h3>
          <div class="tag-list">
            <span class="tag">Reviews</span>
            <span class="tag">Upcoming Releases</span>
            <span class="tag">Indie Picks</span>
            <span class="tag">Co-op Games</span>
            <span class="tag">Best Soundtracks</span>
            <span class="tag">Roguelikes</span>
          </div>
        </article>
      </aside>
    </div>
  `;

  let searchTerm = "";
  let activeGenre = "All";

  function genres() {
    return ["All", ...new Set(getAllGames().map(game => game.genre))];
  }
  function drawGenreChips() {
    qs("#genreChips").innerHTML = genres().map(genre => `<button class="chip ${genre === activeGenre ? "active" : ""}" data-genre="${safe(genre)}">${genre}</button>`).join("");
    qsa("[data-genre]").forEach(button => button.addEventListener("click", () => {
      activeGenre = button.dataset.genre;
      drawGenreChips();
      drawGames();
    }));
  }
  function drawGames() {
    const games = getAllGames().filter(game => {
      const genreOk = activeGenre === "All" || game.genre === activeGenre;
      const haystack = `${game.title} ${game.genre} ${game.platform} ${game.description}`.toLowerCase();
      const searchOk = !searchTerm || haystack.includes(searchTerm.toLowerCase());
      return genreOk && searchOk;
    });
    qs("#gameResults").textContent = games.length;
    qs("#gamesGrid").innerHTML = games.map(game => gameCard(game)).join("");

    qsa("[data-rate]").forEach(button => button.addEventListener("click", event => {
      event.preventDefault(); event.stopPropagation();
      rateGame(button.dataset.rate, Number(button.dataset.value));
      drawGames();
    }));
    bindDeleteButtons(() => { drawGenreChips(); drawGames(); });
  }

  qs("#gameSearch").addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    drawGames();
  });

  qs("#addGameForm").addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const customGames = readStorage(storageKeys.games, []);
    const newGame = {
      id: normalizeGameId(data.id.trim() || data.title.trim()),
      title: data.title.trim(),
      genre: data.genre.trim(),
      year: data.year.trim(),
      platform: data.platform.trim(),
      image: data.image.trim(),
      description: data.description.trim(),
      longDescription: data.longDescription.trim() || `${data.title.trim()} is a user-added game entry on PlayerBase. This page was created by the local community catalog and supports ratings and comments.`
    };
    if (!newGame.id) return;
    customGames.unshift(newGame);
    writeStorage(storageKeys.games, customGames);
    event.currentTarget.reset();
    drawGenreChips();
    drawGames();
  });

  drawGenreChips();
  drawGames();
}

function renderGamePage() {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get("id") || getAllGames()[0]?.id;
  const game = getGameById(gameId);
  if (!game) {
    qs("#app").innerHTML = `
      <div class="back-bar">
        <div>
          <p class="mini-kicker">Game detail</p>
          <strong>Game not found</strong>
          <p class="meta">This entry may have been deleted.</p>
        </div>
        <a class="btn btn-secondary" href="games.html">Back to games</a>
      </div>
    `;
    return;
  }

  const related = getAllGames().filter(item => item.id !== game.id).slice(0, 3);
  const comments = getGameComments(game.id);
  const savedUsername = localStorage.getItem(storageKeys.username) || "";

  qs("#app").innerHTML = `
    <div class="back-bar">
      <div>
        <p class="mini-kicker">Game detail</p>
        <strong>${game.genre}</strong>
        <p class="meta">Detailed page with ratings, comments and related entries.</p>
      </div>
      <div class="inline-actions">
        <a class="btn btn-secondary" href="games.html">Back to games</a>
        ${renderDeleteButton("game", game.id)}
      </div>
    </div>

    <article class="article-hero section">
      <img class="article-cover" src="${game.image}" alt="${safe(game.title)}" />
      <div class="article-body">
        <div class="card-top">
          <span class="badge badge-accent">${game.genre}</span>
          <span class="badge">${game.year}</span>
          <span class="badge badge-success">${game.platform}</span>
        </div>
        <p class="mini-kicker">Game page</p>
        <h1>${game.title}</h1>
        <div class="article-meta-row">
          <span class="badge">${formatAverageRating(game.id)}</span>
          <span class="badge">Comments: ${comments.length}</span>
        </div>
        <p class="page-intro">${game.longDescription || game.description}</p>
        <div class="rating-row" style="margin-top: 16px;">
          <span class="small-note">Rate this game:</span>
          <div class="stars">${[1,2,3,4,5].map(star => `<button class="star-btn" type="button" data-rate="${game.id}" data-value="${star}">★</button>`).join("")}</div>
        </div>
      </div>
    </article>

    <div class="detail-layout">
      <section class="detail-main">
        <h2>About this game</h2>
        <p>${game.longDescription || game.description}</p>
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>Release year:</strong> ${game.year}</p>
        <p><strong>Platform:</strong> ${game.platform}</p>

        <h2>Community comments</h2>
        <div class="panel compact-panel comment-form-panel">
          <div class="form-grid">
            <input class="input" id="gameCommentUser" value="${safe(savedUsername)}" placeholder="Choose your username" />
            <div class="admin-note">Protected deletion is available through the delete buttons.</div>
            <textarea class="textarea" id="gameCommentText" placeholder="Leave a comment about this game" style="grid-column: 1 / -1;"></textarea>
            <div class="form-actions" style="grid-column: 1 / -1;">
              <button class="btn btn-primary" id="postGameComment" type="button">Post comment</button>
            </div>
          </div>
        </div>

        <div class="comment-list" id="gameCommentList">
          ${comments.length ? comments.map(comment => `
            <article class="comment-card">
              <div class="comment-top">
                <div class="reply-meta"><span>${safe(comment.user)}</span><span>${comment.createdAt}</span></div>
                ${renderDeleteButton("game-comment", comment.id, `data-game-id="${game.id}"`)}
              </div>
              <p>${safe(comment.text)}</p>
            </article>
          `).join("") : `<div class="empty-note">No comments yet. Be the first to post one.</div>`}
        </div>
      </section>

      <aside class="side-stack">
        <article class="detail-side">
          <p class="mini-kicker">Related games</p>
          <h3>Open another page</h3>
          <ul>${related.map(item => `<li><a class="text-link" href="${gameHref(item.id)}">${item.title}</a></li>`).join("")}</ul>
        </article>
        <article class="detail-side">
          <p class="mini-kicker">Community tools</p>
          <h3>What works here</h3>
          <ul>
            <li>You can rate the game with stars.</li>
            <li>You can post comments with a saved username.</li>
            <li>You can remove user-posted content through protected deletion.</li>
          </ul>
        </article>
      </aside>
    </div>
  `;

  qsa("[data-rate]").forEach(button => button.addEventListener("click", () => {
    rateGame(button.dataset.rate, Number(button.dataset.value));
    renderGamePage();
  }));

  qs("#postGameComment").addEventListener("click", () => {
    const user = qs("#gameCommentUser").value.trim() || "Guest";
    const text = qs("#gameCommentText").value.trim();
    if (!text) return;
    localStorage.setItem(storageKeys.username, user);
    addGameComment(game.id, user, text);
    renderGamePage();
  });

  bindDeleteButtons(type => {
    if (type === "game") window.location.href = "games.html";
    else renderGamePage();
  });
}

function renderForumPage() {
  const savedUsername = localStorage.getItem(storageKeys.username) || "";
  qs("#app").innerHTML = `
    <section class="top-strip">
      <div>
        <p class="kicker">Community section</p>
        <h1 class="page-title">Forum</h1>
        <p class="page-intro">Choose a username, create threads, reply to posts, cite one of the site articles and moderate local content through protected delete buttons.</p>
      </div>
      <a class="btn btn-secondary" href="articles.html">Browse articles</a>
    </section>

    <div class="forum-layout">
      <section>
        <article class="panel">
          <div class="form-grid">
            <input class="input" id="forumUsername" placeholder="Choose your username" value="${safe(savedUsername)}" />
            <div class="admin-note">Delete buttons will ask for the protected code only when needed.</div>
            <input class="input" id="forumTitle" placeholder="Thread title" />
            <select class="select" id="forumTag">
              <option>General</option>
              <option>Gaming News</option>
              <option>RPG</option>
              <option>Criticism</option>
              <option>Narrative Games</option>
              <option>Accessibility</option>
              <option>Security</option>
              <option>AI & Innovation</option>
              <option>Business</option>
              <option>Trends</option>
              <option>Esports</option>
            </select>
            <select class="select" id="forumArticle">
              <option value="">No quoted article</option>
              ${articleData.map(article => `<option value="${article.slug}">${article.title}</option>`).join("")}
            </select>
            <textarea class="textarea" id="forumMessage" placeholder="Write your message" style="grid-column: 1 / -1;"></textarea>
            <div class="form-actions" style="grid-column: 1 / -1;">
              <button class="btn btn-primary" id="postThreadBtn" type="button">Post thread</button>
            </div>
          </div>
        </article>

        <section class="section">
          <div class="section-head">
            <div>
              <p class="kicker">Threads</p>
              <h2>Community posts</h2>
            </div>
            <p class="section-note">Stored locally in your browser</p>
          </div>
          <div class="side-stack" id="forumThreads"></div>
        </section>
      </section>

      <aside class="side-stack">
        <article class="side-card">
          <p class="mini-kicker">Forum features</p>
          <h3>What is interactive here</h3>
          <ul>
            <li>Username selection is saved locally.</li>
            <li>You can create new threads.</li>
            <li>You can reply to any thread.</li>
            <li>You can cite one article for a direct redirect.</li>
            <li>You can delete threads and replies through protected moderation buttons.</li>
          </ul>
        </article>

        <article class="side-card">
          <p class="mini-kicker">Popular tags</p>
          <div class="tag-list">
            <span class="tag">#RPG</span>
            <span class="tag">#OuterWilds</span>
            <span class="tag">#Esports</span>
            <span class="tag">#SonyStore</span>
            <span class="tag">#Minecraft</span>
          </div>
        </article>
      </aside>
    </div>
  `;

  function drawThreads() {
    const threads = getForumThreads();
    qs("#forumThreads").innerHTML = threads.map(thread => {
      const article = thread.articleSlug ? slugToArticle(thread.articleSlug) : null;
      return `
        <article class="forum-post">
          <div class="card-top">
            <span class="badge badge-accent">${thread.tag}</span>
            <span class="badge">${thread.createdAt}</span>
          </div>
          <div class="post-header-row">
            <h3>${safe(thread.title)}</h3>
            ${renderDeleteButton("forum-thread", thread.id)}
          </div>
          <p>${safe(thread.message)}</p>
          <div class="post-meta">
            <span>Posted by ${safe(thread.user)}</span>
            <span>${thread.replies.length} repl${thread.replies.length === 1 ? "y" : "ies"}</span>
          </div>
          ${article ? `<div class="quote-box">Quoted article: <a class="text-link" href="${articleHref(article.slug)}">${article.title}</a></div>` : ""}
          <div class="reply-list">
            ${thread.replies.map(reply => `
              <div class="reply">
                <div class="comment-top">
                  <div class="reply-meta"><span>${safe(reply.user)}</span><span>${reply.createdAt}</span></div>
                  ${renderDeleteButton("forum-reply", reply.id, `data-thread-id="${thread.id}"`)}
                </div>
                <div>${safe(reply.text)}</div>
              </div>
            `).join("")}
          </div>
          <div class="reply-form">
            <input class="input" data-reply-input="${thread.id}" placeholder="Reply to this thread" />
            <button class="btn btn-secondary" type="button" data-reply-btn="${thread.id}">Send reply</button>
          </div>
        </article>
      `;
    }).join("");

    qsa("[data-reply-btn]").forEach(button => button.addEventListener("click", () => {
      const username = qs("#forumUsername").value.trim() || "Guest";
      const text = qs(`[data-reply-input="${button.dataset.replyBtn}"]`).value.trim();
      if (!text) return;
      localStorage.setItem(storageKeys.username, username);
      const updated = getForumThreads().map(thread => thread.id !== button.dataset.replyBtn ? thread : {
        ...thread,
        replies: [{ id: uid(), user: username, text, createdAt: nowLabel() }, ...thread.replies]
      });
      setForumThreads(updated);
      drawThreads();
    }));

    bindDeleteButtons(() => drawThreads());
  }

  qs("#postThreadBtn").addEventListener("click", () => {
    const username = qs("#forumUsername").value.trim() || "Guest";
    const title = qs("#forumTitle").value.trim();
    const message = qs("#forumMessage").value.trim();
    const tag = qs("#forumTag").value;
    const articleSlug = qs("#forumArticle").value;
    if (!title || !message) return;

    localStorage.setItem(storageKeys.username, username);
    const threads = getForumThreads();
    threads.unshift({ id: uid(), user: username, title, message, tag, articleSlug, createdAt: nowLabel(), replies: [] });
    setForumThreads(threads);

    qs("#forumTitle").value = "";
    qs("#forumMessage").value = "";
    qs("#forumArticle").value = "";
    drawThreads();
  });

  drawThreads();
}

function renderEsportsPage() {
  qs("#app").innerHTML = `
    <section class="top-strip">
      <div>
        <p class="kicker">Competitive gaming</p>
        <h1 class="page-title">Esports</h1>
        <p class="page-intro">A dedicated esports page with competition-focused cards, industry context and additional tabs that make the site feel deeper and more complete.</p>
      </div>
      <a class="btn btn-secondary" href="games.html">View games</a>
    </section>

    <section class="section">
      <div class="grid-2">
        ${esportsData.map(entry => `
          <article class="esports-card" style="background-image: linear-gradient(180deg, rgba(5,8,15,.08), rgba(5,8,15,.88)), url('${entry.image}')">
            <div>
              <p class="mini-kicker">${entry.subtitle}</p>
              <h3>${entry.title}</h3>
              <p>${entry.text}</p>
              <div class="tag-list">${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <div class="esports-layout section">
      <section class="side-stack">
        <article class="side-card">
          <p class="mini-kicker">Industry angle</p>
          <h3>Why esports belongs here</h3>
          <p>PlayerBase treats esports both as entertainment and as an industry. That gives the website more depth than a standard game list or article-only layout.</p>
        </article>
        <article class="side-card">
          <p class="mini-kicker">Featured article</p>
          <h3>Read the esports growth story</h3>
          <p>The archive also contains a full esports-industry article focused on media growth, sponsorship and investment.</p>
          <a class="btn btn-primary" href="${articleHref("esports-industry-growth")}">Open article</a>
        </article>
      </section>

      <aside class="side-card">
        <p class="mini-kicker">Suggested esports tabs</p>
        <h3>Useful competitive sections</h3>
        <div class="tag-list">
          <span class="tag">Schedules</span>
          <span class="tag">Top Teams</span>
          <span class="tag">Top Players</span>
          <span class="tag">Tournament Results</span>
          <span class="tag">Patch Impact</span>
          <span class="tag">Pick'Ems</span>
          <span class="tag">Viewership</span>
          <span class="tag">Power Rankings</span>
        </div>
      </aside>
    </div>
  `;
}

function renderStylesPage() {
  const currentStyle = localStorage.getItem(storageKeys.styleMode) || "vivid";
  const currentColor = localStorage.getItem(storageKeys.colorTheme) || "aurora";
  qs("#app").innerHTML = `
    <section class="top-strip">
      <div>
        <p class="kicker">Design lab</p>
        <h1 class="page-title">Styles</h1>
        <p class="page-intro">Switch the site style and color system independently. Each visual direction rearranges depth and tone while colors remain selectable on their own.</p>
      </div>
      <a class="btn btn-secondary" href="index.html">Back to home</a>
    </section>

    <section class="styles-showcase section" id="stylesShowcase">
      ${Object.entries(styleModes).map(([key, mode]) => `
        <article class="style-preview-card ${key === currentStyle ? "active" : ""}">
          <div class="style-preview-band" style="background: linear-gradient(135deg, ${mode.preview[0]}, ${mode.preview[1]});"></div>
          <div class="style-preview-body">
            <p class="mini-kicker">Style</p>
            <h3>${mode.name}</h3>
            <p>${mode.label}</p>
            <button class="btn btn-primary" type="button" data-apply-style="${key}">Apply ${mode.name}</button>
          </div>
        </article>
      `).join("")}
      ${Object.entries(colorThemes).map(([key, theme]) => `
        <article class="style-preview-card ${key === currentColor ? "active" : ""}">
          <div class="style-preview-band" style="background: linear-gradient(135deg, ${theme.preview[0]}, ${theme.preview[1]});"></div>
          <div class="style-preview-body">
            <p class="mini-kicker">Color</p>
            <h3>${theme.name}</h3>
            <p>Accent palette for highlights, hover glow, tags and buttons.</p>
            <button class="btn btn-secondary" type="button" data-apply-color="${key}">Apply ${theme.name}</button>
          </div>
        </article>
      `).join("")}
    </section>

    <div class="about-layout section">
      <article class="panel">
        <div class="section-head">
          <div>
            <p class="kicker">What changes</p>
            <h2>Independent controls</h2>
          </div>
        </div>
        <ul>
          <li>Style changes the entire art direction.</li>
          <li>Color changes the accent palette only.</li>
          <li>You can combine any style with any color.</li>
          <li>The black subtle mode is available as Noir.</li>
        </ul>
      </article>

      <aside class="side-stack">
        <article class="side-card">
          <p class="mini-kicker">Available styles</p>
          <div class="tag-list"><span class="tag">Vivid</span><span class="tag">Editorial</span><span class="tag">Mono</span><span class="tag">Noir</span></div>
        </article>
        <article class="side-card">
          <p class="mini-kicker">Available colors</p>
          <div class="tag-list"><span class="tag">Aurora</span><span class="tag">Mint</span><span class="tag">Sunset</span><span class="tag">Electric</span><span class="tag">Ruby</span><span class="tag">Ice</span></div>
        </article>
      </aside>
    </div>
  `;

  qsa("[data-apply-style]").forEach(button => button.addEventListener("click", () => {
    applyStyleMode(button.dataset.applyStyle);
    renderStylesPage();
  }));
  qsa("[data-apply-color]").forEach(button => button.addEventListener("click", () => {
    applyColorTheme(button.dataset.applyColor);
    renderStylesPage();
  }));
}

function renderAboutPage() {
  qs("#app").innerHTML = `
    <section class="top-strip">
      <div>
        <p class="kicker">Project overview</p>
        <h1 class="page-title">About PlayerBase</h1>
        <p class="page-intro">This page explains the structure, interactions and design direction used across the full website.</p>
      </div>
      <a class="btn btn-secondary" href="index.html">Return home</a>
    </section>

    <div class="about-layout">
      <article class="panel">
        <div class="section-head">
          <div>
            <p class="kicker">Core features</p>
            <h2>What is included</h2>
          </div>
        </div>
        <ul>${aboutHighlights.map(item => `<li>${item}</li>`).join("")}</ul>
      </article>

      <aside class="side-stack">
        <article class="side-card">
          <p class="mini-kicker">Visual direction</p>
          <h3>Cleaner but richer design</h3>
          <p>The interface uses stronger contrast, brighter accent palettes, fuller glow states, more readable spacing and more polished panel depth while staying cleaner and more structured.</p>
        </article>
        <article class="side-card">
          <p class="mini-kicker">Future tabs</p>
          <div class="tag-list">
            <span class="tag">Hardware</span>
            <span class="tag">Guides</span>
            <span class="tag">Release Calendar</span>
            <span class="tag">Community Picks</span>
            <span class="tag">Soundtracks</span>
            <span class="tag">Interviews</span>
          </div>
        </article>
      </aside>
    </div>
  `;
}

function bootstrapPage() {
  initializeStorage();
  initPanels();
  initMenu();
  runIntro();

  switch (getPage()) {
    case "home": renderHome(); break;
    case "articles": renderArticlesPage(); break;
    case "article": renderArticlePage(); break;
    case "games": renderGamesPage(); break;
    case "game": renderGamePage(); break;
    case "forum": renderForumPage(); break;
    case "esports": renderEsportsPage(); break;
    case "styles": renderStylesPage(); break;
    case "about": renderAboutPage(); break;
    default: renderHome();
  }
}

bootstrapPage();
