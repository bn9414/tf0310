var prev = document.getElementById('prev');
prev.addEventListener('click',function(){
  incre(-1);},false);

var nxt = document.getElementById('nxt');
nxt.addEventListener('click',function(){
  incre(1);
    clearInterval(xset);

},false);
 var ban = document.getElementsByClassName('ban');
var caphd = document.getElementsByClassName('hdtxt');
var j =0;

 function incre(k){
     j = j + k;
     if(j == -1){
         j = ban.length-1;
     }
     if(j == ban.length){
         j=0;
     }
    scrollImg(j);
 }
function scrollImg(z){
    ban[0].style.display="none";
    ban[1].style.display="none";
    ban[2].style.display="none";
    ban[3].style.display="none";
    ban[z].style.display="block";
    
   caphd[0].style.display="none";
    caphd[1].style.display="none";
    caphd[2].style.display="none";
     caphd[3].style.display="none";
    caphd[z].style.display="block";                              
}
scrollImg(0);
var xset= setInterval(function(){incre(1);},4000);





var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
window.onscroll = function() {tabsanim()};
var sercontn = document.getElementsByClassName("ser-contn")

function tabsanim() {
    if(w>= 700){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        sercontn[0].style.top="0px";
       sercontn[0].style.opacity="1";
       sercontn[0].style.animation="an 1s";
             
      
    }
    }
}