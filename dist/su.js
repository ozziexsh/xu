(function() {

  window.su = function(selector) {
    // Allows calling of su without the 'new' keyword
    if (this instanceof su) {
      this.el = document.querySelectorAll(selector);
    } else {
      return new su(selector);
    }
  };

  su.prototype.css = function(styles) {
    for (var property in styles) {
      this.el.style[property] = styles[property];
    }
  };

  su.prototype.setClass = function(cl) {
    this.el.className = cl;
  };

  su.prototype.appendClass = function(cl) {
    this.el.className += ' ' + cl;
  };

  su.prototype.hasClass = function(cl) {
    if (this.el.className.indexOf(cl) > -1) {
      return true;
    } else {
      return false;
    }
  };

  su.prototype.on = function(event, callback) {
    this.el.addEventListener(event, callback);
  };

  su.prototype.attr = function(attributes) {
    // Getter
    if (typeof attributes == 'string') {
      return this.el[attributes];
    }
    // Setter
    for (var attribute in attributes) {
      this.el[attribute] = attributes[attribute];
    }
  };

  su.prototype.text = function(text) {
    this.el.innerHTML = text;
  };
})();
