'use strict';

// Меняет внешний вид персонажа по клику
(function () {
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var setupCaracter = document.querySelector('.setup-wizard');
  var setupCoat = setupCaracter.querySelector('.wizard-coat');
  var setupEyes = setupCaracter.querySelector('.wizard-eyes');


  var inputWizardCoat = document.querySelector('input[name="coat-color"]');
  var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
  var inputWizardFireball = document.querySelector('input[name="fireball-color"]');

  var wizardMap = {

    'names': {
      'name': ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
      'surname': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
    },

    'coat': {
      'input': inputWizardCoat,
      'block': setupCoat,
      'array': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
    },

    'eyes': {
      'input': inputWizardEyes,
      'block': setupEyes,
      'array': ['black', 'red', 'blue', 'yellow', 'green']
    },

    'fireball': {
      'input': inputWizardFireball,
      'block': setupFireball,
      'array': ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    }
  };

  var colorIndex = 0;
  var changeColor = function (array) {
    if (colorIndex === array.length - 1) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }
  };

  var colorize = function (element) {
    element.block.addEventListener('click', function () {
      changeColor(element.array);
      if (element.block.tagName.toLowerCase() === 'div') {
        element.block.style.background = element.array[colorIndex];
      } else {
        element.block.style.fill = element.array[colorIndex];
      }
      element.input.value = element.array[colorIndex];
    });
  };

  colorize(wizardMap.coat);
  colorize(wizardMap.eyes);
  colorize(wizardMap.fireball);
})();
