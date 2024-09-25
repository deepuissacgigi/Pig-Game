'use strict';
let score = 0;
let currentScore = document.querySelector('.current-score');
const finalScore = document.querySelector('.score');
const finalScoreP1 = document.getElementById('score--0');
const finalScoreP2 = document.getElementById('score--1');
const btnRollDice = document.querySelector('.btn.btn--roll');
const btnHoldPoint = document.querySelector('.btn.btn--hold');
const dice = document.querySelector('.dice');
// console.log(diceroll, 'diceroll');
console.log(finalScoreP1, 'P1');

btnHoldPoint.addEventListener('click', function () {});

btnRollDice.addEventListener('click', function () {
  const diceRoll = Math.trunc(Math.random() * 6 + 1);

  if (diceRoll === 1) {
    console.log(currentScore, 'cs');
    finalScore.textContent = score;
  } else {
    score += diceRoll;
    currentScore.textContent = score;
  }
  function diceRollIMage(roll) {
    console.log(roll, 'roll');
    switch (roll) {
      case 1:
        dice.src = './dice-1.png';
        console.log('true 1');
        break;
      case 2:
        dice.src = './dice-2.png';
        console.log('true 2');
        break;
      case 3:
        dice.src = './dice-3.png';
        console.log('true 3');
        break;
      case 4:
        dice.src = './dice-4.png';
        console.log('true 4');
        break;
      case 5:
        dice.src = './dice-5.png';
        console.log('true 5');
        break;
      case 6:
        dice.src = './dice-6.png';
        console.log('true 6');
        break;
      default:
        console.log('Invalid roll');
    }
  }
  diceRollIMage(diceRoll);
});
