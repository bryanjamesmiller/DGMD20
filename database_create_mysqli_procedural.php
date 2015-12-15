<?php

$servername = "localhost";
$username = "root";
$password = "";

/* Procedural MySQLi*/
echo "<h4>Procedural MySQLi</h4>";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create database mysqliProceduralDB
$sql = "CREATE DATABASE mysqliProceduralDB";
if (mysqli_query($conn, $sql)) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}

mysqli_close($conn);
echo "MySQLi database created procedurally";
