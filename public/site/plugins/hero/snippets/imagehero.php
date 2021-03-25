<div id="hero" class="<?= $herosize ?>" >
    <div <?= $herotintstyle ?> class="hero-media image <?= $herotint ?>">
        <?php snippet('hero/webp', ['sizes' => [1920, 1140, 768], 'src' => $heroimage, 'type' => 'jpg', 'class' => 'slide-wrapper', 'width' => 1920, 'height' => 1200]); ?>
    </div>
    <?= snippet('hero/content')?>
</div>
