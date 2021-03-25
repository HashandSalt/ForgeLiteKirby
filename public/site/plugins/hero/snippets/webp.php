<?php
$webp = $src->toWebp();
$variants = $src->toVariants()->filterBy('extension', '!=', 'webp');
$source = $src->toSource();
?>

<picture class="<?= $class ?>">

    <?php foreach ($sizes as $max): ?>


        <source
            media="(min-width: <?=$max?>px)"
            type="image/webp"


            srcset="<?=
              $webp->focusSrcset([
                $max . 'w' => [
                    'width' => $max,
                    'height' => ($max / 16) * 9,
                ],
              ]);
            ?>"

            alt="<?=$webp->alt()?>"
        />
    <?php endforeach?>

    <?php foreach ($variants as $variant): ?>
        <?php foreach ($sizes as $max): ?>
            <source
                media="(min-width: <?=$max?>px)"
                type="image/<?=$variant->extension()?>"

                srcset="<?=
                  $variant->focusSrcset([
                    $max . 'w' => [
                        'width' => $max,
                        'height' => ($max / 16) * 9,
                    ],
                  ]);
                ?>"

                alt="<?=$variant->alt()?>"
            />
        <?php endforeach?>
    <?php endforeach?>




    <img
      src="<?= $source->focusCrop($width, $height)->url() ?>"
      alt="<?=$source->alt()?>"
      srcset="<?=$source->focusSrcset([

          '1920w' => [
              'width' => 1920,
              'height' => 1080,
          ],
          '1140w' => [
              'width' => 1140,
              'height' => 641,
          ],
          '640w' => [
              'width' => 640,
              'height' => 360,
          ]
        ]);
      ?>"
    >

</picture>
