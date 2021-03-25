// ======================================================================
// Forge Lite | hello@hashandsalt.com
// ======================================================================

// window.$ = window.jQuery = require('jquery');

// ======================================================================
// Modules
// ======================================================================

// require any further scripts here ie:
// require('npmpackagename');
// require('./mylocalfile.js');

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