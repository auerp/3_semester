<?php

$vorname = $_GET["vorname"];
$name = $_GET["name"];
$matrikelnr = $_GET["matrikelnr"];
$email = $_GET["email"];
$handy = $_GET["handy"];
$studiengang = $_GET["studiengang"];


if ($_GET["messe"] == "cebit") {
    $cebit = fopen("../txt/cebit.txt", "a+");
    fwrite($cebit, $vorname." ".$name.", ".$matrikelnr.", ".$email.", ".$handy.", ".$studiengang." \r\n");
    fclose($cebit);
}

if ($_GET["messe"] == "conhit") {
    $conhit = fopen("../txt/conhit.txt", "a+");
    fwrite($conhit, $vorname." ".$name.", ".$matrikelnr.", ".$email.", ".$handy.", ".$studiengang." \r\n");
    fclose($conhit);
}

if ($_GET["messe"] == "webtech") {
    $webtech = fopen("../txt/webtech.txt", "a+");
    fwrite($webtech, $vorname." ".$name.", ".$matrikelnr.", ".$email.", ".$handy.", ".$studiengang." \r\n");
    fclose($webtech);
}

header("Location: http://localhost/infinity/");
exit;
?>