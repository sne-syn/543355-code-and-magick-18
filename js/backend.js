'use strict';

(function () {
  var OK_STATUS_CODE = 200;
  var urlPost = 'https://javascript.pages.academy/code-and-magick';
  var timeOutLimit = 10000;

  var load = function (onLoad, onError, url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === OK_STATUS_CODE) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс.');
    });

    xhr.timeout = timeOutLimit;
    xhr.open('GET', url);
    xhr.send();
  };

  var save = function (onLoad, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === OK_STATUS_CODE) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс. Проверьте соединение и повторите попытку.');
    });

    xhr.timeout = timeOutLimit;
    xhr.open('POST', urlPost);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
