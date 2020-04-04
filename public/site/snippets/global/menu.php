
<nav class="menu">
<ul class="menu-list">

<?php
$sitemenu = $site->menu()->toStructure();
foreach ($sitemenu as $menu):

$link = $menu->link()->toLinkObject();
$active = '';
if ($link->type() == 'page') {
    $active = ($site->find($menu->link()->toLinkObject()->value())->isOpen()) ? 'active' : ' ';
}
?>

<li class="<?= $active ?>"><?= Html::a($link->url(), $link->title(), ['title' => $link->title(), 'class' => 'btn-small']); ?></li>
<?php endforeach ?>

</ul>
</nav>
