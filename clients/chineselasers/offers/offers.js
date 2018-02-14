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

var build= document.getElementsByClassName('build');
window.onscroll = function() {scrollani()};
  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
function scrollani() {
    /* build*/
 if(w>500){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

        
      }
    }
    
    if(w<650){
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    
        
    }   
    
}