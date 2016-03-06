(function() {
  var xu = (function() {
    var xu = function(selector) {
      // Allows calling of xu without the 'new' keyword
      if (this instanceof xu) {
        if(typeof selector == 'object') {
          // Constructor was passed a HTML Node,
          // Manually assign this.el as an array containing the single Node,
          // so as to emulate the results of document.querySelectorAll()
          this.el = [selector];
          return this;
        } else {
          this.el = document.querySelectorAll(selector);
        }
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
    };

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
      var currentText = [];
      for(var i=0;i<this.el.length;i++) {
        // if text is undefined then we are calling as a 'getter' so
        // lets store an array of all of the elements text and return it to
        // the user
        if (typeof text == 'undefined') {
          currentText.push(this.el[i].innerHTML);
        } else {
          this.el[i].innerHTML = text;
        }
      }

      // Return just the first result if there is only one
      if (currentText.length == 1) {
        return currentText[0];
      } else if (currentText.length > 1) {
        return currentText;
      }
    };

    xu.prototype.each = function(callback) {
      for (var i = 0; i < this.el.length; i++) {
        // How to return instance of xu element???
        callback(i, this.el[i]);
      }
    };

    xu.ajax = function(options) {
      return new Promise(function(resolve, reject) {
        var http = new XMLHttpRequest();

        http.open(options.method.toUpperCase(), options.url, true);

        http.onreadystatechange = function() {
          if (http.readyState == XMLHttpRequest.DONE) {
            if (http.status == 200) {
              resolve(JSON.parse(http.responseText));
            } else {
              reject(Error('Server responded with a status of: ' + http.status));
            }
          }
        };

        // So we're not sending an undefined dataset to the server
        options.data = options.data || '';

        // If the request type is post
        // set header to default data type of json
        if (options.method.toUpperCase() == 'POST') {
          http.setRequestHeader('Content-type', 'application/json');
          options.data = JSON.stringify(options.data);
        }

        // Set all headers
        if (options.headers) {
          xu.each(options.headers, function(key, value) {
            http.setRequestHeader(key, value);
          });
        }

        http.send(options.data);
      });
    };

    xu.get = function(url) {
      return xu.ajax({
        method: 'GET',
        url: url
      });
    };

    xu.post = function(url, data, headers) {
      return xu.ajax({
        method: 'POST',
        url: url,
        data: data,
        headers: headers
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
