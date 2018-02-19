//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var hd= document.getElementsByClassName('s1hd');
        var para= document.getElementById('jtarget');

function portfullf(){
   hd[0].style.left="0px";
    para.style.left="0px";
    hd[0].style.opacity="1";
    para.style.opacity="1";
}

portfullf();

    });




var tb1=document.getElementsByClassName('tb1');
var tb2=document.getElementsByClassName('tb2');
var tb3=document.getElementsByClassName('tb3');

var tm1=document.getElementsByClassName('tm1');
var tm2=document.getElementsByClassName('tm2');
var tm3=document.getElementsByClassName('tm3');

var tp1=document.getElementsByClassName('tp1');
var tp2=document.getElementsByClassName('tp2');
var tp3=document.getElementsByClassName('tp3');

var specs=document.getElementsByClassName('specs');
var appy=document.getElementsByClassName('app');
var ba=document.getElementsByClassName('ba');


function app(n){
tm1[0].style.filter=" grayscale(100%)";
tm2[0].style.filter=" grayscale(100%)";
tm3[0].style.filter=" grayscale(100%)";
   tp1[0].style.color="#b5b5b5";
    tp2[0].style.color="#b5b5b5";
    tp3[0].style.color="#b5b5b5";
    
    tb1[0].style.borderBottom="0px solid #25c485";
    tb2[0].style.borderBottom="0px solid #25c485";
    tb3[0].style.borderBottom="0px solid #25c485";

specs[0].style.display="none";

    appy[0].style.display="none";
        ba[0].style.display="none";
    
if(n==0){    
    tm1[0].style.filter=" grayscale(00%)";
      tp1[0].style.color="#25c485";
     tb1[0].style.borderBottom="3px solid #25c485";
    specs[0].style.display="flex";}
    
if(n==1){    
    tm2[0].style.filter=" grayscale(00%)";
      tp2[0].style.color="#25c485";
     tb2[0].style.borderBottom="3px solid #25c485";
    
    appy[0].style.display="block";}
    
if(n==2){    
    tm3[0].style.filter=" grayscale(00%)";
      tp3[0].style.color="#25c485";
     tb3[0].style.borderBottom="3px solid #25c485";
     ba[0].style.display="flex";}
    
}
app(0);
tb1[0].addEventListener('click',function(){app(0);},false);
tb2[0].addEventListener('click',function(){app(1);},false);
tb3[0].addEventListener('click',function(){app(2);},false);

