const button = document.querySelector('.b-1');
const result = document.querySelector('#result');

const letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

const indexOne = Math.floor(Math.random() * letters.length);
const indexTwo = Math.floor(Math.random() * letters.length);
const indexThree = Math.floor(Math.random() * letters.length);
const indexFour = Math.floor(Math.random() * letters.length);

const letterOne = letters[indexOne];
const letterTwo = letters[indexTwo];
const letterThree = letters[indexThree];
const letterFour = letters[indexFour];

function getRandomWord(){
    const randomWord = letterOne+letterTwo+letterThree+letterFour;
    result.innerHTML = randomWord;
}


button.addEventListener('click', getRandomWord);

