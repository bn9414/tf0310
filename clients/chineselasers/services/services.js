//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
        	
    var jhd1= document.getElementsByClassName('jhd1');
        var jhd2= document.getElementsByClassName('jhd2');
      
        var sec1= document.getElementsByClassName('sec1');
 

    
function portfullf(){
jhd1[0].style.left="0px";
    jhd1[0].style.opacity="1";
    
    jhd2[0].style.left="0px";
    jhd2[0].style.opacity="1";
    sec1[0].style.backgroundPosition="100% 95%";

  

}

portfullf();

    });

 var sec2= document.getElementsByClassName('sec2');
 
    var jhd3= document.getElementsByClassName('jhd3'); 
var jtar1= document.getElementsByClassName('jtar1');
var jtar2= document.getElementsByClassName('jtar2');
window.onscroll = function() {scrollani()};
  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
function scrollani() {
     if(w>950){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  jhd3[0].style.left="0px";
    jhd3[0].style.opacity="1";  
      }
     
     if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
  jtar1[0].style.top="0px";
         jtar1[0].style.opacity="1";
    jtar2[0].style.top="0px";
         jtar2[0].style.opacity="1";
    
     }
         
         
           if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
sec2[0].style.backgroundPosition="00% 480px";
    
     }
   
 }
    
    if(w>700&&w<950){
    if (document.body.scrollTop > 310 || document.documentElement.scrollTop > 310) {
    jhd3[0].style.left="0px";
    jhd3[0].style.opacity="1";  
    }   
        if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
    jtar1[0].style.top="0px";
         jtar1[0].style.opacity="1";
    jtar2[0].style.top="0px";
         jtar2[0].style.opacity="1";  
    }   
        
 }
    
        if(w>640&&w<699){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    jhd3[0].style.left="0px";
    jhd3[0].style.opacity="1";  
    }   
        if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    jtar1[0].style.top="0px";
         jtar1[0].style.opacity="1";
    jtar2[0].style.top="0px";
         jtar2[0].style.opacity="1";  
    }   
        
 }
    
     if(w>0&&w<639){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    jhd3[0].style.left="0px";
    jhd3[0].style.opacity="1";  
    }   
        if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    jtar1[0].style.top="0px";
         jtar1[0].style.opacity="1";
  
    }   
         
         if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
    
    jtar2[0].style.top="0px";
         jtar2[0].style.opacity="1";  
    }   
        
 }
    


}

