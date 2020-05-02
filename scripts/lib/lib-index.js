"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Generated by CoffeeScript 2.5.1
(function () {
  // Operator function for '-'
  var all,
      any,
      articlePredicate,
      checkedof,
      clearFilter,
      countIt,
      delws,
      div,
      doit,
      ejoin,
      element,
      first,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      htmlget,
      htmlset,
      indexOfArticlePredicate,
      isAll,
      keys,
      last,
      makeChip,
      makeChipWithColor,
      makeKeyCells,
      makeMapCells,
      makeValueCells,
      max,
      maxKey,
      maxValue,
      min,
      mul,
      neue,
      neueText,
      predicates,
      runParser,
      sub,
      sum,
      unique,
      updateFilter,
      valueof,
      values,
      valueset,
      indexOf = [].indexOf;

  sub = function sub(x, y) {
    return x - y;
  }; // Operator function for '+', also allow to sum of array


  sum = function sum(x, y) {
    if (y == null) {
      return x.reduce(document.flexibel.sum);
    }

    return x + y;
  }; // Operator function for '*', also allow to mul of array


  mul = function mul(x, y) {
    if (y == null) {
      return x.reduce(document.flexibel.mul);
    }

    return x * y;
  }; // Operator function for '/'


  div = function div(x, y) {
    return x / y;
  }; // Returns the min of two elements, or min of array


  min = function min(x, y) {
    if (y == null) {
      return x.reduce(document.flexibel.min);
    }

    if (x < y) {
      return x;
    } else {
      return y;
    }
  }; // Returns the max of two elements, or max of array


  max = function max(x, y) {
    if (y == null) {
      return x.reduce(document.flexibel.max);
    }

    if (x > y) {
      return x;
    } else {
      return y;
    }
  };

  last = function last(container) {
    return container[container.length - 1];
  };

  first = function first(container) {
    return container[0];
  };

  neue = function neue(name, inner) {
    var elem;
    elem = document.createElement(name);

    if (inner != null) {
      elem.innerHTML = inner;
    }

    return elem;
  };

  neueText = function neueText(name, inner) {
    var elem;
    elem = document.createElement(name);

    if (inner != null) {
      elem.innerText = inner;
    }

    return elem;
  };

  div = function div(inner) {
    var elem;
    elem = document.createElement("div");

    if (inner != null) {
      elem.innerHTML = inner;
    }

    return elem;
  };

  h1 = function h1(text) {
    return neueText("h1", text);
  };

  h2 = function h2(text) {
    return neueText("h2", text);
  };

  h3 = function h3(text) {
    return neueText("h3", text);
  };

  h4 = function h4(text) {
    return neueText("h4", text);
  };

  h5 = function h5(text) {
    return neueText("h5", text);
  };

  h6 = function h6(text) {
    return neueText("h6", text);
  };

  element = function element(id) {
    if (id.startsWith(".")) {
      return document.getElementsByClassName(id.substring(1));
    }

    return document.getElementById(id);
  };

  valueset = function valueset(id, value) {
    return document.flexibel.element(id).value = value;
  };

  valueof = function valueof(id) {
    return document.flexibel.element(id).value;
  };

  checkedof = function checkedof(id) {
    return document.flexibel.element(id).checked;
  };

  htmlset = function htmlset(id, html) {
    return document.flexibel.element(id).innerHTML = html;
  };

  htmlget = function htmlget(id) {
    return document.flexibel.element(id).innerHTML;
  };

  any = function any(values, f) {
    var i, l, len;

    for (l = 0, len = values.length; l < len; l++) {
      i = values[l];

      if (f(i)) {
        return true;
      }
    }

    return false;
  };

  all = function all(values, f) {
    var i, l, len;

    for (l = 0, len = values.length; l < len; l++) {
      i = values[l];

      if (!f(i)) {
        return false;
      }
    }

    return true;
  };

  ejoin = function ejoin(values) {
    return values.join("");
  };

  delws = function delws(str, sym) {
    return str.replace(/\s+/g, "");
  };

  values = function values(map) {
    return _toConsumableArray(map.values());
  };

  keys = function keys(map) {
    return _toConsumableArray(map.keys());
  };

  maxKey = function maxKey(map) {
    return document.flexibel.keys(map).reduce(document.flexibel.max);
  };

  maxValue = function maxValue(map) {
    return document.flexibel.values(map).reduce(document.flexibel.max);
  };

  unique = function unique(values) {
    return _toConsumableArray(new Set(values));
  };

  countIt = function countIt(map, it) {
    if (map.has(it)) {
      return map.set(it, map.get(it) + 1);
    } else {
      return map.set(it, 1);
    }
  };

  makeValueCells = function makeValueCells(map) {
    var ref, results, v;
    ref = map.values();
    results = [];

    var _iterator = _createForOfIteratorHelper(ref),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        v = _step.value;
        results.push("<td>".concat(v, "</td>"));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return results;
  };

  makeKeyCells = function makeKeyCells(map) {
    var k, ref, results;
    ref = map.keys();
    results = [];

    var _iterator2 = _createForOfIteratorHelper(ref),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        k = _step2.value;
        results.push("<td>".concat(k, "</td>"));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return results;
  };

  makeMapCells = function makeMapCells(values, mapper) {
    var k, results;
    results = [];

    var _iterator3 = _createForOfIteratorHelper(values),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        k = _step3.value;
        results.push("<td>".concat(mapper(k), "</td>"));
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return results;
  };

  document.flexibel = {
    makeKeyCells: makeKeyCells,
    makeValueCells: makeValueCells,
    countIt: countIt,
    maxValue: maxValue,
    maxKey: maxKey,
    keys: keys,
    values: values,
    delws: delws,
    ejoin: ejoin,
    htmlset: htmlset,
    checkedof: checkedof,
    valueof: valueof,
    valueset: valueset,
    element: element,
    first: first,
    last: last,
    max: max,
    min: min,
    sum: sum,
    sub: sub,
    mul: mul,
    div: div,
    all: all,
    any: any
  };

  runParser = function runParser(input) {
    var getCurrent, next, parseNumber, parserState, ref;
    parserState = {
      result: [],
      currentPosition: 0,
      input: input
    };

    getCurrent = function getCurrent(state) {
      return state.input[state.currentPosition];
    };

    next = function next(state) {
      var current;
      current = getCurrent(state);
      state.currentPosition++;
      return current;
    };

    parseNumber = function parseNumber(state) {
      var buffer, current, ref;
      buffer = next(state);

      while (ref = current = next(state), indexOf.call("0123456789.", ref) >= 0) {
        buffer += current;
      }

      return state.result.push(parseFloat(buffer));
    };

    while (parserState.currentPosition < input.length) {
      if (ref = getCurrent(parserState), indexOf.call("0123456789-", ref) >= 0) {
        parseNumber(parserState);
      } else {
        next(parserState);
      }
    }

    return parserState.result;
  };

  predicates = [];

  isAll = function isAll(record) {
    var l, len, nullCount, predicate;
    nullCount = 0;

    for (l = 0, len = predicates.length; l < len; l++) {
      predicate = predicates[l];

      if (predicate !== null) {
        if (!predicate(record)) {
          return false;
        }
      } else {
        nullCount = nullCount + 1;
      }
    }

    if (nullCount === predicates.length) {
      while (predicates.length > 0) {
        predicates.pop();
      }
    }

    return true;
  };

  makeChip = function makeChip(text, num) {
    return "<span class='mdl-chip mdl-chip--deletable'> <span class='mdl-chip__text'>".concat(text, "</span> <button type='button' class='mdl-chip__action' onclick='document.clearFilter(this, ").concat(num, ")'> <svg style='width:18px;height:18px' viewBox='0 0 24 24'> <path fill='#ffffff' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /> </svg> </button> </span>");
  };

  makeChipWithColor = function makeChipWithColor(text, color, num) {
    return "<span class='mdl-chip mdl-chip--deletable' style='background-color: ".concat(color, "'> <span class='mdl-chip__text'>").concat(text, "</span> <button type='button' class='mdl-chip__action' onclick='document.clearFilter(this, ").concat(num, ")'> <svg style='width:18px;height:18px' viewBox='0 0 24 24'> <path fill='#ffffff' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /> </svg> </button> </span>");
  };

  updateFilter = function updateFilter(text) {
    return htmlset("filter", makeChip(text));
  };

  clearFilter = function clearFilter(self, num) {
    self.parentNode.remove();
    predicates[num] = null;
    return doit();
  };

  articlePredicate = function articlePredicate(record) {
    var span;
    span = record.getElementsByClassName("plpro-lib-record-article");
    return span.length > 0;
  };

  indexOfArticlePredicate = {
    index: -1,
    processIt: false
  };

  document.stateChanged = function (self) {
    if (!indexOfArticlePredicate.processIt) {
      indexOfArticlePredicate.processIt = true;
      return;
    }

    indexOfArticlePredicate.processIt = false;
    console.log(self);

    if (self.control.checked) {
      predicates.push(articlePredicate);
      indexOfArticlePredicate.index = predicates.length - 1;
    } else {
      predicates[indexOfArticlePredicate.index] = null;
    }

    return doit();
  };

  doit = function doit() {
    var i, l, len, ref, results, searchBox;
    searchBox = element("search-box");
    ref = searchBox.children;
    results = [];

    for (l = 0, len = ref.length; l < len; l++) {
      i = ref[l];

      if (i.className === "plpro-lib-record") {
        i.style.display = "none";

        if (isAll(i)) {
          results.push(i.style.display = "block");
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }

    return results;
  };

  document.autorOnClick = function (self) {
    var filterDiv, text;
    text = self.innerText;
    predicates.push(function (record) {
      var j, l, len, ref;
      ref = record.children;

      for (l = 0, len = ref.length; l < len; l++) {
        j = ref[l];

        if (j.className === "plpro-lib-record-autor" && j.innerText === text) {
          return true;
        }
      }

      return false;
    });
    doit();
    filterDiv = element("filter");
    return filterDiv.innerHTML += " " + makeChip("\u0410\u0432\u0442\u043E\u0440: ".concat(self.innerText), predicates.length - 1);
  };

  document.filterByType = function (self) {
    var filterDiv;
    predicates.push(function (record) {
      var k;
      k = record.getElementsByClassName("filetype-tag")[0];

      if (k.innerText.trim() === self.innerText.trim()) {
        return true;
      }

      return false;
    });
    doit();
    filterDiv = element("filter");

    if (self.innerText === "pdf") {
      filterDiv.innerHTML += " " + makeChipWithColor("Тип: .pdf", "rgb(231, 47, 47)", predicates.length - 1);
    }

    if (self.innerText === "djvu") {
      filterDiv.innerHTML += " " + makeChipWithColor("Тип: .djvu", "rgb(160, 0, 160)", predicates.length - 1);
    }

    if (self.innerText === "online") {
      return filterDiv.innerHTML += " " + makeChipWithColor("Тип: online", "rgb(112, 112, 112)", predicates.length - 1);
    }
  };

  document.clearFilter = clearFilter;
}).call(void 0);