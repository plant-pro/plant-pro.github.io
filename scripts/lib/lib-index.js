"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Generated by CoffeeScript 2.5.1
(function () {
  var availableFileTypes, isArticle, isSatisfiedToAllPredicates, isSatisfiedToArticleFilter, isSatisfiedToAutorFilter, isSatisfiedToFileTypeFilter, isSatisfiedToSearch, makeFilterPanel, makeFilterPanelWithColor, parseFileType, predicates, searchInputChanged, stateChanged, updateResults;
  availableFileTypes = {
    PDF: {
      name: ".pdf",
      color: "rgba(231, 47, 47, .2)"
    },
    DJVU: {
      name: ".djvu",
      color: "rgba(160, 0, 160, .2)"
    },
    ONLINE: {
      name: "online",
      color: "rgba(112, 112, 112, .2)"
    },
    UNKNOWN: null
  };

  parseFileType = function parseFileType(string) {
    switch (string.trim()) {
      case "pdf":
        return availableFileTypes.PDF;

      case "djvu":
        return availableFileTypes.DJVU;

      case "online":
        return availableFileTypes.ONLINE;

      default:
        return availableFileTypes.UNKNOWN;
    }
  };

  predicates = {
    articleFilterIsEnabled: false,
    requiredFileTypes: [],
    requiredAutors: [],
    searchText: ""
  };

  isArticle = function isArticle(record) {
    var span;
    span = record.getElementsByClassName("plpro-lib-record-article");
    return span.length > 0;
  };

  isSatisfiedToArticleFilter = function isSatisfiedToArticleFilter(record) {
    return !predicates.articleFilterIsEnabled || isArticle(record);
  };

  isSatisfiedToFileTypeFilter = function isSatisfiedToFileTypeFilter(record) {
    if (predicates.requiredFileTypes.length === 0) {
      return true;
    }

    return predicates.requiredFileTypes.some(function (requiredFileType) {
      var fileTypeTag;
      fileTypeTag = parseFileType(record.getElementsByClassName("filetype-tag")[0].innerText);
      return fileTypeTag.name === requiredFileType.name;
    });
  };

  isSatisfiedToAutorFilter = function isSatisfiedToAutorFilter(record) {
    var autorName, j, len, ref;

    if (predicates.requiredAutors.length === 0) {
      return true;
    }

    ref = predicates.requiredAutors;

    for (j = 0, len = ref.length; j < len; j++) {
      autorName = ref[j];

      if (!_toConsumableArray(record.children).some(function (elem) {
        return elem.className === "plpro-lib-record-autor" && elem.innerText === autorName;
      })) {
        return false;
      }
    }

    return true;
  };

  isSatisfiedToSearch = function isSatisfiedToSearch(record) {
    var title;
    title = record.querySelector(".plpro-lib-record-title:first-child>a");
    return new RegExp(predicates.searchText, 'i').test(title.innerText);
  };

  isSatisfiedToAllPredicates = function isSatisfiedToAllPredicates(record) {
    return isSatisfiedToArticleFilter(record) && isSatisfiedToFileTypeFilter(record) && isSatisfiedToAutorFilter(record) && isSatisfiedToSearch(record);
  };

  makeFilterPanel = function makeFilterPanel(text, deleteAction) {
    return "<div class='panel'> <span class='mdl-chip__text'>".concat(text, "</span> <button type='button' class='close-panel-btn' onclick='").concat(deleteAction, "'> <svg style='width:18px;height:18px' viewBox='0 0 24 24'> <path fill='#ffffff' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /> </svg> </button> </div>");
  };

  makeFilterPanelWithColor = function makeFilterPanelWithColor(text, color, deleteAction) {
    return "<div class='panel' style='background-color: ".concat(color, ";'> <span class='mdl-chip__text'>").concat(text, "</span> <button type='button' class='close-panel-btn' onclick='").concat(deleteAction, "'> <svg style='width:18px;height:18px' viewBox='0 0 24 24'> <path fill='#ffffff' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /> </svg> </button> </div>");
  };

  stateChanged = function stateChanged(event) {
    predicates.articleFilterIsEnabled = event.target.checked;
    return updateResults();
  };

  updateResults = function updateResults() {
    var i, j, len, ref, results, searchBox;
    searchBox = document.getElementById("search-box");
    ref = searchBox.children;
    results = [];

    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];

      if (i.className === "plpro-lib-record") {
        results.push($(i).animate({
          opacity: 0
        }, 300, function (i) {
          return function () {
            i.style.display = "none";

            if (isSatisfiedToAllPredicates(i)) {
              i.style.display = "block";
              return $(i).animate({
                opacity: 1
              }, 300);
            }
          };
        }(i)));
      } else {
        results.push(void 0);
      }
    }

    return results;
  };

  document.autorOnClick = function (self) {
    var autorName, filterDiv;
    autorName = self.innerText;
    predicates.requiredAutors.push(autorName);
    filterDiv = document.getElementById("filter");
    filterDiv.innerHTML += " " + makeFilterPanel("\u0410\u0432\u0442\u043E\u0440: ".concat(autorName), "document.deleteAutorFilter(this, \"".concat(autorName, "\")"));
    return updateResults();
  };

  document.deleteAutorFilter = function (self, autorName) {
    $(self.parentNode).animate({
      opacity: 0
    }, 300, function () {
      return self.parentNode.remove();
    });
    predicates.requiredAutors.splice(predicates.requiredAutors.indexOf(autorName), 1);
    return updateResults();
  };

  document.deleteFileTypeFilter = function (self, fileTypeName) {
    var index;
    $(self.parentNode).animate({
      opacity: 0
    }, 300, function () {
      return self.parentNode.remove();
    });
    index = predicates.requiredFileTypes.findIndex(function (i) {
      return i.name === fileTypeName;
    });
    predicates.requiredFileTypes.splice(index, 1);
    return updateResults();
  };

  document.filterByType = function (self) {
    var filterDiv, requiredFileType;
    requiredFileType = parseFileType(self.innerText);
    predicates.requiredFileTypes.push(requiredFileType);
    filterDiv = document.getElementById("filter");
    filterDiv.innerHTML += " " + makeFilterPanelWithColor("\u0422\u0438\u043F: ".concat(requiredFileType.name), requiredFileType.color, "document.deleteFileTypeFilter(this, \"".concat(requiredFileType.name, "\")"));
    return updateResults();
  };

  document.filterByTypeName = function (self) {
    var filterDiv, requiredFileType;
    requiredFileType = parseFileType(self);
    predicates.requiredFileTypes.push(requiredFileType);
    filterDiv = document.getElementById("filter");
    filterDiv.innerHTML += " " + makeFilterPanelWithColor("\u0422\u0438\u043F: ".concat(requiredFileType.name), requiredFileType.color, "document.deleteFileTypeFilter(this, \"".concat(requiredFileType.name, "\")"));
    return updateResults();
  };

  searchInputChanged = function searchInputChanged(event) {
    var searchInput;
    searchInput = document.getElementById("search-input");
    predicates.searchText = searchInput.value;
    return updateResults();
  };

  document.getElementById("switch-1").addEventListener("change", stateChanged);
  document.getElementById("search-input").addEventListener("change", searchInputChanged);
}).call(void 0);