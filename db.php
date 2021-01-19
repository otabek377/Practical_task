<?php

$dbHost = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "test";

$connect = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);

if($connect) {

} else {
    die ("Database connection failed ");
}

?>


