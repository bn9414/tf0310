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
 

    
    subimg[0].style.border="1px solid #ffffff";
    subimg[1].style.border="1px solid #ffffff";
    subimg[2].style.border="1px solid #ffffff";
    subimg[3].style.border="1px solid #ffffff";


    
    
    subimg[n].style.border="1px solid #b5b5b5";
    
     mainimg[n].style.display="block";
     mainimg[n].className="mainimg mmani"
    
}




subimg[0].addEventListener('click',function(){imageop(0);},false);
subimg[1].addEventListener('click',function(){imageop(1);},false);
subimg[2].addEventListener('click',function(){imageop(2);},false);
subimg[3].addEventListener('click',function(){imageop(3);},false);











var listm1= document.getElementsByClassName('listm1');

var menup= document.getElementsByClassName('menup');

var det1= document.getElementsByClassName('det1');




function pmenu(n){
    
    listm1[0].style.backgroundColor="#ffffff";
    listm1[1].style.backgroundColor="#ffffff";
    listm1[2].style.backgroundColor="#ffffff";
    listm1[3].style.backgroundColor="#ffffff";


    
       
    menup[0].style.color="#454545";
    menup[1].style.color="#454545";
    menup[2].style.color="#454545";
    menup[3].style.color="#454545";

    

    
    
    
    
    det1[0].style.display="none";
     det1[1].style.display="none";
     det1[2].style.display="none";
     det1[3].style.display="none";

    
           

     
    
     det1[n].style.display="block";
     
 listm1[n].style.backgroundColor="#2193A8";
     menup[n].style.color="#fcfcfc";
    
      
}


listm1[0].addEventListener('click',function(){pmenu(0);},false);
listm1[1].addEventListener('click',function(){pmenu(1);},false);
listm1[2].addEventListener('click',function(){pmenu(2);},false);
listm1[3].addEventListener('click',function(){pmenu(3);},false);



var lmt= document.getElementsByClassName('lmt');
var lmtd= document.getElementsByClassName('lmtd');
var closex= document.getElementsByClassName('closex');

function popen(n){
    
    
    lmt[0].style.display="none";
    
 
    
    lmtd[n].style.display="block";
    
}

function pclose(n){
    
    lmtd[n].style.display="none";
    lmt[0].style.display="flex";
  

    
}

lmt[0].addEventListener('click',function(){popen(0);imageop(0);pmenu(0);
},false);




closex[0].addEventListener('click',function(){pclose(0);},false);


