<footer>
  <div class="footer-inner">  
    <div class="menu"><?= snippet('global/menu') ?></div>
    <div class="copy"> <p>&copy; <?= $site->title() ?> <?= e(date("Y") == '2020', '2020 - ' . date("Y"), '2020') ?></p></div>
</div>
</footer>

<?= js('assets/js/site.js') ?>