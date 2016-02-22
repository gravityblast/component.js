+function() {
  'use strict';

  var $ = window.jQuery;
  if ($ == undefined) {
    throw "jQuery must be loaded before components.js"
  };

  window.Components = {
    components: {},

    register: function(name, func) {
      this.components[name] = func;
    },

    init: function() {
      var elements = $('[data-component]');
      for (var i = 0; i < elements.length; i++) {
        this.initComponent($(elements[i]));
      }
    },

    initComponent: function($element) {
      var names = $element.data("component").split(/\s+/)
      for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var component = this.components[name];
        if (component) {
          this.initializeComponent($element, component);
        }
      };
    },

    initializeComponent: function($element, component) {
      var el = $element.get(0);
      var options = {};
      for (var i = 0; i < el.attributes.length; i++) {
        var attribute = el.attributes[i];
        var matches = attribute.name.match(/^data\-component\-(.+)/);
        if (matches) {
          var name = matches[1];
          options[name] = $element.data("component-" + name);
        }
      }
      component.call(null, $element, options);
    }
  }

  $(document).on('ready page:load', function() {
    Components.init();
  });
}()
