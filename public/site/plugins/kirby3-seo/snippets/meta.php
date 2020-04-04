<!-- META TAGS -->

<?= Html::tag('title', [$metatitle]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "description", "content" => $metadesc]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "keywords", "content" => $metakeywords]).PHP_EOL ?>

<?= Html::tag('meta', null, ["name" => "og:title", "content" => $metatitle]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "og:type", "content" => $metafbtype]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "og:sitename", "content" => $metafbsitename]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "og:url", "content" => $metaurl]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "og:image", "content" => $metaimage ]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "og:description", "content" => $metadesc]).PHP_EOL ?>

<?= Html::tag('meta', null, ["name" => "twitter:title", "content" => $metatitle]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "twitter:card", "content" => $metatwcard]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "twitter:site", "content" => $metatwsite]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "twitter:creator", "content" => $metatwcreator]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "twitter:image", "content" => $metaimage ]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "twitter:url", "content" => $metaurl]).PHP_EOL ?>
<?= Html::tag('meta', null, ["name" => "twitter:description", "content" => $metadesc]).PHP_EOL ?>

<?= Html::tag('meta', null, ["name" => "robots", "content" => $metarobots]).PHP_EOL ?>
