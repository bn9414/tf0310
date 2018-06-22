<!DOCTYPE html>
<html>
    <head>
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
  
        <link rel=stylesheet type="text/css" href="list/list.css">
    <link rel=stylesheet type="text/css" href="common/common.css">
         <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script
  src="https://code.jquery.com/jquery-3.3.1.js"></script>
    </head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body class="upsc">
    <?php include 'common/menu.php';?>
 <div class="imghold parallax">
        <div class="imtxt parallax--box">
        <!--    <p>Change is the end result of all true learning.</p>-->
            <h2>Get Updated with our Monthly current affairs issues</h2>
          
      <!--      <button class="btn-bl">GET STARTED NOW  <span></span> <i class="fa fa-angle-right" aria-hidden="true"></i></button>-->

        </div>
    </div>
     
    <!--lst-->
    
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

$customers = array();

$sql = "SELECT * FROM data ORDER BY id DESC;";
$result = $conn->query($sql);

		foreach ($result as $row) {
		
			$customers[] = array(
				'id' => $row['id'],
                'name'  => $row['name'],
                'year'  => $row['year'],
	        	'month' => $row['month'],
	        	'description' => $row['description'],
	            'previewlink' => $row['previewlink'],
	        	'paynowlink' => $row['paynowlink'],
		        'pages' => $row['pages']
			);
		}
		

//print_r($customers);

 ?>    
    
    <!--1-->
    <?php foreach ($customers as $customer) { ?>
 <div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1><?php echo $customer['year']; ?></h1></div>
        <div class="olstimg">
            <img src="list/images/<?php echo $customer['month']; ?>.svg">
        </div>
        </div>
        <div class="olstpara">
            <h1><?php echo $customer['name']; ?></h1>
        <p><?php echo $customer['description']; ?>
            </p>
            <div class="rateng">
            <p><i class="" id="smile" ><img src="list/images/book.svg"></i><span class="rtr">Pages - <?php echo $customer['pages']; ?></span> </p>
            </div>
        </div>
     <div class="btn-grpp">
        <button class="btn-vist"><a href="<?php echo $customer['previewlink']; ?>" target="_blank">Preview <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
        <div class='pm-button'><a href='<?php echo $customer['paynowlink']; ?>'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png' /></a></div> 
    </div>
     </div>
     <?php } ?>
    <!--1-->
    
     <!--<div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>02</h1></div>
        <div class="olstimg">
            <img src="list/images/flip.jpg">
        </div>
        </div>
        <div class="olstpara">
            <h1>Flipkart</h1>
        <p> It has been a long established fact that reader will be distracted by the dummy text. So we will be using the word lorem epsum to denote that it is the dummy text. This content will be replaced by the one the client provide.
           
           
            </p>
            <div class="rateng">
            <p><i class="fa fa-smile-o" aria-hidden="true"></i><span class="rtr">Rating 4.3</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.flipkart.com" target="_blank">Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
    
    <!-- <div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>03</h1></div>
        <div class="olstimg">
            <img src="list/images/paytm.jpg">
        </div>
        </div>
        <div class="olstpara">
            <h1>Paytm Mall</h1>
        <p>Paytm Mall.com, 
            It has been a long established fact that reader will be distracted by 
            the dummy text. So we will be using the word lorem epsum to denote that
            it is the dummy text.
            This content will be replaced by the one the client provide.
            </p>
            <div class="rateng">
            <p><i class="fa fa-smile-o" aria-hidden="true"></i><span class="rtr">Rating 4.1</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.paytmmall.com" target="_blank">Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
    
    <!-- <div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>04</h1></div>
        <div class="olstimg">
            <img src="list/images/snapdeal.jpg">
        </div>
        </div>
        <div class="olstpara">
            <h1>Snapdeal</h1>
        <p>Snapdeal.com, 
            It has been a long established fact that reader will be distracted by 
            the dummy text. So we will be using the word lorem epsum to denote that
            it is the dummy text.
            This content will be replaced by the one the client provide.
            </p>
            <div class="rateng">
            <p><i class="fa fa-smile-o" aria-hidden="true"></i><span class="rtr">Rating 3.5</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.snapdeal.com" target="_blank">Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
    
    <!-- <div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>05</h1></div>
        <div class="olstimg">
            <img src="list/images/ebay.jpg">
        </div>
        </div>
        <div class="olstpara">
            <h1>ebay</h1>
        <p>ebay.in, 
            It has been a long established fact that reader will be distracted by 
            the dummy text. So we will be using the word lorem epsum to denote that
            it is the dummy text.
            This content will be replaced by the one the client provide.
            </p>
            <div class="rateng">
            <p><i class="fa fa-smile-o" aria-hidden="true"></i><span class="rtr">Rating 3.3</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.ebay.in/" target="_blank">Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
    
     <!--<div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>06</h1></div>
        <div class="olstimg">
            <img src="list/images/jabong-759.png">
        </div>
        </div>
        <div class="olstpara">
            <h1>Jabong</h1>
        <p>Jabong.com, 
           It has been a long established fact that reader will be distracted by 
            the dummy text. So we will be using the word lorem epsum to denote that
            it is the dummy text.
            This content will be replaced by the one the client provide.
            </p>
            <div class="rateng">
            <p><i class="fa fa-smile-o" aria-hidden="true"></i><span class="rtr">Rating 3.2</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.jabong.com" target="_blank">Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
    
    <!-- <div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>07</h1></div>
        <div class="olstimg">
            <img src="list/images/myntra.jpg">
        </div>
        </div>
        <div class="olstpara">
            <h1>Myntra</h1>
        <p>Myntra.com, 
            It has been a long established fact that reader will be distracted by 
            the dummy text. So we will be using the word lorem epsum to denote that
            it is the dummy text.
            This content will be replaced by the one the client provide.
            </p>
            <div class="rateng">
            <p><i class="fa fa-smile-o" aria-hidden="true"></i><span class="rtr">Rating 3.2</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.myntra.com" target="_blank">Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
    
    <!-- <div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>08</h1></div>
        <div class="olstimg">
            <img src="list/images/shop.jpg">
        </div>
        </div>
        <div class="olstpara">
            <h1>shopclues</h1>
        <p>shopclues.com, 
           It has been a long established fact that reader will be distracted by 
            the dummy text. So we will be using the word lorem epsum to denote that
            it is the dummy text.
            This content will be replaced by the one the client provide.
            </p>
            <div class="rateng">
            <p><i class="fa fa-smile-o" aria-hidden="true"></i><span class="rtr">Rating 3</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.shopclues.com" target="_blank" >Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
     <!--1-->
    
    <!-- <div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>09</h1></div>
        <div class="olstimg">
            <img src="list/images/kajio.jpg">
        </div>
        </div>
        <div class="olstpara">
            <h1>Ajio</h1>
        <p>Ajio.com, 
            It has been a long established fact that reader will be distracted by 
            the dummy text. So we will be using the word lorem epsum to denote that
            it is the dummy text.
            This content will be replaced by the one the client provide.
            </p>
            <div class="rateng">
            <p><i class="fa fa-frown-o" aria-hidden="true"></i><span class="rtr">Rating 2.9</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.ajio.com" target="_blank" >Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
     <!--1-->
    
    <!-- <div class="olist">
        <div class="hedimg">
        <div class="olsthd"><h1>10</h1></div>
        <div class="olstimg">
            <img src="list/images/tata.jpg">
        </div>
        </div>
        <div class="olstpara">
            <h1>TataCliq</h1>
        <p>TataCliq.com, 
            It has been a long established fact that reader will be distracted by 
            the dummy text. So we will be using the word lorem epsum to denote that
            it is the dummy text.
            This content will be replaced by the one the client provide.
            </p>
            <div class="rateng">
            <p><i class="fa fa-frown-o" aria-hidden="true"></i><span class="rtr">Rating 2.9</span> </p>
            </div>
        </div>
       
        <button class="btn-vist"><a href="https://www.tataCliq.com" target="_blank" >Vist <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
    </div>-->
    <!--1-->
    
    <!--lst-->
    <!--footer-->
    
   
    <?php include 'footer.php';?><!-- #colophon -->
  
    <!--1-->
    
    <!--footer-->
    
<!--footer-->
 <script src="common/common.js" type="text/javascript"></script>
 <script src="list/list.js" type="text/javascript"></script>
 
</body>
</html>