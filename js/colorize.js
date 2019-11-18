'use strict';

(function () {
  var Color = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var setupCaracter = document.querySelector('.setup-wizard');
  var wizardCoatElement = setupCaracter.querySelector('.wizard-coat');
  var wizardEyesElement = setupCaracter.querySelector('.wizard-eyes');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');

  var inputWizardCoat = document.querySelector('input[name="coat-color"]');
  var inputWizardEyes = document.querySelector('input[name="eyes-color"]');
  var inputWizardFireball = document.querySelector('input[name="fireball-color"]');

  var wizard = {
    coatChangeHandler: function (color) {},
    eyesChangeHandler: function (color) {}
  };

  var index = 0;
  var getArrayLoop = function (array) {
    if (index === array.length - 1) {
      index = 0;
    } else {
      index++;
    }
  };

  wizardCoatElement.addEventListener('click', function () {
    getArrayLoop(Color.COAT_COLORS);
    var newColor = Color.COAT_COLORS[index];
    this.style.fill = newColor;
    inputWizardCoat.value = newColor;
    wizard.coatChangeHandler(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    getArrayLoop(Color.EYES_COLORS);
    var newColor = Color.EYES_COLORS[index];
    this.style.fill = newColor;
    inputWizardEyes.value = newColor;
    wizard.eyesChangeHandler(newColor);
  });

  wizardFireballElement.addEventListener('click', function () {
    getArrayLoop(Color.FIREBALL_COLORS);
    this.style.background = Color.FIREBALL_COLORS[index];
    inputWizardFireball.value = Color.FIREBALL_COLORS[index];
  });

  return window.wizard = wizard;

})();
