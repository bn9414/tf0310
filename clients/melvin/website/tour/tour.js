
var w = parseInt(window.innerWidth);
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
var towbx = document.getElementsByClassName('tr-bx1');
function gallery(g){

    if(g == 1){
        galaimg[0].style.display="flex";
        
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        
        hil[0].style.background="url(images/hillc.svg)";
        bbhd[0].style.color="#ffc527";
        galaact[0].style.borderBottom="3px solid #ffc527";
        galaact[0].classList.add("tr-bx1");
     
        
        wid[0].style.background="url(images/wildw.svg)";
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        templ[0].style.background="url(images/templew.svg)";
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        hony[0].style.background="url(images/honeycw.svg)";
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
    }
    else if(g == 2){
        galaimg[0].style.display="none";
        galaimg[1].style.display="flex";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        
        wid[0].style.background="url(images/wildc.svg)";
        bbhd[1].style.color="#ffc527";
        galaact[1].style.borderBottom="3px solid #ffc527";
        galaact[1].classList.add("tr-bx1");
        
        hil[0].style.background="url(images/hillw.svg)";
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        templ[0].style.background="url(images/templew.svg)";
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        hony[0].style.background="url(images/honeycw.svg)";
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
         
    }
    else if(g == 3){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="flex";
        galaimg[3].style.display="none";
        
        templ[0].style.background="url(images/templec.svg)";
        bbhd[2].style.color="#ffc527";
        galaact[2].style.borderBottom="3px solid #ffc527";
        galaact[2].classList.add("tr-bx1");
        
        wid[0].style.background="url(images/wildw.svg)";
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        hil[0].style.background="url(images/hillw.svg)";
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        hony[0].style.background="url(images/honeycw.svg)";
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
    }
    else if(g == 4){
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="flex";
        
        hony[0].style.background="url(images/honeycc.svg)";
        bbhd[3].style.color="#ffc527";
        galaact[3].style.borderBottom="3px solid #ffc527";
        galaact[3].classList.add("tr-bx1");
        
        templ[0].style.background="url(images/templew.svg)";
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        wid[0].style.background="url(images/wildw.svg)";
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        hil[0].style.background="url(images/hillw.svg)";
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
    }
}
gallery(1);

