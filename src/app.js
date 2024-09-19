/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "Un malilloso",
  "Una viejita",
  "Un viejito",
  "Una señora embarazada",
  "Un vendedor ambulante"
];
let action = [
  "me pidió ayuda",
  "me preguntó una dirección",
  "me solicitó apoyo"
];
let what = [
  "para ir al hospital",
  "para llegar a la farmacia",
  "para ir al banco",
  "para llegar a la iglesia"
];
let when = [
  "antes de llegar al trabajo",
  "justo cuando salí de casa",
  "mientras trotaba por la mañana",
  "en mi hora de comida",
  "al ir a la escuela"
];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}
window.onload = function() {
  //write your code here

  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
