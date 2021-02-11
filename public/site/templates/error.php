<?= snippet('global/htmlhead')?>


<div class="wrapper">

  <?= snippet('global/header')?>

  <main class="container">
    <h1><?= $page->title() ?></h1>
    <?= $page->pagetext()->kt() ?>
  </main>

  <?= snippet('global/footer')?>

</div>

</body>
</html>

