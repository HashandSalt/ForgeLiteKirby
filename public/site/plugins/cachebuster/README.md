# Cachebuster plugin

A plugin for [Kirby 3 CMS](http://getkirby.com) to add modification timestamps to your css and js files, as long as they are embedded with the css() and js() helpers.

Please note that this plugin doesn't add caching headers to your CSS and JS files. To make proper use of this plugin, you need to add caching rules to your server configuration.

## Commercial Usage

This plugin is free but if you use it in a commercial project please consider

- [making a donation](https://www.paypal.me/schnti/5) or
- [buying a Kirby license using this affiliate link](https://a.paddle.com/v2/click/1129/48194?link=1170)


## Installation

### Download

[Download the files](https://github.com/schnti/kirby3-cachebuster/archive/master.zip) and place them inside `site/plugins/cachebuster`.

### Composer

```
composer require schnti/cachebuster
```

### Git Submodule
You can add the plugin as a Git submodule.

    $ cd your/project/root
    $ git submodule add https://github.com/schnti/kirby3-cachebuster.git site/plugins/cachebuster
    $ git submodule update --init --recursive
    $ git commit -am "Add Kirby Cachebuster plugin"

Run these commands to update the plugin:

    $ cd your/project/root
    $ git submodule foreach git checkout master
    $ git submodule foreach git pull
    $ git commit -am "Update submodules"
    $ git submodule update --init --recursive

## Options

You can disable the plugin with the following line in your `/site/config/config.php`:

```php
return [
  'schnti.cachebuster.active' => true (default),
];
```


## How to use it

### htaccess rules for Apache

To make this plugin work on Apache you must add the following lines to your htaccess file:

```
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.+)\.(\d+)\.(js|css)$ $1.$3 [L]
```


