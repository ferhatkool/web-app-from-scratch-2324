// Haal uit de HTML het element dat bij de ID "domainName" hoort.
const domainNameFile = document.getElementById("domainName");
// Haal uit de HTML het element dat bij de ID "name" hoort. 
const nameFile = document.getElementById("name");
// Haal uit de HTML het element dat bij de ID "trackName1" en "trackName2" hoort.
const trackNameOne = document.getElementById("trackName1");
const trackNameTwo = document.getElementById("trackName2");
// Haal uit de HTML het element dat bij de ID "track1" en "track2" hoort.
const trackOne = document.querySelector("#track1");
const trackTwo = document.querySelector("#track2");

// Variable waarin de locatie van een JSON file staat.
const jsonFile = "./json/data.json"
    // Laadt de JSON file in (fetch).
    fetch(jsonFile)
        // Na Fetch, doe dan iets met de functie 'response.'
        .then((response) => {
            // Als 'response' niet gelijk is aan 'ok', voer dan een throw uit.
            if(!response.ok) {
                // Genereert een error.
                throw new Error('Network response was not ok.')
        }
        // Geef de response van de fetch van de JSON mee aan de variable 'response'.
        return response.json();
        })
        // Na de functie 'response', doe dan iets met de functie 'data'.
        .then((data) => {
            // Gebruik de variable 'domainNameFile' om in de HTML te zoeken naar de ID 'domainName' a.d.h.v. innerHTML, om vervolgens deze waarde gelijk te maken aan de waarde bij 'domainName' uit de JSON file.
            domainNameFile.innerHTML = data.domainName;
            // Gebruik de variable 'nameFile' om in de HTML te zoeken naar de ID 'name' a.d.h.v. innerHTML, om vervolgens deze waarde gelijk te maken aan de waarde bij 'name' uit de JSON file.
            nameFile.innerHTML = data.name;
            // Gebruik de variable 'trackNameOne' om in de HTML te zoeken naar de ID 'trackNameOne' a.d.h.v. innerHTML, om vervolgens deze waarde gelijk te maken aan de waarde bij 'title' in de 1e array van tracks uit de JSON file.
            trackNameOne.innerHTML = data.tracks[0].title;
            // Gebruik de variable 'trackOne' om in de HTML te zoeken naar locatie van een audio bestand a.d.h.v. .src, om vervolgens deze waarde gelijk te maken aan de waarde bij 'location' in de 1e array van tracks uit de JSON file.
            trackOne.src = data.tracks[0].location;
            // Gebruik de variable 'trackNameOne' om in de HTML te zoeken naar de ID 'trackNameTwo'a.d.h.v. innerHTML, om vervolgens deze waarde gelijk te maken aan de waarde bij 'title' in de 2e array van tracks uit de JSON file.
            trackNameTwo.innerHTML = data.tracks[1].title;
            // Gebruik de variable 'trackTwo' om in de HTML te zoeken naar locatie van een audio bestand a.d.h.v. .src, om vervolgens deze waarde gelijk te maken aan de waarde bij 'location' in de 2e array van tracks uit de JSON file.
            trackTwo.src = data.tracks[1].location;

            // Genereer een console bericht met daarin de inhoud van de variable 'data', wat de gehele JSON file is.
            console.log(data);
        })
        // Functie om een error op te vangen wanneer deze wordt gegenereerd.
        .catch((error) => {
            // Genereerd een error met een zelfgemaakt bericht, gevolgd door de error zelf.
            console.error("There is a problem fetching the JSON file", error);
        });