/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/



/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var menu;
var navigatie;

menu = document.querySelector('.favoriet2');
navigatie = document.querySelector('.navigatie');

function hamburgerMenu() {
    menu.classList.toggle('active');
    navigatie.classList.toggle('active')
}

menu.addEventListener('click', hamburgerMenu);

var hart1 = document.querySelector('#hart1');
var hart2 = document.querySelector('#hart2');
var hart3 = document.querySelector('#hart3');
var hart4 = document.querySelector('#hart4');
var hart5 = document.querySelector('#hart5');
var hart6 = document.querySelector('#hart6');
var hartjes = document.querySelector('.favoriet2');


var counter = 0;

function count() {
    return counter += 1;
};

function displaycount() {
    document.getElementById("carrier").innerHTML = count();
}


hart1.addEventListener('click', hartjeVullen);

function hartjeVullen() {

    hart1.classList.toggle("favoriet2");

};


hart2.addEventListener('click', hartje2Vullen);

function hartje2Vullen() {

    hart2.classList.toggle("favoriet2");

};

hart3.addEventListener('click', hartje3Vullen);

function hartje3Vullen() {

    hart3.classList.toggle("favoriet2");

};

hart4.addEventListener('click', hartje4Vullen);

function hartje4Vullen() {

    hart4.classList.toggle("favoriet2");

};

hart5.addEventListener('click', hartje5Vullen);

function hartje5Vullen() {

    hart5.classList.toggle("favoriet2");

};

hart6.addEventListener('click', hartje6Vullen);

function hartje6Vullen() {

    hart6.classList.toggle("favoriet2");

};
