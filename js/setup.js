'use strict';

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
    window.util.isEscEvent(evt, closePopup);
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

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.setServerInteraction(successHandler, errorHandler, new FormData(form));
    evt.preventDefault();
  });

  var successHandler = function () {
    setup.classList.add('hidden');
  };

  window.setup = {
    addErrorBox: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; padding-top: 10px; padding-bottom: 10px; background-color: rgb(190, 56, 39)';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };

  var errorHandler = function (errorMessage) {
    var buttonSubmit = document.querySelector('.setup-submit');
    buttonSubmit.classList.add('setup-submit--error');
    window.setup.addErrorBox(errorMessage);
  };
})();
