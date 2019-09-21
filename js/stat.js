'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_Y = 240;
var TEXT_Y = 260;
var GAP_TEXT = 50;
var TIME_Y = 85;
var fontCloud = '16px PT Mono';

// рисует фон
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// рисует текст
var renderText = function (ctx) {
  ctx.font = fontCloud;
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_Y + GAP, BAR_WIDTH);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_Y + GAP, BAR_WIDTH + CLOUD_Y + GAP);
};

// находит максимальное число
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// отрисовывает гистограмму, время прохождения, задает цвет
var renderBar = function (ctx, players, times) {

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_TEXT) * i, TEXT_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_TEXT) * i, TIME_Y);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';

    } else {

      ctx.fillStyle = 'rgba(30, 30, 150,' + Math.random() + ')';
    }

    var maxTime = getMaxElement(times);

    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_TEXT) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }
};

// -----Отрисовка всех элементов------------------------------------------------------

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx);
  renderBar(ctx, players, times);
};


