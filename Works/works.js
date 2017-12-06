//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var portfull= document.getElementsByClassName('portfull');

function portfullf(){
    portfull[0].style.paddingTop='0px';
     portfull[0].style.opacity='1';
    
}

portfullf();
    
    
    
    });




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
t3[4].addEventListener('click',function(){type(3);},false);
t3[5].addEventListener('click',function(){type(4);},false);
no_visit[0].addEventListener('click',function(){type(1);},false);


function headmenu(n){
    h1[0].className="hmenu";
    h1[1].className="hmenu";
    h1[2].className="hmenu";    
    h1[n].className="hmenu h1click";
    
    if(n==1){
        und[0].style.display='none';
        und[1].style.display='none';
        und[2].style.display='none';
         und[3].style.display='none';
         und[4].style.display='none';
        com[0].style.display='flex';
          buildmg.style.opacity="1";
          buildmg.style.left="-50px";
           buildmg.style.top="-100px";
        
    }
     if(n==2){
        com[0].style.display='none';
              und[0].style.display='flex';
        und[1].style.display='flex';
        und[2].style.display='flex';
            und[3].style.display='flex';
            und[4].style.display='flex';
           buildmg.style.opacity="1";
          buildmg.style.left="-50px";
           buildmg.style.top="-100px";
    }
    
       if(n==0){
        com[0].style.display='flex';
              und[0].style.display='flex';
        und[1].style.display='flex';
        und[2].style.display='flex';
           und[3].style.display='flex';
           und[4].style.display='flex';
        
    }
    
}

headmenu(0);
h1[0].addEventListener('click',function(){headmenu(0);},false);
h1[1].addEventListener('click',function(){headmenu(1);},false);
h1[2].addEventListener('click',function(){headmenu(2);},false);



/* start:build */
var buildmg=document.getElementById('buildmg');
var pboxani=document.getElementsByClassName('portbox');
window.onscroll = function() {scrollani(),scrollanib()};
  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
function scrollani() {
    /* build*/
 if(w>500){
    if (document.body.scrollTop > 3750 || document.documentElement.scrollTop > 3750) {
          buildmg.style.opacity="1";
          buildmg.style.left="-50px";
           buildmg.style.top="-100px";
      }
    }
    
    if(w<500){
    if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
          buildmg.style.opacity="1";
          buildmg.style.left="-70px";
           buildmg.style.top="-20px";
      }
    }
    
    
  
    
    
    
}
    
     /* build*/
    /* end:build */
