(function(Components) {
  // bg component
  var bgComponent = function($element, options) {
    $element.css('background', options.background);
  };
  Components.register("bg", bgComponent);

  // text component
  var textComponent = function($element, options) {
    $element.css('color', options.color);
  };
  Components.register("text", textComponent);
})(Components);
