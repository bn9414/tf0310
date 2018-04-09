<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

    <?php

$servername = "localhost";
$username = "tenfirqd_testp";
$password = "B123123b";
$dbname ="tenfirqd_test";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// sql to create table
$name=htmlspecialchars($_POST["name"]);
    
    $fname=htmlspecialchars(["fname"]);
    
      $date=$_POST["date"];
    
      $age=$_POST["age"];
       $address=htmlspecialchars($_POST["address"]);
        $comm=$_POST["community"];
        $edu=$_POST["education"];
        $percent=htmlspecialchars($_POST["percent"]);
    
        $focc=$_POST["focc"];
        $graduate=$_POST["graduate"];
        $phone=htmlspecialchars($_POST["phone"]);
        $mobile=htmlspecialchars($_POST["email"]);
        $study=htmlspecialchars($_POST["present"]);
      
// sql to create table
/*    $sql="CREATE TABLE app( 
         name VARCHAR(30) NOT NULL, 
         date VARCHAR(30) NOT NULL,
        age VARCHAR(30) NOT NULL, 
          fname VARCHAR(30) NOT NULL,
         address VARCHAR(300) NOT NULL, 
         comm VARCHAR(30) NOT NULL, 
         edu VARCHAR(30) NOT NULL, 
         percent VARCHAR(30) NOT NULL, 
         focc VARCHAR(30) NOT NULL, 
         graduate VARCHAR(30) NOT NULL, 
         phone VARCHAR(30) NOT NULL, 
         email VARCHAR(30) NOT NULL, 
        study VARCHAR(300) NOT NULL)
         
         ";*/
$sql = " INSERT INTO app(name, date,age,fname,address,comm,edu,percent,focc,graduate,phone,mobile,study) VALUES ('$name', '$date', '$age', '$fname', '$address', '$comm', '$edu', '$percent', '$focc', '$graduate', '$phone', '$mobile', '$study')";

if ($conn->query($sql) === TRUE) {
    echo "We got your application";
} else {
    echo "Error creating table: " . $conn->error;
}
    
    
$conn->close();
    

    ?>
    
    
    

    
</body>
</html>