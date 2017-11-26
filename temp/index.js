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


function cimage(n,y){

    c1[0].style.display="none";
     c1[1].style.display="none";
     c1[2].style.display="none";
     c1[3].style.display="none";
     c1[4].style.display="none";
     c1[5].style.display="none";
    c1[n].style.display="block";
    if(y==3){
c1[n].className="c1 appear";
    }
      if(y==2){
          
       c1[n].className="c1 appearleft";   
      }
    
    

}

function limage(n,y){
    sl1[0].style.display="none";
     sl1[1].style.display="none";
     sl1[2].style.display="none";
     sl1[3].style.display="none";
     sl1[4].style.display="none";
     sl1[5].style.display="none";
      sl1[n].style.display="block";
        if(y==3){
     sl1[n].className="sl1 appear";
        }
    
      if(y==2){
          
         sl1[n].className="sl1 appearleft";  
      }
    
    
}

function rimage(n,y){
    sr1[0].style.display="none";
     sr1[1].style.display="none";
     sr1[2].style.display="none";
     sr1[3].style.display="none";
     sr1[4].style.display="none";
     sr1[5].style.display="none";
    sr1[n].style.display="block";
    
      if(y==3){
     sr1[n].className="sr1 appear";
      }
    if(y==2){
         sr1[n].className="sr1 appearleft";
    }
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

function incr(n,z){
 
    var creset;
  
    var rreset;
        var lreset;
    
    
     stepa=n+stepa; 
    if(stepa==-1)
        {stepa=5}
    if(stepa==6)
        {stepa=0}



    
    limagea=n+limagea;

    if(lreset==-1)
        {lreset==5;}
 
    rimagea=n+rimagea;

    if(rreset==6)
        {rreset=5;}
    
    if(rimagea==6)
        {rimagea=0}
    if(rimagea==-1)
        {rimagea=5}
    if(limagea==6)
        {limagea=0}
    if(limagea==-1)
        {limagea=5}
    
   
  
    steptext(stepa);
   
    
   /* if(z==3){
    
c1[creset].className="c1 vanish";
    window.setTimeout(function(){cimage(stepa,3);},400);
    
    sr1[rreset].className="sr1 vanish";
        window.setTimeout(function(){  rimage(rimagea,3);},400);
  
    sl1[lreset].className="sl1 vanish";
       window.setTimeout(function(){   limage(limagea,3);},400);
   
   }*/
    
    
    
      if(z==3){
          
creset=stepa-1;
          
          if(creset==-1){creset=5;}
          
            c1[creset].className="c1 vanish";

                window.setTimeout(function(){cimage(stepa,3);},400);
rreset=rimagea-1;
          if(rreset==-1){rreset=5;}
           sr1[rreset].className="sr1 vanish";
           window.setTimeout(function(){  rimage(rimagea,3);},400);
          
  lreset=limagea-1;  
            if(lreset==-1){lreset=5;}
           sl1[lreset].className="sl1 vanish";
           window.setTimeout(function(){  limage(limagea,3);},400);
          
          
          
    }
       if(z==2){
creset=stepa+1;
                  if(creset==6){creset=0;}
           
              c1[creset].className="c1 vanishleft";

                window.setTimeout(function(){cimage(stepa,2);},400);
           
 rreset=rimagea+1;
          if(rreset==6){rreset=0;}
           sr1[rreset].className="sr1 vanishleft";
           window.setTimeout(function(){  rimage(rimagea,2);},400);
           
         lreset=limagea+1;  
            if(lreset==6){lreset=0;}
           sl1[lreset].className="sl1 vanishleft";
           window.setTimeout(function(){  limage(limagea,2);},400);
           
           
       }
   
   
    
    
           
    
        
        
      

    
    
}


sleft[0].addEventListener('click',function(){incr(-1,2);},false);
sright[0].addEventListener('click',function(){incr(+1,3);},false);


/* end:steps */


