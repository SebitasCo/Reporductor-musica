import { playList } from "./playlist.js";  

const audio = document.getElementById('audio');  
const play = document.getElementById('play');  
const pause = document.getElementById('pause');  
const forward = document.getElementById('forward');  
const rewind = document.getElementById('rewind');  
const stop = document.getElementById('stop');  
const next = document.getElementById('next');  
const previous = document.getElementById('previous');  

const albumImg = document.getElementById('album-img');  
const songArtist = document.getElementById('song-artist');  
const songTitle = document.getElementById('song-title');  

let currentIndex = 0;  
 
function loadSong(index) {  
    const song = playList[index];  
    audio.src = song.song;  
    albumImg.src = song.img;  
    songArtist.textContent = song.artist;  
    songTitle.textContent = song.title;  
    audio.play();  
}  
loadSong(currentIndex);  

play.addEventListener('click', () => audio.play());  

 
pause.addEventListener('click', () => audio.pause());  


rewind.addEventListener('click', () => {  
    audio.currentTime = Math.max(0, audio.currentTime - 10);  
});  

forward.addEventListener('click', () => {  
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);  
});  

stop.addEventListener('click', () => {  
    audio.pause();  
    audio.currentTime = 0;  
});  


next.addEventListener('click', () => {  
    currentIndex = (currentIndex + 1) % playList.length; 
    loadSong(currentIndex);  
});  

previous.addEventListener('click', () => {  
    currentIndex = (currentIndex - 1 + playList.length) % playList.length; 
    loadSong(currentIndex);  
});  

audio.addEventListener('ended', () => {  
    currentIndex = (currentIndex + 1) % playList.length;
    loadSong(currentIndex);  
});