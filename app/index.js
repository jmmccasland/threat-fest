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
