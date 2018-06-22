<!DOCTYPE html>
<html>
    <head>
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
    <link rel=stylesheet type="text/css" href="abtservice/course.css">
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
           <!-- <p>Change is the end result of all true learning.</p>-->
            <h2>Our TNPSC courses<br></h2>
          
            <button class="btn-bl">GET STARTED NOW  <span></span> <i class="fa fa-angle-right" aria-hidden="true"></i></button>

        </div>
    </div>

<div class="fullytab">
    <div class="tabs-con">
                 
                  <a  class="drpa" href="abt.php">
                      <div class="odr">
                      </div>
                      <p>About</p>
        </a>
            
                
                  <a  class="drpa tabactive" href="course.php">
                      <div class="odr actim">
                      </div>
                      <p>Course Offered</p>
                    </a>
               
                  
                 <a  class="drpa" href="batch.php">
                     <div class="odr odr3">
                      </div>
                     <p>Batch Timing</p>
                </a>
                
                 
                 <a  class="drpa" href="fee.php">
                     <div class="odr odr4">
                      </div>
                     <p>Fee Structure</p>
        </a>
              <a  class="drpa" href="policy.php">
                     <div class="odr odr5">
                      </div>
                     <p>Analysis</p>
        </a>
            
             </div>
          
            <div class="paraabt">
          <h1>Course offered</h1>
                    <ul id="tab-one-con" class="titpp  tabactive1 ">     
               <li> Preliminary Exam</li><br>
               <li> Mains examination
                        <ul>
                   <li>General studies</li><br>
                            <li> Optional studies</li><br>
                   
                   
                   </ul>
                        
                        </li><br>
           
                        
              <br>
                            </ul>
    
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