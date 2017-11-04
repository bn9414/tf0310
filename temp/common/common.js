var n =true;
var a =document.getElementById('nav_line');

var b =document.getElementsByClassName('l1')[0];
var c =document.getElementsByClassName('l2')[0];
var d=document.getElementsByClassName('l3')[0];
var e=document.getElementsByClassName('menu_con')[0];
var nav= document.getElementById('nav_bar');

var menu1=document.getElementsByClassName('menu1')[0];
var menu2=document.getElementsByClassName('menu2')[0];
var menu3=document.getElementsByClassName('menu3')[0];
var menu4=document.getElementsByClassName('menu4')[0];
var overflow =document.getElementById('nav_bar');


function test(){
    if(n==true){
    b.className='line l1 lopen1';
    c.className='line l2 lopen2';
        d.className='line l3 lopen3';
        e.style.display='block';
     nav.style.boxShadow='0px 0px 0px 0px hsla(0, 0%, 0%, 0.0)';
menu1.className='menu1 mjz1';
        menu2.className='menu1 mjz2';
        menu3.className='menu1 mjz3';
        menu4.className='menu1 mjz4';
    overflow.style.position='fixed';
    }
    

if(n==false){
    b.className='line l1 lclose1';
  
     c.className='line l2 lclose2';
      d.className='line l3 lclose3';
 e.style.display='none';
    nav.style.boxShadow='0px 0px 2px 1px hsla(0, 0%, 0%, 0.1)';
    
menu1.className='menu1 mjz1';
        menu2.className='menu1 mjz2';
        menu3.className='menu1 mjz3';
        menu4.className='menu1 mjz4';
 overflow.style.position='relative';

}
n=!n;
}

a.addEventListener('click', test, false );