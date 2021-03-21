'use strict';

// Selecting Elements From Dom
const playerOneScore = document.querySelector('#score--0');
const playerTwOScore = document.querySelector('#score--1');
const playerOneCurrentScore = document.querySelector('#current--0');
const playerTwoCurrentScore = document.querySelector('#current--1');
const playerOneBackground = document.querySelector('.player--0');
const playerTwoBackground = document.querySelector('.player--1');
const diceImage = document.querySelector('.dice');
const resetButton = document.querySelector('.btn--new');
const rollingButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

// First View in the Game
let currentScore, activePlayer, scores, Playing;

const firstGameView = () => {
  playerOneScore.textContent = 0;
  playerTwOScore.textContent = 0;
  diceImage.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  Playing = true;
};

firstGameView();

const changeDomScore = score => {
  document.querySelector(`#current--${activePlayer}`).textContent = score;
};

const backgroundToggle = () => {
  playerOneBackground.classList.toggle('player--active');
  playerTwoBackground.classList.toggle('player--active');
};

const switchPlayer = () => {
  changeDomScore(0);
  backgroundToggle();
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
};

// Handling Game core
// click on Roll Button
rollingButton.addEventListener('click', () => {
  if (Playing) {
    const RandomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `images/dice-${RandomDiceNumber}.png`;
    diceImage.classList.remove('hidden');

    if (RandomDiceNumber != 1) {
      currentScore += RandomDiceNumber;
      changeDomScore(currentScore);
    } else {
      switchPlayer();
    }
  }
});

//click on hold Button
holdButton.addEventListener('click', () => {
  if (Playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      Playing = false;
      diceImage.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// Handling Reset Button

resetButton.addEventListener('click', () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  firstGameView();
  changeDomScore(0);
  playerOneBackground.classList.add('player--active');
  playerTwoBackground.classList.remove('player--active');
});
