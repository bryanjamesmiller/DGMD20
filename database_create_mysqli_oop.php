<?php

$servername = "localhost";
$username = "root";
$password = "";

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

// Create database mysqliOOPdatabase
$sql = "CREATE DATABASE mysqliOOPdatabase";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
echo "Connected successfully";

