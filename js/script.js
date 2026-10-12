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

const songResult = document.querySelector("#songResult");
const yesButton = document.querySelector("#yesBtn");
const shuffleButton = document.querySelector("#shuffleBtn");
const selectedSongs = document.querySelector("#selectedSongs");
const clearButton = document.querySelector("#clearBtn");

let remainingSongs = [...songs];
let currentSong = null;

function getRandomSong() {
  if (remainingSongs.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * remainingSongs.length);
  return remainingSongs[randomIndex];
}

function showRandomSong() {
  currentSong = getRandomSong();

  if (!currentSong) {
    songResult.textContent = "All songs have been selected!";
    yesButton.disabled = true;
    shuffleButton.disabled = true;
    return;
  }

  songResult.textContent = currentSong;

  // Restarts the pop animation on every click
  songResult.classList.remove("song-selected");
  void songResult.offsetWidth;
  songResult.classList.add("song-selected");
}

shuffleButton.addEventListener("click", showRandomSong);

yesButton.addEventListener("click", () => {
  if (!currentSong) return;

  // Add the current song to the selected-song tile area
  const songTile = document.createElement("div");
  songTile.classList.add("song-tile");
  const songNumber = selectedSongs.children.length + 1;
  songTile.textContent = `${songNumber}. ${currentSong}`;
  selectedSongs.appendChild(songTile);
  clearButton.hidden = false;

  // Remove only this chosen copy from the randomiser list
  const songIndex = remainingSongs.indexOf(currentSong);
  remainingSongs.splice(songIndex, 1);

  // Randomise the next song
  showRandomSong();
});

shuffleButton.addEventListener("click", () => {
  // Leave the song available, then choose again
  showRandomSong();
});

clearButton.addEventListener("click", () => {
  remainingSongs = [...songs]; // Restore every original song
  currentSong = null;
  selectedSongs.innerHTML = ""; // Remove all displayed song tiles

  yesButton.disabled = false;
  shuffleButton.disabled = false;

  clearButton.hidden = true;

  songResult.textContent = "No song selected yet.";
});
