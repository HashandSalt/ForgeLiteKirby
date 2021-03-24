<?php

@include_once __DIR__ . '/vendor/autoload.php';

Kirby::plugin('hashandsalt/hero', [

    'snippets' => [
      'hero/hero'       => __DIR__ . '/snippets/hero.php',
      'hero/color'      => __DIR__ . '/snippets/colorhero.php',
      'hero/slides'     => __DIR__ . '/snippets/slideshero.php',
      'hero/image'      => __DIR__ . '/snippets/imagehero.php',
      'hero/video'      => __DIR__ . '/snippets/videohero.php',
      'hero/pages'      => __DIR__ . '/snippets/pageshero.php',
      'hero/content'    => __DIR__ . '/snippets/herocontent.php',
      'hero/webp'       => __DIR__ . '/snippets/webp.php',
    ],

    'blueprints' => [
      'tabs/hero'    => __DIR__ . '/blueprints/tabs/hero.yml',
    ],


    'controllers' => [

        'hero' => function ($page, $kirby, $site) {
            return [

              // Type
              'herotype'        => $page->herotype(),

              // Size
              'herosize'        => $page->herosize(),

              // Tint
              'herotint'        => $page->herotint()->bool() ? 'hero-tint' : '',
              'herotintcolor'   => $page->herotintcolor(),

              'herotintstyle'   => ($page->herotintcolor()->isNotEmpty()) ? 'style="--herotintcolor: ' . $page->herotintcolor() . '"' : '',

              // Title
              'herotitle'       => $page->herotitle()->isNotEmpty() ? $page->herotitle() : $page->title(),
              'herotext'        => $page->herotext()->isNotEmpty() ? $page->herotext()->kt() : '',

              // Color Hero
              'herocolor'       => $page->herocolor()->toEntity(),

              // Slides Hero
              'heroimages'      => $page->heroslides()->toFiles(),

              // Image Hero
              'heroimage'      => $page->heroimage()->toFile(),

              // Video Hero
              'herovideo'       => $page->herovideo()->toFile(),
              'heroposter'      => $page->heroposter()->toFile(),

              // Pages Hero
              'heropages'      => $page->heropages()->toPages(),


            ];
        }
    ],

]);
