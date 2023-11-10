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
    if (
        !isset($_POST["category_name"]) ||
        !isset($_POST["description"]) ||
        !isset($_POST["standard_cost"]) ||
        !isset($_POST["list_price"]) ||
        !isset($_POST["category_id"])
    ) {
        header('HTTP/ 400 Cannot create category');
        echo json_encode(array(
            'ok' => false,
            'message' => 'Data to create a category is not completed'
        ));
        exit;
    }

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
        $repository->createCategory(
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


function updateCategory(
    int $categoryId,
    string $categoryName,
    string $description,
    float $standardCost,
    float $listPrice,
    int $categoryId2
) {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $repository->updateCategory(
            $categoryId,
            $categoryName,
            $description,
            $standardCost,
            $listPrice,
            $categoryId2
        );
        header('HTTP/ 200 Category updated');
        echo json_encode(array(
            'ok' => true,
            'message' => 'Category updated'
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 400 Cannot update category');
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
        !isset($_PUT["category_id"]) ||
        !isset($_PUT["category_name"]) ||
        !isset($_PUT["description"]) ||
        !isset($_PUT["standard_cost"]) ||
        !isset($_PUT["list_price"]) ||
        !isset($_PUT["category_id"])
    ) {
        header('HTTP/ 400 Cannot update category');
        echo json_encode(array(
            'ok' => false,
            'message' => 'Data to update a category is not completed'
        ));
        exit;
    }

    updateCategory(
        $_PUT["category_id"],
        $_PUT["category_name"],
        $_PUT["description"],
        $_PUT["standard_cost"],
        $_PUT["list_price"],
        $_PUT["category_id"]
    );
}

function processDeleteRequest() {
    if (!isset($_GET["category_id"])) {
        header('HTTP/ 400 Cannot delete category');
        echo json_encode(array(
            'ok' => false,
            'message' => 'Identifier of category is missing'
        ));
        exit;
    }

    deleteCategory($_GET["category_id"]);
}


function deleteCategory(int $categoryId) {
    try {
        $repository = new SolutionsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $repository->deleteCategoryById($categoryId);
        header('HTTP/ 200 Category deleted');
        echo json_encode(array(
            'ok' => true,
            'message' => 'Category deleted'
        ));
        exit;
    } catch (SolutionsRepositoryException $e) {
        header('HTTP/ 400 Cannot delete category');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
        exit;
    }
}