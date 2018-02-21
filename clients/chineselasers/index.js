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

var tswit= document.getElementsByClassName('tswit');

var tsin= document.getElementsByClassName('tsin');
var tall= document.getElementsByClassName('tall');
function tswitch(n){
    
    tsin[0].style.backgroundColor="#fcfcfc";
     tsin[1].style.backgroundColor="#fcfcfc";
     tsin[2].style.backgroundColor="#fcfcfc";
     tsin[3].style.backgroundColor="#fcfcfc";

    tall[0].style.display="none";tall[1].style.display="none";tall[2].style.display="none";tall[3].style.display="none";
    
     tall[n].style.display="block";tsin[n].style.backgroundColor="#25c485";
    

}
if(w<699){
tswitch(0);
}
tswit[0].addEventListener('click',function() {tswitch(0);}, false);

tswit[1].addEventListener('click',function() {tswitch(1);}, false);

tswit[2].addEventListener('click',function() {tswitch(2);}, false);

tswit[3].addEventListener('click',function() {tswitch(3);}, false);








var wswit= document.getElementsByClassName('wswit');

var wsin= document.getElementsByClassName('wsin');

var why1=document.getElementsByClassName('why1');

var tblock=document.getElementsByClassName('tblock');


function wswitch(n){
    
    wsin[0].style.backgroundColor="#fcfcfc";
     wsin[1].style.backgroundColor="#fcfcfc";
     wsin[2].style.backgroundColor="#fcfcfc";
     

wsin[n].style.backgroundColor="#25c485";
       why1[0].style.display="none";
    why1[1].style.display="none";
    why1[2].style.display="none"
    
    why1[n].style.display="flex";
    

}


if(w<599){
wswitch(0);
}
wswit[0].addEventListener('click',function() {wswitch(0);}, false);

wswit[1].addEventListener('click',function() {wswitch(1);}, false);

wswit[2].addEventListener('click',function() {wswitch(2);}, false);










var main=document.getElementsByClassName("main");

var jtaruvp=document.getElementsByClassName("jtaruvp");

var backlay=document.getElementsByClassName("backlay");

var fvect=document.getElementsByClassName("fvect");
window.onscroll = function() {scrollani()};

function scrollani() {
    /* home*/
 
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
main[0].style.opacity="1";
        main[0].style.left="0px";
        
        jtaruvp[0].style.opacity="1";
        jtaruvp[0].style.left="0px";

      }
    
       if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
fvect[0].style.opacity="1";
        fvect[0].style.top="0px";
        
       

      }
    
  
    
        if(w>699){
         if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {

        tblock[0].style.top="0px";
              tblock[0].style.opacity="1";

      }}
    
    
   
     
   
    
    
    
        
}


















