
<?php
include("config.php");

if($_POST['id'])
{
$id = $_POST['id'];
$name = $_POST['name'];
$year = $_POST['year'];
$month = $_POST["month"];
$description = $_POST["description"];
$previewlink = $_POST["previewlink"];
$paynowlink = $_POST["paynowlink"];
$pages = $_POST["pages"];

$sql = "UPDATE data SET name='$name', year='$year', month='$month', description='$description', previewlink='$previewlink', paynowlink='$paynowlink', pages='$pages' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}




echo $id;
}else{
$name = $_POST['name'];
$year = $_POST['year'];

$month = $_POST["month"];
$description = $_POST["description"];
$previewlink = $_POST["previewlink"];
$paynowlink = $_POST["paynowlink"];
$pages = $_POST["pages"];


$sql = "INSERT INTO data (name,year,month,description,previewlink,paynowlink,pages)
VALUES ('$name','$year','$month','$description','$previewlink','$paynowlink','$pages')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
$conn->close();
?>
