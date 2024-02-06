window.addEventListener('load', function() {
    reloadAudio();
});
    
function reloadAudio() {
    var audioElements = document.querySelectorAll('.audio');

    audioElements.forEach(function(audioElement) {
        audioElement.currentTime = 0; // Reset audio to the beginning
        audioElement.load(); // Reload the audio file
    });
}