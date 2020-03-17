/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//code opdracht 3

const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function () {
    const movies = request.response;
    //    populateHeader(movies);
    //    showHeroes(movies);
    console.log(movies);

    for (let i = 0; i < movies.length; i++) {
        let newLi = document.createElement('li');
        let newImg = document.createElement('img');
        let newHeader = document.createElement('h2');

        let newInput = document.createElement('input');
        let newLabel = document.createElement('label');

        newImg.src = movies[i].cover;
        newImg.setAttribute("alt", movies[i].title);
        newHeader.innerHTML = movies[i].title;

        newInput.setAttribute('type', 'radio');
        newInput.setAttribute('id', 'slide' + (i + 1));
        newInput.setAttribute('class', 'radio');
        newInput.setAttribute('name', 'slide');

        newLabel.setAttribute('for', 'slide' + (i + 1));

        newLi.appendChild(newHeader);
        newLi.appendChild(newInput);
        newLi.appendChild(newImg);
        document.body.querySelector("ul").appendChild(newLi);

    }

}


//code opdracht 2
var right = document.getElementById("right");
var left = document.getElementById("left");

//afbeeldingen ophalen
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");
var slide5 = document.getElementById("slide5");

//array afbeeldingen
var radio_array = Array(slide1, slide2, slide3, slide4, slide5);

var radio_length = radio_array.length;

var i = 0;



left.onclick = () => {
    i--;
    if (i < 0) {
        i = radio_length - 1;
    }
    radio_array[i].checked = true;
};


right.onclick = () => {
    i++;
    if (i > radio_length - 1) {
        i = 0;
    }
    radio_array[i].checked = true;
};



function arrowLeft() {
    i--;
    if (i < 0) {
        i = radio_length - 1;
    }
    radio_array[i].checked = true;
}

function arrowRight() {
    i++;
    if (i > radio_length - 1) {
        i = 0;
    }
    radio_array[i].checked = true;
}


function toetsenbord(event) {
    if (event.key == "ArrowRight") {
        arrowRight();
    } else if (event.key == "ArrowLeft") {
        arrowLeft();
    }
}

window.addEventListener("keydown", toetsenbord);
