/* START: hl1 slide*/

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
var buildmg=document.getElementById('buildmg');

var s_prev=0;


window.onscroll = function() {scrollani(),scrollanib()};

  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

function scrollani() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        price[0].className="price pricemob_ani" 
       
      
    }
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        price[0].className="price price_ani pricemob_ani" 
       
      
    }
    
    /* build*/
 if(w>600){
    if (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200) {
          buildmg.style.opacity="1";
          buildmg.style.left="-50px";
           buildmg.style.top="-100px";
      }
    }
  
    
     /* build*/
    
    
     if(w>500){
    
     if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
       
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

    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
     

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

       if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
       
         
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
    
    
     if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
     
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
    
    
    if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
       
         
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
    
    
     if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
     
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
    
    
    
    
    
    if(w<500){
    
     if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
       
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

    if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
     

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

       if (document.body.scrollTop > 2250 || document.documentElement.scrollTop > 2250) {
       
         
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
    
    
     if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
     
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
    
    
    if (document.body.scrollTop > 3150 || document.documentElement.scrollTop > 3150) {
       
         
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
    
    
     if (document.body.scrollTop > 3700 || document.documentElement.scrollTop > 3700) {
     
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
    
    
    
    
    
    
        
}

/* end:section 1*/



var area=document.getElementsByClassName('area');
var click=document.getElementsByClassName('click');
var more=document.getElementsByClassName('more');
var less=document.getElementsByClassName('less');
var benp=document.getElementsByClassName('ben1p');
var b_para=document.getElementsByClassName('b_para');



function benvis(n){
            benp[n].style.display="block";
            more[n].style.display="none";
            less[n].style.display="block";
    b_para[n].className='b_para b_paraani';
  
}

function benvisc(n){
    benp[n].style.display="none";
            more[n].style.display="block";
            less[n].style.display="none";
}
function benclose(n){
  b_para[n].className='b_para b_paraanid';
    setTimeout(function(){benvisc(n);},400);
    
}

more[0].addEventListener('click',function(){benvis(0);},false);
more[1].addEventListener('click',function(){benvis(1);},false);
more[2].addEventListener('click',function(){benvis(2);},false);
more[3].addEventListener('click',function(){benvis(3);},false);


less[0].addEventListener('click',function(){benclose(0);},false);
less[1].addEventListener('click',function(){benclose(1);},false);
less[2].addEventListener('click',function(){benclose(2);},false);
less[3].addEventListener('click',function(){benclose(3);},false);



var index=document.getElementById('index');

    
    


/* start:benefits_desk*/
var benx=0;
var bup=document.getElementsByClassName('benup');
var bdown=document.getElementsByClassName('bendown');
var ben1=document.getElementsByClassName('ben1');






function scrollanib() {

  if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
  
    
      
           ben1[0].style.opacity='1';
        ben1[1].style.opacity='1';
        ben1[2].style.opacity='1';
        ben1[3].style.opacity='1';
  
  }
 
}

function benmove(n){
    if(n==0){
    ben1[0].style.top='550px';
        ben1[1].style.top='550px';
        ben1[2].style.top='550px';
        ben1[3].style.top='550px';
    }
    
    if(n==1){
    ben1[0].style.top='160px';
        ben1[1].style.top='160px';
        ben1[2].style.top='160px';
        ben1[3].style.top='160px';
    }
    
       if(n==2){
    ben1[0].style.top='-200px';
        ben1[1].style.top='-200px';
        ben1[2].style.top='-200px';
        ben1[3].style.top='-200px';
    }
    
       if(n==3){
    ben1[0].style.top='-550px';
        ben1[1].style.top='-550px';
        ben1[2].style.top='-550px';
        ben1[3].style.top='-550px';
    }
   
    
}

function benreset(){
    
   ben1[0].className="ben1";
    ben1[3].className="ben1";
}

function incri(n)
{benx=benx+n;
 if(benx>3){benx=3;
          
             ben1[3].className="ben1 ben1_dani";
            setTimeout(benreset,500);
           }
  if(benx<0){benx=0;  
             ben1[0].className="ben1 ben1_uani";
            setTimeout(benreset,500);
            
            }
 benmove(benx);
    
    
}

bdown[0].addEventListener('click',function(){incri(+1);},false);
bup[0].addEventListener('click',function(){incri(-1);},false);

/* end:benefits_desk*/




