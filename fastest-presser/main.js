console.log('The game-fastest presser');
/**Here is the setup of the game: Two users compete about who can press a key the most times within a set time!
A user specifies how long time the game should be, and presses "start game!". When the button is pressed it is about pressing either l or s on the keyboard. The user that has the highest number of keypresses after the time is up, wins  */

//import ConfettiGenerator from 'confetti-js';

const timeInput = document.getElementById('time-input');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const body = document.querySelector('body');

const sLink = document.getElementById('pressS');
const lLink = document.getElementById('pressL');

const stext = document.getElementById('stext');
const ltext = document.getElementById('ltext');

/*var confettiElement = document.getElementById('my-canvas');
var confettiSettings = { target: confettiElement };
var confetti = new ConfettiGenerator(confettiSettings);*/

let gameOn = false;
let sCounter = 0;
let lCounter = 0;

let time;
timeInput.addEventListener('keyup', (e) => {
  time = e.target.value;
});

const startGame = () => {
  gameOn = true;
  sCounter = 0;
  stext.textContent = sCounter.toString();
  sLink.textContent = 'Press S';
  lCounter = 0;
  ltext.textContent = lCounter.toString();
  lLink.textContent = 'Press L';
  if (!time) alert('Please enter the duration in seconds!');
};
const displayCounter = (e) => {
  if (!gameOn) return;

  if (time) {
    if (e.code === 'KeyS') {
      sCounter++;
      stext.innerHTML = `${sCounter}`;
    } else if (e.code === 'KeyL') {
      lCounter++;
      ltext.innerHTML = `${lCounter}`;
    }
  }
};

window.addEventListener('keypress', displayCounter);

const gameStart = () => {
  startGame();
  setTimeout(() => {
    gameOn = false;
    if (!time) {
      return 'Please enter the time';
    } else if (sCounter > lCounter) {
      sLink.textContent = 'Winner';
      //      confetti.render();
    } else if (lCounter > sCounter) {
      lLink.textContent = 'Winner';
      //      confetti.render();
    } else if (sCounter === lCounter) {
      sLink.textContent = 'Its a draw';
      lLink.textContent = 'Its a draw';
    }
  }, time * 1000);
};
startButton.addEventListener('click', gameStart);
