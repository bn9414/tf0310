/* navigation bar*/
var n=true;
var a =document.getElementById('nav_line');
var b=document.getElementsByClassName('l1')[0];
var c=document.getElementsByClassName('l2')[0];
var d=document.getElementsByClassName('l3')[0];
var e=document.getElementsByClassName('mob_menu')[0];

function test(){
    if(n==true){
    b.className='line l1 lc1';
    d.className='line l3 lc3';
     c.className='line l2 lc2';
    e.className='mob_menu mob_open';
    }

if(n==false){
    b.className='line l1';
    d.className='line l3';
     c.className='line l2';
    e.className='mob_menu mob_close';
    }
n=!n;
}



a.addEventListener('click', test, false );
/* navigation bar*/

/*slider*/
var bswit= document.getElementsByClassName('bswit');

var bsin= document.getElementsByClassName('bsin');

var hdtxt= document.getElementsByClassName('hdtxt');

var hdimg= document.getElementsByClassName('hdimg');

function bswitch(n){
    
    bsin[0].style.backgroundColor="#fcfcfc";
     bsin[1].style.backgroundColor="#fcfcfc";
    
    hdtxt[0].style.display="none";
    hdtxt[1].style.display="none";
    
    hdimg[0].style.display="none";
    hdimg[1].style.display="none";
    
    
        hdimg[n].style.display="block";
        hdtxt[n].style.display="block";
    
bsin[n].style.backgroundColor="#454545";
    
    

}

bswitch(0);

bswit[0].addEventListener('click',function() {bswitch(0);}, false);

bswit[1].addEventListener('click',function() {bswitch(1);}, false);


/*slider-end*/