'use strict';

(function () {

  var index = 0;
  var getArrayLoop = function (array) {
    if (index === array.length - 1) {
      index = 0;
    } else {
      index++;
    }
  };

  var colorize = function (element) {
    element.block.addEventListener('click', function () {
      getArrayLoop(element.color);
      if (element.block.tagName.toLowerCase() === 'div') {
        element.block.style.background = element.color[index];
      } else {
        element.block.style.fill = element.color[index];
      }
      element.input.value = element.color[index];
    });
  };

  colorize(window.wizardMap.coat);
  colorize(window.wizardMap.eyes);
  colorize(window.wizardMap.fireball);
})();
