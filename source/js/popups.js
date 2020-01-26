var form = document.querySelector('.review-form');
var buttonSend = document.querySelector('.button-send');
var popupWrong = document.querySelector('.popup--wrong');
var popupWrongOk = document.querySelector('.popup__button--wrong');
var popupSent = document.querySelector('.popup--sent');
var popupSentOk = document.querySelector('.popup__button--sent');


form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var isFilled = true;

  var name = form.name.value;
  var surname = form.surname.value;
  var fathername = form.fathername.value;

  var tel = form.tel.value;
  var email = form.email.value;

  if (!name || !surname || !fathername ||
    !tel || !emotions) {
      isFilled = false;
    }

  if (!isFilled) {
    popupWrong.classList.add('modal-show');
  }
  else {
    popupSent.classList.add('modal-show');
  }
});

popupWrongOk.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupWrong.classList.remove('modal-show');
});

popupSentOk.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupSent.classList.remove('modal-show');
});
