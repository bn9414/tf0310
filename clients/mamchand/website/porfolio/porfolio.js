var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");

dot1.addEventListener("click",function(){
                      slde(1);},false);

dot2.addEventListener("click",function(){
                      slde(2);},false);

function slde(a){
    console.log(a);
    if(a == 1){
        dot1.style.background="#da5050";
        dot1.style.border="1px solid #da5050";
        
        dot2.style.background="#454545 ";
        dot2.style.border="1px solid #454545";
        
        var img1 = document.getElementsByClassName('img1');
        img1[0].style.display="none";
        img1[1].style.display="block";
        
    }
    else if(a == 2){
        dot2.style.background="#da5050";
        dot2.style.border="1px solid #da5050";
        
        dot1.style.background="#454545";
        dot1.style.border="1px solid #454545";
         var img2 = document.getElementsByClassName('img1');
        img2[0].style.display="block";
        img2[1].style.display="none";
    }
}
slde(1);


var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");

dot3.addEventListener("click",function(){
                      slde1(1);},false);

dot4.addEventListener("click",function(){
                      slde1(2);},false);

function slde1(b){
   
    if(b == 1){
        dot3.style.background="#da5050";
        dot3.style.border="1px solid #da5050";
        
        dot4.style.background="#454545 ";
        dot4.style.border="1px solid #454545";
        
        var img2 = document.getElementsByClassName('img2');
        img2[0].style.display="none";
        img2[1].style.display="block";
        
    }
    else if(b == 2){
        dot4.style.background="#da5050";
        dot4.style.border="1px solid #da5050";
        
        dot3.style.background="#454545";
        dot3.style.border="1px solid #454545";
         var img21 = document.getElementsByClassName('img2');
        img21[0].style.display="block";
        img21[1].style.display="none";
    }
}
slde1(1);



var dot5 = document.getElementById("dot5");
var dot6 = document.getElementById("dot6");

dot5.addEventListener("click",function(){
                      slde2(1);},false);

dot6.addEventListener("click",function(){
                      slde2(2);},false);

function slde2(c){
   
    if(c == 1){
        dot5.style.background="#da5050";
        dot5.style.border="1px solid #da5050";
        
        dot6.style.background="#454545 ";
        dot6.style.border="1px solid #454545";
        
        var img3 = document.getElementsByClassName('img3');
        img3[0].style.display="none";
        img3[1].style.display="block";
        
    }
    else if(c == 2){
        dot6.style.background="#da5050";
        dot6.style.border="1px solid #da5050";
        
        dot5.style.background="#454545";
        dot5.style.border="1px solid #454545";
         var img22 = document.getElementsByClassName('img3');
        img22[0].style.display="block";
        img22[1].style.display="none";
    }
}
slde2(1);

var dot7 = document.getElementById("dot7");
var dot8 = document.getElementById("dot8");

dot7.addEventListener("click",function(){
                      slde3(1);},false);

dot8.addEventListener("click",function(){
                      slde3(2);},false);

function slde3(d){
   
    if(d == 1){
        dot7.style.background="#da5050";
        dot7.style.border="1px solid #da5050";
        
        dot8.style.background="#454545 ";
        dot8.style.border="1px solid #454545";
        
        var img4 = document.getElementsByClassName('img4');
        img4[0].style.display="none";
        img4[1].style.display="block";
        
    }
    else if(d == 2){
        dot8.style.background="#da5050";
        dot8.style.border="1px solid #da5050";
        
        dot7.style.background="#454545";
        dot7.style.border="1px solid #454545";
         var img24 = document.getElementsByClassName('img4');
        img24[0].style.display="block";
        img24[1].style.display="none";
    }
}
slde3(1);

var dot9 = document.getElementById("dot9");
var dot10 = document.getElementById("dot10");

dot9.addEventListener("click",function(){
                      slde4(1);},false);

dot10.addEventListener("click",function(){
                      slde4(2);},false);

function slde4(e){
   
    if(e == 1){
        dot9.style.background="#da5050";
        dot9.style.border="1px solid #da5050";
        
        dot10.style.background="#454545 ";
        dot10.style.border="1px solid #454545";
        
        var img5 = document.getElementsByClassName('img5');
        img5[0].style.display="none";
        img5[1].style.display="block";
        
    }
    else if(e == 2){
        dot10.style.background="#da5050";
        dot10.style.border="1px solid #da5050";
        
        dot9.style.background="#454545";
        dot9.style.border="1px solid #454545";
         var img25 = document.getElementsByClassName('img5');
        img25[0].style.display="block";
        img25[1].style.display="none";
    }
}
slde4(1);

var manage = document.getElementsByClassName('manage');
var man1 = document.getElementById('man1');
var man2 = document.getElementById('man2');
var man3 = document.getElementById('man3');
var man4 = document.getElementById('man4');
var man5 = document.getElementById('man5');

man1.addEventListener('click',function(){
    clcky(1)
},false);

man2.addEventListener('click',function(){
    clcky(2)
},false);

man3.addEventListener('click',function(){
    clcky(3)
},false);

man4.addEventListener('click',function(){
    clcky(4)
},false);

man5.addEventListener('click',function(){
    clcky(5)
},false);

var actab = document.getElementsByClassName('actab');

function clcky(g){
    if(g == 1){
        manage[0].style.display="flex";
        manage[1].style.display="flex";
        manage[2].style.display="flex";
        manage[3].style.display="flex";
        manage[4].style.display="flex";
        
        actab[0].style.opacity="1";
        actab[1].style.opacity="0";
        actab[2].style.opacity="0";
        actab[3].style.opacity="0";
        actab[4].style.opacity="0";
        
    }
    if(g == 2){
        manage[0].style.display="flex";
        manage[1].style.display="none";
        manage[2].style.display="flex";
        manage[3].style.display="none";
        manage[4].style.display="none";
        
        actab[0].style.opacity="0";
        actab[1].style.opacity="1";
        actab[2].style.opacity="0";
        actab[3].style.opacity="0";
        actab[4].style.opacity="0";
        
    }
    if(g == 3){
        manage[0].style.display="none";
        manage[1].style.display="flex";
        manage[2].style.display="none";
        manage[3].style.display="none";
        manage[4].style.display="none";
        
        actab[0].style.opacity="0";
        actab[1].style.opacity="0";
        actab[2].style.opacity="1";
        actab[3].style.opacity="0";
        actab[4].style.opacity="0";
        
    }
    if(g == 4){
        manage[0].style.display="none";
        manage[1].style.display="none";
        manage[2].style.display="flex";
        manage[3].style.display="flex";
        manage[4].style.display="none";
        
        actab[0].style.opacity="0";
        actab[1].style.opacity="0";
        actab[2].style.opacity="0";
        actab[3].style.opacity="1";
        actab[4].style.opacity="0";
        
    }
    if(g == 5){
        manage[0].style.display="none";
        manage[1].style.display="flex";
        manage[2].style.display="flex";
        manage[3].style.display="none";
        manage[4].style.display="flex";
        
        actab[0].style.opacity="0";
        actab[1].style.opacity="0";
        actab[2].style.opacity="0";
        actab[3].style.opacity="0";
        actab[4].style.opacity="1";
         
    }
}
clcky(1);


