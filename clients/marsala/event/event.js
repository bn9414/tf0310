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