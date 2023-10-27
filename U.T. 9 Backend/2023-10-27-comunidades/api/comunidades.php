<?php
header ("Content-type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");

if (!isset($_GET["operacion"]) || $_GET["operacion"] == "") {
    header("HTTP/ 400 Falta el código de operación");
    echo json_encode(array(
        "fecha" => "2023-10-27 09:27",
        "estado" => false, 
        "mensaje" => "Falta el código de operación."
    ));
    exit;
}

if ($_GET["operacion"] != "obtener_comunidades" 
    && $_GET["operacion"] != "obtener_provincias"
) {
    header("HTTP/ 400 El código de operación no es correcto");
    echo json_encode(array(
        "fecha" => "2023-10-27 09:27",
        "estado" => false, 
        "mensaje" => "El código de operación no es correcto."
    ));
    exit;
}

require_once("../repositorios/ComunidadesRepositorioMock.php");

if ($_GET["operacion"] == "obtener_comunidades") {
    header("HTTP/ 200 Comunidades enviadas");
    echo json_encode(array(
        "fecha" => "2023-10-27 09:27",
        "estado" => true, 
        "comunidades" => obtener_comunidades()
    ));
    exit;
} 

if ($_GET["operacion"] == "obtener_provincias") {
    if (!isset($_GET["comunidad"]) || $_GET["comunidad"] == "") {
        header("HTTP/ 200 Provincias enviadas");
        echo json_encode(array(
            "fecha" => "2023-10-27 09:27",
            "estado" => true, 
            "provincias" => obtener_provincias()
        ));       
    } else {
        header("HTTP/ 200 Provincias enviadas");
        echo json_encode(array(
            "fecha" => "2023-10-27 09:27",
            "estado" => true, 
            "provincias" => obtener_provincias_por_comunidad($_GET["comunidad"])
        ));
    }
    
    exit;
}