// Generated by CoffeeScript 2.5.1
(function() {
  var onCloseClick, onScrollTopClick;

  onCloseClick = function() {
    window.history.go(-1);
    return false;
  };

  onScrollTopClick = function() {
    document.body.scrollTop = 0; // For Safari
    return document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  document.getElementById("close-btn").addEventListener("click", onCloseClick);

  document.getElementById("scrollTop-btn").addEventListener("click", onScrollTopClick);

}).call(this);
