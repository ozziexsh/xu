(function() {
  var xu = (function() {
    var xu = function(selector) {
      // Allows calling of xu without the 'new' keyword
      if (this instanceof xu) {
        this.el = document.querySelectorAll(selector);
      } else {
        return new xu(selector);
      }
    };

    xu.prototype.css = function(styles) {
      for(var i=0;i<this.el.length;i++) {
        for (var property in styles) {
          this.el[i].style[property] = styles[property];
        }
      }
    };

    xu.prototype.setClass = function(cl) {
      for(var i=0;i<this.el.length;i++) {
        this.el[i].className = cl;
      }
    };

    xu.prototype.appendClass = function(cl) {
      for(var i=0;i<this.el.length;i++) {
        this.el[i].className += ' ' + cl;
      }
    };

    xu.prototype.hasClass = function(cl) {
      for(var i=0;i<this.el.length;i++) {
        if (this.el[i].className.indexOf(cl) == -1) {
          return false; // Immediately return, no class found in the set of matched objects.
        }
      }
      return true; // Made it through the loop above without returning, all objects have said class
    };

    xu.prototype.classNames = function() {
      classes = [];
      for(var i=0;i<this.el.length;i++) {
        classes.push(this.el[i].className);
      }
      return classes;
    }

    xu.prototype.removeClass = function(cl) {
      for (var i = 0; i < this.el.length; i++) {
        var classes = this.el[i].className.split(' ');
        if (classes.indexOf(cl) != -1) {
          classes.splice(classes.indexOf(cl), 1);
          this.el[i].className = classes.join(' ');
        }
      }
    };

    xu.prototype.on = function(event, callback) {
      for(var i=0;i<this.el.length;i++) {
        this.el[i].addEventListener(event, callback);
      }
    };

    xu.prototype.attr = function(attributes) {
      // Getter
      if (typeof attributes == 'string') {
        for(var i=0;i<this.el.length;i++) {
          return this.el[i][attributes];
        }
      }
      // Setter
      for (var attribute in attributes) {
        for(var i=0;i<this.el.length;i++) {
          this.el[i][attribute] = attributes[attribute];
        }
      }
    };

    xu.prototype.text = function(text) {
      for(var i=0;i<this.el.length;i++) {
        this.el[i].innerHTML = text;
      }
    };

    xu.prototype.each = function(callback) {
      for (var i = 0; i < this.el.length; i++) {
        // How to return instance of xu element???
        // callback(i, this.el[i]);
      }
    };

    xu.ajax = function(method, url, data) {
      return new Promise(function(resolve, reject) {
        var http = new XMLHttpRequest();

        http.open(method.toUpperCase(), url, true);

        http.onreadystatechange = function() {
          if (http.readyState == XMLHttpRequest.DONE) {
            if (http.status == 200) {
              resolve(JSON.parse(http.responseText));
            } else {
              reject(Error('Server responded with a status of: ' + http.status));
            }
          }
        }

        if (method.toUpperCase() == 'POST') {
          http.setRequestHeader('Content-type', 'application/json')
          data = data || '';
          data = JSON.stringify(data);
        }

        http.send(data);
      });
    };

    xu.each = function(collection, callback) {
      if (typeof collection == 'array') {
        for (var i = 0; i < collection.length; i++) {
          callback(i, collection[i]);
        }
      }

      if (typeof collection == 'object') {
        for (var key in collection) {
          callback(key, collection[key]);
        }
      }
    };

    return xu;
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = xu;
  } else {
    window.xu = xu;
  }
})();
