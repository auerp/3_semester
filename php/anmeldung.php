<?php

$vorname = $_GET["vorname"];
$name = $_GET["name"];
$matrikelnr = $_GET["matrikelnr"];
$email = $_GET["email"];
$handy = $_GET["handy"];
$studiengang = $_GET["studiengang"];

$params = $vorname." ".$name.", ".$matrikelnr.", ".$email.", ".$handy.", ".$studiengang;

if($_GET["messe"] == "cebit"){
    $cebit = 'cebit.txt';
    $handle = fopen($cebit, 'a') or die('Cannot open file: '.$cebit);
    $data = 'params';
    fwrite($handle, $data);
    fclose($handle);
}

if($_GET["messe"] == "conhit"){
    $conhit = 'conhit.txt';
    $handle = fopen($conhit, 'a') or die('Cannot open file: '.$conhit);
    $data = 'params';
    fwrite($handle, $data);
    fclose($handle);
}

if($_GET["messe"] == "webtech"){
    $webtech = 'webtech.txt';
    $handle = fopen($webtech, 'a') or die('Cannot open file: '.$webtech);
    $data = 'params';
    fwrite($handle, $data);
    fclose($handle);
}
