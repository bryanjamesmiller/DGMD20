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
echo "<h3>Using PDO (PHP Data Objects)</h3>";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$databaseName", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
}
catch(PDOException $e)
{
    /* MySQLi doesn't offer this nice "catch errors" option. */
    echo "Connection failed: " . $e->getMessage();
}

echo "<h3>Using MySQLi (My SQL - improved)</h3>";
echo "<p>You can use MySQLi with either an OOP or a procedural approach</p>";
echo "<h4>OOP MySQLi</h4>";
/* OOP MySQLi*/
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


/* Procedural MySQLi*/
echo "<h4>Procedural MySQLi</h4>";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
