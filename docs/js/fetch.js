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

const hobbyOne = document.getElementById("hobby1");
const hobbyTwo = document.getElementById("hobby2");
const hobbyThree = document.getElementById("hobby3");
const hobbyFour = document.getElementById("hobby4");
const hobbyFive = document.getElementById("hobby5");
const hobbySix = document.getElementById("hobby6");

const trackNameOne = document.querySelector("#trackName1");
const trackNameTwo = document.querySelector("#trackName2");
const trackNameOneSecond = document.querySelector("#trackName1_2");
const trackNameTwoSecond = document.querySelector("#trackName2_2");

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

            hobbyOne.innerHTML = data.hobbies[0];
            hobbyTwo.innerHTML = data.hobbies[1];
            hobbyThree.innerHTML = data.hobbies[2];
            hobbyFour.innerHTML = data.hobbies[3];
            hobbyFive.innerHTML = data.hobbies[4];
            hobbySix.innerHTML = data.hobbies[5];

            trackNameOne.innerHTML = data.tracks[0].title;
            trackNameOneSecond.innerHTML = data.tracks[0].title;
            trackOne.src = data.tracks[0].location;
            trackNameTwo.innerHTML = data.tracks[1].title;
            trackNameTwoSecond.innerHTML = data.tracks[1].title;
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