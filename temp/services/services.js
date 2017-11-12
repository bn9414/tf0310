var x=document.getElementsByClassName('quest');
var y=document.getElementsByClassName('qopen');
var z=document.getElementsByClassName('close');
var tick=0;
function open(n){
if(n==0||n==1||n==2||n==3){ 
    y[0].style.display="none";
    y[1].style.display="none";
    y[2].style.display="none";
    y[3].style.display="none";
    
    y[n].style.display="block";
}
        if(n==5){    
    y[0].style.display="none";
            y[1].style.display="none";
            y[2].style.display="none";
            y[3].style.display="none";
}
tick=!tick;
}
x[0].addEventListener("click",function(){open(0);}, false);
x[1].addEventListener("click",function(){open(1);}, false);
x[2].addEventListener("click",function(){open(2);}, false);
x[3].addEventListener("click",function(){open(3);}, false);
z[0].addEventListener("click",function(){open(5);}, false);
z[1].addEventListener("click",function(){open(5);}, false);
z[2].addEventListener("click",function(){open(5);}, false);
z[3].addEventListener("click",function(){open(5);}, false);


