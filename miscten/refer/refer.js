






var outc=document.getElementsByClassName("outc");
var inc=document.getElementsByClassName("inc");
var line=document.getElementsByClassName("line");
var menu=document.getElementsByClassName("menu");

function mens(n){
      
       menu[0].style.color="#717171";
  
    outc[0].style.borderColor="#e0e4e7";
    inc[0].style.backgroundColor="#e0e4e7";
    line[0].style.backgroundColor="#e0e4e7";

       menu[1].style.color="#717171";

    outc[1].style.borderColor="#e0e4e7";
    inc[1].style.backgroundColor="#e0e4e7";
    line[1].style.backgroundColor="#e0e4e7";

       menu[2].style.color="#717171";

    outc[2].style.borderColor="#e0e4e7";
    inc[2].style.backgroundColor="#e0e4e7";
    line[2].style.backgroundColor="#e0e4e7";

       menu[3].style.color="#717171";

    outc[3].style.borderColor="#e0e4e7";
    inc[3].style.backgroundColor="#e0e4e7";
    line[3].style.backgroundColor="#e0e4e7";

       menu[4].style.color="#717171";
  
    outc[4].style.borderColor="#e0e4e7";
    inc[4].style.backgroundColor="#e0e4e7";
    line[4].style.backgroundColor="#e0e4e7";


    
    
      menu[n].style.color="#219ba0";
       

    outc[n].style.borderColor="#219ba0";
    inc[n].style.backgroundColor="#219ba0";
    line[n].style.backgroundColor="#219ba0";

}
                              
    mens(0);
menu[0].addEventListener('click',function(){mens(0);},false);
menu[1].addEventListener('click',function(){mens(1);},false);
menu[2].addEventListener('click',function(){mens(2);},false);
menu[3].addEventListener('click',function(){mens(3);},false);
menu[4].addEventListener('click',function(){mens(4);},false);


var n=true;
var a =document.getElementById('nav_line');
var b=document.getElementsByClassName('l1')[0];
var c=document.getElementsByClassName('l2')[0];
var d=document.getElementsByClassName('l3')[0];
var e=document.getElementsByClassName('mone')[0];
[0];

function test(){
    if(n==true){
    b.className='hline l1 lc1';
    d.className='hline l3 lc3';
     c.className='hline l2 lc2';
        e.style.left="0px";

    }

if(n==false){
    b.className='hline l1';
    d.className='hline l3';
     c.className='hline l2';
   e.style.left="-250px";
    }
n=!n;
}

a.addEventListener('click', test, false );



