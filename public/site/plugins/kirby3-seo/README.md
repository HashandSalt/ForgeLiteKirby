# Kirby 3 SEO Plugin

A small plugin for generating meta data using shared controllers and field data. Also creates Facebook Opengraph and Twitter social sharing information.

## Installation

### Manual

To use this plugin, place all the files in `site/plugins/kirby3-seo`.

### Composer

```
composer require hashandsalt/kirby3-seo
```
****

## Commerical Usage

This plugin is free but if you use it in a commercial project please consider to
- [make a donation 🍻](https://paypal.me/hashandsalt?locale.x=en_GB) or
- [buy a Kirby license using this affiliate link](https://a.paddle.com/v2/click/1129/36141?link=1170)

****

## Usage

After installing the plugin, setup controllers to bring in the shared SEO controller into each of your template
controllers.

The bare minimum controller looks like this:

```
<?php

return function ($page, $kirby, $site) {

  // SEO
  $seo = $kirby->controller('seo' , compact('page', 'site', 'kirby'));

  return $seo;

};
```

To override any of the values, you can do this inside your controller. For example, to change the format of the meta title, you could do this:

```
<?php

return function ($page, $kirby, $site) {

  // Meta
  $seo = $kirby->controller('seo' , compact('page', 'site', 'kirby'));

  // Override Meta Title
  $metatitle = $page->seotitle().' | '.$site->title();

  $data = compact('metatitle');

  return a::merge($seo, $data);

};

```

Additionally, you need to populate the pages with information that is needed for the meta tags to be filled out correctly. The plugin contains blueprints for this and are meant to be used as tabs in your pages:

```
title:     Default

tabs:

  # SEO META
  meta: tabs/seo/meta

```

In the `site.yml` also setup the contact tab which will capture social media account information.

```
title:     Site

tabs:

  # Contact
  contact: tabs/seo/contact
```

Finally, output the meta tags in your templates with the following snippet.

```
<?= snippet('seo/meta') ?>
```

For convenience the plugin also contains a favicon snippet:

```
<?= snippet('seo/favicon') ?>
```

You can generate the favicons at [this website link](https://realfavicongenerator.net/)


## Generating JSON Schema data

To generate any kind of schema data, you can use our [Schema plugin](https://github.com/HashandSalt/kirby3-schema) in tandem with this plugin.
