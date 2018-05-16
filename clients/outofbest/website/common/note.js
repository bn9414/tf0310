var h = parseInt(window.innerHeight);

var w = parseInt(window.innerWidth);

var infoimg = document.getElementsByClassName('infomsg');

window.onscroll = function(){
    innn()
};

function innn(){

    
  
    if(document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900){
        infoimg[0].style.left="0px";
    }
}