"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var contentPanel = document.getElementById("content-panel");
var container = document.querySelector(".container-fluid");
$("#content-panel").hide();
document.getElementById("show-hide-content-panel").addEventListener("click", function () {
  $("#content-panel").fadeToggle();

  if (container.classList.contains("crop")) {
    container.classList.remove("crop");
  } else {
    container.classList.add("crop");
  }
});
var CONTENT = [{
  name: "I. Физика почв",
  items: [{
    name: "Плотность почвы",
    href: "soil-science/density.html"
  }]
}, {
  name: "II. Фитопатология",
  items: [{
    name: "Неинфекционные болезни растений",
    href: "phytopathology/non-infectious-plant-diseases.html"
  }]
}, {
  name: "III. Статистика",
  items: [{
    name: "Введение в статистику",
    href: "statistics/introduction-to-statistics.html"
  }, {
    name: "Введение в визуализацию данных",
    href: "statistics/introduction-to-data-visualization.html"
  }]
}];

function buildDivision(division) {
  var result = "<p class=\"div-name px-3 pb-4 mb-0 mt-4\">".concat(division.name, "</p>\n\t<ul class=\"nav nav-pills nav-stacked\">");
  var index = 1;

  var _iterator = _createForOfIteratorHelper(division.items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;

      if (document.location.href.endsWith(i.href)) {
        result += "<li class=\"active\"><a href=\"../".concat(i.href, "\">").concat(index, ". ").concat(i.name, "</a></li>");
      } else {
        result += "<li><a href=\"../".concat(i.href, "\">").concat(index, ". ").concat(i.name, "</a></li>");
      }

      index++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result + "</ul>";
}

function buildContentList() {
  var builder = "";

  for (var _i = 0, _CONTENT = CONTENT; _i < _CONTENT.length; _i++) {
    var division = _CONTENT[_i];
    builder += buildDivision(division);
  }

  contentPanel.innerHTML = builder;
}

buildContentList();