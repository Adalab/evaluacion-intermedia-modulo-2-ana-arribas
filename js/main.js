'use strict'

const numberElement = document.querySelector('#input-number');
const button = document.querySelector('#button');
const clue = document.querySelector('#clue');
const tries = document.querySelector('#tries');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const myRandomNumber = getRandomNumber(100);



function showClue(myNum) {

    let item = parseInt(numberElement.value);

    if (101 > item > myNum) {
        clue.innerHTML = 'Demasiado alto';
    }
    else if (item < myNum) {
        clue.innerHTML = 'Demasiado bajo';
    }
    else if (item === myNum) {
        clue.innerHTML = '¡¡Has ganado campeona!!';
    }
    else if (item < 1) {
        clue.innerHTML = 'El número debe estar entre 1 y 100';
    }
    else if (item > 100) {
        clue.innerHTML = 'El número debe estar entre 1 y 100';
    }


};

let counting = 0;

function triesNumber() {
    counting = counting + 1;
    triesNumber.innerHTML = counting;

};


function tryHandle() {

    showClue(myRandomNumber);
    triesNumber();

};
console.log(tryHandle());

button.addEventListener('click', tryHandle);
