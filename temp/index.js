
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

/* start: second layer*/


/* start:section 1*/

var price=document.getElementsByClassName('price');

var price=document.getElementsByClassName('price');
var ncr=document.getElementsByClassName('ncr');
var ncl=document.getElementsByClassName('ncl');
var stick_c=document.getElementsByClassName('stick_c');



var lcright=document.getElementsByClassName('lcright');;
var lcleft=document.getElementsByClassName('lcleft');

var scleft=document.getElementsByClassName('scleft');

var scright=document.getElementsByClassName('scright');
var testz=document.getElementsByClassName('testz');

var s_prev=0;


window.onscroll = function() {scrollani()};



function scrollani() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        price[0].className="price pricemob_ani" 
       
      
    }
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        price[0].className="price price_ani pricemob_ani" 
       
      
    }
    
     if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
       
         stick_c[0].style.opacity="1";
         ncr[0].style.paddingLeft="30px";
         ncr[0].style.opacity="1";
            lcright[0].style.width="0px";
         lcright[0].style.height="0px";
         lcright[1].style.width="0px";
         lcright[1].style.height="0px";
         lcright[2].style.width="0px";
         lcright[2].style.height="0px";
             scright[0].style.opacity="1";
        scright[0].style.top="0px";
         
         
    
    }
    
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
     
        
        
           ncl[1].style.paddingRight="30px";
         ncl[1].style.opacity="1";
          ncr[1].style.paddingLeft="30px";
         ncr[1].style.opacity="1";
           
        
            lcleft[3].style.width="0px";
         lcleft[3].style.height="0px";
         lcleft[4].style.width="0px";
         lcleft[4].style.height="0px";
         lcleft[5].style.width="0px";
         lcleft[5].style.height="0px";
        
         lcright[3].style.width="0px";
         lcright[3].style.height="0px";
         lcright[4].style.width="0px";
         lcright[4].style.height="0px";
         lcright[5].style.width="0px";
         lcright[5].style.height="0px";
        scleft[1].style.opacity="1";
        scleft[1].style.top="0px";
            scright[1].style.opacity="1";
        scright[1].style.top="0px";
        
        
           
        
        
    }
    
    
    
       if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
       
         
         ncr[2].style.paddingLeft="30px";
         ncr[2].style.opacity="1";
            lcright[6].style.width="0px";
         lcright[6].style.height="0px";
         lcright[7].style.width="0px";
         lcright[7].style.height="0px";
         lcright[8].style.width="0px";
         lcright[8].style.height="0px";
             scright[2].style.opacity="1";
        scright[2].style.top="0px";
         
         
    
    }
    
    
     if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
     
        ncl[3].style.paddingRight="30px";
         ncl[3].style.opacity="1";
          ncr[3].style.paddingLeft="30px";
         ncr[3].style.opacity="1";
           
        
            lcleft[9].style.width="0px";
         lcleft[9].style.height="0px";
         lcleft[10].style.width="0px";
         lcleft[10].style.height="0px";
         lcleft[11].style.width="0px";
         lcleft[11].style.height="0px";
        
         lcright[9].style.width="0px";
         lcright[9].style.height="0px";
         lcright[10].style.width="0px";
         lcright[10].style.height="0px";
         lcright[11].style.width="0px";
         lcright[11].style.height="0px";
        scleft[3].style.opacity="1";
        scleft[3].style.top="0px";
            scright[3].style.opacity="1";
        scright[3].style.top="0px";
       
    }
    
    
    if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
       
         
         ncr[4].style.paddingLeft="30px";
         ncr[4].style.opacity="1";
            lcright[12].style.width="0px";
         lcright[12].style.height="0px";
         lcright[13].style.width="0px";
         lcright[13].style.height="0px";
         lcright[14].style.width="0px";
         lcright[14].style.height="0px";
             scright[4].style.opacity="1";
        scright[4].style.top="0px";
         
         
    
    }
    
    
     if (document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100) {
     
        ncl[5].style.paddingRight="30px";
         ncl[5].style.opacity="1";
          ncr[5].style.paddingLeft="30px";
         ncr[5].style.opacity="1";
           
        
            lcleft[15].style.width="0px";
         lcleft[15].style.height="0px";
         lcleft[16].style.width="0px";
         lcleft[16].style.height="0px";
         lcleft[17].style.width="0px";
         lcleft[17].style.height="0px";
        
         lcright[15].style.width="0px";
         lcright[15].style.height="0px";
         lcright[16].style.width="0px";
         lcright[16].style.height="0px";
         lcright[17].style.width="0px";
         lcright[17].style.height="0px";
        scleft[5].style.opacity="1";
        scleft[5].style.top="0px";
            scright[5].style.opacity="1";
        scright[5].style.top="0px";
       
    }
    
        
}

/* end:section 1*/



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


