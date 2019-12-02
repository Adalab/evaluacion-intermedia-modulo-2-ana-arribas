'use strict';

const input = document.querySelector('#input');
const button = document.querySelector('#button');
const clue = document.querySelector('#clue');
const tries = document.querySelector('#tries');
let attemps = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};
const theRandom = getRandomNumber(100);
console.log(theRandom);

function cluesFunction() {
    let myNumber = parseInt(input.value);
    if (myNumber > 100 || myNumber < 1) {
        clue.innerHTML = 'Introduce un número del 1 al 100';
    }
    else if (myNumber < theRandom) {
        clue.innerHTML = 'Demasiado bajo';
    }
    else if (myNumber > theRandom) {
        clue.innerHTML = 'Demasiado alto';
    }
    else {
        clue.innerHTML = 'Has ganado campeona';
    }
};

function countingFunction() {
    attemps = attemps + 1;
    tries.innerHTML = attemps;
};

function handleFunction(event) {
    event.preventDefault();
    cluesFunction();
    countingFunction();
};
button.addEventListener('click', handleFunction);