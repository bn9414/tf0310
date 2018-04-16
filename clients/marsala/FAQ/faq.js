var panlhd = document.getElementsByClassName('panl-hd');
var panpara = document.getElementsByClassName('panl-para');
        var bar2 = document.getElementsByClassName('bar2');
var i;

var tog=0;
function tri(i){
    if (tog==0){
    panpara[i].style.display="block";
      
        panlhd[i].classList.add("active");
        panpara[i].style.transition="4s";
    bar2[i].style.opacity="0";
        }
     if (tog==1){
    panpara[i].style.display="none";
         panlhd[i].classList.remove("active");
         panpara[i].style.transition="4s";
    bar2[i].style.opacity="1";
        }
    tog=!tog;
}


panlhd[0].addEventListener('click',function(){tri(0);},false);
panlhd[1].addEventListener('click',function(){tri(1);},false);
panlhd[2].addEventListener('click',function(){tri(2);},false)
panlhd[3].addEventListener('click',function(){tri(3);},false)
panlhd[4].addEventListener('click',function(){tri(4);},false)
panlhd[5].addEventListener('click',function(){tri(5);},false)
panlhd[6].addEventListener('click',function(){tri(6);},false)
panlhd[7].addEventListener('click',function(){tri(7);},false)
panlhd[8].addEventListener('click',function(){tri(8);},false)
panlhd[9].addEventListener('click',function(){tri(9);},false)


