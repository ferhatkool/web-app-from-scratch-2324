function getAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
}

function dateOfBirthInString(year, month, day) {
    yearString = year.toString();
    monthString = month.toString();
    dayString = day.toString();
    string = yearString + '-' + monthString + '-' + dayString;
    return string
}

// Haal uit de HTML het element dat bij de ID "domainName" hoort.
const domainNameVar = document.getElementById("domainName");
// Haal uit de HTML het element dat bij de ID "name" hoort. 
const nameVar1 = document.getElementById("name1");
const nameVar2 = document.getElementById("name2");

const ageVar = document.getElementById("age")
const cityVar = document.getElementById("city")
const provinceVar = document.getElementById("province")
const termVar = document.getElementById("term")
const studyVar = document.getElementById("study")
const minorVar = document.getElementById("minor")
const jobCompanyVar = document.getElementById("jobCompany")
const jobTitleVar = document.getElementById("jobTitle")
// Haal uit de HTML het element dat bij de ID "trackName1" en "trackName2" hoort.
const trackNameOne = document.getElementById("trackName1");
const trackNameTwo = document.getElementById("trackName2");
// Haal uit de HTML het element dat bij de ID "track1" en "track2" hoort.
const trackOne = document.querySelector("#track1");
const trackTwo = document.querySelector("#track2");

const hero1name = document.getElementById("hero1");
const hero1picture = document.querySelector("#hero1picture");
const hero1context = document.getElementById("hero1context");

const hero2name = document.getElementById("hero2");
const hero2picture = document.querySelector("#hero2picture");
const hero2context = document.getElementById("hero2context");

const hero3name = document.getElementById("hero3");
const hero3picture = document.querySelector("#hero3picture");
const hero3context = document.getElementById("hero3context");

const hero4name = document.getElementById("hero4");
const hero4picture = document.querySelector("#hero4picture");
const hero4context = document.getElementById("hero4context");

const hero5name = document.getElementById("hero5");
const hero5picture = document.querySelector("#hero5picture");
const hero5context = document.getElementById("hero5context");

const villain1name = document.getElementById("villain1");
const villain1picture = document.querySelector("#villain1picture");
const villain1context = document.getElementById("villain1context");

const villain2name = document.getElementById("villain2");
const villain2picture = document.querySelector("#villain2picture");
const villain2context = document.getElementById("villain2context");

const villain3name = document.getElementById("villain3");
const villain3picture = document.querySelector("#villain3picture");
const villain3context = document.getElementById("villain3context");

const villain4name = document.getElementById("villain4");
const villain4picture = document.querySelector("#villain4picture");
const villain4context = document.getElementById("villain4context");

const villain5name = document.getElementById("villain5");
const villain5picture = document.querySelector("#villain5picture");
const villain5context = document.getElementById("villain5context");

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
            domainNameVar.innerHTML = data.domainName;
            // Gebruik de variable 'nameFile' om in de HTML te zoeken naar de ID 'name' a.d.h.v. innerHTML, om vervolgens deze waarde gelijk te maken aan de waarde bij 'name' uit de JSON file.
            nameVar1.innerHTML = data.name;
            nameVar2.innerHTML = data.name;

            ageVar.innerHTML = getAge(dateOfBirthInString(data.dateOfBirth[0].year,data.dateOfBirth[0].month,data.dateOfBirth[0].day));
          
            cityVar.innerHTML = data.city;
            provinceVar.innerHTML = data.province;
            termVar.innerHTML = data.term;
            studyVar.innerHTML = data.study;
            minorVar.innerHTML = data.minor;
            jobCompanyVar.innerHTML = data.jobCompany;
            jobTitleVar.innerHTML = data.jobTitle;
            // Gebruik de variable 'trackNameOne' om in de HTML te zoeken naar de ID 'trackNameOne' a.d.h.v. innerHTML, om vervolgens deze waarde gelijk te maken aan de waarde bij 'title' in de 1e array van tracks uit de JSON file.
            trackNameOne.innerHTML = data.tracks[0].title;
            // Gebruik de variable 'trackOne' om in de HTML te zoeken naar locatie van een audio bestand a.d.h.v. .src, om vervolgens deze waarde gelijk te maken aan de waarde bij 'location' in de 1e array van tracks uit de JSON file.
            trackOne.src = data.tracks[0].location;
            // Gebruik de variable 'trackNameOne' om in de HTML te zoeken naar de ID 'trackNameTwo'a.d.h.v. innerHTML, om vervolgens deze waarde gelijk te maken aan de waarde bij 'title' in de 2e array van tracks uit de JSON file.
            trackNameTwo.innerHTML = data.tracks[1].title;
            // Gebruik de variable 'trackTwo' om in de HTML te zoeken naar locatie van een audio bestand a.d.h.v. .src, om vervolgens deze waarde gelijk te maken aan de waarde bij 'location' in de 2e array van tracks uit de JSON file.
            trackTwo.src = data.tracks[1].location;

            hero1name.innerHTML = data.heroes[0].hero;
            hero1picture.src = data.heroes[0].heropicture;
            hero1context.innerHTML = data.heroes[0].herocontext;

            hero2name.innerHTML = data.heroes[1].hero;
            hero2picture.src = data.heroes[1].heropicture;
            hero2context.innerHTML = data.heroes[1].herocontext;

            hero3name.innerHTML = data.heroes[2].hero;
            hero3picture.src = data.heroes[2].heropicture;
            hero3context.innerHTML = data.heroes[2].herocontext;

            hero4name.innerHTML = data.heroes[3].hero;
            hero4picture.src = data.heroes[3].heropicture;
            hero4context.innerHTML = data.heroes[3].herocontext;

            hero5name.innerHTML = data.heroes[4].hero;
            hero5picture.src = data.heroes[4].heropicture;
            hero5context.innerHTML = data.heroes[4].herocontext;

            villain1name.innerHTML = data.villains[0].villain;
            villain1picture.src = data.villains[0].villainpicture;
            villain1context.innerHTML = data.villains[0].villaincontext;

            villain2name.innerHTML = data.villains[1].villain;
            villain2picture.src = data.villains[1].villainpicture;
            villain2context.innerHTML = data.villains[1].villaincontext;

            villain3name.innerHTML = data.villains[2].villain;
            villain3picture.src = data.villains[2].villainpicture;
            villain3context.innerHTML = data.villains[2].villaincontext;

            villain4name.innerHTML = data.villains[3].villain;
            villain4picture.src = data.villains[3].villainpicture;
            villain4context.innerHTML = data.villains[3].villaincontext;

            villain5name.innerHTML = data.villains[4].villain;
            villain5picture.src = data.villains[4].villainpicture;
            villain5context.innerHTML = data.villains[4].villaincontext;

            // Genereer een console bericht met daarin de inhoud van de variable 'data', wat de gehele JSON file is.
            console.log(data);
        })
        // Functie om een error op te vangen wanneer deze wordt gegenereerd.
        .catch((error) => {
            // Genereerd een error met een zelfgemaakt bericht, gevolgd door de error zelf.
            console.error("There is a problem fetching the JSON file", error);
        });