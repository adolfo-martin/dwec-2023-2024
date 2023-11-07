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
    if (isset($_GET['category_id'])) {
        retrieveCategoryById($_GET['category_id']);
    } else {
        retrieveCategories();
    }
}


function retrieveCategories() {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $categories = $repository->retrieveCategories();

        header('HTTP/ 200 Categories retrieved');
        echo json_encode(array(
            'ok' => true,
            'categories' => $categories
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 500 Cannot retrieve categories');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}


function retrieveCategoryById(int $id) {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $category = $repository->retrieveCategoryById($id);
        
        if (is_null($category)) {
            header('HTTP/ 404 Cannot retrieve category');
            echo json_encode(array(
                'ok' => false,
                'message' => "Not exists category with id $id"
            ));
            exit;
        }

        header('HTTP/ 200 Categories retrieved');
        echo json_encode(array(
            'ok' => true,
            'category' => $category
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 500 Cannot retrieve category');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}


function processPostRequest() {
    createCategory(
        $_POST["category_name"],
        $_POST["description"],
        $_POST["standard_cost"],
        $_POST["list_price"],
        $_POST["category_id"]
    );
}


function createCategory(
    string $categoryName,
    string $description,
    float $standardCost,
    float $listPrice,
    int $categoryId
) {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $categories = $repository->createCategory(
            $categoryName,
            $description,
            $standardCost,
            $listPrice,
            $categoryId
        );
        header('HTTP/ 200 Category created');
        echo json_encode(array(
            'ok' => true,
            'message' => 'Category created'
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 400 Cannot create category');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}