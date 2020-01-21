var buttonSend = document.querySelector('.button-send');
var popupWrong = document.querySelector('.popup--wrong');
var popupWrongOk = popupAdding.querySelector('.popup__button--wrong');

buttonSend.addEventListener('click', function(evt) {
  var target = evt.target;
  event.preventDefault();
  if (target.className === '.button-send') {
    popupWrong.classList.add("modal-show");
  }
});

popupWrongOk.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupAdding.classList.remove('modal-show');
});

popupAddingContinue.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupAdding.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupAdding.classList.contains('modal-show')) {
      popupAdding.classList.remove('modal-show');
    }
  }
});
