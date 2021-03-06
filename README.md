# hovimg-z
A jquery plugin that changes the source of an image upon hover<br />
<br />
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Setting up hovimg-z
1. Import the [jQuery library](https://www.google.com "jQuery's CDN Page")
2. Load the hovimg-z script in your HTML after the body
```html
<script type="text/javascript" src="jquery.hovimg-z.min.js"></script>
```
3. Use the following call after loading the script to activate the plugin
```javascript
$(window).on('load', function(){
  $(document).hovimgz();
});
```
4. Add a [`<img>`](https://www.w3schools.com/tags/tag_img.asp "W3Schools IMG tag explenation") tag to your HTML
```html
<img class="hovimg-z" src="foo/bar.jpg" data-hovimgz="bar/someotherimage.jpg">
```
| Attribute       | Description                                       |
| --------------- | ------------------------------------------------- |
| `class`         | Used to identify the images that are hoverable    |
| `src`           | Default image to show when not hovered on         |
| `data-hovimgz`  | Path of image to display upon hover               |
## Changing defaults
1. Use JSON to change the options
    1. Example of changing the image selector class and fadeTime:
        ```javascript
        $(document).hovimgz({
          elements: {
            selectors: {
              image: '.hoverImage',
            }
          },
          fadeTime: 125
        });
        ```
### Available options

| Option                     | Description                                                          | Default value |
| -------------------------- | -------------------------------------------------------------------- | ------------- |
| `elements.selectors.image` | The selector used to identify the images that are hoverable          | `.hovimg-z`   |
| `fadeTime`                 | The speed at which the fade effect is carried out (in milliseconds)  | `125`         |
---
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
