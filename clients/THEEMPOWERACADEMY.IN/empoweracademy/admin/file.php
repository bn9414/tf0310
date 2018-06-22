<html>

<body>

<?php

include("config.php");

if(isset($_REQUEST['id'])){
$id = $_REQUEST['id'];
$sql = "SELECT * FROM data WHERE id = ".$id."";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
	//echo "<table>";
    while($row = $result->fetch_assoc()) {
		
		$id = $row["id"];
		$name = $row["name"];
		$year = $row["year"];
		$month = $row["month"];
		$description = $row["description"];
		$previewlink = $row["previewlink"];
		$paynowlink = $row["paynowlink"];
		$pages = $row["pages"];
		//$id = $row["id"];
		
        //echo "<br> id: ". $row["id"]. " - Name: ". $row["name"]. "</br>";
		
    }
	//echo "</table>";
}


$conn->close();
?> 


<form id='userForm'>
<input type='hidden' name='id' value="<?php echo $id;?>" />
<div><input type='text' name='name' placeholder='Name' value="<?php echo $name;?>" /></div>
<div><input type='text' name='year' placeholder='year' value="<?php echo $year;?>" /></div>

<div><select name='month'>
  <option value="">PLEASE SELECT...</option>
  <option value="jan">Jan</option>
  <option value="feb">Feb</option>
  <option value="mar">Mar</option>
  <option value="apr">Apr</option>
  <option value="may">May</option>
  <option value="jun">Jun</option>
  <option value="jul">Jul</option>
  <option value="aug">Aug</option>
  <option value="sep">Sep</option>
  <option value="oct">Oct</option>
  <option value="nov">Nov</option>
  <option value="dec">Dec</option>
</select></div>

<!--<div><input type='text' name='month' placeholder='month' value="<?php echo $month;?>" /></div>-->
<div><input type='text' name='description' placeholder='description' value="<?php echo $description;?>" /></div>
<div><input type='text' name='previewlink' placeholder='previewlink' value="<?php echo $previewlink;?>" /></div>
<div><input type='text' name='paynowlink' placeholder='paynowlink' value="<?php echo $paynowlink;?>" /></div>
<div><input type='text' name='pages' placeholder='pages' value="<?php echo $pages;?>" /></div>
<div><input type='submit' value='Submit' /></div>
</form>

<a href="filelist.php">list</a>
<?php } else { ?>

<form id='userForm'>
<input type='hidden' name='id' value="<?php echo $id;?>" />
<div><input type='text' name='name' placeholder='Name' value="<?php echo $name;?>" /></div>
<div><input type='text' name='year' placeholder='year' value="<?php echo $year;?>" /></div>

<div><select name='month'>
  <option value="">PLEASE SELECT...</option>
  <option value="jan">Jan</option>
  <option value="feb">Feb</option>
  <option value="mar">Mar</option>
  <option value="apr">Apr</option>
  <option value="may">May</option>
  <option value="jun">Jun</option>
  <option value="jul">Jul</option>
  <option value="aug">Aug</option>
  <option value="sep">Sep</option>
  <option value="oct">Oct</option>
  <option value="nov">Nov</option>
  <option value="dec">Dec</option>
</select></div>

<!--<div><input type='text' name='month' placeholder='month' value="<?php echo $month;?>" /></div>-->
<div><input type='text' name='description' placeholder='description' value="<?php echo $description;?>" /></div>
<div><input type='text' name='previewlink' placeholder='previewlink' value="<?php echo $previewlink;?>" /></div>
<div><input type='text' name='paynowlink' placeholder='paynowlink' value="<?php echo $paynowlink;?>" /></div>
<div><input type='text' name='pages' placeholder='pages' value="<?php echo $pages;?>" /></div>
<div><input type='submit' value='Submit' /></div>
</form>
<a href="filelist.php">list</a>
<?php } ?>
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