<?php
/**
 * Created by PhpStorm.
 * User: B
 * Date: 12/15/2015
 * Time: 4:27 PM
 */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mysqliOOPdatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Bryan', 'Miller', 'gratiafide@yahoo.com')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// SQL injection attacks work!  Yikes!
//$user_input = "'John' or 1=1";
$user_input = "John";
//$user_input = "1 OR 1=1";
//The below line fixes the problem by escaping the user input.  No results will get returned if
// "'John'" is in both single and double quotes, but that is what we want (the alternative is
// allowing the hacker to use the single quotes to write things like $user_input = "'John' or 1=1";
// Such a user trying to input quotes is not trying to use the database correctly.
// The enclosing quotes "'" . mysqli_real_escape_string($conn,$user_input) . "'"; are necessary to protect
// against $user_input = "1 OR 1=1";

$user_input = "'" . mysqli_real_escape_string($conn,$user_input) . "'";
echo $user_input  . "<br>";
$sql="SELECT firstname,lastname,email FROM MyGuests WHERE firstname=" . $user_input;
$result = mysqli_query($conn,$sql);
$data_from_db = mysqli_fetch_all($result,MYSQLI_ASSOC);

//However, parameter binding is an even better way to go.  "Prepared statements are very useful against SQL
// injections, because parameter values, which are transmitted later using a
// different protocol, need not be correctly escaped. If the original statement template is not derived
// from external input, SQL injection cannot occur."
// prepare and bind
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);

// Set parameters and execute HOWEVER SQL can still get saved in the DB which could get run later on...
$firstname = "DELETE FROM `myguests`;";
$lastname = "Hillary";
$email = "righttt";
$stmt->execute();

$sql="SELECT firstname FROM MyGuests WHERE lastname='Hillary'";
$result = mysqli_query($conn,$sql);
$data_from_db = mysqli_fetch_all($result,MYSQLI_ASSOC);

$stmt->close();

// ... FOR INSTANCE THE INJECTED SQL GETS RUN RIGHT HERE!
echo $data_from_db[0]["firstname"];
$sql = $data_from_db[0]["firstname"];
$result = mysqli_query($conn,$sql);
$data_from_db = mysqli_fetch_all($result,MYSQLI_ASSOC);
//echo $data_from_db[0]["firstname"];
var_dump($data_from_db);

// Free result set
mysqli_free_result($result);

mysqli_close($conn);


