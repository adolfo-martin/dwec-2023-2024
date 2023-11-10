<?php
class SolutionsRepository {
    private $connection = NULL;


    public function __construct(string $server, string $user, string $password, string $database) {
        $this->server = $server;
        $this->user = $user;
        $this->password = $password;
        $this->database = $database;
    }

    
    private function connect() {
        $connection = new mysqli($this->server, $this->user, $this->password, $this->database);
        if ($connection->connect_errno) {
            $this->connection = NULL;
            $message = "($connection->connect_errno) $connection->connect_error";
            throw new SolutionsRepositoryException($message);
        }

        $this->connection = $connection;
    }


    public function retrieveProducts() {
        $this->connect();
        $cursor = $this->connection->query('SELECT * FROM products');

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
        $cursor = $this->connection->query('SELECT * FROM product_categories');

        $categories = Array();
        while ($category = $cursor->fetch_assoc()) {
            array_push($categories, $category);
        }

        $cursor->free();
        $this->connection->close();

        return $categories;
    }


    public function retrieveProductById(int $id) {
        $this->connect();
        $cursor = $this->connection->query("SELECT * FROM products WHERE product_id = $id");
    
        if ($product = $cursor->fetch_assoc()) {
            $cursor->free();
            $this->connection->close();
            return $product;    
        } else {
            return NULL;
        }
    }


    public function createProduct(
        string $productName,
        string $description,
        float $standardCost,
        float $listPrice,
        int $categoryId
    ) {
        $this->connect();

        $cursor = $this->connection->query("SELECT max(product_id) as max_id FROM products");        
        $maxId = $cursor->fetch_assoc()['max_id'];
        $cursor->free();
        $productId = $maxId + 1;

        $sql = "INSERT INTO products (product_id, product_name, description,
            standard_cost, list_price, category_id) 
            VALUES ($productId, '$productName', '$description', $standardCost,
                $listPrice, $categoryId)";
        $this->connection->query($sql);

        $this->connection->close();
    }


    public function updateProduct(
        int $productId,
        string $productName,
        string $description,
        float $standardCost,
        float $listPrice,
        int $categoryId
    ) {
        $this->connect();

        $sql = "UPDATE products
            SET  product_name = '$productName', description = '$description',
            standard_cost = $standardCost, list_price = $listPrice, category_id = $categoryId
            WHERE product_id = $productId
        ";
        
        $this->connection->query($sql);

        $this->connection->close();
    }


    public function deleteProductById(int $id) {
        $this->connect();
        $sql = "DELETE FROM products WHERE product_id = $id";
        $this->connection->query($sql);    
        $this->connection->close();
    }
}


class SolutionsRepositoryException extends Exception {
    public function __construct($message = "", $code = 0) {
        parent::__construct($message, $code);
    }
}