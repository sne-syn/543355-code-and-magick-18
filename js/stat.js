'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var BORDER_COLOR = 'rgb(0, 0, 0)';
var TEXT_COLOR = 'rgb(0, 0, 0)';
var GREETING_TEXT_X = 120;
var CHART_MARGIN = 40;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_MARGIN = 50;
var GAP = 10;

var barWidth = BAR_MARGIN + BAR_WIDTH;
var barLeftStartPoint = CLOUD_X + CHART_MARGIN;
var cloudBottomEdge = CLOUD_Y + CLOUD_HEIGHT;
var namesGap = GAP * 3;
var currentPlayerColorBar = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color, borderColor) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = borderColor;
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderGreetingText = function (ctx, text, x, y, textColor) {
  ctx.font = 'bold 16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = textColor;
  ctx.fillText(text, x, y);
};

// Перемещает в массиве результаты текущего игрока.

var relocateCurrentPlayerBar = function (ctx, names, times) {
  var indexName = names.indexOf('Вы');
  var swapName = names[0];
  var swapTime = times[0];

  names[0] = names[indexName];
  times[0] = times[indexName];
  names[indexName] = swapName;
  times[indexName] = swapTime;
};

// Находит лучший результат

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)', BORDER_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', BORDER_COLOR);

  renderGreetingText(ctx, 'Ура вы победили!', GREETING_TEXT_X, 30, TEXT_COLOR);
  renderGreetingText(ctx, 'Список результатов:', GREETING_TEXT_X, 50, TEXT_COLOR);
  relocateCurrentPlayerBar(ctx, names, times);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    // Определяет цвет для столбцов

    if (i === 0) {
      ctx.fillStyle = currentPlayerColorBar;
    } else {
      for (var randomBar = 1; randomBar < names.length; randomBar++) {
        ctx.fillStyle = 'hsl(237, 91%, ' + Math.floor(Math.random() * 80 + 10) + '%)';
      }
    }

    // Вычисляет высоту столбцов

    var barHeightCalculated = BAR_HEIGHT * times[i] / maxTime;

    ctx.fillRect(barLeftStartPoint + barWidth * i, cloudBottomEdge - (barHeightCalculated + CHART_MARGIN), BAR_WIDTH, barHeightCalculated);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], barLeftStartPoint + barWidth * i, cloudBottomEdge - namesGap);
    ctx.fillText(Math.round(times[i]), barLeftStartPoint + barWidth * i, cloudBottomEdge - (barHeightCalculated + 60));
  }
};
