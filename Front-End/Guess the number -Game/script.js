'use strict';

let score = 20;
let highscore = 0;

const generateSecretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let randomNumber = generateSecretNumber();

// all functions implemtation
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const changeWidth = width => {
  document.querySelector('.number').style.width = width;
};

const changeBackgroundColor = backgroundColor => {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const changeScore = score => {
  document.querySelector('.score').textContent = score;
};

const decreaseScoreValue = () => {
  score--;
  changeScore(score);
};

// implement the logic of the game
document.querySelector('.check').addEventListener('click', () => {
  const userInputValue = Number(document.querySelector('.guess').value);

  if (!userInputValue) {
    displayMessage('Please Enter any Number!');
  }
  // when answer is right
  else if (userInputValue === randomNumber) {
    displayMessage('Hoho! You Win The Game');
    displayNumber(randomNumber);
    changeWidth('30rem');
    changeBackgroundColor('#60b347');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //   when guess is wrong
  else if (userInputValue !== randomNumber) {
    if (score > 1) {
      displayMessage(userInputValue > randomNumber ? 'Too High!' : 'Too Low!');
      decreaseScoreValue();
    } else {
      displayMessage('You Lose the Game');
      changeBackgroundColor('red');
      changeScore(0);
    }
  }
});

//restart again
document.querySelector('.again').addEventListener('click', () => {
  randomNumber = generateSecretNumber();
  score = 20 ;
  displayMessage('Start guessing...');
  displayNumber('?');
  changeWidth('15rem');
  changeScore(20);
  changeBackgroundColor('#222');
  document.querySelector('.guess').value = '';
});
