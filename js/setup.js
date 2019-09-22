'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb (101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var quantityOfSimilarWizards = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Выдает случайное значение из масива

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
      eyesColor: getRandomValue(outfits)
    });
  }
};

generateSimilarItems(quantityOfSimilarWizards, WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS, wizards);

// Добавляет сгенерированных персонажей в разметку

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
