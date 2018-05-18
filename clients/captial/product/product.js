var hldm = document.getElementsByClassName('hldm');

var prodimg = document.getElementsByClassName('prodimg');

hldm[0].addEventListener('click',function(){
    imgmove(1);
},false);

hldm[1].addEventListener('click',function(){
    imgmove(2);
},false);

hldm[2].addEventListener('click',function(){
    imgmove(3);
},false);

function imgmove(ww){
    if(ww == 1){
        prodimg[0].classList.remove('prodimg2','prodimg3');
        prodimg[0].classList.add('prodimg1');
         hldm[1].style.boxShadow="none";
       /* hldm[1].style.transform="scale(1)";*/
     hldm[2].style.boxShadow="none";
       /* hldm[2].style.transform="scale(1)";*/
        
        hldm[0].style.boxShadow="0 0 10px";
       /* hldm[0].style.transform="scale(1.1)";*/
    }
    if(ww == 2){
        prodimg[0].classList.remove('prodimg1','prodimg3');
        prodimg[0].classList.add('prodimg2');
        
        hldm[0].style.boxShadow="none";
         hldm[2].style.boxShadow="none";
        hldm[1].style.boxShadow="0 0 10px";
    }
   if(ww == 3){
        prodimg[0].classList.remove('prodimg2','prodimg1');
        prodimg[0].classList.add('prodimg3');
       
       hldm[1].style.boxShadow="none";
         hldm[0].style.boxShadow="none";
        hldm[2].style.boxShadow="0 0 10px";
    }
}
imgmove(1);