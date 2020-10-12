// Generated by CoffeeScript 2.5.1
(function() {
  // Operator function for '-'
  var all, any, checkedof, child, countIt, delws, div, ejoin, elem, element, first, h1, h2, h3, h4, h5, h6, htmlget, htmlset, j, keys, l, last, len, len1, makeKeyCells, makeMapCells, makeValueCells, matchContent, max, maxKey, maxValue, min, mul, neue, neueText, ref, ref1, runParser, searchTag, startSearch, sub, sum, unique, valueof, values, valueset,
    indexOf = [].indexOf;

  sub = function(x, y) {
    return x - y;
  };

  // Operator function for '+', also allow to sum of array
  sum = function(x, y) {
    if (y == null) {
      return x.reduce(document.flexibel.sum);
    }
    return x + y;
  };

  // Operator function for '*', also allow to mul of array
  mul = function(x, y) {
    if (y == null) {
      return x.reduce(document.flexibel.mul);
    }
    return x * y;
  };

  // Operator function for '/'
  div = function(x, y) {
    return x / y;
  };

  // Returns the min of two elements, or min of array
  min = function(x, y) {
    if (y == null) {
      return x.reduce(document.flexibel.min);
    }
    if (x < y) {
      return x;
    } else {
      return y;
    }
  };

  // Returns the max of two elements, or max of array
  max = function(x, y) {
    if (y == null) {
      return x.reduce(document.flexibel.max);
    }
    if (x > y) {
      return x;
    } else {
      return y;
    }
  };

  last = function(container) {
    return container[container.length - 1];
  };

  first = function(container) {
    return container[0];
  };

  neue = function(name, inner) {
    var elem;
    elem = document.createElement(name);
    if (inner != null) {
      elem.innerHTML = inner;
    }
    return elem;
  };

  neueText = function(name, inner) {
    var elem;
    elem = document.createElement(name);
    if (inner != null) {
      elem.innerText = inner;
    }
    return elem;
  };

  div = function(inner) {
    var elem;
    elem = document.createElement("div");
    if (inner != null) {
      elem.innerHTML = inner;
    }
    return elem;
  };

  h1 = function(text) {
    return neueText("h1", text);
  };

  h2 = function(text) {
    return neueText("h2", text);
  };

  h3 = function(text) {
    return neueText("h3", text);
  };

  h4 = function(text) {
    return neueText("h4", text);
  };

  h5 = function(text) {
    return neueText("h5", text);
  };

  h6 = function(text) {
    return neueText("h6", text);
  };

  element = function(id) {
    if (id.startsWith(".")) {
      return document.getElementsByClassName(id.substring(1));
    }
    return document.getElementById(id);
  };

  valueset = function(id, value) {
    return document.flexibel.element(id).value = value;
  };

  valueof = function(id) {
    return document.flexibel.element(id).value;
  };

  checkedof = function(id) {
    return document.flexibel.element(id).checked;
  };

  htmlset = function(id, html) {
    return document.flexibel.element(id).innerHTML = html;
  };

  htmlget = function(id) {
    return document.flexibel.element(id).innerHTML;
  };

  any = function(values, f) {
    var i, j, len;
    for (j = 0, len = values.length; j < len; j++) {
      i = values[j];
      if (f(i)) {
        return true;
      }
    }
    return false;
  };

  all = function(values, f) {
    var i, j, len;
    for (j = 0, len = values.length; j < len; j++) {
      i = values[j];
      if (!f(i)) {
        return false;
      }
    }
    return true;
  };

  ejoin = function(values) {
    return values.join("");
  };

  delws = function(str, sym) {
    return str.replace(/\s+/g, "");
  };

  values = function(map) {
    return [...map.values()];
  };

  keys = function(map) {
    return [...map.keys()];
  };

  maxKey = function(map) {
    return document.flexibel.keys(map).reduce(document.flexibel.max);
  };

  maxValue = function(map) {
    return document.flexibel.values(map).reduce(document.flexibel.max);
  };

  unique = function(values) {
    return [...new Set(values)];
  };

  countIt = function(map, it) {
    if (map.has(it)) {
      return map.set(it, map.get(it) + 1);
    } else {
      return map.set(it, 1);
    }
  };

  makeValueCells = function(map) {
    var ref, results, v;
    ref = map.values();
    results = [];
    for (v of ref) {
      results.push(`<td>${v}</td>`);
    }
    return results;
  };

  makeKeyCells = function(map) {
    var k, ref, results;
    ref = map.keys();
    results = [];
    for (k of ref) {
      results.push(`<td>${k}</td>`);
    }
    return results;
  };

  makeMapCells = function(values, mapper) {
    var k, results;
    results = [];
    for (k of values) {
      results.push(`<td>${mapper(k)}</td>`);
    }
    return results;
  };

  document.flexibel = {makeKeyCells, makeValueCells, countIt, maxValue, maxKey, keys, values, delws, ejoin, htmlset, checkedof, valueof, valueset, element, first, last, max, min, sum, sub, mul, div, all, any};

  runParser = function(input) {
    var getCurrent, next, parseNumber, parserState, ref;
    parserState = {
      result: [],
      currentPosition: 0,
      input: input
    };
    getCurrent = function(state) {
      return state.input[state.currentPosition];
    };
    next = function(state) {
      var current;
      current = getCurrent(state);
      state.currentPosition++;
      return current;
    };
    parseNumber = function(state) {
      var buffer, current, ref;
      buffer = next(state);
      while (ref = (current = next(state)), indexOf.call("0123456789.", ref) >= 0) {
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

  startSearch = function(name) {
    var entry, input, j, len, ref, results;
    input = new RegExp(name, "i");
    ref = element("search-container").children;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      entry = ref[j];
      entry.hidden = false;
      if (!matchContent(entry, input)) {
        results.push(entry.hidden = true);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  matchContent = function(element, input) {
    var firstTest, secondTest, thridTest;
    firstTest = input.test(element.getElementsByClassName("mdl-card__title-text")[0].innerText);
    secondTest = input.test(element.getElementsByClassName("mdl-card__supporting-text")[0].innerText);
    thridTest = any(element.getElementsByClassName("post-category"), function(i) {
      return input.test(i.innerText);
    });
    return firstTest || secondTest || thridTest;
  };

  searchTag = function(name) {
    var entry, input, j, len, ref;
    input = new RegExp(name.srcElement.innerText, "i");
    ref = element("search-container").children;
    for (j = 0, len = ref.length; j < len; j++) {
      entry = ref[j];
      entry.hidden = false;
      if (!any(entry.getElementsByClassName("post-category"), function(i) {
        return input.test(i.innerText);
      })) {
        entry.hidden = true;
      }
    }
    return history.pushState({
      foo: "bar"
    }, "page 2", "index.html");
  };

  element("text-to-find").addEventListener("input", function() {
    return startSearch(valueof("text-to-find"));
  });

  ref = element("search-container").children;
  for (j = 0, len = ref.length; j < len; j++) {
    child = ref[j];
    ref1 = child.getElementsByClassName("post-category");
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      elem = ref1[l];
      elem.addEventListener("click", searchTag);
    }
  }

  window.onpopstate = function(event) {
    searchTag({
      srcElement: {
        innerText: ""
      }
    });
    return history.replaceState(null, "title 2");
  };

}).call(this);