//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var hd= document.getElementsByClassName('s1hd');
        var para= document.getElementById('jtarget');

function portfullf(){
   hd[0].style.left="0px";
    para.style.left="0px";
    hd[0].style.opacity="1";
    para.style.opacity="1";
}

portfullf();

    });



var mainimg= document.getElementsByClassName('mainimg');

var subimg= document.getElementsByClassName('subimg');

function imageop(n){
   for(i=0;i<7;i++){   mainimg[i].style.display="none";}

       for(i=0;i<7;i++){    subimg[i].style.border="1px solid #ffffff";}
    
    
    subimg[n].style.border="1px solid #b5b5b5";
    
     mainimg[n].style.display="block";
     mainimg[n].className="mainimg mmani"
    
}




subimg[0].addEventListener('click',function(){imageop(0);},false);
subimg[1].addEventListener('click',function(){imageop(1);},false);
subimg[2].addEventListener('click',function(){imageop(2);},false);
subimg[3].addEventListener('click',function(){imageop(3);},false);
subimg[4].addEventListener('click',function(){imageop(4);},false);
subimg[5].addEventListener('click',function(){imageop(5);},false);

subimg[6].addEventListener('click',function(){imageop(6);},false);






var listm1= document.getElementsByClassName('listm1');

var menup= document.getElementsByClassName('menup');

var det1= document.getElementsByClassName('det1');




function pmenu(n){
        for(i=0;i<14;i++){  listm1[i].style.backgroundColor="#ffffff";
                         menup[i].style.color="#454545";
                             
    det1[i].style.display="none";
                        
                        }
     
    
     det1[n].style.display="block";
     
 listm1[n].style.backgroundColor="#2193A8";
     menup[n].style.color="#fcfcfc";
    
      
}


listm1[0].addEventListener('click',function(){pmenu(0);},false);
listm1[1].addEventListener('click',function(){pmenu(1);},false);
listm1[2].addEventListener('click',function(){pmenu(2);},false);
listm1[3].addEventListener('click',function(){pmenu(3);},false);
listm1[4].addEventListener('click',function(){pmenu(4);},false);
listm1[5].addEventListener('click',function(){pmenu(5);},false);
listm1[6].addEventListener('click',function(){pmenu(6);},false);
listm1[7].addEventListener('click',function(){pmenu(7);},false);
listm1[8].addEventListener('click',function(){pmenu(8);},false);
listm1[9].addEventListener('click',function(){pmenu(9);},false);
listm1[10].addEventListener('click',function(){pmenu(10);},false);
listm1[11].addEventListener('click',function(){pmenu(11);},false);
listm1[12].addEventListener('click',function(){pmenu(12);},false);
listm1[13].addEventListener('click',function(){pmenu(13);},false);


var lmt= document.getElementsByClassName('lmt');
var lmtd= document.getElementsByClassName('lmtd');
var closex= document.getElementsByClassName('closex');

function popen(n){
     for(i=0;i<7;i++){     lmt[i].style.display="none";
}
    
    lmtd[n].style.display="block";
    
}

function pclose(n){
    
    lmtd[n].style.display="none";
    
         for(i=0;i<7;i++){    lmt[i].style.display="block";
}
    
}

lmt[0].addEventListener('click',function(){popen(0);imageop(0);pmenu(0);
},false);
lmt[1].addEventListener('click',function(){popen(1);;
imageop(1);pmenu(2);},false);
lmt[2].addEventListener('click',function(){popen(2);;
imageop(2);pmenu(4);},false);
lmt[3].addEventListener('click',function(){popen(3);;
imageop(3);pmenu(6);},false);
lmt[4].addEventListener('click',function(){popen(4);;
imageop(4);pmenu(8);},false);
lmt[5].addEventListener('click',function(){popen(5);;
imageop(5);pmenu(10);},false);
lmt[6].addEventListener('click',function(){popen(6);;
imageop(6);pmenu(12);},false);
/*lmt[6].addEventListener('click',function(){popen(6);;
imageop(24);pmenu(24);},false);*/


closex[0].addEventListener('click',function(){pclose(0);},false);
closex[1].addEventListener('click',function(){pclose(1);},false);
closex[2].addEventListener('click',function(){pclose(2);},false);
closex[3].addEventListener('click',function(){pclose(3);},false);
closex[4].addEventListener('click',function(){pclose(4);},false);
closex[5].addEventListener('click',function(){pclose(5);},false);
closex[6].addEventListener('click',function(){pclose(6);},false);
/*closex[6].addEventListener('click',function(){pclose(6);},false);*/
