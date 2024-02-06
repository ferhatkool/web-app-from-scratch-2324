// Dit script wordt gebruikt om alle audio tags te herladen, zodat de juist source locatie wordt gebruikt om de audio bestanden op te halen.
// Voeg een listener toe aan een nieuwe functie, genaamd load.
window.addEventListener('load', function() {
    // Herlaadt de audio tags.
    reloadAudio();
});
// Functie om de audio tags te herladen.
function reloadAudio() {
    // Selecteer alle audio tags met de class 'audio'.
    var audioElements = document.querySelectorAll('.audio');
    // Voor elk element, voer iets uit.
    audioElements.forEach(function(audioElement) {
        // Zet de timestamp / voortgang van de track op 0, oftewel, aan het begin neer.
        audioElement.currentTime = 0; // Reset audio to the beginning
        // Herlaad het audio bestand.
        audioElement.load(); // Reload the audio file
    });
}