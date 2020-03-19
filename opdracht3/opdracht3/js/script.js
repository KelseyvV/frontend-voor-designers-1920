/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//--------------------------mijn oude code ------------------------->>>

////code opdracht 3
//
//const header = document.querySelector('header');
//const section = document.querySelector('section');
//
//let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
//let request = new XMLHttpRequest();
//
//request.open('GET', requestURL);
//
//request.responseType = 'json';
//
//request.send();
//
//request.onload = function () {
//    const movies = request.response;
//    //    populateHeader(movies);
//    //    showHeroes(movies);
//    console.log(movies);
//
//    for (let i = 0; i < movies.length; i++) {
//        let newLi = document.createElement('li');
//        let newImg = document.createElement('img');
//        let newHeader = document.createElement('h2');
//
//        let newInput = document.createElement('input');
//        let newLabel = document.createElement('label');
//
//        newImg.src = movies[i].cover;
//        newImg.setAttribute("alt", movies[i].title);
//        newHeader.innerHTML = movies[i].title;
//
//        newInput.setAttribute('type', 'radio');
//        newInput.setAttribute('id', 'slide' + (i + 1));
//        newInput.setAttribute('class', 'radio');
//        newInput.setAttribute('name', 'slide');
//
//        newLabel.setAttribute('for', 'slide' + (i + 1));
//
//        newLi.appendChild(newHeader);
//        newLi.appendChild(newInput);
//        newLi.appendChild(newImg);
//        document.body.querySelector("ul").appendChild(newLi);
//
//    }
//
//}
//
//
////code opdracht 2
//var right = document.getElementById("right");
//var left = document.getElementById("left");
//
////afbeeldingen ophalen
//var slide1 = document.getElementById("slide1");
//var slide2 = document.getElementById("slide2");
//var slide3 = document.getElementById("slide3");
//var slide4 = document.getElementById("slide4");
//var slide5 = document.getElementById("slide5");
//
////array afbeeldingen
//var radio_array = Array(slide1, slide2, slide3, slide4, slide5);
//
//var radio_length = radio_array.length;
//
//var i = 0;
//
//
//
//left.onclick = () => {
//    i--;
//    if (i < 0) {
//        i = radio_length - 1;
//    }
//    radio_array[i].checked = true;
//};
//
//
//right.onclick = () => {
//    i++;
//    if (i > radio_length - 1) {
//        i = 0;
//    }
//    radio_array[i].checked = true;
//};
//
//
//
//function arrowLeft() {
//    i--;
//    if (i < 0) {
//        i = radio_length - 1;
//    }
//    radio_array[i].checked = true;
//}
//
//function arrowRight() {
//    i++;
//    if (i > radio_length - 1) {
//        i = 0;
//    }
//    radio_array[i].checked = true;
//}
//
//
//function toetsenbord(event) {
//    if (event.key == "ArrowRight") {
//        arrowRight();
//    } else if (event.key == "ArrowLeft") {
//        arrowLeft();
//    }
//}
//
//window.addEventListener("keydown", toetsenbord);




//-------------------------------Code door Sanne + uitleg

/* de slider */
var deSlider = document.querySelector('.slider');
/* de array met radio buttons - die begint leeg */
var radio_array = new Array();
/* de positie van van de carousel - dit was i - nu een zinvolle naam */
/* die wordt gezet in de vulSliderMetFilmsEnBolletjes */
/* begint bij 0 omdat een array bij 0 begint */
var positieSlider;

/* maak een verbinding met de server en vraag de info van alle films op */
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

        newInput.setAttribute('type', 'radio');
        newInput.setAttribute('id', 'slide' + (i + 1));
        newInput.setAttribute('class', 'radio');
        newInput.setAttribute('name', 'slide');

        newLabel.setAttribute('for', 'slide' + (i + 1));

        /* voeg de elementen toe aan de li - de volgorde doet er toe */
        newLi.appendChild(newInput);
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
        positieSlider--;
        if (positieSlider < 0) {
            positieSlider = radio_length - 1;
        }
    } else if (richting == "naarRechts") {
        positieSlider++;
        if (positieSlider > radio_length - 1) {
            positieSlider = 0;
        }
    }
    radio_array[positieSlider].checked = true;
}





/* niet meer nodig opgenomen in de functie beweegSlider */
// function arrowLeft() {
//     i--;
//     if (i < 0) {
//         i = radio_length - 1;
//     }
//     radio_array[i].checked = true;
// }

// function arrowRight() {
//     i++;
//     if (i > radio_length - 1) {
//         i = 0;
//     }
//     radio_array[i].checked = true;
// }

// function toetsenbord(event) {
// }

/* niet meer nodig opgenomen in de functie beweegSlider */
// left.onclick = () => {
// };
// right.onclick = () => {
// };

//afbeeldingen ophalen
/* dit is niet meer nodig - dit wordt direct gedaan in de functie vulSliderMetFilmsEnBolletjes bij het aanmaken van de films */
// var slide1 = document.getElementById("slide1");
// var slide2 = document.getElementById("slide2");
// var slide3 = document.getElementById("slide3");
// var slide4 = document.getElementById("slide4");
// var slide5 = document.getElementById("slide5");
// var slide5 = document.getElementById("slide6");

//array afbeeldingen
/* dit is niet meer nodig - dit wordt direct gedaan in de functie vulSliderMetFilmsEnBolletjes bij het aanmaken van de films */
// var radio_array = Array(slide1, slide2, slide3, slide4, slide5, slide6);
