/*testi*/
var dot11 = document.getElementById("dot11");
var dot12 = document.getElementById("dot12");
var dot13 = document.getElementById("dot13");
var dot14 = document.getElementById("dot14");
dot11.addEventListener("click",function(){
                      testi(1);},false);

dot12.addEventListener("click",function(){
                      testi(2);},false);
dot13.addEventListener("click",function(){
                      testi(3);},false);

dot14.addEventListener("click",function(){
                      testi(4);},false);

var tsval1 = document.getElementById('tsval-1');
var tsval2 = document.getElementById('tsval-2');
var tsval3 = document.getElementById('tsval-3');
var tsval4 = document.getElementById('tsval-4');

function testi(ts){
    console.log(ts);
    if(ts == 1){
        dot11.style.background="#da5050";
        dot11.style.border="1px solid #da5050";
        
        dot12.style.background="#454545 ";
        dot12.style.border="1px solid #454545";
        dot13.style.background="#454545 ";
        dot13.style.border="1px solid #454545";
        dot14.style.background="#454545 ";
        dot14.style.border="1px solid #454545";
        
        
        tsval2.style.display="none";
        tsval3.style.display="none";
        tsval4.style.display="none";
        tsval1.style.display="block";
        
        
    }
    else if(ts == 2){
        dot12.style.background="#da5050";
        dot12.style.border="1px solid #da5050";
        
        dot11.style.background="#454545";
        dot11.style.border="1px solid #454545";
        dot13.style.background="#454545";
        dot13.style.border="1px solid #454545";
        dot14.style.background="#454545";
        dot14.style.border="1px solid #454545";
        
        
        tsval2.style.display="block";
        tsval3.style.display="none";
        tsval4.style.display="none";
        tsval1.style.display="none";
    }
    else if(ts == 3){
        dot13.style.background="#da5050";
        dot13.style.border="1px solid #da5050";
        
        dot11.style.background="#454545";
        dot11.style.border="1px solid #454545";
        dot12.style.background="#454545";
        dot12.style.border="1px solid #454545";
        dot14.style.background="#454545";
        dot14.style.border="1px solid #454545";
        
        
        tsval2.style.display="none";
        tsval3.style.display="block";
        tsval4.style.display="none";
        tsval1.style.display="none";
    }
    else if(ts == 4){
        dot14.style.background="#da5050";
        dot14.style.border="1px solid #da5050";
        
        dot11.style.background="#454545";
        dot11.style.border="1px solid #454545";
        dot12.style.background="#454545";
        dot12.style.border="1px solid #454545";
        dot13.style.background="#454545";
        dot13.style.border="1px solid #454545";
        
        tsval2.style.display="none";
        tsval3.style.display="none";
        tsval4.style.display="block";
        tsval1.style.display="none";
    }
    setTimeout(testi,2000);
}
testi(1);
/*testi*/
/*testi*/
 var ban = document.getElementsByClassName('test-vl');
var doty = document.getElementsByClassName('dot');
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
    
    doty[0].style.background="#454545";
    doty[0].style.border="1px solid #454545";
     doty[1].style.background="#454545";
    doty[1].style.border="1px solid #454545";   
    doty[2].style.background="#454545";
    doty[2].style.border="1px solid #454545";
    doty[3].style.background="#454545";
    doty[3].style.border="1px solid #454545";
    
    doty[z].style.background="#da5050";
    doty[z].style.border="1px solid #da5050";
    
    
}
scrollImg(0);
var xset= setInterval(function(){incre(1);},3000);