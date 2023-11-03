<?php
require_once('../repositories/config.php');
require_once('../repositories/solutions_repository.php');

if (isset($_GET['product_id'])) {
    try {
        $product = retrieveProductById($_GET['product_id']);
        
        header('HTTP/ 200 Products retrieved');
        echo json_encode(array(
            'ok' => true,
            'product' => $product
        ));
    } catch (Exception $e) {
        header('HTTP/ 404 Cannot retrieve product');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
    }

} else {
    try {
        $products = retrieveProducts();
        
        header('HTTP/ 200 Products retrieved');
        echo json_encode(array(
            'ok' => true,
            'products' => $products
        ));
    } catch (Exception $e) {
        header('HTTP/ 500 Cannot retrieve products');
        echo json_encode(array(
            'ok' => false,
            'message' => $e->getMessage()
        ));
    }
}
