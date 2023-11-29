<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/ProductsRepository.php';
require_once __DIR__ . '/../vendor/autoload.php';


$repository = new ProductsRepository(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
$products = $repository->retrieveProducts();

$mpdf = new \Mpdf\Mpdf([
    'mode' => 'utf-8',
    'format' => 'A4',
    'orientation' => 'P',
]);

$footer = 
    '<div style="border: solid 2px green"></div>
    <table style="width: 100%">
        <tr>
            <td>{DATE j-m-Y}</td>
            <td style="text-align: right">{PAGENO}/{nbpg}</td>
        </tr>
    </table>';
$mpdf->SetHTMLFooter($footer);

$list = '<ol>';

foreach ($products as $clave => $product) {
    $list .= '<li>' . $product['product_name'] . '</li>';
} 

$list .= '</ol>';

$mpdf->WriteHTML($list);
$mpdf->Output();