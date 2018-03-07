//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var slidehd= document.getElementsByClassName('slidehd');
            var slmgj= document.getElementsByClassName('slmgj');
    
        
function portfullf(){
   slidehd[0].style.opacity="1";
    slidehd[0].style.left="0px";
    slmgj[0].className="slmgj slani";
    
    
}

portfullf();

    });

var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);


var sidehdj=document.getElementsByClassName('sidehdj');
var mphilhd=document.getElementsByClassName('mphilhd');

var psidehdj=document.getElementById('psidehdj');
var consj1=document.getElementById('consj1');
var consj2=document.getElementById('consj2');
var intj=document.getElementById('intj');

window.onscroll = function() {scrollani()};

function scrollani() {
    /* home*/
 if(w>1000){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
 sidehdj[0].style.opacity="1";
 sidehdj[0].style.top="130px";
        
    
    }
     if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
 mphilhd[0].style.opacity="1";
 mphilhd[0].style.top="160px";
        
    
    }
     
     
     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {

         consj1.style.opacity="1";
 consj1.style.left="0px";
      consj2.style.opacity="1";
 consj2.style.left="0px";
    
         
    }
     
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {

         intj.style.opacity="1";
 intj.style.left="0px";
      
    
         
    }
     
    
    
 }
    
     if(w>880){
    if (document.body.scrollTop > 1850 || document.documentElement.scrollTop > 1850) {

         psidehdj.style.opacity="1";
 psidehdj.style.top="160px";
    
    }
         
    
    
     }







}









var tswit= document.getElementsByClassName('tswit');

var tsin= document.getElementsByClassName('tsin');
var tall= document.getElementsByClassName('tall');
function tswitch(n){
    
    tsin[0].style.backgroundColor="#fcfcfc";
     tsin[1].style.backgroundColor="#fcfcfc";
     tsin[2].style.backgroundColor="#fcfcfc";
     
    tall[0].style.display="none";tall[1].style.display="none";tall[2].style.display="none";
    
     tall[n].style.display="block";tsin[n].style.backgroundColor="#454545";
    

}
if(w<880){
tswitch(0);
}
tswit[0].addEventListener('click',function() {tswitch(0);}, false);

tswit[1].addEventListener('click',function() {tswitch(1);}, false);

tswit[2].addEventListener('click',function() {tswitch(2);}, false);























