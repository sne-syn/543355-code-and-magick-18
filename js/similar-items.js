'use strict';

(function () {
  var quantityOfSimilarWizards = 4;
  var wizards = [];

  // Выдает случайное значение из массива

  var getRandomValue = function (array) {
    var random = Math.floor(Math.random() * array.length);

    return array[random];
  };

  //  Генерирует массив похожих персонажей

  var generateSimilarItems = function (numberOfItems, names, surnames, outfits, looks, arr) {

    for (var i = 0; i < numberOfItems; i++) {
      arr.push({
        name: getRandomValue(names) + ' ' + getRandomValue(surnames),
        coatColor: getRandomValue(outfits),
        eyesColor: getRandomValue(looks)
      });
    }
  };

  generateSimilarItems(quantityOfSimilarWizards, window.wizardMap.name.names, window.wizardMap.name.surnames, window.wizardMap.coat.color, window.wizardMap.eyes.color, wizards);

  // Добавляет сгенерированных персонажей в разметку

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var addSimilarItems = function (items) {
    for (var i = 0; i < items.length; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

      similarListElement.appendChild(wizardElement);
    }
  };

  addSimilarItems(wizards);
})();
