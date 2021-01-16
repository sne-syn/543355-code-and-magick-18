'use strict';

(function () {
  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor && wizard.colorEyes === eyesColor) {
      rank += 3;
    }
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  window.wizard.eyesChangeHandler = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.coatChangeHandler = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var buttonSubmit = document.querySelector('.setup-submit');
    buttonSubmit.classList.add('setup-submit--error');
    window.setup.addErrorBox(errorMessage);
  };

  var urlGet = 'https://javascript.pages.academy/code-and-magick/data';
  window.backend.load(successHandler, errorHandler, urlGet);
})();
