<?php

// API: obtener_comunidades, obtener_provincias, obtener_provincia

$comunidades = array(
    array("clave" => "mu", "denominacion" => "Región de Murcia"),
    array("clave" => "an", "denominacion" => "Andalucia"),
    array("clave" => "va", "denominacion" => "Comunidad Valenciana"),
    array("clave" => "ex", "denominacion" => "Comunidad de Extremadura"),
);

$provincias = array(
    array("clave" => "mu", "denominacion" => "Murcia", "comunidad" => "mu"),
    array("clave" => "al", "denominacion" => "Almería", "comunidad" => "an"),
    array("clave" => "ca", "denominacion" => "Cadiz", "comunidad" => "an"),
    array("clave" => "gr", "denominacion" => "Granada", "comunidad" => "an"),
    array("clave" => "hu", "denominacion" => "Huelva", "comunidad" => "an"),
    array("clave" => "ma", "denominacion" => "Málaga", "comunidad" => "an"),
    array("clave" => "se", "denominacion" => "Sevilla", "comunidad" => "an"),
    array("clave" => "co", "denominacion" => "Córdoba", "comunidad" => "an"),
    array("clave" => "ja", "denominacion" => "Jaén", "comunidad" => "an"),
    array("clave" => "cs", "denominacion" => "Castellón", "comunidad" => "va"),
    array("clave" => "va", "denominacion" => "Valencia", "comunidad" => "va"),
    array("clave" => "ai", "denominacion" => "Alicante", "comunidad" => "va"),
    array("clave" => "cc", "denominacion" => "Cáceres", "comunidad" => "ex"),
    array("clave" => "ba", "denominacion" => "Badajoz", "comunidad" => "ex"),
);

function obtener_comunidades() {
    global $comunidades;
    return $comunidades;
}

function obtener_provincias() {
    global $provincias;
    return $provincias;
}

function obtener_provincias_por_comunidad($comunidad) {
    global $provincias;
    
    return array_filter($provincias, function ($provincia) use (&$comunidad) {
        return $provincia["comunidad"] == $comunidad;
    });
}