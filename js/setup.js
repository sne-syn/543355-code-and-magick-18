'use strict';
// Обработка событий

(function () {
  var setup = document.querySelector('.setup');
  var similarWizards = document.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupName = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (setupName === document.activeElement) {
      return evt;
    } else {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var openPopup = function () {
    setup.classList.remove('hidden');
    similarWizards.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
})();
