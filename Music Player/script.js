const songs = [
    "bensound-betterdays.mp3",
    "bensound-evolution.mp3",
    "bensound-newdawn.mp3",
    "bensound-pianomoment.mp3",
    "bensound-sadday.mp3",
    "bensound-theduel.mp3"
];

const player = document.getElementById('player')

  function createSongList() {
    const list = document.createElement("ol");

    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
        document.createTextNode(songs[i]);
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list
}      

const songList = document.getElementById('songList')
songList.appendChild(createSongList());

songList.onclick = function(e) {
    const source = document.getElementById('source');
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`

    player.load()
    player.play()
} 

function playAudio() {
    if(player.readyState) {
        player.play()
    }
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById('volumeSlider')
slider.oninput = function(e) {
    const volume = e.target.value;
    player.volume = volume;
}

function updateProgress() {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress')
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}