<?php
error_reporting(E_ERROR | E_PARSE | E_NOTICE);

require_once('../repositories/config.php');
require_once('../repositories/SolutionsRepository.php');

header ("Content-type: application/json; charset=utf-8"); 
header("Access-Control-Allow-Origin: *");

if (
    $_SERVER["REQUEST_METHOD"] != 'GET' && 
    $_SERVER["REQUEST_METHOD"] != 'POST' &&
    $_SERVER["REQUEST_METHOD"] != 'PUT' &&
    $_SERVER["REQUEST_METHOD"] != 'DELETE'
) {
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
    case 'PUT':
        processPutRequest();
        break;
    case 'DELETE':
        processDeleteRequest();
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
    if (
        !isset($_POST["product_name"]) ||
        !isset($_POST["description"]) ||
        !isset($_POST["standard_cost"]) ||
        !isset($_POST["list_price"]) ||
        !isset($_POST["category_id"])
    ) {
        header('HTTP/ 400 Cannot create product');
        echo json_encode(array(
            'ok' => false,
            'message' => 'Data to create a product is not completed'
        ));
        exit;
    }

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
        $repository->createProduct(
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


function processPutRequest() {
    parse_str(file_get_contents('php://input'), $_PUT);

    if (
        !isset($_PUT["product_id"]) ||
        !isset($_PUT["product_name"]) ||
        !isset($_PUT["description"]) ||
        !isset($_PUT["standard_cost"]) ||
        !isset($_PUT["list_price"]) ||
        !isset($_PUT["category_id"])
    ) {
        header('HTTP/ 400 Cannot update product');
        echo json_encode(array(
            'ok' => false,
            'message' => 'Data to update a product is not completed'
        ));
        exit;
    }

    updateProduct(
        $_PUT["product_id"],
        $_PUT["product_name"],
        $_PUT["description"],
        $_PUT["standard_cost"],
        $_PUT["list_price"],
        $_PUT["category_id"]
    );
}


function updateProduct(
    int $productId,
    string $productName,
    string $description,
    float $standardCost,
    float $listPrice,
    int $categoryId
) {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $repository->updateProduct(
            $productId,
            $productName,
            $description,
            $standardCost,
            $listPrice,
            $categoryId
        );
        header('HTTP/ 200 Product updated');
        echo json_encode(array(
            'ok' => true,
            'message' => 'Product updated'
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 400 Cannot update product');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}


function processDeleteRequest() {
    if (!isset($_GET["product_id"])) {
        header('HTTP/ 400 Cannot delete product');
        echo json_encode(array(
            'ok' => false,
            'message' => 'Identifier of product is missing'
        ));
        exit;
    }

    deleteProduct($_GET["product_id"]);
}


function deleteProduct(int $productId) {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $repository->deleteProductById($productId);
        header('HTTP/ 200 Product deleted');
        echo json_encode(array(
            'ok' => true,
            'message' => 'Product deleted'
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 400 Cannot delete product');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}