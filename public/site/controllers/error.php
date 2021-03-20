<?php

return function ($page, $kirby, $site) {

  // SEO
  $seo = $kirby->controller('seo' , compact('page', 'site', 'kirby'));

  return $seo;

};
