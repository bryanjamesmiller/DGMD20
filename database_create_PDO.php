<?php

$servername = "localhost";
$username = "root";
$password = "";
$databaseName = 'pets';

/*
Using PDO is nice because it works with other databases besides mysql.  If
you ever wanted to swap out mysql it will be easy compared to if you use mysqli,
which you would have to completely rewrite.  You will only have to change a few lines with PDO.

PDO is also nice because it has a built-in exception for trying to connect/create/etc. with a database (see below)
*/
echo "<h3>Using PDO (PHP Data Objects) to create a database named myPDOdatabase</h3>";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$databaseName", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE myPDOdatabase";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Database created successfully<br>";
}
catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;

