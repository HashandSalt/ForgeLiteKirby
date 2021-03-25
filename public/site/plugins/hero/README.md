*Hero* is a plugin for making hero banners using Pages, Slides, Videos, Colour Panels, and Single Images. It was built to power the hero banners on  [The Work of Others](https://theworkofothers.com/). It is a little opinionated and out of the box requires a couple of other plugins:

* [Webp](https://github.com/HashandSalt/kirby3-webp)  by **Hash&Salt**
* [Color Picker](https://github.com/TimOetting/kirby-color) by **Tim Ötting**
* [Focus Crop](https://github.com/flokosiol/kirby-focus) by **Flo Kosiol*

It was also built around [Tiny Slider](https://github.com/ganlanyuan/tiny-slider). If you use a different slider or need to amend the classes or html markup, you can do so by overriding the snippets. The CSS is up to you, but an example sass file is provided and depends on Tiny Slider. You can find this in the css folder in the plugin.

## Setting up

### Composer install

```
composer require hashandsalt/kirby3-hero
```

### Manual install

Download the files and place in `site/plugins/kirby3-hero`

## Using the plugin

For the plugin to work, it needs to added to your blueprints, controllers and templates.

### Add to your controllers

Add to each page controller you wish to use Hero on.

```
<?php
return function ($page, $kirby, $site, $tag) {

$hero = $kirby->controller('hero', compact('page', 'site', 'kirby'));

  return $hero;
};

```

### Add to your blueprints

The plugin is designed to be used as a tab in your existing blueprints by using an extend:

```
tabs:
	hero: tabs/hero
```
### Add to your templates

Finally, add it to your template:

```
<?= snippet('hero/hero')?>
```

### Initialise Tiny Slider in your build proccess

Heres how Tiny Slider is configured

```
// Tiny Slider
import {
  tns
} from 'tiny-slider/src/tiny-slider.js';

// HERO Slider
let heroslides = document.querySelectorAll('.hero-slider');

if (heroslides) {
[].forEach.call(heroslides , function(el) {
  tns({
    container: el,
    items: 1,
    slideBy: 'page',
    autoplay: true,
    mode: "gallery",
    controls: false,
    nav: false,
    speed: 500
  });
});
}
```
