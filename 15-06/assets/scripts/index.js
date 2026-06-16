const cover = "./assets/images/cover.png";
const stickers = [
    "./assets/images/alisson.webp",
    "./assets/images/cristiano.webp",
    "./assets/images/endrick.webp",
    "./assets/images/mbape.webp",
    "./assets/images/messi.webp",
    "./assets/images/neymar.webp"
];

const board = document.getElementById("board");
const movesText = document.getElementById("moves");
const pairsText = document.getElementById("pairs");
const winText = document.getElementById("winMessage");

var openCards = [];
var pairsFound = 0;
var moves = 0;
var blocked = false;

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j] = array[j], array[i]];
    }
    return array;
}

function startGame(){

}

function flipCard(card){

}

function checkPair(){

}