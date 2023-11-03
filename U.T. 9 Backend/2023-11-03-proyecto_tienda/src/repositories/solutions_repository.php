<?php


function retrieveProducts() {
    $connection = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
    if ($connection->connect_errno) {
        throw new Exception("($connection->connect_errno) $connection->connect_error");
    }

    $cursor = $connection->query("SELECT * FROM products");

    $products = Array();
    while ($product = $cursor->fetch_assoc()) {
        array_push($products, $product);
    }
    $cursor->free();
    $connection->close();

    return $products;
}


function retrieveProductById($id) {
    $connection = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
    if ($connection->connect_errno) {
        throw new Exception("($connection->connect_errno) $connection->connect_error");
    }

    $cursor = $connection->query("SELECT * FROM products WHERE product_id = $id");

    if ($product = $cursor->fetch_assoc()) {
        $cursor->free();
        $connection->close();
        return $product;    
    } else {
        $cursor->free();
        $connection->close();
        throw new Exception("Not exists product with id $id");
    }
}