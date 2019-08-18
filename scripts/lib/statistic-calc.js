"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Generated by CoffeeScript 2.4.1
(function () {
  // Operator function for '-'
  var checkedof,
      countIt,
      counter,
      delws,
      div,
      ejoin,
      element,
      findMedian,
      findMode,
      first,
      getFerqsTable,
      getStatisticParameters,
      htmlset,
      keys,
      last,
      makeKeyCells,
      makeReport,
      makeValueCells,
      max,
      maxKey,
      maxValue,
      min,
      mul,
      reportElement,
      runApplication,
      runParser,
      sub,
      sum,
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

  element = function element(id) {
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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = ref[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        v = _step.value;
        results.push("<td>".concat(v, "</td>"));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return results;
  };

  makeKeyCells = function makeKeyCells(map) {
    var k, ref, results;
    ref = map.keys();
    results = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = ref[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        k = _step2.value;
        results.push("<td>".concat(k, "</td>"));
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
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
    div: div
  }; // 86 80 25 77 73 76 100 90 69 93 90 83 70 73 73 70 90 83 71 95 40 58 68 69 100 78 87 97 92 74

  runApplication = function runApplication() {
    var input, isPopulation;
    input = runParser(valueof("seqInput"));
    isPopulation = checkedof("checkbox1");
    return htmlset("reportPlace", makeReport(input, isPopulation));
  };

  makeReport = function makeReport(data, isPopulation) {
    var parameters, target;
    parameters = getStatisticParameters(data, isPopulation);
    target = isPopulation ? "генеральной совокупности" : "выборки";
    return ["<ul class='mdc-list mdc-list--two-line'>", reportElement("\u0420\u0430\u0437\u043C\u0435\u0440 ".concat(target, ":"), parameters.size), reportElement("\u0421\u0443\u043C\u043C\u0430 ".concat(target, ":"), parameters.summa), reportElement("\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C ".concat(target, ":"), parameters.max), reportElement("\u041C\u0438\u043D\u0438\u043C\u0443\u043C ".concat(target, ":"), parameters.min), reportElement("\u0421\u0440\u0435\u0434\u043D\u0435\u0435 ".concat(target, ":"), parameters.mean), reportElement("\u041C\u0435\u0434\u0438\u0430\u043D\u0430 ".concat(target, ":"), parameters.median), reportElement("\u041C\u043E\u0434\u044B ".concat(target, ":"), parameters.modes.join(", ")), reportElement("\u0420\u0430\u0437\u043C\u0430\u0445 ".concat(target, ":"), parameters.range), reportElement("\u0414\u0438\u0441\u043F\u0435\u0440\u0441\u0438\u044F ".concat(target, ":"), parameters.variance), reportElement("\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435 ".concat(target, ":"), parameters.sd), "</ul>", getFerqsTable(parameters.freqs, parameters.size)].join("");
  };

  reportElement = function reportElement(title, value) {
    return "<li class=\"mdc-list-item\">\n\t<span class=\"mdc-list-item__text\">\n\t\t<span class=\"mdc-list-item__primary-text\" style=\"color: #3f51b5; font-size: 12px;\">\n\t\t\t".concat(title, "\n\t\t</span>\n\t\t<span class=\"mdc-list-item__secondary-text\" style=\"padding-left: 10px;\">\n\t\t\t").concat(value, "\n\t\t</span>\n\t</span>\n</li>");
  };

  getStatisticParameters = function getStatisticParameters(data, isPopulation) {
    var freqs, mean, median, modes, orderedData, range, sd, size, summa, variance;
    size = data.length;
    summa = sum(data);
    console.log(summa);
    mean = summa / size;
    orderedData = data.sort(sub);
    max = last(orderedData);
    min = first(orderedData);
    median = findMedian(orderedData);
    range = max - min;
    variance = orderedData.map(function (x) {
      return Math.pow(x - mean, 2);
    }).reduce(sum) / (isPopulation ? size : size - 1);
    sd = Math.sqrt(variance);
    freqs = counter(orderedData);
    modes = findMode(freqs);
    return {
      size: size,
      summa: summa,
      mean: mean,
      median: median,
      max: max,
      min: min,
      range: range,
      variance: variance,
      sd: sd,
      freqs: freqs,
      modes: modes
    };
  };

  getFerqsTable = function getFerqsTable(freqs, size) {
    var i;
    return "<div>\n<table class=\"mdl-data-table mdl-js-data-table\">\n\t<tr>\n\t\t<td>x</td>\n\t\t".concat(ejoin(makeKeyCells(freqs)), "\n\t</tr>\n\t<tr>\n\t\t<td>f</td>\n\t\t").concat(ejoin(makeValueCells(freqs)), "\n\t</tr>\n\t<tr>\n\t\t<td>\u03C9</td>\n\t\t").concat(ejoin(function () {
      var results;
      results = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = freqs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          i = _step3.value;
          results.push("<td>" + new String(i[1] / size).substr(0, 5) + "</td>");
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return results;
    }()), "\n\t</tr>\n</table>\n</div>");
  };

  findMode = function findMode(freqs) {
    var i, results;
    max = maxValue(freqs);
    results = [];
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = freqs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        i = _step4.value;

        if (i[1] === max) {
          results.push(i[0]);
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return results;
  };

  findMedian = function findMedian(data) {
    if (data.length % 2 === 0) {
      return (data[data.length / 2] + data[data.length / 2 + 1]) / 2;
    }

    return data[Math.floor(data.length / 2)];
  };

  counter = function counter(values) {
    var i, j, len, map;
    map = new Map();

    for (j = 0, len = values.length; j < len; j++) {
      i = values[j];
      countIt(map, i);
    }

    return map;
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
      if (ref = getCurrent(parserState), indexOf.call("0123456789", ref) >= 0) {
        parseNumber(parserState);
      } else {
        next(parserState);
      }
    }

    return parserState.result;
  };

  element("runButton").addEventListener("click", runApplication);
}).call(void 0);