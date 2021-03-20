<?php

defined('DS') or define('DS', '/');

Kirby::plugin('schnti/cachebuster', [
	'options'    => [
		'active' => true
	],
	'components' => [
		'css' => function ($kirby, $url) {

			if ($kirby->option('schnti.cachebuster.active')) {

				$file = $kirby->roots()->index() . DS . $url;
				return dirname($url) . '/' . F::name($url) . '.' . F::modified($file) . '.css';

			} else {
				return $url;
			}
		},
		'js'  => function ($kirby, $url) {

			if ($kirby->option('schnti.cachebuster.active')) {

				$file = $kirby->roots()->index() . DS . $url;
				return dirname($url) . '/' . F::name($url) . '.' . F::modified($file) . '.js';

			} else {
				return $url;
			}
		}
	]
]);
