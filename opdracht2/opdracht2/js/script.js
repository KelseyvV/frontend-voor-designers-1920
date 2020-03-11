/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var right = document.getElementById("right");
var left = document.getElementById("left");

var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
var slide4 = document.getElementById("slide4");
var slide5 = document.getElementById("slide5");

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
