//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var jhd= document.getElementsByClassName('jhd');
        var ktxt= document.getElementsByClassName('ktxt');

function portfullf(){
jhd[0].style.left="0px";
    jhd[0].style.opacity="0";
    
    jhd[1].style.left="0px";
    jhd[1].style.opacity="0";
    
    jhd[2].style.left="0px";
    jhd[2].style.opacity="0";


}

portfullf();

    });
