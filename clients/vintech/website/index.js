

/* START: hl1 slide*/

//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
//end preloads screen//

var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
var psidehdj=document.getElementById('psidehdj');
var intj=document.getElementById('intj');

window.onscroll = function() {scrollani()};

function scrollani() {
    /* home*/
 if(w>1000){
    
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {

         intj.style.opacity="1";
 intj.style.left="0px";
      
    
         
    }
     
    
    
 }
    
     if(w>850){
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {

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



