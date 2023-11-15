<?php

require_once __DIR__ . '/vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf([
    'mode' => 'utf-8',
    'format' => 'A4',
    'orientation' => 'P',
    'default_font_size' => 0,
    'default_font' => '',
    'margin_left' => 30,
    'margin_right' => 20,
    'margin_top' => 30,
    'margin_bottom' => 20,
    'margin_header' => 6,
    'margin_footer' => 10
]);

$mpdf->SetHTMLHeader('
    <div style="text-align: right; font-weight: bold;">
        Mi empresa
    </div>
');

$mpdf->SetHTMLFooter('
    <div style="border-top: solid 3px red;">
        <table style="width: 100%;">
            <tr>
                <td>{DATE j-m-Y}</td>
                <td style="text-align: right;">Página {PAGENO}/{nbpg}</td>
            </tr>
        </table>
    </div>
');

for ($i = 1; $i < 200; $i++) {
    $mpdf->WriteHTML('<h1>Hola</h1>');
}

$mpdf->Output();