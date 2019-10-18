'use strict';
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];


var setupFireball = document.querySelector('.setup-fireball-wrap');
var setupCaracter = document.querySelector('.setup-wizard');
var setupCoat = setupCaracter.querySelector('.wizard-coat');
var setupEyes = setupCaracter.querySelector('.wizard-eyes');


var inputWizardCoat = document.querySelector('input[name="coat-color"]');
var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
var inputWizardFireball = document.querySelector('input[name="fireball-color"]');

window.wizardMap = {

  'name': {
    'names': WIZARD_NAMES,
    'surnames': WIZARD_SURNAMES
  },

  'coat': {
    'input': inputWizardCoat,
    'block': setupCoat,
    'color': WIZARD_COAT_COLORS
  },

  'eyes': {
    'input': inputWizardEyes,
    'block': setupEyes,
    'color': WIZARD_EYES_COLORS
  },

  'fireball': {
    'input': inputWizardFireball,
    'block': setupFireball,
    'color': WIZARD_FIREBALL_COLORS
  }
};
