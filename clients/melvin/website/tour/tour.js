
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
function gallery(g){
    if(w <= 600){}
    if(g == 1){
        galaimg[0].style.display="flex";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
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

