var x= document.getElementsByClassName('sellh');
var y= document.getElementsByClassName('referh');
var z= document.getElementsByClassName('bottomm');
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        x[0].style.opacity='1';
        x[0].style.left='0px';
    }
      
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        y[0].style.opacity='1';
        y[0].style.left='0px';
    }
      
          
    if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
        z[0].className="bottommjs bottomm";
    }
    
        if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
        z[0].className="bottommjsmob bottomm";
    }
      
    
}