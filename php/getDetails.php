<?php

header('Content-Type: application/json');

if($_GET['messe'] == 'tableKosten'){
    $test=file_get_contents("../json/kosten.json");
}

if($_GET['messe'] == 'tabelleCebitTeilnehmer'){
    $test=file_get_contents("../json/cebit.json");
}

if($_GET['messe'] == 'tabelleConhitTeilnehmer'){
    $test=file_get_contents("../json/conhit.json");
}

if($_GET['messe'] == 'tabelleWebtechTeilnehmer'){
    $test=file_get_contents("../json/webtech.json");
}

echo $test;

?>