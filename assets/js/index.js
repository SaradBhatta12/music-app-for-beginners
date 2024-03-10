const music_list = [
  {
    img: "assets/images/OrkhanZeynalli.jpg",
    name: "Iller Sonra",
    artist: "Orkhan Zeynalli",
    music: "assets/music/İller Sonra.mp3",
  },
  {
    img: "assets/images/ceza.jpg",
    name: "Neyim Var Ki",
    artist: "CEZA",
    music: "assets/music/Neyim Var Ki.mp3",
  },
  {
    img: "assets/images/Gazapizm.jpg",
    name: "Unutulacak Dunler",
    artist: "Gazapizm",
    music: "assets/music/Unutulacak Dunler.mp3",
  },
  {
    img: "assets/images/AID.jpg",
    name: "Boyuk Umidler",
    artist: "Orkhan Zeynalli",
    music: "assets/music/Boyuk Umidler.mp3",
  },
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextBtn = document.getElementById("next-btn");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const image = document.getElementById("image");

// Function to update the song information
function updateSongInfo(index) {
  songName.textContent = music_list[index].name;
  songArtist.textContent = music_list[index].artist;
  audioPlayer.src = music_list[index].music;
  image.src = music_list[index].img;
}

// Function to play the current song
function playSong() {
  audioPlayer.play();
}

// Function to pause the current song
function pauseSong() {
  audioPlayer.pause();
}

// Function to play the next song
function nextSong() {
  currentSongIndex++;
if (currentSongIndex >= music_list.length) {
  currentSongIndex = 0;
}

  updateSongInfo(currentSongIndex);
  playSong();
}

// Event listeners for the buttons
playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);
nextBtn.addEventListener("click", nextSong);

// Initialize the first song
updateSongInfo(currentSongIndex);
