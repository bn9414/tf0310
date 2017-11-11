var x=document.getElementsByClassName('quest');
var y=document.getElementsByClassName('qopen');
var tick=0;
function open(){
if(tick==0){    
    y[0].style.display="block";
}
        if(tick==1){    
    y[0].style.display="none";
}
tick=!tick;
}
x[0].addEventListener("click",open, false);


