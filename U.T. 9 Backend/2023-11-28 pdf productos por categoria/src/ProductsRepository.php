<?php

class ProductsRepository {
    private $connection = NULL;

    public function __construct($server, $user, $password, $database) {
        $this->server = $server;
        $this->user = $user;
        $this->password = $password;
        $this->database = $database;
    }


    private function connect() {
        $this->connection = new mysqli($this->server, $this->user, $this->password, $this->database);
    }


    public function retrieveProducts() {
        $this->connect();
        $cursor = $this->connection->query('select * from products');

        $products = Array();
        while ($product = $cursor->fetch_assoc()) {
            array_push($products, $product);
        }

        $cursor->free();
        $this->connection->close();

        return $products;
    }


    public function retrieveCategories() {
        $this->connect();
        $cursor = $this->connection->query('select * from product_categories');

        $categories = Array();
        while ($category = $cursor->fetch_assoc()) {
            array_push($categories, $category);
        }

        $cursor->free();
        $this->connection->close();

        return $categories;
    }


    public function retrieveProductsByCategory($categoryId) {
        $this->connect();
        $cursor = $this->connection->query("select * from products where category_id = $categoryId");

        $products = Array();
        while ($product = $cursor->fetch_assoc()) {
            array_push($products, $product);
        }

        $cursor->free();
        $this->connection->close();

        return $products;
    }
}