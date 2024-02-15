// function to calculate an age based on the date of birth.
function getAge(dateOfBirth) {
    // places the current date in a variable 
    var today = new Date();
    // places the date of birth in a new variable
    var birthDate = new Date(dateOfBirth);
    // calculate the age based on current year minus year of birth
    var age = today.getFullYear() - birthDate.getFullYear();
    // calculate the current month minus the month of birth, to check whether the age should be 1 higher or not 
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
}

// function to place the date of birth in a string to make calculations with it
function dateOfBirthInString(year, month, day) {
    // retrieve year of birth from json
    yearString = year.toString();
    // retrieve month of birth from json
    monthString = month.toString();
    // retrieve day of birth from json
    dayString = day.toString();
    // place all the vars in one long string, splitter by a '-'
    string = yearString + '-' + monthString + '-' + dayString;
    return string
}

// Loop om HTML te genereren voor de top5 lijst voor heroes en villains
function top5ListLoop(name, picture, bio, id) {
    // creëer een detail element
    const details = document.createElement("details");
    // voeg de class 'open_or_closed' toe aan het detail element
    details.classList.add('open_or_closed');
    // creëer een summary element
    const summary = document.createElement("summary");
    // voeg de class 'center' toe aan het summary element
    summary.classList.add('center');
    // creëer een 'textNode' (gewoon tekst) en voeg dit toe aan het summary element, waarvan de tekst afkomstig is uit name
    summary.appendChild(document.createTextNode(name))
    // creëer een div element
    const flexDiv = document.createElement("div");
    // voeg de class 'heroAndVillainFlex' toe aan het div element
    flexDiv.classList.add('heroAndVillainFlex')
    // creëer een paragraph element
    const context = document.createElement("p");
    // creëer een 'textNode' (gewoon tekst) en voeg dit toe aan het paragraph element, waarvan de tekst afkomstig is van bio
    context.appendChild(document.createTextNode(bio))
    // creëer een image element
    const image = document.createElement("img");
    // voeg de class 'characterPortrait' toe aan het image element
    image.classList.add('characterPortrait')
    // voeg een source toe aan het picture element, wat afkomstig is uit picture
    image.src = picture
    // voeg het paragraph element toe aan de div element
    flexDiv.appendChild(context)
    // voeg de image element toe aan de div element
    flexDiv.appendChild(image)
    // voeg de summary element toe aan de details element
    details.appendChild(summary)
    // voeg het div delement toe aan de details element
    details.appendChild(flexDiv)

    // voeg het detail element toe aan het gespecificeerde id, zodat het detail element aan de div in de HTML wordt toegevoegd.
    document.getElementById(id).appendChild(details)
}

// Loop om HTML te genereren voor de hobbies in de about me page
function hobbyLoop(hobby, id) {
    // creëer een li element
    const li = document.createElement('li')
    // voeg de class 'bulletlist' toe aan het li element
    li.classList.add('bulletList')
    // creëer een 'textNode' (gewoon tekst) en voeg dit toe aan het li element, waarvan de tekst afkomstig uit hobby
    li.appendChild(document.createTextNode(hobby))
    // voeg het li element toe aan het gespecifiseerde id, zodat het li element aan het ul element in de HTML wordt toegevoegd
    document.getElementById(id).appendChild(li)
}

// Haal uit de HTML het element dat bij een ID or class hoort.
const domainNameVar = document.getElementById("domainName");
const nameVar1 = document.getElementById("name1");
const nameVar2 = document.getElementById("name2");
const ageVar = document.getElementById("age");
const cityVar = document.getElementById("city");
const provinceVar = document.getElementById("province");
const termVar = document.getElementById("term");
const studyVar = document.getElementById("study");
const minorVar = document.getElementById("minor");
const jobCompanyVar = document.getElementById("jobCompany");
const jobTitleVar = document.getElementById("jobTitle");

const trackNameOne = document.querySelector("#trackName1");
const trackNameTwo = document.querySelector("#trackName2");

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
            // Plaats de data uit de JSON in de variable van het bijbehorende element, wat in de HTML wordt geplaatst.
            domainNameVar.innerHTML = data.domainName;
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

            trackNameOne.innerHTML = data.tracks[0].title;
            trackNameTwo.innerHTML = data.tracks[1].title;

            // voor elk voorkomende hobby, voer de functie uit
            data.hobbies.forEach(hobby => {
                // functie met als meegegeven waardes de hobby en id voor de ul waar de hobby in moet worden geplaatst.
                hobbyLoop(hobby, 'hobbyList')
            })

            // voor elk voorkomende hero, voer de functie uit
            data.heroes.forEach(hero => {
                // functie met als meegegeven waardes de naam van de hero, foto van de hero, de context van de hero en het ID van de div waar het element geplaatst wordt.
                top5ListLoop(hero.hero, hero.heropicture, hero.herocontext, 'heroes')
            })
            // voor elk voorkomende villain, voer de functie uit
            data.villains.forEach(villain => {
                // functie met als meegegeven waardes de naam van de villain, foto van de villain, de context van de villain en het ID van de div waar het element geplaatst wordt.
                top5ListLoop(villain.villain, villain.villainpicture, villain.villaincontext, 'villains')
            })
            // Genereer een console bericht met daarin de inhoud van de variable 'data', wat de gehele JSON file is.
            console.log(data);
        })
        // Functie om een error op te vangen wanneer deze wordt gegenereerd.
        .catch((error) => {
            // Genereerd een error met een zelfgemaakt bericht, gevolgd door de error zelf.
            console.error("There is a problem fetching the JSON file", error);
        });