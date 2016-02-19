# su.js

A lightweight javascript library to do basic DOM updates inspired by jQuery

## Usage

Simply include su.js in your html file

```html
<script src="su.js"></script>
```

and reference `su` in your javascript

    // Gives you the element
    var nav = su('.nav');

    // Can also be accessed dynamically (no variable declaration)
    su('#dropdown').css({
      'display': 'block'
    });


## Documentation

su.js is currently in development. Below are a list of all the available functions

### su

Returns the specified DOM object

Usage:

    su(selector);

Example:

    su('.nav');
    su('#nav');
    su('[data-nav]');

### css

Add styling to an element

Usage:

    su(selector).css(properties: object);

Example:

    su('.nav').css({
      'display': 'block',
      'position': 'relative',
      'top': '50px',
      'background': 'green'
    });

### setClass

Override the elements class names with the ones provided

Usage:

    su(selector).setClass(classes: string);

Example:

    su('.nav').setClass('nav navbar-default');

### appendClass

Append to the elements class names (not overriding)

Usage:

    su(selector).appendClass(classes: string);

Example:

    su('.nav').setClass('navbar-default navbar-static');
