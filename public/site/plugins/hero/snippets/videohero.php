<div id="hero" class="<?= $herosize ?>">
    <div class="hero-media video">
      <div class="video-wrapper hero-tint" <?= $herotintstyle ?>>
        <video id="videobox" playsinline muted autoplay loop poster="<?= $heroposter->url() ?>">
          <source src="<?= $herovideo->url() ?>" type="video/mp4">
          <a href="<?= $herovideo->url() ?>"><img src="<?= $heroposter->url() ?>" alt="<?= $heroposter->alt() ?>"></a>
        </video>
      </div>
    </div>
    <?= snippet('hero/content')?>
</div>
