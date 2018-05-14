<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>



    <?php

/*$servername = "localhost";
$username = "root";
$password = "";
$dbname ="tenfirqd_test";*/
    
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
/*$name=htmlspecialchars($_POST["name"]);
    
    $fname=$_POST["fname"];
    
      $date=$_POST["date"];
    
      $age=$_POST["age"];
       $address=$_POST["address"];
        $comm=$_POST["community"];
        $edu=$_POST["education"];
		$sedu=$_POST["seducation"];
        $percent=$_POST["percent"];
    
        $focc=$_POST["focc"];
        $graduate=$_POST["graduate"];
        $phone=$_POST["phone"];
        $mobile=$_POST["email"];
        $study=$_POST["present"];*/
		
      
// sql to create table
$sql = "CREATE TABLE freelancing (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
tit VARCHAR(100) NOT NULL,
des VARCHAR(500) NOT NULL,
url VARCHAR(100),
rate VARCHAR(100),
logo VARCHAR(100)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table freelancing created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}
    
    
//$arr= array ('hai','bye');

$sql1 = "INSERT INTO freelancing (tit, des, rate, url, logo)
VALUES (' ', ' ', ' ','','')";  
    
    for($i=0;$i<10;$i++){
    $conn->query($sql1);}
  
    
/*    echo "New record created successfully";
} else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
}*/
//$sql= INSERT INTO app (name) VALUES ('$arr');       
   
    
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo1"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo1"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo " <br/>Rank 1 : Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo1"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "<br/>Rank 1 : Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo1"]["tmp_name"], $target_file)) {
      /*  echo "The file ". basename( $_FILES["logo1"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo1= "uploads/". basename( $_FILES["logo1"]["name"]);
    
    
    
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo2"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo2"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "<br/>Rank 2 :Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo2"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "<br/>Rank 2 :Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo2"]["tmp_name"], $target_file)) {
       /* echo "The file ". basename( $_FILES["logo2"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo2= "uploads/". basename( $_FILES["logo2"]["name"]);
    
    
    
      
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo3"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo3"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo " <br/>Rank 3 :Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo3"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo " <br/>Rank 3 :Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo3"]["tmp_name"], $target_file)) {
       /* echo "The file ". basename( $_FILES["logo3"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo3= "uploads/". basename( $_FILES["logo3"]["name"]);
    
    
      
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo4"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo4"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo " <br/>Rank 4 :Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo4"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo " <br/>Rank 4 :Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo4"]["tmp_name"], $target_file)) {
        /*echo "The file ". basename( $_FILES["logo4"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo4= "uploads/". basename( $_FILES["logo4"]["name"]);
    
    
      
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo5"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo5"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo " <br/>Rank 5 :Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo5"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo " <br/>Rank 5 :Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo5"]["tmp_name"], $target_file)) {
       /* echo "The file ". basename( $_FILES["logo5"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo5= "uploads/". basename( $_FILES["logo5"]["name"]);
    
    
      
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo6"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo6"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "<br/>Rank 6 :Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo6"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo " <br/>Rank 6 :Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo6"]["tmp_name"], $target_file)) {
        /*echo "The file ". basename( $_FILES["logo6"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo6= "uploads/". basename( $_FILES["logo6"]["name"]);
    
    
      
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo7"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo7"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "<br/>Rank 7 :Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo7"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "<br/>Rank 7 :Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo7"]["tmp_name"], $target_file)) {
        /*echo "The file ". basename( $_FILES["logo7"]["name"]). " has been uploaded.";*/ 
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo7= "uploads/". basename( $_FILES["logo7"]["name"]);
    
    
      
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo8"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo8"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "<br/>Rank 8 :Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo8"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo " <br/>Rank 8 :Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo8"]["tmp_name"], $target_file)) {
        /*echo "The file ". basename( $_FILES["logo8"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo8= "uploads/". basename( $_FILES["logo8"]["name"]);
    
    
      
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo9"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo9"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "<br/>Rank 9 :Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo9"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo " <br/>Rank 10 :Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo9"]["tmp_name"], $target_file)) {
      /*  echo "The file ". basename( $_FILES["logo9"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo9= "uploads/". basename( $_FILES["logo9"]["name"]);
    
    
      
     
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["logo10"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["logo10"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["logo10"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["logo10"]["tmp_name"], $target_file)) {
      /*  echo "The file ". basename( $_FILES["logo10"]["name"]). " has been uploaded.";*/
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
$logo10= "uploads/". basename( $_FILES["logo10"]["name"]);
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
      
    $tit1=$_POST["tit1"];
    
      $des1=$_POST["des1"];
    
      $url1=$_POST["url1"];
      $rate1=$_POST["rate1"];
    
          
    $tit2=$_POST["tit2"];
    
      $des2=$_POST["des2"];
    
      $url2=$_POST["url2"];
      $rate2=$_POST["rate2"];
    
              
    $tit3=$_POST["tit3"];
    
      $des3=$_POST["des3"];
    
      $url3=$_POST["url3"];
      $rate3=$_POST["rate3"];
    
              
    $tit4=$_POST["tit4"];
    
      $des4=$_POST["des4"];
    
      $url4=$_POST["url4"];
      $rate4=$_POST["rate4"];
    
              
    $tit5=$_POST["tit5"];
    
      $des5=$_POST["des5"];
    
      $url5=$_POST["url5"];
      $rate5=$_POST["rate5"];
    
              
    $tit6=$_POST["tit6"];
    
      $des6=$_POST["des6"];
    
      $url6=$_POST["url6"];
      $rate6=$_POST["rate6"];
    
              
    $tit7=$_POST["tit7"];
    
      $des7=$_POST["des7"];
    
      $url7=$_POST["url7"];
      $rate7=$_POST["rate7"];
    
              
    $tit8=$_POST["tit8"];
    
      $des8=$_POST["des8"];
    
      $url8=$_POST["url8"];
      $rate8=$_POST["rate8"];
    
              
    $tit9=$_POST["tit9"];
    
      $des9=$_POST["des9"];
    
      $url9=$_POST["url9"];
      $rate9=$_POST["rate9"];
    
    
    $tit10=$_POST["tit10"];
    
      $des10=$_POST["des10"];
    
      $url10=$_POST["url10"];
      $rate10=$_POST["rate10"];
    
   /*   $logo1=$_POST["logo1"];*/
      
     
//$rate1= "uploads/".basename( $_FILES["logo1"]["name"]);

/*$dum =basename( $_FILES["logo1"]["name"]);
$rate1= "uploads" . $dum;*/

$sql = "UPDATE freelancing SET tit='$tit1',des='$des1',url='$url1',rate='$rate1',logo='$logo1' WHERE id=1";

if(!empty($tit1) &&  !empty($des1) &&  !empty($url1) &&  !empty($rate1)){ 
if ($conn->query($sql) === TRUE) {
    echo "<br/><br/><br/>Rank  1 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

    
    $sql2 = "UPDATE freelancing SET tit='$tit2',des='$des2',url='$url2',rate='$rate2',logo='$logo2' WHERE id=2";

if(!empty($tit2) &&  !empty($des2) &&  !empty($url2) &&  !empty($rate2)){ 
if ($conn->query($sql2) === TRUE) {
    echo "Rank  2 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

 
    
    $sql3 = "UPDATE freelancing SET tit='$tit3',des='$des3',url='$url3',rate='$rate3',logo='$logo3' WHERE id=3";

if(!empty($tit3) &&  !empty($des3) &&  !empty($url3) &&  !empty($rate3)){ 
if ($conn->query($sql3) === TRUE) {
    echo "Rank  3 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

 
    
    $sql4 = "UPDATE freelancing SET tit='$tit4',des='$des4',url='$url4',rate='$rate4',logo='$logo4' WHERE id=4";

if(!empty($tit4) &&  !empty($des4) &&  !empty($url4) &&  !empty($rate4)){ 
if ($conn->query($sql4) === TRUE) {
    echo "Rank  4 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

 
    
    $sql5 = "UPDATE freelancing SET tit='$tit5',des='$des5',url='$url5',rate='$rate5',logo='$logo5' WHERE id=5";

if(!empty($tit5) &&  !empty($des5) &&  !empty($url5) &&  !empty($rate5)){ 
if ($conn->query($sql5) === TRUE) {
    echo "Rank  5 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

 
    
    $sql6 = "UPDATE freelancing SET tit='$tit6',des='$des6',url='$url6',rate='$rate6',logo='$logo6' WHERE id=6";

if(!empty($tit6) &&  !empty($des6) &&  !empty($url6) &&  !empty($rate6)){ 
if ($conn->query($sql6) === TRUE) {
    echo "Rank  6 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

 
    
    $sql7 = "UPDATE freelancing SET tit='$tit7',des='$des7',url='$url7',rate='$rate7',logo='$logo7' WHERE id=7";

if(!empty($tit7) &&  !empty($des7) &&  !empty($url7) &&  !empty($rate7)){ 
if ($conn->query($sql7) === TRUE) {
    echo "Rank  7 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

 
    
    $sql8 = "UPDATE freelancing SET tit='$tit8',des='$des8',url='$url8',rate='$rate8',logo='$logo8' WHERE id=8";

if(!empty($tit8) &&  !empty($des8) &&  !empty($url8) &&  !empty($rate8)){ 
if ($conn->query($sql8) === TRUE) {
    echo "Rank  8 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

 
    
    $sql9 = "UPDATE freelancing SET tit='$tit9',des='$des9',url='$url9',rate='$rate9',logo='$logo9' WHERE id=9";

if(!empty($tit9) &&  !empty($des9) &&  !empty($url9) &&  !empty($rate9)){ 
if ($conn->query($sql9) === TRUE) {
    echo "Rank  9 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

 
    
    $sql10 = "UPDATE freelancing SET tit='$tit10',des='$des10',url='$url10',rate='$rate10',logo='$logo10' WHERE id=10";

if(!empty($tit10) &&  !empty($des10) &&  !empty($url10) &&  !empty($rate10)){ 
if ($conn->query($sql10) === TRUE) {
    echo "Rank  10 uploaded <br/>";

} else {
    echo "Error creating table: " . $conn->error;
}
}

   

   
    

    /*

    $sql = "SELECT id, tit, des, rate FROM test";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo  $row["tit[0]"]."<br>";
  
 
      }
    
} else {
    echo "0 results";
}

*/


  $conn->close();
    

    ?>



    

    
</body>
</html>