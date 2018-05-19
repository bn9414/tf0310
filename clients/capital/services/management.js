
	$(window).load(function() {
	
		$(".se-pre-con").fadeOut("slow");;
	
    
        


function homeani()
{

}
homeani();
        
	});


var h = parseInt(window.innerHeight);

var w = parseInt(window.innerWidth);

var sld = document.getElementsByClassName('sld');
var manum = document.getElementsByClassName('ma-num');
var mabar = document.getElementsByClassName('ma-bar');

var sldh2 = document.getElementsByClassName('sldh2');

window.onload = function(){
     sldh2[0].style.display="block";
    sld[0].style.display="block";
    manum[0].style.animation="manum 1s";
    manum[0].style.display="block";
    mabar[0].style.display="block";
    mabar[0].style.animation="mabar 1s";
}

window.onscroll = function(){
    managescr()
};
function managescr(){
if(w >= 700){
    if(document.body.scrollTop >= 300||document.documentElement.scrollTop >= 300){
        sldh2[1].style.display="block";
         sld[1].style.display="block";
        manum[1].style.animation="manum 1s";
        manum[1].style.display="block";
        mabar[1].style.animation="mabar 1s";
        mabar[1].style.display="block";
    }
    if(document.body.scrollTop >= 800||document.documentElement.scrollTop >= 800){
        sldh2[2].style.display="block"; 
        sld[2].style.display="block";
        manum[2].style.animation="manum 1s";
        manum[2].style.display="block";
        mabar[2].style.animation="mabar 1s";
        mabar[2].style.display="block";
    }
    if(document.body.scrollTop >= 900||document.documentElement.scrollTop >= 900){
        sldh2[3].style.display="block"; 
        sld[3].style.display="block";
        manum[3].style.animation="manum 1s";
        manum[3].style.display="block";
        mabar[3].style.animation="mabar 1s";
        mabar[3].style.display="block";
    }
     if(document.body.scrollTop >= 1200||document.documentElement.scrollTop >= 1200){
        sldh2[4].style.display="block"; 
        sld[4].style.display="block";
        manum[4].style.animation="manum 1s";
        manum[4].style.display="block";
        mabar[4].style.animation="mabar 1s";
        mabar[4].style.display="block";
    }
    
}
 }