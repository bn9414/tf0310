<html>
<head>
<title>Space-O | Ajax submit form</title>
</head>
<body>

<?php
$servername = "localhost";
$username = "tenfirqd_empower";
$password = "e7ek0u@,_kWx";
$dbname = "tenfirqd_empower";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		?>
		
		
		<a href="<?php echo "http://" . $_SERVER['SERVER_NAME'] ."/admin/file.php?&"; ?><?php echo "id=".$row["id"] ?>" class="btn btn-primary">edit</a>
		
		
        <?php echo "<br> id: ". $row["id"]. " - Name: ". $row["name"]. "</br>";
		
    }
}

$conn->close();
?> 


<style type="text/css">
table {
border-collapse: collapse;
}

table, th, td {
border: 1px solid black;
}

</style>
<!-- where the response will be displayed -->
<div id='response'></div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js "></script>
<script>
$(document).ready(function(){
$('#userForm').submit(function(){

// show that something is loading
$('#response').html("<b>Loading response...</b>");

// Call ajax for pass data to other place
$.ajax({
type: 'POST',
url: 'insert.php',
data: $(this).serialize() // getting filed value in serialize form
})
.done(function(data){ // if getting done then call.

// show the response
$('#response').html(data);

})
.fail(function() { // if fail then getting message

// just in case posting your form failed
alert( "Posting failed." );

});

// to prevent refreshing the whole page page
return false;

});
});
</script>

</body>
</html>