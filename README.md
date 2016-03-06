# [xu.js](https://www.npmjs.com/package/xu)

[![npm version](https://badge.fury.io/js/xu.svg)](https://badge.fury.io/js/xu)

A lightweight (2KB!) javascript library to do basic DOM updates, and ajax calls

## Usage

Either grab `xu` from the `dist/` folder in the repo or

`npm install --save xu`

then either

`var xu = require('xu')`

(for browserify/webpack users)

or

include `xu.js` in your html file

```html
<script src="xu.min.js"></script>
```

and reference `xu` in your javascript

```javascript
// Gives you the element
var nav = xu('.nav');

// Can also be accessed dynamically (no variable declaration)
xu('#dropdown').css({
  'display': 'block'
});
```

# Developing

xu.js uses gulp to build

After making changes in `src/xu.js` run

    gulp build

And see changes reflected in `dist/`

# Documentation

xu.js is currently in development. Below are a list of all of the (currently) available functions

* css
* setClass
* appendClass
* removeClass
* hasClass
* attr
* on
* text
* ajax
* get
* post
* each

## xu

Returns an array of all elements matching the selector

Usage:

```javascript
xu(selector);
```

Example:

```javascript
xu('.nav');
xu('#nav');
xu('[data-nav]');
```

## css

Add styling to an element

Usage:

```javascript
xu(selector).css(properties: object);
```

Example:

```javascript
xu('.nav').css({
  'display': 'block',
  'position': 'relative',
  'top': '50px',
  'background': 'green'
});
```

## setClass

Override the elements class names with the ones provided

Usage:

```javascript  
xu(selector).setClass(classes: string);
```

Example:

```javascript
xu('.nav').setClass('nav navbar-default');
```

## appendClass

Append to the elements class names (not overriding)

Usage:

```javascript
xu(selector).appendClass(classes: string);
```

Example:

```javascript
xu('.nav').setClass('navbar-default navbar-static');
```

## removeClass

Removes the class specified from the selected element

Usage:

```javascript
xu(selector).removeClass(className: string);
```

Example:

```javascript
xu('img').removeClass('img-responsive');
```

## hasClass

Returns true or false if the class is present in the xu instance

Usage:

```javascript
xu(selector).hasClass(className: string)
```

Example:

```javascript
if (xu('.nav').hasClass('nav')) {
  /* the element has the class */
} else {
  /* ... */
}
```

## attr

When passed a string, returns the attribute of the element specified

When passed an object, sets the attributes specified on the element

Usage:

```javascript
xu(selector).attr(attributeName: string);

xu(selector).attr(attributes: object);
```

Example:

```javascript
xu('img').attr('src'); //returns src attribute i.e 'img/grass.png'

xu('img').attr({
  src: 'img/water.png'
});
```

## text

Replaces the text of the element, or if called without parameters returns the content of the element(s)

Usage:

```javascript
// Getter
xu(selector).text();

// Setter
xu(selector).text(newText: string);
```

Example:

```javascript
xu('.alert').text('Be careful!');

// returns 'Be careful!'
// If there are more than one '.alert' items it will return an array of strings
console.log(xu('.alert').text());
```

## ajax

Basic GET/POST ajax calls. Returns a promise. Called without function parameters on xu (no brackets)

Usage:

```javascript
xu.ajax(options: object).then(success: function, error: function);
```

Example:

```javascript
// Default header for POST request is Content-type: application/json
xu.ajax({
  method: 'get',
  url: 'https://reddit.com/.json',
  data: {

  },
  headers: {

  }
})
.then(function(response) {
  console.log(response);
}, function(error) {
  console.log(error);
});
```

## get

Shorthand for xu.ajax get request

Usage:

```javascript
xu.get(url: string).then(success: function, error: function);
```

```javascript
xu.get('https://reddit.com/.json')
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
```

## post

Shorthand for xu.ajax post request

Default Content-type of application/json

Usage:

```javascript
xu.post(url: string, data: object, headers: object).then(success: function, error: function);
```

```javascript
xu.post('http://example.com/submitForm', {username: 'joebob'}, {'Authorization', 'bearer <token>'})
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
```

## each

Iterate over arrays/objects with ease

Usage:

```javascript
xu.each(object, callback(key, value));

xu.each(array, callback(index, value));
```

Example:

```javascript
xu.each([1, 2, 3, 4, 5], function(index, value) {
  console.log(index + ': ' + value);
});

xu.each({name: 'bob', age: 32}, function(key, value) {
  console.log(key + ' = ' + value);
});
```

## xu.prototype.each

Iterate over all elements matching that query. Callback function takes an element parameter that is an instance of `xu` so all of `xu`'s
functions are accessible via that variable.

Usage:

```javascript
xu(selector: string).each(callback: function(iterator, element));
```

Example:

```javascript
xu('li').each(function(iterator, element) {
  console.log(iterator + ': ' + element.text());
});
```
