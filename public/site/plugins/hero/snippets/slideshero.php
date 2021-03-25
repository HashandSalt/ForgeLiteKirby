<div id="hero" class="<?= $herosize ?>">
    <div <?= $herotintstyle ?> class="hero-media slides <?= $herotint?>">
        <div class="hero-slider">
        <?php foreach ($heroimages as $slide): ?>
          <div>
            <?php snippet('hero/webp', ['sizes' => [1920, 1140, 768], 'src' => $slide, 'type' => 'jpg', 'class' => 'slide-wrapper', 'width' => 920, 'height' => 720]); ?>
          </div>
        <?php endforeach; ?>
        </div>
    </div>
    <?= snippet('hero/content')?>
</div>
