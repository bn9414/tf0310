<?php
$servername = "localhost";
$username = "tenfirqd_empower";
$password = "e7ek0u@,_kWx";
$dbname = "tenfirqd_empower";



//echo $id;
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>