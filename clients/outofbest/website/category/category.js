
var ser1 = document.getElementsByClassName("ser1");


window.onscroll = function(){
    cirhtvew()
};

var h = parseInt(window.innerHeight);

var w = parseInt(window.innerWidth);




function cirhtvew(){
if(w > 700){

    
  if(document.body.scrollTop >200 || document.documentElement.scrollTop > 200){
        for(i=0;i<ser1.length;i++){
    ser1[i].style.bottom="0";
        ser1[i].style.opacity="1";
    ser1[i].style.animation="btm 1s";
    ser1[i].style.transition="bottom 1s";
    }
    
    
}  
}
    }
