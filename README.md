# su.js

A lightweight (4KB!) javascript library to do basic DOM updates, and basic ajax calls (GET/POST) 

Inspired by jQuery

## Usage

Simply include su.js in your html file

```html
<script src="su.js"></script>
```

and reference `su` in your javascript

```javascript
// Gives you the element
var nav = su('.nav');

// Can also be accessed dynamically (no variable declaration)
su('#dropdown').css({
  'display': 'block'
});
```

# Developing

su.js uses gulp to build

After making changes in `src/su.js` run

    gulp build

And see changes reflected in `dist/`

# Documentation

su.js is currently in development. Below are a list of all the available functions

## su

Returns an array of all elements matching the selector

Usage:

```javascript
su(selector);
```

Example:

```javascript
su('.nav');
su('#nav');
su('[data-nav]');
```

## css

Add styling to an element

Usage:

```javascript
su(selector).css(properties: object);
```

Example:

```javascript
su('.nav').css({
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
su(selector).setClass(classes: string);
```

Example:

```javascript
su('.nav').setClass('nav navbar-default');
```

## appendClass

Append to the elements class names (not overriding)

Usage:

```javascript
su(selector).appendClass(classes: string);
```

Example:

```javascript
su('.nav').setClass('navbar-default navbar-static');
```

## removeClass

Removes the class specified from the selected element

Usage:

```javascript
su(selector).removeClass(className: string);
```

Example:

```javascript
su('img').removeClass('img-responsive');
```

## attr

When passed a string, returns the attribute of the element specified

When passed an object, sets the attributes specified on the element

Usage:

```javascript
su(selector).attr(attributeName: string);

su(selector).attr(attributes: object);
```

Example:

```javascript
su('img').attr('src'); //returns src attribute i.e 'img/grass.png'

su('img').attr({
  src: 'img/water.png'
});
```

## text

Replaces the text of the element

Usage:

```javascript
su(selector).text(newText: string)
```

Example:

```javascript
su('.alert').text('Be careful!');
```

## ajax

Basic GET/POST ajax calls. Returns a promise. Called without function parameters (no brackets)

Usage:

```javascript
su.ajax(method: string, url: string, data: object).then(success: function, error: function);
```

Example:

```javascript
su.ajax('GET', 'https://reddit.com/.json')
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });

su.ajax('POST', 'http://example.com/api/login', {username: 'joe', password: 'bob'})
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
```
