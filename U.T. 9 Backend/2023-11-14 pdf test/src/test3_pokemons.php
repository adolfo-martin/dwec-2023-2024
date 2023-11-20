<?php
require_once __DIR__ . '/vendor/autoload.php';

function createPdf() {
    $mpdf = new \Mpdf\Mpdf([
        'mode' => 'utf-8',
        'format' => 'A4',
        'orientation' => 'P',
        'default_font_size' => 0,
        'default_font' => '',
        'margin_left' => 30,
        'margin_right' => 25,
        'margin_top' => 30,
        'margin_bottom' => 20,
        'margin_header' => 5,
        'margin_footer'=> 5,
    ]);

    return $mpdf;
}

function createHeader($mpdf) {
    $mpdf->SetHTMLHeader('
        <div style="text-align: right; font-size: 0.8rem; color: green; border-bottom: solid 2px green;">
            Lista de pokemons
        </div>
    ');
}

function createFooter($mpdf) {
    $mpdf->SetHTMLFooter('
        <div style="border: solid 2px green"></div>
        <table style="width: 100%">
            <tr>
                <td>{DATE j-m-Y}</td>
                <td style="text-align: right">{PAGENO}/{nbpg}</td>
            </tr>
        </table>
    ');
}

function retrievePokemons() {
    $url = 'https://pokeapi.co/api/v2/pokemon';
    $client = curl_init($url);
    curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($client);
    $data = json_decode($response);
    $pokemons = $data->results;
    return $pokemons;
}

function retrievePokemonImageUrl($url) {
    $client = curl_init($url);
    curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($client);
    $data = json_decode($response);
    return $data->sprites->front_default;
}

function createPokemonsTable($pokemons) {
    $table = '
        <style>
            table.table-pokemons {
                margin: 0 auto;
            }

            table.table-pokemons, 
            .table-pokemons tr, 
            .table-pokemons th, 
            .table-pokemons td {
                border: solid 2px green;
                border-collapse: collapse;
            }

            .table-pokemons th {
                background-color: green;
                color: white;
            }
        </style>
        <table class="table-pokemons">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
    ';

    foreach ($pokemons as $clave => $pokemon) {
        if ($clave == 3) break;
        $table .= '<tr>';
        $table .= "<td>$pokemon->name</td>";
        $imagen_url = retrievePokemonImageUrl($pokemon->url);
        $table .= "<td><img src='$imagen_url'/></td>";
        $table .= '</tr>';
    }

    $table .= '
            </tbody>
        </table>
    ';
    return $table;
}


$mpdf = createPdf();
createHeader($mpdf);
createFooter($mpdf);

$mpdf->WriteHTML('
    <br></br> 
    <br></br> 
    <br></br> 
    <br></br> 
    <br></br> 
    <div style="
        font-size: 5rem; font-weight: bold; color: green; 
        margin-top: 100pt; text-align: center;
        "
    >
        Lista de Pokemons
    </div>'
);

$mpdf->AddPage();

$pokemons = retrievePokemons();
$table = createPokemonsTable($pokemons);
$mpdf->WriteHTML($table);

$mpdf->Output();