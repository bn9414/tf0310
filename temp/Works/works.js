//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	});


var portfull= document.getElementsByClassName('portfull');

function portfullf(){
    portfull[0].style.paddingTop='0px';
    
}

portfullf();

var t3=document.getElementsByClassName('t3');
var t4=document.getElementsByClassName('t4');

var h1=document.getElementsByClassName('hmenu');
var com=document.getElementsByClassName('com');
var und=document.getElementsByClassName('und');

var type_jio=document.getElementsByClassName('type_ji');
var no_visit=document.getElementsByClassName('no_visit');

function type_reset(n){
    type_jio[n].className="type_ji"
    
    
}

function type(n){
    type_jio[n].className="type_ani type_ji"
    setTimeout(function(){type_reset(n);},300);
}





t3[1].addEventListener('click',function(){type(0);},false);

t3[2].addEventListener('click',function(){type(1);},false);
t3[3].addEventListener('click',function(){type(2);},false);
no_visit[0].addEventListener('click',function(){type(1);},false);


function headmenu(n){
    h1[0].style.color="#717171";
    h1[1].style.color="#717171";
    h1[2].style.color="#717171";    
    h1[n].style.color="#FA684B"; 
    
    if(n==1){
        und[0].style.display='none';
        und[1].style.display='none';
        und[2].style.display='none';
        com[0].style.display='flex';
        
        
    }
     if(n==2){
        com[0].style.display='none';
              und[0].style.display='flex';
        und[1].style.display='flex';
        und[2].style.display='flex';
        
    }
    
       if(n==0){
        com[0].style.display='flex';
              und[0].style.display='flex';
        und[1].style.display='flex';
        und[2].style.display='flex';
        
    }
    
}

headmenu(0);
h1[0].addEventListener('click',function(){headmenu(0);},false);
h1[1].addEventListener('click',function(){headmenu(1);},false);
h1[2].addEventListener('click',function(){headmenu(2);},false);
