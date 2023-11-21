<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/ProductsRepository.php';


$repository = new ProductsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
$products = $repository->retrieveProducts();

echo var_dump($products);