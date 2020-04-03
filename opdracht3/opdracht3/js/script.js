/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/




//-------------------------------Code door Sanne + uitleg

/* de slider */
var deSlider = document.querySelector('.slider');
/* de array met radio buttons - die begint leeg */
var radio_array = new Array();
/* de positie van van de carousel - dit was i - nu een zinvolle naam */
/* die wordt gezet in de vulSliderMetFilmsEnBolletjes */
/* begint bij 0 omdat een array bij 0 begint */
var positieSlider;

/* maak een verbinding met de server (API) en vraag de info van alle films op */
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

/* deze functie wordt uitgevoerd als de server de data van de films terugstuurt */
request.onload = function () {
    /* de info over de films zit in de response */
    /* die info wordt in de constante "movies " gestopt */
    const movies = request.response;

    /* nu beginnen we met het vullen van de slider */
    vulSliderMetFilmsEnBolletjes(movies);

    /* als de slider gevuld is kan de interactie toegevoegd worden  */
    voegInteractieToeAanDeSlider();
}

function vulSliderMetFilmsEnBolletjes(movies) {
    for (let i = 0; i < movies.length; i++) {
        /* maak de html elementen voor een film aan */
        let newLi = document.createElement('li');
        let newImg = document.createElement('img');
        let newHeader = document.createElement('h2');

        let newInput = document.createElement('input');
        let newLabel = document.createElement('label');




        /* vul de attributen met de info van de film van de server */
        newImg.src = movies[i].cover;
        newImg.setAttribute("alt", movies[i].title);
        newHeader.innerHTML = movies[i].title;
        newInput.setAttribute('id', 'slide' + (i + 1));
        newInput.setAttribute('name', 'slide');
        newLabel.setAttribute('for', 'slide' + (i + 1));

        /* voeg de elementen toe aan de li - de volgorde doet er toe */
        //        newLi.appendChild(newInput);
        newLi.appendChild(newHeader);
        newLi.appendChild(newLabel);
        newLi.appendChild(newImg);
        /* voeg de li toe aan de ul (de slider) */
        deSlider.appendChild(newLi);

        /* voeg de radiobutton toe aan de array met radio buttons */
        radio_array.push(newInput);
    }

    /* tenslotte de radio button van de eerste film checken */
    /* daardoor wordt de eerste films dorect getoond */
    radio_array[0].checked = true;
    /* de positie van de slider op 0 zetten */
    positieSlider = 0;
}

function voegInteractieToeAanDeSlider() {
    /* als eerste de buttons */
    /* zoek de buttons op in de HTML */
    var buttonRight = document.getElementById("right");
    var buttonLeft = document.getElementById("left");
    /* laat de buttons wat doen als er op ze geklikt wordt */
    buttonLeft.addEventListener("click", function () {
        beweegSlider("naarLinks");
    });
    buttonRight.addEventListener("click", function () {
        beweegSlider("naarRechts");
    });

    /* dan de pijltjes op het toetsenbord toetsenbord */
    window.addEventListener("keydown", function () {
        if (event.key == "ArrowLeft") {
            beweegSlider("naarLinks");
        } else if (event.key == "ArrowRight") {
            beweegSlider("naarRechts");
        }
    });

    /* tenslotte de bolletjes */
    /* als er op een bolletje geklikt wordt moet positieSlider aangepast worden */
    /* zo blijven de buttons en pijltjes in-sync */
    deSlider.addEventListener("change", function (event) {
        var deRadioButton = event.target;
        var deRadioButtonID = deRadioButton.id;
        var deRadioButtonIDnummer = deRadioButtonID.substring(5);
        var newPositieSlider = parseInt(deRadioButtonIDnummer) - 1;
        positieSlider = newPositieSlider;
    });
}


function beweegSlider(richting) {
    var radio_length = radio_array.length;

    if (richting == "naarLinks") {
        // positieSlider--;
        // if (positieSlider < 0) {
        draaiCarrousel("naarLinks");
        // }
    } else if (richting == "naarRechts") {
        // positieSlider++;
        // if (positieSlider > radio_length - 1) {
        draaiCarrousel("naarRechts");
        // }
    }
    // radio_array[positieSlider].checked = true;
}









/* ik denk dat je dit al kent */
/* ik laat het window (de browser) luisteren naar toetsaanslagen */
/* bij elke toetsaanslag wordt de actie actieNaToetsaanslag uitgevoerd */
window.addEventListener("keydown", actieNaToetsaanslag);

/* ik denk dat je dit ook al kent */
function actieNaToetsaanslag(event) {
    /* een switch is een uitgebreide if, else is, else if... */
    /* het event bevat alle data die de browser over de toestaanslag heeft */
    /* het kan altijd interessant zijn, om het event even te console.log-gen */
    /* dan kun je zien welke info allemaal beschikbaar is */
    /* een van de brokjes info in het event is key */
    /* dat is de leesbare waarde van de toets waarop gedrukt is */
    switch (event.key) {
        case "ArrowLeft":
            /* als de event.key ArrowLeft is, doen we dit */
            draaiCarrousel("naarLinks");
            break;
        case "ArrowRight":
            /* als de event.key ArrowRight is, doen we dit */
            draaiCarrousel("naarRechts");
            break;
    }
}

function draaiCarrousel(richting) {
    /* we zoeken de carrousel op en stoppen die in een variabele */
    var deCarrousel = document.querySelector(".slider");
    /* we maken een variabele aan om de huidige hoek van de carrousel in op te slaan */
    var huidigeCarrouselHoek;
    /* we maken een variabele aan om de nieuwe hoek van de carrousel in op te slaan */
    var nieuweCarrouselHoek;

    /* de HUIDIGE hoek van de carrousel bepalen */
    /* met de volgende regel vraag je eerst aan de css om alle properties van de carrousel te geven */
    /* om vervolgens uit dat lijstje de waarde van --carrouselHoek op te vragen */
    /* de eerste keer is dat de initiële waarde --> 0deg */
    huidigeCarrouselHoek = getComputedStyle(deCarrousel).getPropertyValue("--carrouselHoek");

    /* met 0deg kun je niet rekenen */
    /* we moeten "deg" van de waarde afsnijden om zo alleen de getallen over te houden */
    /* dat kan met substring */
    huidigeCarrouselHoek = huidigeCarrouselHoek.substring(0, huidigeCarrouselHoek.length - 3);

    /* nu hebben we alleen de getallen over */
    /* js ziet de die getallen nog als een string --> een tekst */
    /* daar kun je nog steeds niet mee rekenen */
    /* met parseInt kun je van een tekst die uit getallen bestaat een echt getal maken */
    huidigeCarrouselHoek = parseInt(huidigeCarrouselHoek);

    /* de NIEUWE hoek van de carrousel bepalen */
    /* als de carrousel naar links moet draaien, trekken we 30 graden van de carrouselHoek af */
    if (richting == "naarLinks") {
        nieuweCarrouselHoek = huidigeCarrouselHoek - 60;
    }
    /* als de carrousel naar rechts moet draaien, tellen we 30 graden bij de carrouselHoek op */
    else if (richting == "naarRechts") {
        nieuweCarrouselHoek = huidigeCarrouselHoek + 60;
    }

    /* vervolgens plakken we de letters "deg" weer achter de nieuwe waarde*/
    nieuweCarrouselHoek = nieuweCarrouselHoek + "deg";

    /* en als laatste schrijven we de nieuwe hoek van de carrousel terug naar de css */
    deCarrousel.style.setProperty("--carrouselHoek", nieuweCarrouselHoek);
}
