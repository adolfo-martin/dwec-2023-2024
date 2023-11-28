<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/ProductsRepository.php';
require_once __DIR__ . '/../vendor/autoload.php';


$repository = new ProductsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
$categories = $repository->retrieveCategories();

$mpdf = new \Mpdf\Mpdf([
    'mode' => 'utf-8',
    'format' => 'A4',
    'orientation' => 'P',
]);


$mpdf->WriteHTML('Tabla de contenido');
$mpdf->TOCpagebreakByArray(array(
    'tocfont' => '',
    'tocfontsize' => '',
    'tocindent' => '',
    'TOCusePaging' => true,
    'TOCuseLinking' => '',
    'toc_orientation' => '',
    'toc_mgl' => '',
    'toc_mgr' => '',
    'toc_mgt' => '',
    'toc_mgb' => '',
    'toc_mgh' => '',
    'toc_mgf' => '',
    'toc_ohname' => '',
    'toc_ehname' => '',
    'toc_ofname' => '',
    'toc_efname' => '',
    'toc_ohvalue' => 0,
    'toc_ehvalue' => 0,
    'toc_ofvalue' => 0,
    'toc_efvalue' => 0,
    'toc_preHTML' => '',
    'toc_postHTML' => '',
    'toc_bookmarkText' => '',
    'resetpagenum' => '',
    'pagenumstyle' => '',
    'suppress' => '',
    'orientation' => '',
    'mgl' => '',
    'mgr' => '',
    'mgt' => '',
    'mgb' => '',
    'mgh' => '',
    'mgf' => '',
    'ohname' => '',
    'ehname' => '',
    'ofname' => '',
    'efname' => '',
    'ohvalue' => 0,
    'ehvalue' => 0,
    'ofvalue' => 0,
    'efvalue' => 0,
    'toc_id' => 0,
    'pagesel' => '',
    'toc_pagesel' => '',
    'sheetsize' => '',
    'toc_sheetsize' => '',
));


createFooter($mpdf);


foreach ($categories as $clave => $category) {
    $mpdf->TOC_Entry($category['category_name'], 0);

    $list = '<h1>' . $category['category_name'] . '</h1>';
    $list .= getProductsByCategoryAsString($category['category_id']);
    $mpdf->WriteHTML($list);
    $mpdf->AddPage();
} 

$mpdf->Output();


function getProductsByCategoryAsString($categoryId) {
    $repository = new ProductsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
    $products = $repository->retrieveProductsByCategory($categoryId);

    $list = '<ol>';

    foreach ($products as $clave => $product) {
        $list .= '<li>' . $product['product_name'] . '</li>';
    } 

    $list .= '</ol>';

    return $list;
}


function createFooter($mpdf) {
    $footer = 
        '<div style="border: solid 2px green"></div>
        <table style="width: 100%">
            <tr>
                <td>{DATE j-m-Y}</td>
                <td style="text-align: right">{PAGENO}/{nbpg}</td>
            </tr>
        </table>';
    $mpdf->SetHTMLFooter($footer);
}

// echo var_dump($categories);