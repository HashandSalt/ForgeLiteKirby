<?php

return function ($page, $kirby, $site) {

  // SEO
  $seo = $kirby->controller('seo' , compact('page', 'site', 'kirby'));

  // Override Meta Title
  $metatitle = $page->seotitle().' | '.$site->title();

  $data = compact('metatitle');

  return array_merge($seo, $data);

};
