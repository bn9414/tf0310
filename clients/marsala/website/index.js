var slideIndex = 0;
showSlides(slideIndex);
var timer = null;

function plusSlides(n) {
     
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
    
  var slides = document.getElementsByClassName("mySlides");
   
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
   
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block"; 
  
}
 var prev = document.getElementById('prev');
prev.addEventListener('click',function(e){
    plusSlides(-1);
},false);

var next = document.getElementById('next');
next.addEventListener('click',function(e){
    plusSlides(1);
},false);


 /*   showSlides(n);
},3000);*/


var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");

dot1.addEventListener("click",function(){
                      slde(1);},false);

dot2.addEventListener("click",function(){
                      slde(2);},false);

function slde(a){
    console.log(a);
    if(a == 1){
        dot1.style.background="#da5050";
        dot1.style.border="1px solid #da5050";
        
        dot2.style.background="#454545 ";
        dot2.style.border="1px solid #454545";
        
        var secsld = document.getElementById('sec-sld');
        var firsld = document.getElementById('fir-sld');
        secsld.style.display="none";
        firsld.style.display="block";
        
    }
    else if(a == 2){
        dot2.style.background="#da5050";
        dot2.style.border="1px solid #da5050";
        
        dot1.style.background="#454545";
        dot1.style.border="1px solid #454545";
        var secsld1 = document.getElementById('sec-sld');
        var firsld1 = document.getElementById('fir-sld');
        secsld1.style.display="block";
        firsld1.style.display="none";
    }
}
slde(1);
