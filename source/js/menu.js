var navMain = document.querySelector('.main-nav');
var navOpen = document.querySelector('.main-nav__open');
var navClose = document.querySelector('.main-nav__close');

navMain.classList.remove('main-nav--nojs');

navOpen.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navClose.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
