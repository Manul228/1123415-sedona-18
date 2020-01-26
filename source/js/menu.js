var navMain = document.querySelector('.main-nav');
var navOpen = document.querySelector('.page-header__menu-open');
var navClose = document.querySelector('.page-header__menu-close');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');


navOpen.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navOpen.classList.add('page-header__menu-open--disable');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navClose.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navOpen.classList.remove('page-header__menu-open--disable');
  }
});
