<?php

Kirby::plugin('hashandsalt/kirby3-forge', [
  'siteMethods' => [
      'sitemenu' => function ($btnclass = 'btn-small', $activeclass = 'active') {
          $sitemenu = $this->menu()->toStructure();
          $menulist = '';
          foreach ($sitemenu as $menu) {
            $link = $menu->link()->toLinkObject();
            $active = '';
            if ($link->type() == 'page') {
                $active = ($this->find($menu->link()->toLinkObject()->value())->isOpen()) ? $activeclass : '';
            }
            $link = Html::a($link->url(), $link->title(), ['title' => $link->title(), 'class' => $btnclass]);
            $li = Html::tag('li', [$link], ['class' => $active]);
            $menulist .= $li;
          }
          return $menulist;
      }
  ]
]);
