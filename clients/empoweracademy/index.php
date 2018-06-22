<!DOCTYPE html>
<html>
    <head>
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
    <link rel=stylesheet type="text/css" href="index1.css">
    <link rel=stylesheet type="text/css" href="common/common.css">
         <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script
  src="https://code.jquery.com/jquery-3.3.1.js"></script>
 
    </head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/javascript" src="common/fullclip.js"></script>
<body class="home">
    <?php include 'common/menu.php';?>
    <div class="">
        <!--<div class=""><h2>Better education for<br> Exellent world</h2></div>-->
        
      <!--slider-->
      <!--<div class="slideshow  parallax">
		<ul class="slider">
			<li>
				<img src="images/1.jpg" alt="">
				<section class="caption imtxt parallax--box">
					<h1>Lorem ipsum 1</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quis ipsa, id quidem quisquam unde.</p>
				</section>
			</li>
			<li>
				<img src="images/2.jpg" alt="">
				<section class="caption imtxt parallax--box">
					<h1>Lorem ipsum 2</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quis ipsa, id quidem quisquam unde.</p>
				</section>
			</li>
			<li>
				<img src="images/3.jpg" alt="">
				<section class="caption imtxt parallax--box">
					<h1>Lorem ipsum 3</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quis ipsa, id quidem quisquam unde.</p>
				</section>
			</li>
			<li>
				<img src="images/4.jpg" alt="">
				<section class="caption imtxt parallax--box">
					<h1>Lorem ipsum 4</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quis ipsa, id quidem quisquam unde.</p>
				</section>
			</li>
		</ul>

		<ol class="pagination" style="display:none;">
			
		</ol>
	
		<div class="left">
			<span class="fa fa-chevron-left"></span>
		</div>

		<div class="right">
			<span class="fa fa-chevron-right"></span>
		</div>

	</div>-->
	
	 <section class="container imghold">
    <div class="fullBackground parallax"></div>
    <div class="caption">
        <h2 class="slides parallax--box">Make your dream comes true with us</h2>
        <h2 class="slides parallax--box">Get coached by our experienced professors</h2>
<!--        <h2 class="slides parallax--box">The future is now3</h2>
        <h2 class="slides parallax--box">The future is now4</h2>-->
        </div>
  </section>
    <script>
    $('.fullBackground').fullClip({
      images: ['images/img2.jpg', 'images/img1.jpg'],
      transitionTime: 1000,
      wait: 5000
    });
    </script>
    
    <script>
        
        $(document).ready(function(){
  
  $(function(){
    
    $('.caption .slides:gt(0)').hide();
    setInterval(function(){
      $('.caption :first-child').fadeOut(1000).next('.slides').fadeIn(2000)
      .end().appendTo('.caption');
  }, 5000);
    
  });
  
});
    </script>
<!--slider end-->
    </div>
    <!--sec2-->
    <div class="sec-ma">
        <div class="hed-secma">
            <h1>All students are not alike, So we have different coaching stratagies for each group</h1>
        </div>
        <div class="sec-pp">
            <p>We at The Empower academny strive hard to make our students bureaucrats of India. We actually do not teach students, we show them the way and let them to understand the subject to the core. </p>
        </div>
        
        <div class="sercon">
            <div class="ser-icon">
            <div class="icn-cntr">
                <img src="images/settingc.svg">
            </div>
                <div class="itxt-con">
                    <h1>Highest Quality Service</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div class="ser-icon">
            <div class="icn-cntr">
                <img src="images/settingc.svg">
            </div>
                <div class="itxt-con">
                    <h1>Highest Quality Service</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div class="ser-icon">
            <div class="icn-cntr">
                <img src="images/settingc.svg">
            </div>
                <div class="itxt-con">
                    <h1>Highest Quality Service</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry .</p>
                </div>
            </div>
            <div class="ser-icon">
            <div class="icn-cntr">
                <img src="images/settingc.svg">
            </div>
                <div class="itxt-con">
                    <h1>Highest Quality Service</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
        
    </div>
    <!--sec2-->
    <!--sec3-->
    <div class="wrapper">
        <div class="wrp-se1">
            <div class="wr-bx1">
                <div class="fingrbtn"></div>
                <div class="wr-inrbx">
                    <img src="common/images/logo.svg">
                </div>
            </div>
        </div>
        <div class="wrp-se2">
            <div class="hed-wrp">
            <h1>Fetchr That Will Save Your Time</h1>
        </div>
            <div class="wrp-para">
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            
            <div class="wrp-ser">
                <div class="set1-wrp">
                    <!--sec icon 1-->
                    <div class="icnwrp">
                        <img src="images/setting.svg">
                        <div class="heddy">
                            <h3>Send Something</h3>
                            <p>Tell us what you need delivered
                                where to pick it up and where it's
                                going.
                            </p>
                        </div>
                    </div>
                    <!--e:sec-icon 1-->
                     <!--sec icon 2-->
                    <div class="icnwrp">
                        <img src="images/setting.svg">
                        <div class="heddy">
                            <h3>Send Something</h3>
                            <p>Tell us what you need delivered
                                where to pick it up and where it's
                                going.
                            </p>
                        </div>
                    </div>
                    <!--e:sec-icon 2-->
                </div>
                
                  <div class="set1-wrp">
                    <!--sec icon 1-->
                    <div class="icnwrp">
                        <img src="images/setting.svg">
                        <div class="heddy">
                            <h3>Send Something</h3>
                            <p>Tell us what you need delivered
                                where to pick it up and where it's
                                going.
                            </p>
                        </div>
                    </div>
                    <!--e:sec-icon 1-->
                     <!--sec icon 2-->
                    <div class="icnwrp">
                        <img src="images/setting.svg">
                        <div class="heddy">
                            <h3>Send Something</h3>
                            <p>Tell us what you need delivered
                                where to pick it up and where it's
                                going.
                            </p>
                        </div>
                    </div>
                    <!--e:sec-icon 2-->
                </div>
            </div>
            
        </div>
    </div>
    <!--sec3-->
    
    <!--sec4-->
    <div class="heeedr">
    <div class="hed-secma">
            <h1>How we make the rank holders</h1>
        </div>
        
            <div class="wrp-para">
             <p class="wrkshd">we follow our below well tested strategy to create the rank holders</p>
            </div>
        </div>
    <div class="wrks">
     
        <!--for web-->
    <div class="dashed-bor">
        <!--step 1-->
        <div class="wrks-value stp1">
            <div class="wrks-vhd">
                <h3>1</h3>
            </div>
            <div class="wrks-im">
                <img src="images/student.svg">
            </div>
            <div class="wrks-ppp">
                <p>Student</p>
            </div>
        </div>
        <!--e:step 1-->
           <!--step 2-->
        <div class="wrks-value stp2">
            <div class="wrks-vhd">
                <h3>2</h3>
            </div>
            <div class="wrks-im">
                <img src="images/smartclass.svg">
            </div>
            <div class="wrks-ppp">
                <p>Smart classroom coaching</p>
            </div>
        </div>
        <!--e:step 2-->
        
           <!--step 3-->
        <div class="wrks-value stp3">
            
            <div class="wrks-im">
                <img src="images/studymat.svg">
            </div>
            <div class="wrks-ppp">
                <p>Study material with more special features</p>
            </div>
            <div class="wrks-vhd">
                <h3>3</h3>
            </div>
        </div>
        <!--e:step 3-->
        
          <!--step 4-->
        <div class="wrks-value stp4">
            <div class="wrks-vhd">
                <h3>4</h3>
            </div>
            <div class="wrks-im">
                <img src="images/revision.svg">
            </div>
            <div class="wrks-ppp">
                <p>Frequent revision</p>
            </div>
        </div>
        <!--e:step 4-->
        <!--step 5-->
        <div class="wrks-value stp5">
            
            <div class="wrks-im">
                <img src="images/selfaaa.svg">
            </div>
            <div class="wrks-ppp">
                <p>Self Assessment</p>
            </div>
            <div class="wrks-vhd">
                <h3>5</h3>
            </div>
        </div>
        <!--e:step 5-->
        
         <!--step 6-->
        <div class="wrks-value stp6">
            <div class="wrks-vhd">
                <h3>6</h3>
            </div>
            <div class="wrks-im">
                <img src="images/testser.svg">
            </div>
            <div class="wrks-ppp">
                <p>Test series</p>
            </div>
            
        </div>
        <!--e:step 6-->
        
        <!--step 7-->
        <div class="wrks-value stp7">
            <div class="wrks-vhd">
                <h3>7</h3>
            </div>
            <div class="wrks-im">
                <img src="images/rank%20holder.svg">
            </div>
            <div class="wrks-ppp">
                <p>Rank holder</p>
            </div>
        </div>
        <!--e:step 7-->
    </div>
        <!--e:for web-->
        
        
          <!--for mobile-->
    <div class="dashed-bor1">
        <!--step 1-->
        <div class="wrks-value stp11 sse">
            <div class="wrks-vhd">
                <h3>1</h3>
            </div>
            <div class="wrks-im">
                <img src="images/student.svg">
            </div>
            <div class="wrks-ppp">
                <p>Student</p>
            </div>
        </div>
        <!--e:step 1-->
           <!--step 2-->
        <div class="wrks-value stp12 sse">
            <div class="wrks-vhd">
                <h3>2</h3>
            </div>
            <div class="wrks-im">
                <img src="images/smartclass.svg">
            </div>
            <div class="wrks-ppp">
                <p>Smart classroom coaching</p>
            </div>
        </div>
        <!--e:step 2-->
        
           <!--step 3-->
        <div class="wrks-value stp13 sse">
            <div class="wrks-vhd">
                <h3>3</h3>
            </div>
            <div class="wrks-im">
                <img src="images/settingc.svg">
            </div>
            <div class="wrks-ppp">
                <p>Create an Account</p>
            </div>
            
        </div>
        <!--e:step 3-->
        
          <!--step 4-->
        <div class="wrks-value stp14 sse">
            <div class="wrks-vhd">
                <h3>4</h3>
            </div>
            <div class="wrks-im">
                <img src="images/settingc.svg">
            </div>
            <div class="wrks-ppp">
                <p>Create an Account</p>
            </div>
        </div>
        <!--e:step 4-->
        <!--step 5-->
        <div class="wrks-value stp15 sse">
            <div class="wrks-vhd">
                <h3>5</h3>
            </div>
            <div class="wrks-im">
                <img src="images/settingc.svg">
            </div>
            <div class="wrks-ppp">
                <p>Create an Account</p>
            </div>
            
        </div>
        <!--e:step 5-->
        
         <!--step 6-->
        <div class="wrks-value stp16 sse">
            <div class="wrks-vhd">
                <h3>6</h3>
            </div>
            <div class="wrks-im">
                <img src="images/settingc.svg">
            </div>
            <div class="wrks-ppp">
                <p>Create an Account</p>
            </div>
            
        </div>
        <!--e:step 6-->
        
        <!--step 7-->
        <div class="wrks-value stp17 sse">
            <div class="wrks-vhd">
                <h3>7</h3>
            </div>
            <div class="wrks-im">
                <img src="images/settingc.svg">
            </div>
            <div class="wrks-ppp">
                <p>Create an Account</p>
            </div>
        </div>
        <!--e:step 7-->
    </div>
        <!--e:for mob-->
    </div>
    <!--sec4-->
    
    <!--contactus-->
    <div class="contact-man" style="display:none;">
    <div class="heeedr">
    <div class="hed-secma">
            <h1>Contact Us</h1>
        </div>
        
            <div class="wrp-para">
             <p class="wrkshd">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        
        <div class="c-iconhld">
            <!--1-->
            <div class="c-cont">
            <div class="c-img">
                <img src="images/setting.svg">
            </div>
                <div class="c-para">
                <p>Hotline</p>
                <h3>04 000 0000</h3>
                </div>
            </div>
            <!--1-->
             <!--2-->
            <div class="c-cont">
            <div class="c-img">
                <img src="images/setting.svg">
            </div>
                <div class="c-para">
                <p>Hotline</p>
                <h3>04 000 0000</h3>
                </div>
            </div>
            <!--2-->
             <!--3-->
            <div class="c-cont">
            <div class="c-img">
                <img src="images/setting.svg">
            </div>
                <div class="c-para">
                <p>Hotline</p>
                <h3>04 000 0000</h3>
                </div>
            </div>
            <!--3-->
             <!--4-->
            <div class="c-cont">
            <div class="c-img">
                <img src="images/setting.svg">
            </div>
                <div class="c-para">
                <p>Hotline</p>
                <h3>04 000 0000</h3>
                </div>
            </div>
            <!--4-->
             <!--5-->
            <div class="c-cont">
            <div class="c-img">
                <img src="images/setting.svg">
            </div>
                <div class="c-para">
                <p>Hotline</p>
                <h3>04 000 0000</h3>
                </div>
            </div>
            <!--5-->
             <!--6-->
            <div class="c-cont">
            <div class="c-img">
                <img src="images/setting.svg">
            </div>
                <div class="c-para">
                <p>Hotline</p>
                <h3>04 000 0000</h3>
                </div>
            </div>
            <!--6-->
        </div>
        </div>
    <!--contactus-->
       <div class="imgban">
       <div class="conttn"><h2 class="htth">Better education for<br> Exellent world</h2>
       
           <button class="bbt">Contact</button>
    
       </div>
       
      
        </div>
    <?php include 'footer.php'; ?>
</body>
 
    <script type="text/javascript">
    $(window).scroll(function(){
        parallax();
         parallax1();
    })
    function parallax(){
        var mscrol = $(window).scrollTop();
        /*console.log(mscrol);*/
        
       $(".parallax").css('background-position', 'center ' + -(mscrol*0.2)+'px');
     
        /* $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');*/
        
          $('.parallax--box').css('top', -3 + (mscrol*.005)+'em')
        
    }
    
      function parallax1(){
        var mscrol = $(window).scrollTop();
        /*console.log(mscrol);*/
        
       $(".imgban").css('background-position', 'center ' + (mscrol*0.002)+'px');
     
        /* $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');*/
        
         /* $('.htth').css('top', 5 + (mscrol*.005)+'px')*/
        
    }
    </script>
    <script type="text/javascript" src="common/common.js"></script>
    <!-- <script type="text/javascript" src="index1.js"></script>-->
    
</html>