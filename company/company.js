var x= document.getElementsByClassName('whoh');
var y= document.getElementsByClassName('whyh');
var z= document.getElementsByClassName('whath');
var x1= document.getElementsByClassName('whop');
var y1= document.getElementsByClassName('whyp');
var z1= document.getElementsByClassName('whatp');

function who(){
    
 x[0].className='whohc whoh';
    y[0].className='whyh';
    z[0].className='whath';
    x1[0].style.display="block";    x1[0].className="whop wwwani";
    y1[0].style.display="none";
    z1[0].style.display="none";
    
}


function why(){
       x[0].className='whoh';
        y[0].className='whyhc whyh';
 
    z[0].className='whath';
    x1[0].style.display="none";
   
    z1[0].style.display="none";
     y1[0].style.display="block";
    y1[0].className="whyp wwwani";
    
}

function what(){
    
           x[0].className='whoh';
        y[0].className='whyh';
 
    z[0].className='whathc whath';
    
    x1[0].style.display="none";
    y1[0].style.display="none";
    z1[0].style.display="block";
 z1[0].className="whatp wwwani";
    
    
}
who();

x[0].addEventListener('click', who,false);
y[0].addEventListener('click', why,false);
z[0].addEventListener('click', what,false);

/* sec 1*/

var secv= document.getElementsByClassName('sec_v');
var mg= document.getElementsByClassName('mg');


var sect= document.getElementsByClassName('sec_t');
var tx= document.getElementsByClassName('tx');

var sechd= document.getElementsByClassName('shd');

var wehd= document.getElementsByClassName('wehd');
var outline= document.getElementsByClassName('outline');
var solid= document.getElementsByClassName('solid');

function sec1(n){
    
    secv[0].style.display="none";
    secv[1].style.display="none";
    secv[2].style.display="none";
    secv[3].style.display="none";
    
    sect[0].style.display="none";
    sect[1].style.display="none";
    sect[2].style.display="none";
    sect[3].style.display="none";
    
    sechd[0].style.display="none";
    sechd[1].style.display="none";
    sechd[2].style.display="none";
    sechd[3].style.display="none";
    
        solid[0].style.display="none";
    solid[1].style.display="none";
    solid[2].style.display="none";
    solid[3].style.display="none";
    
    wehd[0].className="wehd";
    wehd[1].className="wehd";
    wehd[2].className="wehd";
    wehd[3].className="wehd";
    wehd[n].className="wehd hd1";
    
    
    
    
    
    secv[n].style.display="flex";
       mg[n].className="mg mgon";
   
    sect[n].style.display="flex";
      tx[n].className="tx txon";
     sechd[n].style.display="block";
     sechd[n].className="shd hdon";
        solid[n].style.display="block";
     solid[n].className="solid solidon";
}
sec1(0);
outline[0].addEventListener('click',function(){sec1(0);},false);
outline[1].addEventListener('click',function(){sec1(1);},false);
outline[2].addEventListener('click',function(){sec1(2);},false);
outline[3].addEventListener('click',function(){sec1(3);},false);

/* sec 1*/


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
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
          buildmg.style.opacity="1";
          buildmg.style.left="-70px";
           buildmg.style.top="-20px";
      }
    }
    
    
}
    
     /* build*/
    /* end:build */
