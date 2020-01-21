var buttonSend = document.querySelector('.button-send');
var popupWrong = document.querySelector('.popup--wrong');
var popupWrongOk = document.querySelector('.popup__button--wrong');

buttonSend.addEventListener('click', evt => {
  evt.preventDefault();
  popupWrong.classList.add('modal-show');
});

popupWrongOk.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupWrong.classList.remove('modal-show');
});
