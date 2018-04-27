/* START: hl1 slide*/

//paste this code under the head tag or in a separate js file.
	// Wait for window load



/*
var ser=document.getElementsByClassName('ser-ss');


window.onscroll = function() {scrollani(),scrollanib()};

  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

function scrollani() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        price[0].className="price pricemob_ani" 
       
      
    }
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        price[0].className="price price_ani pricemob_ani" 
       
      
    }
}
*/
var ecar=document.getElementsByClassName('e-car');
var pcar=document.getElementsByClassName('p-car');


window.onscroll = function() {tabsanim()};

  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

function tabsanim() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        ecar[0].style.top="0px";
        ecar[0].style.opacity="1";
        
         pcar[0].style.opacity="1";
         pcar[0].style.top="0px";
       
      
    }
    
    
}


var w = parseInt(window.innerWidth);
var galaact = document.getElementsByClassName('tr-bx');
galaact[0].addEventListener('click',function(){
    gallery(1);
},false);

galaact[1].addEventListener('click',function(){
    gallery(2);
},false);
        
var galaimg = document.getElementsByClassName('gala-imgs');
var hil = document.getElementsByClassName('e-car');
var wid = document.getElementsByClassName('p-car');
var bbhd = document.getElementsByClassName('bb-hhd');
var towbx = document.getElementsByClassName('tr-bx1');

var round1 = document.getElementsByClassName("roun1");
        
function gallery(g){

    if(g == 1){
        galaimg[0].style.display="flex";
        galaimg[1].style.display="none";
        wid[0].classList.remove('p-car1');
        
        round1[0].style.opacity="1";
        round1[1].style.opacity="0";

    hil[0].className="e-car e-car1";    
        bbhd[0].style.color="#d53132";
        galaact[0].style.borderBottom="3px solid #d53132";
        galaact[0].classList.add("tr-bx1");
     
        
      
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        
    }
    else if(g == 2){
        galaimg[0].style.display="none";
        galaimg[1].style.display="flex";
        
        round1[0].style.opacity="0";
        round1[1].style.opacity="1";

       hil[0].classList.remove('e-car1');
        
     
         wid[0].className="p-car p-car1";
        
        bbhd[1].style.color="#d53132";
        galaact[1].style.borderBottom="3px solid #d53132";
        galaact[1].classList.add("tr-bx1");
        
       
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        
         
    }
}
gallery(1);

window.onscroll = function() {stricky(),tabsanim()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function stricky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

var imgbor = document.getElementsByClassName("img-bor");
var smlimg = document.getElementsByClassName("sml-img");
function tabsanim() {
    if(w>= 700){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        
       imgbor[0].style.top="0px";
       imgbor[0].style.opacity="1";
       imgbor[0].style.animation="imgbr 1s";
        
        smlimg[0].style.opacity="1";
        smlimg[0].style.transition="opacity 3s";
        
      
    }
    
    }
}



