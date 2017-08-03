import 'whatwg-fetch';


// Open and close menu on .menu__btn click
const open = document.querySelector('.menu__btn');
const close = document.querySelector('.menu__overlay__close');
const overlay = document.querySelector('.menu__overlay');

open.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
});


// Open Spotify tracklisting
const spotifyBtn = document.querySelector('.player__button');
const player = document.querySelector('.player');
const buttonIcon = document.querySelector('.player__button__icon');
let isOpen = false;

spotifyBtn.addEventListener('click', () => {
  if (isOpen) {
    player.style.transform = 'translateY(-220px)';
    buttonIcon.classList.remove('fa-arrow-down');
    buttonIcon.classList.add('fa-arrow-up');
    isOpen = !isOpen;
  } else {
    player.style.transform = 'translateY(0)';
    buttonIcon.classList.remove('fa-arrow-up');
    buttonIcon.classList.add('fa-arrow-down');
    isOpen = !isOpen;
  }
});
