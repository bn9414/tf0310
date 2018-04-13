



var prev = document.getElementById('prev');
prev.addEventListener('click',function(e){
  incre(-1);
   clearInterval(sc); },false);
var nxt = document.getElementById('nxt');
nxt.addEventListener('click',function(e){
  incre(1); },false);
 var ban = document.getElementsByClassName('ban');
var caphd = document.getElementsByClassName('txt-cap');
var n =0;

var sc=setInterval(function(){
    incre(1);
},4000);

 function incre(a){
     n = n + a;
     if(n == -1){
         n = ban.length-1;
     }
     if(n == ban.length){
         n=0;
     }
    scrollImg(n);
 }
function scrollImg(z){
    ban[0].style.display="none";
    ban[1].style.display="none";
    ban[2].style.display="none";
    ban[z].style.display="block";
    caphd[0].style.display="none";
    caphd[1].style.display="none";
    caphd[2].style.display="none";
    caphd[z].style.display="block";                               
}
scrollImg(0);

var bdy = document.getElementsByTagName("body");
var ahrf = document.getElementsByTagName('a');
ahrf[0].addEventListener('click',linkfn,false);

function linkfn(){
    bdy[0].style.top="-100px";
    bdy[0].style.opacity="0";
}