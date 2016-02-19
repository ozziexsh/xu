(function() {
  function su(selector) {
    // Allows calling of su without the 'new' keyword
    if (this instanceof su) {
      this.el = document.querySelector(selector);
    } else {
      return new su(selector);
    }
  }

  module.exports = su;
})();
