var x=document.getElementsByClassName('quest');
var y=document.getElementsByClassName('qopen');
var z=document.getElementsByClassName('close');
var expand=document.getElementsByClassName('expand');
var suit=document.getElementsByClassName('suit_open');
var exoffer=document.getElementsByClassName('exoffer');
var offer=document.getElementsByClassName('offer');
var tick=0;
var suit_tick=0;
var offer_tick=0;
function open(n){
if(n==0||n==1||n==2||n==3||n==4){ 
    y[0].style.display="none";
    y[1].style.display="none";
    y[2].style.display="none";
    y[3].style.display="none";
     y[4].style.display="none";
    
    y[n].style.display="block";
}
        if(n==5){    
    y[0].style.display="none";
            y[1].style.display="none";
            y[2].style.display="none";
            y[3].style.display="none";
                  y[4].style.display="none";
}
tick=!tick;
}

function suitopen(){
    if(suit_tick==0)
        {
            suit[0].style.display="block";
            document.getElementsByClassName('suit')[0].style.height='200px';
        }
    
     if(suit_tick==1)
        {
            suit[0].style.display="none";
              document.getElementsByClassName('suit')[0].style.height='50px';
        }
    
    suit_tick=!suit_tick;
}

function offeropen(){
    if(offer_tick==0)
        {
            exoffer[0].style.display="block";
              exoffer[1].style.display="block";
              exoffer[2].style.display="block";
            document.getElementsByClassName('offer')[0].style.height='188px';
        }
    
     if(offer_tick==1)
        {
            exoffer[0].style.display="none";
               exoffer[1].style.display="none";
               exoffer[2].style.display="none";
              document.getElementsByClassName('offer')[0].style.height='50px';
        }
    
    offer_tick=!offer_tick;
}




x[0].addEventListener("click",function(){open(0);}, false);
x[1].addEventListener("click",function(){open(1);}, false);
x[2].addEventListener("click",function(){open(2);}, false);
x[3].addEventListener("click",function(){open(3);}, false);
x[4].addEventListener("click",function(){open(4);}, false);
z[0].addEventListener("click",function(){open(5);}, false);
z[1].addEventListener("click",function(){open(5);}, false);
z[2].addEventListener("click",function(){open(5);}, false);
z[3].addEventListener("click",function(){open(5);}, false);
z[4].addEventListener("click",function(){open(5);}, false);


expand[0].addEventListener("click",suitopen, false);
expand[1].addEventListener("click",offeropen, false);



