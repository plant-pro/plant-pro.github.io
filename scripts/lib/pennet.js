"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Generated by CoffeeScript 2.5.1
(function () {
  /*
  	Pennet application
  	Autor: Tsvikevich Denis 2019
  */
  var Counter,
      all,
      any,
      checkGenotype,
      checkGenotypes,
      checkedof,
      clearError,
      combineGametes,
      countIt,
      createOutput,
      createPhenotypeInput,
      delws,
      div,
      ejoin,
      element,
      evalPhenotype,
      fail,
      first,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      htmlget,
      htmlset,
      keys,
      last,
      makeGametes,
      makeKeyCells,
      makeMapCells,
      makeValueCells,
      max,
      maxKey,
      maxValue,
      mergeStrings,
      min,
      mul,
      neue,
      neueText,
      onChangeText,
      runApplication,
      runParser,
      sub,
      sum,
      unique,
      valueof,
      values,
      valueset,
      indexOf = [].indexOf; // Operator function for '-'

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

  Counter = /*#__PURE__*/function () {
    function Counter() {
      _classCallCheck(this, Counter);

      this.counter = new Map();
    }

    _createClass(Counter, [{
      key: "count",
      value: function count(element) {
        return countIt(this.counter, element);
      }
    }, {
      key: "getSize",
      value: function getSize() {
        return this.counter.size;
      }
    }, {
      key: "getTable",
      value: function getTable(tableName) {
        var builder;
        return builder = "<label class=\"tblbl\">".concat(tableName, ": </label><br>\n<table class=\"mdl-data-table mdl-js-data-table\">\n\t<tr>").concat(ejoin(makeKeyCells(this.counter)), "</tr>\n\t<tr>").concat(ejoin(makeValueCells(this.counter)), "</tr>\n</table>");
      }
    }]);

    return Counter;
  }();

  runApplication = function runApplication() {
    var gametesFirst, gametesSecond, genotype1, genotype2;
    clearError();
    genotype1 = valueof("genotype1").trim();
    genotype2 = valueof("genotype2").trim();

    if (!checkGenotypes(genotype1, genotype2)) {
      return;
    }

    gametesFirst = makeGametes(genotype1);
    gametesSecond = genotype1 === genotype2 ? gametesFirst : makeGametes(genotype2);
    return htmlset("tableplace", createOutput(gametesFirst, gametesSecond));
  };

  fail = function fail(error) {
    htmlset("errorlogs", "<p style=\"color: red;\">".concat(error, "</p>"));
    return false;
  };

  clearError = function clearError() {
    return fail("");
  };

  createOutput = function createOutput(g1, g2) {
    var builder, genotype, genotypeCounter, i, j, l, len, len1, len2, m, n, phenotype, phenotypeCounter, subbuilder;
    genotypeCounter = new Counter();
    phenotypeCounter = new Counter();
    builder = "<br><label class=\"tblbl\">\u0420\u0435\u0448\u0451\u0442\u043A\u0430 \u041F\u0435\u043D\u043D\u0435\u0442\u0430: </label><br>\n<table class='mdl-data-table mdl-js-data-table'><tr><td></td>";

    for (l = 0, len = g2.length; l < len; l++) {
      i = g2[l];
      builder += "<td>".concat(i, "</td>");
    }

    builder += "</tr>";

    for (m = 0, len1 = g1.length; m < len1; m++) {
      i = g1[m];
      builder += "<tr><td>".concat(i, "</td>");

      for (n = 0, len2 = g2.length; n < len2; n++) {
        j = g2[n];
        genotype = combineGametes(i, j);

        if (genotype === null) {
          return "";
        }

        phenotype = evalPhenotype(genotype);
        genotypeCounter.count(genotype);
        phenotypeCounter.count(phenotype);
        builder += phenotype !== null ? "<td>".concat(genotype, "<br>(").concat(phenotype, ")</td>") : "<td>".concat(genotype, "</td>");
      }

      builder += "</tr>";
    }

    subbuilder = genotypeCounter.getTable("Расщепление по генотипу");

    if (phenotypeCounter.getSize() > 1) {
      subbuilder += "<br>" + phenotypeCounter.getTable("Расщепление по фенотипу");
    }

    return builder + "</table><br><div>".concat(subbuilder, "</div>");
  };

  evalPhenotype = function evalPhenotype(genotype) {
    var allel, l, len, phenotypeParts, val;
    phenotypeParts = new Map();

    for (l = 0, len = genotype.length; l < len; l++) {
      allel = genotype[l];
      val = valueof("inputFor" + allel);

      if (val === "") {
        continue;
      }

      if (allel.toUpperCase() === allel) {
        phenotypeParts.set(allel, val);
      }

      if (!phenotypeParts.has(allel.toUpperCase())) {
        phenotypeParts.set(allel, val);
      }
    }

    if (!phenotypeParts.size) {
      return null;
    }

    return values(phenotypeParts).join(", ");
  };

  combineGametes = function combineGametes(g1, g2) {
    var i;

    if (g1.length !== g2.length) {
      return fail("wrong gamet length");
    }

    return ejoin(function () {
      var l, ref, results;
      results = [];

      for (i = l = 0, ref = g1.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
        results.push(g1[i] < g2[i] ? g1[i] + g2[i] : g2[i] + g1[i]);
      }

      return results;
    }());
  }; // Создаёт набор гамет для заданного генотипа


  makeGametes = function makeGametes(genotype) {
    var _helper;

    _helper = function helper(genotype, position) {
      var gams;

      if (position >= genotype.length) {
        // если аллелей не осталось - undefined
        return;
      }

      gams = _helper(genotype, position + 2);

      if (gams === void 0) {
        // если перебрали всё - удаляем повторяющиеся элементы
        return unique([genotype[position], genotype[position + 1]]);
      }

      if (genotype[position] === genotype[position + 1]) {
        return gams.map(function (i) {
          return genotype[position] + i;
        });
      } else {
        return [].concat(_toConsumableArray(gams.map(function (i) {
          return genotype[position] + i;
        })), _toConsumableArray(gams.map(function (i) {
          return genotype[position + 1] + i;
        })));
      }
    };

    return _helper(genotype, 0);
  };

  onChangeText = function onChangeText() {
    var allel, alleles, gametes;
    clearError();
    htmlset("gametparams", "");

    if (!checkGenotypes(valueof("genotype1"), valueof("genotype2"))) {
      return;
    }

    gametes = makeGametes(valueof("genotype1"));

    if (gametes === null) {
      return;
    }

    alleles = mergeStrings(gametes[0].toUpperCase(), gametes[0].toLowerCase());
    return htmlset("gametparams", function () {
      var l, len, results;
      results = [];

      for (l = 0, len = alleles.length; l < len; l++) {
        allel = alleles[l];
        results.push(createPhenotypeInput(allel));
      }

      return results;
    }().join(""));
  };

  createPhenotypeInput = function createPhenotypeInput(allel) {
    return "<div class=\"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone\">\n\t<div class=\"mdl-textfield mdl-js-textfield\">\n\t\t<label class=\"tblbl\">\u0424\u0435\u043D\u043E\u0442\u0438\u043F ".concat(allel, "</label>\n\t\t<input type=\"text\" class=\"mdl-textfield__input\" id=\"inputFor").concat(allel, "\">\n\t</div>\n</div>");
  };

  checkGenotype = function checkGenotype(genotype) {
    var msg;
    msg = "\u0412\u0432\u0435\u0434\u0451\u043D \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0433\u0435\u043D\u043E\u0442\u0438\u043F ".concat(genotype);

    if (genotype.length % 2 !== 0) {
      // поддерживаются только аллели кратные двум
      return fail(msg);
    }

    return true;
  };

  checkGenotypes = function checkGenotypes(genotype1, genotype2) {
    var i, l, msg, ref;

    if (!checkGenotype(genotype1 || checkGenotype(genotype2))) {
      return false;
    }

    msg = "\u0413\u0435\u043D\u043E\u0442\u0438\u043F\u044B ".concat(genotype1, " \u0438 ").concat(genotype2, " \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B");

    if (genotype1.length !== genotype2.length) {
      // число аллелей должно быть одинаковым
      return fail(msg);
    } // порядок аллелей должен быть одинаковым


    for (i = l = 0, ref = genotype1.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
      if (genotype1[i].toLowerCase() !== genotype2[i].toLowerCase()) {
        return fail(msg);
      }
    }

    return true;
  };

  mergeStrings = function mergeStrings(string1, string2) {
    var i;
    return function () {
      var l, ref, results;
      results = [];

      for (i = l = 0, ref = string1.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
        results.push(string1[i] + string2[i]);
      }

      return results;
    }().join("");
  };

  element("genotype1").addEventListener("input", onChangeText);
  element("genotype2").addEventListener("input", onChangeText);
  element("runButton").addEventListener("click", runApplication);
}).call(void 0);