

const players = [
  { name: "Cristiano Ronaldo", img: "https://renderz.app/image-cdn/player_24_20801_TOTS25_UT_128bcf81b5041e05/normal", goals: 850, assists: 250, height: "1.87m", weight: "83kg" },
  { name: "Lionel Messi", img: "https://renderz.app/image-cdn/player_24_158023_TOTS25_UT_5b96d18b9a0794af/normal", goals: 820, assists: 300, height: "1.70m", weight: "72kg" },
  { name: "Neymar Jr", img: "https://renderz.app/image-cdn/player_23_190871_CT24_LIVE_8f06275343bff3bb/normal", goals: 430, assists: 230, height: "1.75m", weight: "68kg" },
  { name: "Kylian Mbappé", img: "https://renderz.app/image-cdn/player_24_231747_TOTY25_UT_3b546bf6e27e7e55/normal", goals: 300, assists: 150, height: "1.78m", weight: "73kg" },
  { name: "Erling Haaland", img: "https://renderz.app/image-cdn/player_24_239085_TOTY25_HM_db826d27d96fd337/normal", goals: 200, assists: 70, height: "1.94m", weight: "88kg" },
  { name: "Zinedine Zidane", img: "https://renderz.app/image-cdn/player_23_248450_RS24_ICON_17dbfbc3c2dc9d12/normal", goals: 125, assists: 100, height: "1.85m", weight: "80kg" },
  { name: "Ronaldinho", img: "https://renderz.app/image-cdn/player_24_238395_TOTS25_ICON_3b516b74fa6b4bd2/normal", goals: 205, assists: 180, height: "1.81m", weight: "79kg" },
  { name: "David Beckham", img: "https://renderz.app/image-cdn/player_24_258779_BECKHAM_101_d59114b5fb81cd00/normal", goals: 140, assists: 160, height: "1.83m", weight: "75kg" },
  { name: "Pelé", img: "https://renderz.app/image-cdn/player_24_237068_WW25_ICON_939067fc0fa51947/normal", goals: 767, assists: 200, height: "1.73m", weight: "70kg" },
   {name: "Zlatan Ibrahimović", img: "https://renderz.app/image-cdn/player_24_41236_ICONCHRONICLE25_5_eceafbb69abc9493/normal", goals: 554, assists: 225,height: "1.95m",weight: "85kg" },
    { name: "Ronaldo Nazário", img:"https://renderz.app/image-cdn/player_24_237064_TOTS25_ICON_b5f98e312d72024b/normal", goals: 414, assists: 101, height: "1.83m", weight: "90.5kg" },
  { name: "Diego Maradona", img: "https://renderz.app/image-cdn/player_24_190042_NEON25_ICON_a5a4b4e0bc16ab25/normal", goals: 350, assists: 170, height: "1.65m", weight: "70kg" },
    { name: "Gareth Bale", img:"https://renderz.app/image-cdn/player_24_71557_VS25_ICON_c729b1873822751b/normal", goals: 141, assists: 68, height: "1.83m", weight: "72.5kg" },
    { name: "Xavi Hernández", img: "https://renderz.app/image-cdn/player_24_255910_TOTS25_ICON_ffe652bb8ffe285c/normal", goals: 85, assists: 150, height: "1.70m", weight: "70kg" },
    { name: "Roberto Baggio", img: "https://renderz.app/image-cdn/player_24_243078_BO25_ICON_7ef3c1fa6a50ee59/normal", goals: 205, assists: 100, height: "1.75m", weight: "70kg" },
     { name: "Didier Drogba", img:"https://renderz.app/image-cdn/player_24_247695_PB25_ICON_ROCK_898931a944b0c993/normal", goals: 300, assists: 120, height: "1.88m", weight: "91kg" },
  { name: "Andriy Shevchenko", img:"https://renderz.app/image-cdn/player_24_239420_BO25_1205_ICON_6529455e85752829/normal", goals: 352, assists: 85, height: "1.83m", weight: "73kg" },
  { name: "David Ginola", img:"https://renderz.app/image-cdn/player_24_191972_RAGNAROK25_ICON_b320f89fcdc9fbda/normal", goals: 81, assists: 62, height: "1.86m", weight: "82kg" },
  { name: "Eden Hazard", img:"https://renderz.app/image-cdn/player_24_183277_VS25_ICON_2384c30499db4da4/normal", goals: 167, assists: 157, height: "1.75m", weight: "74kg" },
  { name: "Johan Cruyff", img:"https://renderz.app/image-cdn/player_24_242522_BO25_ICON_b623f76ae6fa37ac/normal", goals: 293, assists: 188, height: "1.78m", weight: "71kg" },
  { name: "Alessandro Del Piero",img:"https://renderz.app/image-cdn/player_24_1075_DL25_ICON_L_f69d3d9389e1e946/normal", goals: 290, assists: 120, height: "1.74m", weight: "73kg" },
  { name: "Erling Haaland", img:"https://renderz.app/image-cdn/player_24_239085_TOTS25_LIVE_e4b93bffb2954e69/normal", goals: 213, assists: 40, height: "1.94m", weight: "88kg" },
  { name: "lamine Yamal",img:"https://renderz.app/image-cdn/player_24_277643_TOTS25_LIVE_3602be17dfe4b2f0/normal", goals: 10, assists: 12, height: "1.78m", weight: "65kg" },
  { name: "Raphinha",img:"https://renderz.app/image-cdn/player_24_233419_UCL25_XI_301332ce794ae3e1/normal", goals: 70, assists: 60, height: "1.76m", weight: "68kg" },
  { name: "Kylian Mbappé",img:"https://renderz.app/image-cdn/player_24_231747_TOTS25_LIVE_0efb4b8473106f91/normal", goals: 286, assists: 120, height: "1.78m", weight: "73kg" },
  { name: "Jude Bellingham", img:"https://renderz.app/image-cdn/player_24_252371_TOTY25_UT_b7b05530466204a0/normal", goals: 50, assists: 45, height: "1.86m", weight: "75kg" },
  { name: "Vinícius Jr.", img:"https://renderz.app/image-cdn/player_24_238794_TOTY25_UT_2_48773e91134a20ce/normal", goals: 80, assists: 75, height: "1.76m", weight: "73kg" },
  { name: "Robert Lewandowski", img:"https://renderz.app/image-cdn/player_24_188545_BO25_1205_LIVE_b8053ea5d5e322ec/normal", goals: 560, assists: 140, height: "1.85m", weight: "80kg" },
  { name: "Karim Benzema", img:"https://renderz.app/image-cdn/player_24_165153_BO25_1205_LIVE_b80227ef3653ee34/normal", goals: 445, assists: 160, height: "1.85m", weight: "81kg" },
  { name: "Toni Kroos", img:"https://renderz.app/image-cdn/player_24_182521_DL25_ICON_df4ecdad315ebdea/normal", goals: 80, assists: 140, height: "1.83m", weight: "76kg" },
  { name: "Luka Modrić", img:"https://renderz.app/image-cdn/player_24_177003_LEAGUEREWARD25_LIVE_ffd29e5df08bde01/normal", goals: 60, assists: 100, height: "1.72m", weight: "66kg" },
  { name: "Raúl González", img:"https://renderz.app/image-cdn/player_24_242939_DL25_0703_185028e3c0a0146f/normal", goals: 404, assists: 103, height: "1.80m", weight: "68kg" },
  { name: "Gianfranco Zola", img:"https://renderz.app/image-cdn/player_24_239111_TOTY25_ICON_0870032dfcc35674/normal", goals: 193, assists: 85, height: "1.68m", weight: "70kg" },
  { name: "David Beckham", img:"https://renderz.app/image-cdn/player_24_258779_TOTS25_ICON_2c51bbcea17d0405/normal", goals: 127, assists: 202, height: "1.83m", weight: "75kg" },
  { name: "Kaká", img:"https://renderz.app/image-cdn/player_24_247075_VS25_ICON_88cf175abd469e41/normal", goals: 208, assists: 146, height: "1.86m", weight: "82kg" }
];

const homeContainer = document.getElementById("home-section");
const loveContainer = document.getElementById("love-section");
const searchInput = document.getElementById("searchInput");

let loveList = JSON.parse(localStorage.getItem("lovePlayers")) || [];

function renderPlayers(container, data) {
  container.innerHTML = "";
  data.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    const heartClass = loveList.includes(player.name) ? "love-icon active" : "love-icon";

    card.innerHTML = `
      <span class="${heartClass}" onclick="toggleLove('${player.name}')">❤</span>
      <img src="${player.img}" alt="${player.name}" onerror="this.src='https://via.placeholder.com/150'"/>
      <div class="player-name">${player.name}</div>
      <div class="player-stats">Height: ${player.height}</div>
      <div class="player-stats">Weight: ${player.weight}</div>
      <div class="player-stats">Goals: ${player.goals}</div>
      <div class="player-stats">Assists: ${player.assists}</div>
    `;

    container.appendChild(card);
  });
}

function toggleLove(name) {
  const index = loveList.indexOf(name);
  if (index === -1) loveList.push(name);
  else loveList.splice(index, 1);
  localStorage.setItem("lovePlayers", JSON.stringify(loveList));
  filterPlayers();
}

function filterPlayers() {
  const query = searchInput.value.toLowerCase();
  const homeFiltered = players.filter(p => p.name.toLowerCase().includes(query));
  const loveFiltered = players.filter(p => loveList.includes(p.name) && p.name.toLowerCase().includes(query));

  renderPlayers(homeContainer, homeFiltered);
  renderPlayers(loveContainer, loveFiltered);
}

searchInput.addEventListener("input", filterPlayers);

function showSection(section) {
  document.querySelectorAll(".card-container").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(section).classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  showSection("home-section");
  filterPlayers();
});
