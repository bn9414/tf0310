
//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        
        var hd1=document.getElementsByClassName('hd1');
         var hd2=document.getElementsByClassName('hd2');
         var hd3=document.getElementsByClassName('hd3');
         var hd4=document.getElementsByClassName('hd4');
         var hd5=document.getElementsByClassName('hd5');
         var hd6=document.getElementsByClassName('hd6');
         var hd7=document.getElementsByClassName('hd7');
        

function homeani()
{
    hd1[0].className=('hd1 homeani');
    hd2[0].className=('hd2 homeani');
    hd3[0].className=('hd3 homeani');
    hd4[0].className=('hd4 homeani');
    hd5[0].className=('hd5 homeani');
    hd6[0].className=('hd6 homeani');
    hd7[0].className=('hd7 homeani');
    
}
homeani();
        
	});




var area=document.getElementsByClassName('area');
var click=document.getElementsByClassName('click');
var more=document.getElementsByClassName('more');
var less=document.getElementsByClassName('less');
var benp=document.getElementsByClassName('ben1p');



function benvis(n){
            benp[n].style.display="block";
            more[n].style.display="none";
            less[n].style.display="block";    
}

function benvisc(n){
    benp[n].style.display="none";
            more[n].style.display="block";
            less[n].style.display="none";
}
more[0].addEventListener('click',function(){benvis(0);},false);
more[1].addEventListener('click',function(){benvis(1);},false);
more[2].addEventListener('click',function(){benvis(2);},false);
more[3].addEventListener('click',function(){benvis(3);},false);


less[0].addEventListener('click',function(){benvisc(0);},false);
less[1].addEventListener('click',function(){benvisc(1);},false);
less[2].addEventListener('click',function(){benvisc(2);},false);
less[3].addEventListener('click',function(){benvisc(3);},false);

/* start:section 1*/

var index=document.getElementById('index');

    
    

/* end:section 1*/
/* start:steps*/


/* end:steps */


