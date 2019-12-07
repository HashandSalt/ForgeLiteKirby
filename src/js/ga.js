// ======================================================================
// Tracking
// ======================================================================

let galite = require('ga-lite');

// ======================================================================
// Google Analytics
// ======================================================================

// console.log(location.hostname);

host = location.hostname;
pattern = /(dev)|(test)|(localhost)/;

if (!host.match(pattern)) {

  // console.log('live domain');

  galite('create', 'UA-XXXXXXXXX-1', 'auto');
  galite('send', 'pageview');

  window.addEventListener(
    'unload',
    function() {
      galite('send', 'timing', 'JS Dependencies', 'unload')
    }
  )
} else {
  // console.log('test domain');
}
