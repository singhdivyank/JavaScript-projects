'use strict';
/* Players chosen on the basis of their id */

// selecting elements
const score0_element = document.getElementById('score--0'); // get value from id
const score1_element = document.getElementById('score--1'); // get value from id

const current0_element = document.getElementById('current--0');
const current1_element = document.getElementById('current--1');
const player0_element = document.querySelector('.player--0');
const player1_element = document.querySelector('.player--1');

const dice_element = document.querySelector('.dice');
const button_new = document.querySelector('.btn--new');
const button_hold = document.querySelector('.btn--hold');
const button_roll = document.querySelector('.btn--roll');

let scores, current_score, active_player, playing;

/* Function to reset the game */
const reset = function () {
  // starting conditions
  scores = [0, 0]; // scores of both the players
  current_score = 0;
  active_player = 0;
  playing = true;

  // set total scores back to 0
  score0_element.textContent = 0;
  score1_element.textContent = 0;
  // set current scores back to 0
  current0_element.textContent = 0;
  current1_element.textContent = 0;

  dice_element.classList.add('hidden'); // dice must be hidden at the start

  // remove winner class
  player0_element.classList.remove('player--winner');
  player1_element.classList.remove('player--winner');
  // set first player to active player
  player0_element.classList.add('player--active');
  player1_element.classList.remove('player--active');
};
reset();

/* Function to switch player */
const switchPlayer = function () {
  document.getElementById(`current--${active_player}`).textContent = 0;
  current_score = 0;
  active_player = active_player === 0 ? 1 : 0; // switching player
  player0_element.classList.toggle('player--active');
  player1_element.classList.toggle('player--active');
};

/* Function to roll the dice */
const roll = function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice_roll = Math.trunc(Math.random() * 6) + 1;
    console.log(dice_roll);
    // 2. Display the dice
    dice_element.classList.remove('hidden');
    dice_element.src = `dice-${dice_roll}.png`;
    // 3. If 1 is rolled switch to next player
    if (dice_roll === 1) switchPlayer();
    else {
      current_score += dice_roll;
      document.getElementById(
        `current--${active_player}`
      ).textContent = current_score; // current_score for active player
    }
  }
};

/* Function to hold score */
const hold = function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[active_player] += current_score;
    document.getElementById(`score--${active_player}`).textContent =
      scores[active_player];
    //2. Check if player's score is >=100 (finish the game)
    if (scores[active_player] >= 100) {
      playing = false;
      dice_element.classList.add('hidden');
      document
        .querySelector(`.player--${active_player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove('player--active');
    } else switchPlayer(); //3. Switch to the next player
  }
};

// rolling the dice
button_roll.addEventListener('click', roll);

// hold the current score
button_hold.addEventListener('click', hold);

// resetting the game
button_new.addEventListener('click', reset);
