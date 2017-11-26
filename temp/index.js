var area=document.getElementsByClassName('area');
var click=document.getElementsByClassName('click');
var more=document.getElementsByClassName('more');
var less=document.getElementsByClassName('less');
var benp=document.getElementsByClassName('ben1p');



function benvis(n){
            benp[n].style.display="block";
            more[n].style.display="none";
            less[n].style.display="block";    
}

function benvisc(n){
    benp[n].style.display="none";
            more[n].style.display="block";
            less[n].style.display="none";
}
more[0].addEventListener('click',function(){benvis(0);},false);
more[1].addEventListener('click',function(){benvis(1);},false);
more[2].addEventListener('click',function(){benvis(2);},false);
more[3].addEventListener('click',function(){benvis(3);},false);


less[0].addEventListener('click',function(){benvisc(0);},false);
less[1].addEventListener('click',function(){benvisc(1);},false);
less[2].addEventListener('click',function(){benvisc(2);},false);
less[3].addEventListener('click',function(){benvisc(3);},false);

/* start:section 1*/
var what=document.getElementsByClassName('what');
var slide_con=document.getElementsByClassName('slide_con');

window.onscroll = function() {scrollani()};

function scrollani() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        what[0].getElementsByTagName('img')[0].className='img_mob_move';
         what[0].className='what what_mob_move';
    slide_con[0].style.bottom="250px";
    
    }
        
}
/* end:section 1*/
/* start:steps*/

var c1=document.getElementsByClassName('c1');
var sl1=document.getElementsByClassName('sl1');
var sr1=document.getElementsByClassName('sr1');
var txt1=document.getElementsByClassName('txt1');
var sleft=document.getElementsByClassName('sleft');
var sright=document.getElementsByClassName('sright');
var stepa=0;
var limagea=5;
var rimagea=1;


function cimage(n){
    c1[0].style.display="none";
     c1[1].style.display="none";
     c1[2].style.display="none";
     c1[3].style.display="none";
     c1[4].style.display="none";
     c1[5].style.display="none";
    c1[n].style.display="block";
}

function limage(n){
    sl1[0].style.display="none";
     sl1[1].style.display="none";
     sl1[2].style.display="none";
     sl1[3].style.display="none";
     sl1[4].style.display="none";
     sl1[5].style.display="none";
      sl1[n].style.display="block";
 
}

function rimage(n){
    sr1[0].style.display="none";
     sr1[1].style.display="none";
     sr1[2].style.display="none";
     sr1[3].style.display="none";
     sr1[4].style.display="none";
     sr1[5].style.display="none";
    sr1[n].style.display="block";
}

function steptext(n){
    txt1[0].style.display="none";
     txt1[1].style.display="none";
     txt1[2].style.display="none";
     txt1[3].style.display="none";
     txt1[4].style.display="none";
     txt1[5].style.display="none";
    txt1[n].style.display="block";
}



steptext(0);
cimage(0);
limage(5);
rimage(1);

function incr(n){
    stepa=n+stepa;
    limagea=n+limagea;
    rimagea=n+rimagea;
    if(rimagea==6)
        {rimagea=0}
    if(rimagea==-1)
        {rimagea=5}
    if(limagea==6)
        {limagea=0}
    if(limagea==-1)
        {limagea=5}
    
    if(stepa==6)
        {stepa=0}
      if(stepa==-1)
        {stepa=5}
    steptext(stepa);
    cimage(stepa);
    rimage(rimagea);
    limage(limagea);
    
}


sleft[0].addEventListener('click',function(){incr(-1);},false);
sright[0].addEventListener('click',function(){incr(+1);},false);


/* end:steps */


