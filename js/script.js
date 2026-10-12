let songs = [
  "Sin Wagon",
  "Church",
  "Choosin' Texas",
  "Fuego",
  "Brunette",
  "Footloose",
  "Liar",
  "American Kids",
  "The Wolf",
  "Cowgirl",
  "Animals",
  "Lucky",
  "A Bar Song (Tipsy)",
  "Wagon Wheel",
  "Damn I Love Miami",
  "Whiskey Drinkin",
  "Burn It to the Ground",
  "I see Country",
  "Take It Off",
  "Turn All the Lights On",
  "Freight Train",
  "3 Tequila Floor",
  "Country Girl (Shake it for Me)",
  "Be Her",
  "Cooler Than Me",
  "Take Me to the Beach",
  "More",
  "Scream",
];

const randomButton = document.querySelector("#randomBtn");
const songResult = document.querySelector("#songResult");

function getRandomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);

  return songs[randomIndex];
}

randomButton.addEventListener("click", function () {
  const song = getRandomSong();

  songResult.textContent = song;
});

songResult.classList.remove("song-selected");
void songResult.offsetWidth; // restarts the pop animation on every click
songResult.classList.add("song-selected");
