'use strict';

const modal1 = document.querySelector('.modal1'); // for window 1
const modal2 = document.querySelector('.modal2'); // for window 2
const modal3 = document.querySelector('.modal3'); // for window 3
const overlay1 = document.querySelector('.overlay1'); // for window 1
const overlay2 = document.querySelector('.overlay2'); // for window 2
const overlay3 = document.querySelector('.overlay3'); // for window 3

const btnsOpenModal1 = document.querySelector('.show-modal1'); // open window1 on click
const btnsOpenModal2 = document.querySelector('.show-modal2'); // open window2 on click
const btnsOpenModal3 = document.querySelector('.show-modal3'); // open window3 on click
const btnCloseModal1 = document.querySelector('.close-modal1'); // close window1 on click
const btnCloseModal2 = document.querySelector('.close-modal2'); // close window1 on click
const btnCloseModal3 = document.querySelector('.close-modal3'); // close window1 on click

/* open window on click */
// window1
const openModal1 = function () {
  modal1.classList.remove('hidden1'); // from modal
  overlay1.classList.remove('hidden1'); // from overlay
};
// window2
const openModal2 = function () {
  modal2.classList.remove('hidden2');
  overlay2.classList.remove('hidden2');
};
// window3
const openModal3 = function () {
  modal3.classList.remove('hidden3');
  overlay3.classList.remove('hidden3');
};

/* function to hide modal and overlay */
// window1
const closeModal1 = function () {
  modal1.classList.add('hidden1');
  overlay1.classList.add('hidden1');
};
// window2
const closeModal2 = function () {
  modal2.classList.add('hidden2');
  overlay2.classList.add('hidden2');
};
// window3
const closeModal3 = function () {
  modal3.classList.add('hidden3');
  overlay3.classList.add('hidden3');
};

/* Close modal window when it is visible and escape is pressed */
// window1
const keyPress1 = function (e) {
  if (e.key === 'Escape' && !modal1.classList.contains('hidden1'))
    closeModal1();
};
// window2
const keyPress2 = function (e) {
  if (e.key === 'Escape' && !modal2.classList.contains('hidden2'))
    closeModal2();
};
// window3
const keyPress3 = function (e) {
  if (e.key === 'Escape' && !modal3.classList.contains('hidden3'))
    closeModal3();
};

/* Opening modal window */
btnsOpenModal1.addEventListener('click', openModal1); // window1
btnsOpenModal2.addEventListener('click', openModal2); // window2
btnsOpenModal3.addEventListener('click', openModal3); // window3

/* Closing modal windows */
// from x button
btnCloseModal1.addEventListener('click', closeModal1); // window1
btnCloseModal2.addEventListener('click', closeModal2); // window2
btnCloseModal3.addEventListener('click', closeModal3); // window3
// from overlay
overlay1.addEventListener('click', closeModal1); // window1
overlay2.addEventListener('click', closeModal2); // window2
overlay3.addEventListener('click', closeModal3); // window3
// escape key
document.addEventListener('keydown', keyPress1); // window1
document.addEventListener('keydown', keyPress2); // window2
document.addEventListener('keydown', keyPress3); // window3
