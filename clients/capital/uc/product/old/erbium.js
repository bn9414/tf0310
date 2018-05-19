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
    mainimg[0].style.display="none";
     mainimg[1].style.display="none";
     mainimg[2].style.display="none";
     mainimg[3].style.display="none";
        mainimg[4].style.display="none";
     mainimg[5].style.display="none";
     mainimg[6].style.display="none";
     mainimg[7].style.display="none";
     mainimg[8].style.display="none";
     mainimg[9].style.display="none";
 

    
    subimg[0].style.border="1px solid #ffffff";
    subimg[1].style.border="1px solid #ffffff";
    subimg[2].style.border="1px solid #ffffff";
    subimg[3].style.border="1px solid #ffffff";
    
       subimg[4].style.border="1px solid #ffffff";
    subimg[5].style.border="1px solid #ffffff";
    subimg[6].style.border="1px solid #ffffff";
    subimg[7].style.border="1px solid #ffffff";
    
       subimg[8].style.border="1px solid #ffffff";
    subimg[9].style.border="1px solid #ffffff";
   


    
    
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
subimg[7].addEventListener('click',function(){imageop(7);},false);

subimg[8].addEventListener('click',function(){imageop(8);},false);
subimg[9].addEventListener('click',function(){imageop(9);},false);











var listm1= document.getElementsByClassName('listm1');

var menup= document.getElementsByClassName('menup');

var det1= document.getElementsByClassName('det1');




function pmenu(n){
   listm1[0].style.backgroundColor="#ffffff";
    listm1[1].style.backgroundColor="#ffffff";
    listm1[2].style.backgroundColor="#ffffff";
    listm1[3].style.backgroundColor="#ffffff";
     listm1[4].style.backgroundColor="#ffffff";
    listm1[5].style.backgroundColor="#ffffff";
    listm1[6].style.backgroundColor="#ffffff";
    listm1[7].style.backgroundColor="#ffffff";
         listm1[8].style.backgroundColor="#ffffff";
    listm1[9].style.backgroundColor="#ffffff";
    listm1[10].style.backgroundColor="#ffffff";
    listm1[11].style.backgroundColor="#ffffff";
listm1[12].style.backgroundColor="#ffffff";
    listm1[13].style.backgroundColor="#ffffff";
    listm1[14].style.backgroundColor="#ffffff";
    listm1[15].style.backgroundColor="#ffffff";
    
 


    
       
    menup[0].style.color="#454545";
    menup[1].style.color="#454545";
    menup[2].style.color="#454545";
    menup[3].style.color="#454545";
        menup[4].style.color="#454545";
    menup[5].style.color="#454545";
    menup[6].style.color="#454545";
    menup[7].style.color="#454545";
          menup[8].style.color="#454545";
    menup[9].style.color="#454545";
    menup[10].style.color="#454545";
    menup[11].style.color="#454545";
    
           menup[12].style.color="#454545";
    menup[13].style.color="#454545";
    menup[14].style.color="#454545";
    menup[15].style.color="#454545";
    

    
    
    
    det1[0].style.display="none";
     det1[1].style.display="none";
     det1[2].style.display="none";
     det1[3].style.display="none";
        det1[4].style.display="none";
     det1[5].style.display="none";
     det1[6].style.display="none";
     det1[7].style.display="none";
            det1[8].style.display="none";
     det1[9].style.display="none";
     det1[10].style.display="none";
     det1[10].style.display="none";
    
                det1[11].style.display="none";
     det1[12].style.display="none";
     det1[13].style.display="none";
     det1[14].style.display="none";
       det1[15].style.display="none";
   

    
           

     
    
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
listm1[14].addEventListener('click',function(){pmenu(14);},false);
listm1[15].addEventListener('click',function(){pmenu(15);},false);


var lmt= document.getElementsByClassName('lmt');
var lmtd= document.getElementsByClassName('lmtd');
var closex= document.getElementsByClassName('closex');

function popen(n){
    
    
    lmt[0].style.display="none";
    lmt[1].style.display="none";
    lmt[2].style.display="none";
    lmt[3].style.display="none";
   
    
 
    
    lmtd[n].style.display="block";
    
}

function pclose(n){
    
    lmtd[n].style.display="none";
    lmt[0].style.display="flex";
    lmt[1].style.display="flex";
    lmt[2].style.display="flex";
    lmt[3].style.display="flex";
 
  

    
}

lmt[0].addEventListener('click',function(){popen(0);imageop(0);pmenu(0);
},false);

lmt[1].addEventListener('click',function(){popen(1);imageop(4);pmenu(4);
},false);

lmt[2].addEventListener('click',function(){popen(2);imageop(6);pmenu(8);
},false);

lmt[3].addEventListener('click',function(){popen(3);imageop(9);pmenu(12);
},false);




closex[0].addEventListener('click',function(){pclose(0);},false);
closex[1].addEventListener('click',function(){pclose(1);},false);
closex[2].addEventListener('click',function(){pclose(2);},false);
closex[3].addEventListener('click',function(){pclose(3);},false);


