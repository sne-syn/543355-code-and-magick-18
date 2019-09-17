var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var BORDER_COLOR = 'rgb(0, 0, 0)';
var TEXT_COLOR = 'rgb(0, 0, 0)';
var GREETING_TEXT_X = 120;

var CHART_MARGIN = 40;
// MAX_BAR_HEIGHT = 150px = 100%
var BAR_HEIGHT = 75;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_MARGIN = 50;
var GAP = 10;
var barWidth = BAR_MARGIN + BAR_WIDTH;
var barLeftStartPoint = CLOUD_X + CHART_MARGIN;
var barBottomStartPoint = BAR_HEIGHT + BAR_MARGIN;
var cloudBottomEdge = CLOUD_Y + CLOUD_HEIGHT;
var namesGap = GAP * 3;
var mainPlayerColorBar = 'rgba(255, 0, 0, 1)';
var randomPlayerColorBar = 'hsl(237, 91%, ' + Math.floor(Math.random()* 80 + 10) + '%)';

var renderCloud = function (ctx, x, y, color, borderColor) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = borderColor;
//  повторяет координаты облаков. Как убрать дублирование?
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderGreetingText = function (ctx, text, x, y, textColor) {
  ctx.font = 'bold 16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = textColor;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)', BORDER_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', BORDER_COLOR);

  renderGreetingText(ctx, 'Ура вы победили!', GREETING_TEXT_X, 30, TEXT_COLOR);
  renderGreetingText(ctx, 'Список результатов:', GREETING_TEXT_X, 50, TEXT_COLOR);

  // Случайная насыщенность max = 90%, min = 10%, иначе слишком светло/темно

  for (var i = 0; i < names.length; i++) {
    if (i === 0) {
      ctx.fillStyle = mainPlayerColorBar ;
    } else {
        ctx.fillStyle = randomPlayerColorBar;
    }

    ctx.fillRect(barLeftStartPoint + barWidth * i, cloudBottomEdge - barBottomStartPoint, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], barLeftStartPoint + barWidth * i, cloudBottomEdge - namesGap);
    ctx.fillText(Math.round(times[i]), barLeftStartPoint + barWidth * i, cloudBottomEdge - (BAR_HEIGHT + BAR_HEIGHT));
  }
};



// for (var i = 1; i < names.length; i++) {
//   var randomColorBar = 'hsl(237, 91%, ' + Math.floor(Math.random()* 80 + 10) + '%)';
//   console.log(randomColorBar);
// }
