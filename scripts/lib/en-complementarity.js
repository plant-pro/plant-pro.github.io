"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Generated by CoffeeScript 2.4.1
(function () {
  /*
  	Complementarity application (EN version)
  	Autor: Tsvikevich Denis 2019
  */
  var DNA_COMPLIMENTARY,
      DNA_VALID_CHARS,
      GENETIC_CODE,
      INPUT_TYPE,
      RNA_COMPLIMENTARY,
      RNA_VALID_CHARS,
      all,
      any,
      buildByDnaOne,
      buildByDnaTwo,
      buildByInformationalRna,
      buildByProtein,
      buildByTransferRna,
      checkedof,
      clearError,
      countIt,
      delws,
      div,
      ejoin,
      element,
      first,
      formatOutput,
      formatProteinSequence,
      getCheckerAndInputElement,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      htmlget,
      htmlset,
      isValidAminoacid,
      isValidDnaChar,
      isValidRnaChar,
      keys,
      last,
      lastInputType,
      logError,
      makeComplimentaryDna,
      makeDnaFromiRna,
      makeInformationalRna,
      makeInformationalRnaFromProtein,
      makeKeyCells,
      makeMapCells,
      makeProteinFromInformationalRna,
      makeTransferRna,
      makeValueCells,
      mapString,
      max,
      maxKey,
      maxValue,
      min,
      mul,
      neue,
      neueText,
      runApplication,
      sub,
      sum,
      uniformNucleotide,
      uniformSequence,
      unique,
      validateInput,
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
    var i, j, len;

    for (j = 0, len = values.length; j < len; j++) {
      i = values[j];

      if (f(i)) {
        return true;
      }
    }

    return false;
  };

  all = function all(values, f) {
    var i, j, len;

    for (j = 0, len = values.length; j < len; j++) {
      i = values[j];

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

  makeMapCells = function makeMapCells(values, mapper) {
    var k, results;
    results = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        k = _step3.value;
        results.push("<td>".concat(mapper(k), "</td>"));
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
  DNA_VALID_CHARS = "ATGCatgcАTGCаTGC ";
  RNA_VALID_CHARS = "AUGCaugcАUGCаUGC ";
  DNA_COMPLIMENTARY = new Map([["A", "T"], ["T", "A"], ["G", "C"], ["U", "A"], ["C", "G"]]);
  RNA_COMPLIMENTARY = new Map([["A", "U"], ["T", "A"], ["U", "A"], ["G", "C"], ["C", "G"]]);
  GENETIC_CODE = new Map([["UUU", "PHE"], ["UUC", "PHE"], ["UUA", "LEU"], ["UCU", "SER"], ["UCC", "SER"], ["UCА", "SER"], ["UCG", "SER"], ["UАU", "TYR"], ["UАC", "TYR"], ["UАА", "STOP"], ["UАG", "STOP"], ["UGU", "CYS"], ["UGC", "CYS"], ["UGА", "STOP"], ["UGG", "TRP"], ["CUU", "LEU"], ["CUC", "LEU"], ["CUА", "LEU"], ["CUG", "LEU"], ["CCU", "PRO"], ["CCC", "PRO"], ["CCА", "PRO"], ["CCG", "PRO"], ["CАU", "HIS"], ["CАC", "HIS"], ["CАА", "GLU"], ["CАG", "GLU"], ["CGU", "ARG"], ["CGC", "ARG"], ["CGА", "ARG"], ["CGG", "ARG"], ["АUU", "ILE"], ["АUC", "ILE"], ["АUА", "ILE"], ["АUG", "MET"], ["GUU", "VAL"], ["GUC", "VAL"], ["GUА", "VAL"], ["GUG", "VAL"], ["АCU", "THR"], ["АCC", "THR"], ["АCА", "THR"], ["АCG", "THR"], ["GCU", "ALA"], ["GCC", "ALA"], ["GCА", "ALA"], ["GCG", "ALA"], ["ААU", "ASN"], ["ААC", "ASN"], ["ААА", "LYS"], ["ААG", "LYS"], ["GАU", "ASP"], ["GАC", "ASP"], ["GАА", "GLU"], ["GАG", "GLU"], ["АGU", "SER"], ["АGC", "SER"], ["АGА", "ARG"], ["АGG", "ARG"], ["GGU", "GLY"], ["GGC", "GLY"], ["GGА", "GLY"], ["GGG", "GLY"]]);
  INPUT_TYPE = {
    DNA1: 1,
    DNA2: 2,
    IRNA: 3,
    TRNA: 4,
    PROTEIN: 5
  };
  lastInputType = 1;

  runApplication = function runApplication() {
    var result;

    result = function () {
      switch (lastInputType) {
        case 1:
          return buildByDnaOne();

        case 2:
          return buildByDnaTwo();

        case 3:
          return buildByInformationalRna();

        case 4:
          return buildByTransferRna();

        case 5:
          return buildByPROtein();
      }
    }();

    valueset("dnaInput", formatOutput(result.firstDna));
    valueset("dna2Input", formatOutput(result.secondDna));
    valueset("irnaInput", formatOutput(result.informationalRna));
    valueset("trnaInput", formatOutput(result.transferRna));
    return valueset("proteinInput", result.protein);
  };

  buildByDnaOne = function buildByDnaOne() {
    var firstDna, informationalRna, protein, secondDna, transferRna;
    firstDna = uniformSequence(valueof("dnaInput"));
    secondDna = makeComplimentaryDna(firstDna);
    informationalRna = makeInformationalRna(firstDna);
    transferRna = makeTransferRna(informationalRna);
    protein = makeProteinFromInformationalRna(informationalRna);
    return {
      firstDna: firstDna,
      secondDna: secondDna,
      informationalRna: informationalRna,
      transferRna: transferRna,
      protein: protein
    };
  };

  buildByDnaTwo = function buildByDnaTwo() {
    var firstDna, informationalRna, protein, secondDna, transferRna;
    secondDna = uniformSequence(valueof("dna2Input"));
    firstDna = makeComplimentaryDna(secondDna);
    informationalRna = makeInformationalRna(firstDna);
    transferRna = makeTransferRna(informationalRna);
    protein = makeProteinFromInformationalRna(informationalRna);
    return {
      firstDna: firstDna,
      secondDna: secondDna,
      informationalRna: informationalRna,
      transferRna: transferRna,
      protein: protein
    };
  };

  buildByInformationalRna = function buildByInformationalRna() {
    var firstDna, informationalRna, protein, secondDna, transferRna;
    informationalRna = uniformSequence(valueof("irnaInput"));
    firstDna = makeDnaFromiRna(informationalRna);
    secondDna = makeComplimentaryDna(firstDna);
    transferRna = makeTransferRna(informationalRna);
    protein = makeProteinFromInformationalRna(informationalRna);
    return {
      firstDna: firstDna,
      secondDna: secondDna,
      informationalRna: informationalRna,
      transferRna: transferRna,
      protein: protein
    };
  };

  buildByTransferRna = function buildByTransferRna() {
    var firstDna, informationalRna, protein, secondDna, transferRna;
    transferRna = uniformSequence(valueof("trnaInput"));
    secondDna = makeDnaFromiRna(transferRna);
    firstDna = makeComplimentaryDna(secondDna);
    informationalRna = makeInformationalRna(firstDna);
    protein = makeProteinFromInformationalRna(informationalRna);
    return {
      firstDna: firstDna,
      secondDna: secondDna,
      informationalRna: informationalRna,
      transferRna: transferRna,
      protein: protein
    };
  };

  buildByProtein = function buildByProtein() {
    var firstDna, informationalRna, protein, secondDna, transferRna;
    protein = valueof("proteinInput");
    informationalRna = makeInformationalRnaFromProtein(protein);
    firstDna = makeDnaFromiRna(informationalRna);
    secondDna = makeComplimentaryDna(firstDna);
    transferRna = makeTransferRna(informationalRna);
    return {
      firstDna: firstDna,
      secondDna: secondDna,
      informationalRna: informationalRna,
      transferRna: transferRna,
      protein: protein
    };
  };

  makeProteinFromInformationalRna = function makeProteinFromInformationalRna(irna) {
    var divideIntoTriplets;

    divideIntoTriplets = function divideIntoTriplets(irna) {
      var currentTriplet, i, index, j, len, triplets;
      triplets = [];
      currentTriplet = "";
      index = 0;

      for (j = 0, len = irna.length; j < len; j++) {
        i = irna[j];
        currentTriplet += i;
        index++;

        if (index === 3) {
          triplets.push(currentTriplet);
          currentTriplet = "";
          index = 0;
        }
      }

      return triplets;
    };

    return divideIntoTriplets(irna).map(function (x) {
      return GENETIC_CODE.get(x);
    }).join("-");
  };

  makeInformationalRnaFromProtein = function makeInformationalRnaFromProtein(protein) {
    var aminoacid, i, j, len, ref, result;
    result = "";
    ref = protein.split("-");

    for (j = 0, len = ref.length; j < len; j++) {
      aminoacid = ref[j];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = GENETIC_CODE[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          i = _step4.value;

          if (i[1] === aminoacid) {
            result += i[0];
            break;
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
    }

    return result;
  };

  mapString = function mapString(string, mapper) {
    var _char;

    return function () {
      var j, len, results;
      results = [];

      for (j = 0, len = string.length; j < len; j++) {
        _char = string[j];
        results.push(mapper(_char));
      }

      return results;
    }().join("");
  };

  makeComplimentaryDna = function makeComplimentaryDna(dna) {
    return mapString(dna, function (x) {
      return DNA_COMPLIMENTARY.get(x);
    });
  };

  makeInformationalRna = function makeInformationalRna(dna1) {
    return mapString(dna1, function (x) {
      return RNA_COMPLIMENTARY.get(x);
    });
  };

  makeDnaFromiRna = function makeDnaFromiRna(irna) {
    return mapString(irna, function (x) {
      return DNA_COMPLIMENTARY.get(x);
    });
  };

  makeTransferRna = function makeTransferRna(irna) {
    return mapString(irna, function (x) {
      return RNA_COMPLIMENTARY.get(x);
    });
  };

  uniformSequence = function uniformSequence(dna) {
    return mapString(delws(dna), uniformNucleotide);
  };

  uniformNucleotide = function uniformNucleotide(nucleotide) {
    switch (nucleotide.toUpperCase()) {
      case "А":
        return "А";

      case "Т":
        return "T";

      case "Г":
        return "G";

      case "Ц":
        return "C";

      case "У":
        return "U";

      default:
        return nucleotide.toUpperCase();
    }
  };

  validateInput = function validateInput(type) {
    var aminoacid, checker, formatedInput, i, inputElement, j, l, len, len1, ref, ref1;
    lastInputType = type;
    clearError();

    if (type === INPUT_TYPE.PROTEIN) {
      formatedInput = formatProteinSequence(valueof("proteinInput").replace(/\-/g, ''));
      ref = formatedInput.split("-");

      for (j = 0, len = ref.length; j < len; j++) {
        aminoacid = ref[j];

        if (!isValidAminoacid(aminoacid)) {
          return logError("Error: unknown aminoacid '".concat(aminoacid, "'"), type);
        }
      }

      return document.mainForm.proteinInput.value = formatedInput;
    } else {
      var _getCheckerAndInputEl = getCheckerAndInputElement(type);

      checker = _getCheckerAndInputEl.checker;
      inputElement = _getCheckerAndInputEl.inputElement;
      ref1 = inputElement.value;

      for (l = 0, len1 = ref1.length; l < len1; l++) {
        i = ref1[l];

        if (!checker(i)) {
          return logError("Error: unexpected symbol '".concat(i, "'"), type);
        }
      }

      inputElement.value = formatOutput(delws(inputElement.value));

      if (uniformSequence(inputElement.value).length % 3 !== 0) {
        return logError("Error: partial triplet", type);
      }
    }
  };

  getCheckerAndInputElement = function getCheckerAndInputElement(inputType) {
    switch (inputType) {
      case 1:
        return {
          checker: isValidDnaChar,
          inputElement: element("dnaInput")
        };

      case 2:
        return {
          checker: isValidDnaChar,
          inputElement: element("dna2Input")
        };

      case 3:
        return {
          checker: isValidRnaChar,
          inputElement: element("irnaInput")
        };

      case 4:
        return {
          checker: isValidRnaChar,
          inputElement: element("trnaInput")
        };

      default:
        return {
          checker: isValidDnaChar,
          inputElement: element("dnaInput")
        };
    }
  };

  isValidAminoacid = function isValidAminoacid(aminoacid) {
    var isPart, normalizedAminoacid, ref, v;

    if (aminoacid.length === 0) {
      return true;
    }

    normalizedAminoacid = aminoacid.toUpperCase();
    ref = GENETIC_CODE.values();
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = ref[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        v = _step5.value;
        isPart = v.startsWith(normalizedAminoacid);

        if (isPart) {
          break;
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    return isPart;
  };

  isValidDnaChar = function isValidDnaChar(_char2) {
    return indexOf.call(DNA_VALID_CHARS, _char2) >= 0;
  };

  isValidRnaChar = function isValidRnaChar(_char3) {
    return indexOf.call(RNA_VALID_CHARS, _char3) >= 0;
  };

  logError = function logError(message, inputType) {
    var logger;

    logger = function () {
      switch (inputType) {
        case INPUT_TYPE.DNA1:
          return element("dna1err");

        case INPUT_TYPE.DNA2:
          return element("dna2err");

        case INPUT_TYPE.IRNA:
          return element("irnaerr");

        case INPUT_TYPE.TRNA:
          return element("trnaerr");

        case INPUT_TYPE.PROTEIN:
          return element("proteinerr");
      }
    }();

    return logger.innerHTML = message;
  };

  clearError = function clearError() {
    var i, j, results;
    results = [];

    for (i = j = 1; j <= 5; i = ++j) {
      results.push(logError("", i));
    }

    return results;
  };

  formatOutput = function formatOutput(sequence) {
    var currentTriplet, i, index, j, len, ref, triplets;
    triplets = [];
    currentTriplet = "";
    index = 0;
    ref = uniformSequence(sequence);

    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      currentTriplet += i;
      index++;

      if (index === 3) {
        triplets.push(currentTriplet);
        currentTriplet = "";
        index = 0;
      }
    }

    if (currentTriplet.length > 0) {
      triplets.push(currentTriplet);
    }

    return triplets.join(" ");
  };

  formatProteinSequence = function formatProteinSequence(sequence) {
    var currentTriplet, i, index, j, len, ref, triplets;
    triplets = [];
    currentTriplet = "";
    index = 0;
    ref = sequence.toUpperCase();

    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      currentTriplet += i;
      index++;

      if (index === 3 && currentTriplet !== "Sto" || index === 4) {
        triplets.push(currentTriplet);
        currentTriplet = "";
        index = 0;
      }
    }

    if (currentTriplet.length > 0) {
      triplets.push(currentTriplet);
    }

    return triplets.join("-");
  };

  element("dnaInput").addEventListener("input", function () {
    return validateInput(INPUT_TYPE.DNA1);
  });
  element("dna2Input").addEventListener("input", function () {
    return validateInput(INPUT_TYPE.DNA2);
  });
  element("irnaInput").addEventListener("input", function () {
    return validateInput(INPUT_TYPE.IRNA);
  });
  element("trnaInput").addEventListener("input", function () {
    return validateInput(INPUT_TYPE.TRNA);
  });
  element("proteinInput").addEventListener("input", function () {
    return validateInput(INPUT_TYPE.PROTEIN);
  });
  element("runButton").addEventListener("click", runApplication);
}).call(void 0);