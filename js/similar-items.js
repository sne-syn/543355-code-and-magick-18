'use strict';

(function () {
  var countWizards = 4;
  var setup = document.querySelector('.setup');

  // // Выдает случайное значение из массива

  var getRandomValue = function (array) {
    var random = Math.floor(Math.random() * array.length);

    return array[random];
  };

  // Добавляет сгенерированных персонажей в разметку

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var addSimilarItems = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;

  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < countWizards; i++) {
      fragment.appendChild(addSimilarItems(getRandomValue(wizards)));
    }
    similarListElement.appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var buttonSubmit = document.querySelector('.setup-submit');
    buttonSubmit.classList.add('setup-submit--error');
    window.setup.addErrorBox(errorMessage);
  };


  window.backend.setServerInteraction(successHandler, errorHandler);
})();
