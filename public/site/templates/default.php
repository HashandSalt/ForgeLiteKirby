<?= snippet('global/htmlhead')?>
<?= snippet('global/header')?>

<div class="container">
  <h1><?= $page->title() ?></h1>
  <?= $page->pagetext()->kt() ?>
</div>

<?= snippet('global/footer')?>
