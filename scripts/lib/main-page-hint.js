"use strict";

// Generated by CoffeeScript 2.5.1
(function () {
  var HINTS;
  HINTS = [["Знаете ли вы?", "\u0420\u0438\u0431\u043E\u0441\u043E\u043C\u044B \u043F\u0440\u043E\u043A\u0430\u0440\u0438\u043E\u0442 \u043C\u0435\u043D\u044C\u0448\u0435 \u0440\u0438\u0431\u043E\u0441\u043E\u043C \u044D\u0443\u043A\u0430\u0440\u0438\u043E\u0442 \u0438 \u043A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0430 \u0438\u0445 \u0441\u0435\u0434\u0438\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0440\u0430\u0432\u043D\u0430 70S"]];

  document.getHint = function () {
    var hint, hintNo;
    hintNo = Math.floor(Math.random() * HINTS.length);
    hint = HINTS[hintNo];
    return "<h6>" + hint[0] + "</h6>" + hint[1];
  };
}).call(void 0);