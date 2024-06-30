function changeMedia(videoId) {
    const mediaPlayer = document.getElementById('media-player');
    mediaPlayer.src = `https://uqload.to/embed-${videoId}`;
}

let languageText = document.getElementById("languageText");
let vf = document.getElementById("VF");
let vostfr = document.getElementById("VOSTFR");

vostfr.addEventListener("click", function() {
    languageText.textContent = "VOSTFR";
});

vf.addEventListener("click", function() {
    languageText.textContent = "VF";
});