<?php
error_reporting(E_ERROR | E_PARSE | E_NOTICE);

require_once('../repositories/config.php');
require_once('../repositories/SolutionsRepository.php');

header ("Content-type: application/json; charset=utf-8"); 
header("Access-Control-Allow-Origin: *");

if ($_SERVER["REQUEST_METHOD"] != 'GET' && $_SERVER["REQUEST_METHOD"] != 'POST') {
    header('HTTP/ 400 Request method not supported');
    echo json_encode(array(
        'ok' => false,
        'message' => 'Request method not supported'
    ));
    exit;
}

switch($_SERVER["REQUEST_METHOD"]) {
    case 'GET':
        processGetRequest();
        break;
    case 'POST':
        processPostRequest();
        break;
}


function processGetRequest() {
    if (isset($_GET['product_id'])) {
        retrieveProductById($_GET['product_id']);
    } else {
        retrieveProducts();
    }
}


function retrieveProducts() {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $products = $repository->retrieveProducts();

        header('HTTP/ 200 Products retrieved');
        echo json_encode(array(
            'ok' => true,
            'products' => $products
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 500 Cannot retrieve products');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}


function retrieveProductById(int $id) {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $product = $repository->retrieveProductById($id);
        
        if (is_null($product)) {
            header('HTTP/ 404 Cannot retrieve product');
            echo json_encode(array(
                'ok' => false,
                'message' => "Not exists product with id $id"
            ));
            exit;
        }

        header('HTTP/ 200 Products retrieved');
        echo json_encode(array(
            'ok' => true,
            'product' => $product
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 500 Cannot retrieve product');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}


function processPostRequest() {
    createProduct(
        $_POST["product_name"],
        $_POST["description"],
        $_POST["standard_cost"],
        $_POST["list_price"],
        $_POST["category_id"]
    );
}


function createProduct(
    string $productName,
    string $description,
    float $standardCost,
    float $listPrice,
    int $categoryId
) {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $products = $repository->createProduct(
            $productName,
            $description,
            $standardCost,
            $listPrice,
            $categoryId
        );
        header('HTTP/ 200 Product created');
        echo json_encode(array(
            'ok' => true,
            'message' => 'Product created'
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 400 Cannot create product');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}