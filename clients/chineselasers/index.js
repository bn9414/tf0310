//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var slh= document.getElementsByClassName('slh');
        var slp= document.getElementsByClassName('slp');
        
function portfullf(){
   slh[0].style.opacity="1";
    slh[0].style.left="0px";
    slp[0].style.opacity="1";
    slp[0].style.left="0px";
    
    
}

portfullf();

    });

var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

window.onscroll = function() {scrollani()};

function scrollani() {
    /* home*/
 
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
 }
    
        
}





var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

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























