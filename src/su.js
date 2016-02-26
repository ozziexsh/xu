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
    for(var i=0;i<this.el[i].length;i++) {
      for (var property in styles) {
        this.el[i].style[property] = styles[property];
      }
    }
  };

  su.prototype.setClass = function(cl) {
    for(var i=0;i<this.el[i].length;i++) {
      this.el[i].className = cl;
    }
  };

  su.prototype.appendClass = function(cl) {
    for(var i=0;i<this.el[i].length;i++) {
      this.el[i].className += ' ' + cl;
    }
  };

  su.prototype.hasClass = function(cl) {
    for(var i=0;i<this.el[i].length;i++) {
      if (this.el[i].className.indexOf(cl) == -1) {
        return false; // Immediately return, no class found in the set of matched objects.
      }
    }
    return true; // Made it through the loop above without returning, all objects have said class
  };

  su.prototype.on = function(event, callback) {
    for(var i=0;i<this.el[i].length;i++) {
      this.el[i].addEventListener(event, callback);
    }
  };

  su.prototype.attr = function(attributes) {
    // Getter
    if (typeof attributes == 'string') {
      for(var i=0;i<this.el[i].length;i++) {
        return this.el[i][attributes];
      }
    }
    // Setter
    for (var attribute in attributes) {
      for(var i=0;i<this.el[i].length;i++) {
        this.el[i][attribute] = attributes[attribute];
      }
    }
  };

  su.prototype.text = function(text) {
    for(var i=0;i<this.el[i].length;i++) {
      this.el[i].innerHTML = text;
    }
  };
})();
