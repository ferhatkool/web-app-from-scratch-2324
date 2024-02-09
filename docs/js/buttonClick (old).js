// Dit script wordt gebruikt om de knoppen op de 'homepage' bruikbaar te maken.
// Toevoegen van een listener voor het detecteren van een ingelaadde pagina.
document.addEventListener('DOMContentLoaded', function() {
    // Selecteer alle elementen die de class 'toggle' bevatten, wat alle vijf de knoppen zijn.
    const toggle = document.querySelectorAll('.toggle');
    // Selecteer de DIV dat wordt weergegeven bij het bezoeken van de site.
    const defaultDiv = document.querySelector('.default');
    // Voor elk element (button), voer iets uit.
    toggle.forEach(button => {
        // Luister naar clicks op de elementen (buttons)
        button.addEventListener('click', function() {
            // Stel een zoek waarde in, wat 'data-target' is.
            const targetId = this.getAttribute('data-target');
            // Zoek naar elementen die het ID van de voorgaande waarde hebben.
            const targetContent = document.getElementById(targetId);
            // Selecteer elk element (div) dat de class 'content' bevat en doe iets voor elk element.
            document.querySelectorAll('.content').forEach(content => {
                // Controleer of de display waarde van content op alles behalve none staat. Zodra dit niet gelijk is, pas de display style aan naar none.
                if (content !== targetContent) {
                    content.style.display = 'none';
                }
            });
            // Controleer of de display van targetContent op alleen none staat. Zodra dit zo is, zet deze display op flex en de standaard weergegeven DIV op none. HIerdoor wordt er een nieuwe 'pagina' geopend op de one-pager.
            if (targetContent.style.display === 'none') {
                targetContent.style.display = 'flex';
                defaultDiv.style.display = 'none';
            // Mocht er niet aan de bovenstaande eis worden voldaan, verander dan de display op none en de standaard weergegeven DIV op flex. Hierdoor wordt er oorspronkelijke tekst weer naar voren.
            } else {
                targetContent.style.display = 'none';
                defaultDiv.style.display = 'flex';
            }
        });
    });
});