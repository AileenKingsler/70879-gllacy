var feedbackLink = document.querySelector('.feedback-link');
var feedbackPopup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.overlay');
var feedbackPopupClose = feedbackPopup.querySelector('.modal-close');
var feedbackForm = feedbackPopup.querySelector('.feedback-form');
var feedbackEmail = feedbackForm.querySelector('[name=your-email]');
var feedbackMessage = feedbackForm.querySelector('[name=your-message]');

feedbackLink.addEventListener('click', function(evt){
  evt.preventDefault();
  feedbackPopup.classList.add('modal-show');
  overlay.classList.add('overlay-show');
});

feedbackPopupClose.addEventListener('click', function(evt){
  evt.preventDefault();
  feedbackPopup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  feedbackPopup.classList.remove('modal-error');
});

feedbackForm.addEventListener('submit', function(evt){
  if(!feedbackEmail.value || !feedbackMessage.value){
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('modal-error');
  }
});

document.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    if(feedbackPopup.classList.contains('modal-show')){
      feedbackPopup.classList.remove('modal-show');
      overlay.classList.remove('overlay-show');
      feedbackPopup.classList.remove('modal-error');
    }
  }
});
