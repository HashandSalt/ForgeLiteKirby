// ======================================================================
// Forge Lite <https://hashandsalt.com | <hello@hashandsalt.com>
// ======================================================================

let mix = require('laravel-mix');


// ======================================================================
// Mix Settings
// ======================================================================

// Copy Files
// ======================================================================

mix.copyDirectory('src/fonts', 'public/assets/fonts');
mix.copyDirectory('src/images/single', 'public/assets/images');

// BrowserSync
// ======================================================================
mix.browserSync({
  proxy: 'http://forgelite.test',
  files: [
    "public/assets/js/**/*.js",
    "public/assets/css/**/*.css",
    "public/site/templates/*.php",
    "public/site/snippets/**/*.php",
    "public/site/plugins/**/*.php",
    "public/content/**/*.txt"
  ],
  notify: true
})

// Javascript
// ======================================================================
mix.js('src/js/site.js', 'public/assets/js').sourceMaps(true, 'source-map');

// SASS
// ======================================================================

mix.sass('src/sass/site.scss', 'public/assets/css', {
    sassOptions: {
        includePaths: ["node_modules/@slateengine/slatesass/", "node_modules/@slateengine/slatesasskits/"]
    }
}).sourceMaps(true, 'source-map');

// ======================================================================
// Mix Options
// ======================================================================
mix.options({
  processCssUrls: false,
  postCss: [],

})

// ======================================================================
// Custom Webpack Config
// ======================================================================
mix.webpackConfig({
  plugins: []
});
