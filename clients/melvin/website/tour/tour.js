
var w= parseInt.innerWidth;
var galaact = document.getElementsByClassName('tr-bx');
galaact[0].addEventListener('click',function(){
    gallery(1);
},false);

galaact[1].addEventListener('click',function(){
    gallery(2);
},false);

galaact[2].addEventListener('click',function(){
    gallery(3);
},false);

galaact[3].addEventListener('click',function(){
    gallery(4);
},false);
var galaimg = document.getElementsByClassName('gala-imgs');
var hil = document.getElementsByClassName('hil');
var wid = document.getElementsByClassName('wid');
var templ = document.getElementsByClassName('templ');
var hony = document.getElementsByClassName('hony');
var bbhd = document.getElementsByClassName('bb-hhd');
function gallery(g){
    if(w <= 600){}
    if(g == 1){
        galaimg[0].style.display="flex";
        galaimg[0].style.borderBottom="3px solid #ffc527"
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        hil[0].style.background="url(images/hillc.svg)";
        bbhd[0].style.color="#ffc527";
    }
    else if(g == 2){
        galaimg[0].style.display="none";
        galaimg[1].style.display="flex";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
    }
    else if(g == 3){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="flex";
        galaimg[3].style.display="none";
    }
    else if(g == 4){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="flex";
    }
}
gallery(1);

