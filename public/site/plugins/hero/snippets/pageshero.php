<div id="hero" class="<?= $herosize ?>">
    <div class="hero-media slides ">

              <div class="hero-slider">

              <?php foreach ($heropages as $heropage): ?>

                <?php $feature = $heropage->images()->filterby('feature', true)->first(); ?>

                <div>
                  <div class="slide-inner">
                    <div <?= $herotintstyle ?> class="slide-media <?= $herotint ?>">
                      <?php snippet('hero/webp', ['sizes' => [1920, 1140, 640], 'src' => $feature, 'type' => 'jpg', 'class' => 'slide-wrapper', 'width' => 1920, 'height' => 1200]); ?>
                    </div>
                    <div class="slide-detail">
                      <div class="container">
                        <a href="<?= $heropage->url() ?>">
                        <h1> <?= $heropage->title() ?> </h1>
                        <?= $heropage->seometa()->kt() ?>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>

              <?php endforeach; ?>
              </div>

    </div>

    <div class="hero-content header-inside">
      <?= snippet('global/header')?>
    </div>

</div>
