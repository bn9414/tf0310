var x=document.getElementsByClassName('quest');
var y=document.getElementsByClassName('qopen');
var z=document.getElementsByClassName('close');
var expand=document.getElementsByClassName('expand');
var proexpand=document.getElementsByClassName('pro_expand');
var suit=document.getElementsByClassName('suit_open');
var exoffer=document.getElementsByClassName('exoffer');
var offer=document.getElementsByClassName('offer');
var tick=0;
var suit_tick=0;
var offer_tick=0;
function open(n){
if(n==0||n==1||n==2||n==3||n==4||n==5||n==6||n==7||n==8||n==9||n==10||n==11||n==12||n==13||n==14||n==15||n==16||n==17||n==18||n==19){ 
    y[0].style.display="none";
    y[1].style.display="none";
    y[2].style.display="none";
    y[3].style.display="none";
     y[4].style.display="none";
    y[5].style.display="none";
       y[6].style.display="none";
           y[7].style.display="none";
           y[8].style.display="none";
           y[9].style.display="none";
      y[10].style.display="none";
      y[11].style.display="none";
      y[12].style.display="none";
      y[13].style.display="none";
      y[14].style.display="none";
      y[15].style.display="none";
      y[16].style.display="none";
      y[17].style.display="none";
      y[18].style.display="none";
      y[19].style.display="none";
    
  
    y[n].style.display="block";
}
        if(n=='a'){    
    y[0].style.display="none";
            y[1].style.display="none";
            y[2].style.display="none";
            y[3].style.display="none";
                  y[4].style.display="none";
             y[5].style.display="none";
               y[6].style.display="none";
               y[7].style.display="none";
               y[8].style.display="none";
               y[9].style.display="none";
             y[10].style.display="none";
             y[11].style.display="none";
             y[12].style.display="none";
             y[13].style.display="none";
             y[14].style.display="none";
                  y[15].style.display="none";
                  y[16].style.display="none";
                  y[17].style.display="none";
                  y[18].style.display="none";
                  y[19].style.display="none";
            
}
tick=!tick;
}

function suitopen(n){
    if(suit_tick==0)
        {
            suit[n].style.display="block";
            
       
               
        }
    
     if(suit_tick==1)
        {
            suit[0].style.display="none";
             suit[1].style.display="none";
              suit[2].style.display="none";
              
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
x[5].addEventListener("click",function(){open(5);}, false);
x[6].addEventListener("click",function(){open(6);}, false);
x[7].addEventListener("click",function(){open(7);}, false);
x[8].addEventListener("click",function(){open(8);}, false);
x[9].addEventListener("click",function(){open(9);}, false);
x[10].addEventListener("click",function(){open(10);}, false);
x[11].addEventListener("click",function(){open(11);}, false);
x[12].addEventListener("click",function(){open(12);}, false);
x[13].addEventListener("click",function(){open(13);}, false);
x[14].addEventListener("click",function(){open(14);}, false);
x[15].addEventListener("click",function(){open(15);}, false);
x[16].addEventListener("click",function(){open(16);}, false);
x[17].addEventListener("click",function(){open(17);}, false);
x[18].addEventListener("click",function(){open(18);}, false);
x[19].addEventListener("click",function(){open(19);}, false);



z[0].addEventListener("click",function(){open('a');}, false);
z[1].addEventListener("click",function(){open('a');}, false);
z[2].addEventListener("click",function(){open('a');}, false);
z[3].addEventListener("click",function(){open('a')}, false);
z[4].addEventListener("click",function(){open('a')}, false);
z[5].addEventListener("click",function(){open('a')}, false);
z[6].addEventListener("click",function(){open('a')}, false);
z[7].addEventListener("click",function(){open('a')}, false);
z[8].addEventListener("click",function(){open('a')}, false);
z[9].addEventListener("click",function(){open('a')}, false);
z[10].addEventListener("click",function(){open('a')}, false);
z[11].addEventListener("click",function(){open('a')}, false);
z[12].addEventListener("click",function(){open('a')}, false);
z[13].addEventListener("click",function(){open('a')}, false);
z[14].addEventListener("click",function(){open('a')}, false);

z[15].addEventListener("click",function(){open('a')}, false);

z[16].addEventListener("click",function(){open('a')}, false);

z[17].addEventListener("click",function(){open('a')}, false);

z[18].addEventListener("click",function(){open('a')}, false);

z[19].addEventListener("click",function(){open('a')}, false);



expand[0].addEventListener("click",function(){suitopen(0);}, false);
proexpand[0].addEventListener("click",function(){suitopen(1);}, false);
proexpand[1].addEventListener("click",function(){suitopen(2);}, false);
expand[1].addEventListener("click",offeropen, false);


/* start:build */
var buildmg=document.getElementById('buildmg');
window.onscroll = function() {scrollani(),scrollanib()};
  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
function scrollani() {
    /* build*/
 if(w>500){
    if (document.body.scrollTop > 1750 || document.documentElement.scrollTop > 1750) {
          buildmg.style.opacity="1";
          buildmg.style.left="-50px";
           buildmg.style.top="-100px";
      }
    }
    
    if(w<500){
    if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
          buildmg.style.opacity="1";
          buildmg.style.left="-70px";
           buildmg.style.top="-20px";
      }
    }
    
    
}
    
     /* build*/
    /* end:build */
    

