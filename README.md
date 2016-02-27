# xu.js

A lightweight (4KB!) javascript library to do basic DOM updates, and ajax calls (GET/POST)

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

Replaces the text of the element

Usage:

```javascript
xu(selector).text(newText: string)
```

Example:

```javascript
xu('.alert').text('Be careful!');
```

## ajax

Basic GET/POST ajax calls. Returns a promise. Called without function parameters on xu (no brackets)

Usage:

```javascript
xu.ajax(method: string, url: string, data: object).then(success: function, error: function);
```

Example:

```javascript
xu.ajax('GET', 'https://reddit.com/.json')
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });

xu.ajax('POST', 'http://example.com/api/login', {username: 'joe', password: 'bob'})
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
```
