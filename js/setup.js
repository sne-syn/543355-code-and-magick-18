'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

generateSimilarItems(quantityOfSimilarWizards, WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS, wizards);

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

// Меняет внешний вид персонажа по клику

var setupCaracter = document.querySelector('.setup-wizard');
var setupOutfit = setupCaracter.querySelector('.wizard-coat');
var setupLook = setupCaracter.querySelector('.wizard-eyes');
var setupWeaponWrap = document.querySelector('.setup-fireball-wrap');
var setupWeapon = setupWeaponWrap.querySelector('.setup-fireball');

// var inputWizardCoat = document.getElementsByName('сoat-color');
// var inputWizardEyes = document.getElementsByName('eyes-color');
// var inputWizardFireball = document.getElementsByName('fireball-color');

var inputWizardCoat = document.querySelector('input[name="coat-color"]');
var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
var inputWizardFireball = document.querySelector('input[name="fireball-color"]');

var colorIndex = 0;
var changeColorIndex = function (array) {
  if (colorIndex === array.length - 1) {
    colorIndex = 0;
  } else {
    colorIndex++;
  }
};

var changeOutfitColor = function (coatColors) {
  changeColorIndex(coatColors);
  setupOutfit.style.fill = coatColors[colorIndex];
  inputWizardCoat.value = coatColors[colorIndex];
};

var changeLookColor = function (eyesColors) {
  changeColorIndex(eyesColors);
  setupLook.style.fill = eyesColors[colorIndex];
  inputWizardEyes.value = eyesColors[colorIndex];
};

var changeWeaponColor = function (fireballColors) {
  changeColorIndex(fireballColors);
  setupWeaponWrap.style.background = fireballColors[colorIndex];
  inputWizardFireball.value = fireballColors[colorIndex];
};

setupOutfit.addEventListener('click', function () {
  changeOutfitColor(WIZARD_COAT_COLORS);
});

setupLook.addEventListener('click', function () {
  changeLookColor(WIZARD_EYES_COLORS);

});

setupWeapon.addEventListener('click', function () {
  changeWeaponColor(WIZARD_FIREBALL_COLORS);
});

// Обработка событий

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (setupName === document.activeElement) {
    return evt;
  } else if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
    return;
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
