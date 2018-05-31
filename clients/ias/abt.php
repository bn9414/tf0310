<!DOCTYPE html>
<html>
    <head>
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
    <link rel=stylesheet type="text/css" href="course/course.css">
    <link rel=stylesheet type="text/css" href="common/common.css">
         <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script
  src="https://code.jquery.com/jquery-3.3.1.js"></script>
    </head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body>
    <?php include 'common/menu.php';?>
    
    
    <div class="imghold">
    <img src="images/abt%20img.jpg">
    </div>

<div class="fullytab">
    <div class="tabs-con">
                 
                  <a  class="drpa tabactive" href="abt.php">About</a>
            
                
                  <a  class="drpa " href="course.php">Course Offered</a>
               
                  
                 <a  class="drpa" href="#">Batch Timing</a>
                
                 
                 <a  class="drpa" href="#">Fee Structure</a>
            
             </div>
          
                
                
 </div>
    
        
        
    <script type="text/javascript">
        
       $(document).ready(function(){
            $(".tabs-con").on("click",".drpa",function(){
                $(this).addClass("tabactive").siblings().removeClass("tabactive");
            })
        })
            </script>
 
       
         <!--packages-->
    
    
    <?php include 'footer.php';?>
</body>
    
    <script type="text/javascript" src="common/common.js"></script>
      <script type="text/javascript" src="course/course.js"></script>
</html>