
//paste this code under the head tag or in a separate js file.
	// Wait for window load
	jQuery_1_5_2(window).load(function() {
		// Animate loader off screen
		jQuery_1_5_2(".se-pre-con").fadeOut("slow");;
	});
//end preloads screen//






$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        
        e.preventDefault();
        var target = this.hash;
        
        $target = $(target);
       
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
            console.log(target);
        });
    });
});


var sections = $('.sections .div')
  , nav = $('.nav-web')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      /*$(this).addClass('active');*/
        console.log($(this));
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

/*
var header = document.getElementsByClassName("nav-web");
var btns = header[0].getElementsByClassName("web-mnu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/

/*nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});*/





var bar = document.getElementById('bar-con');
bar.addEventListener('click',toogle,false);
        var bar1 = document.getElementById('bar1');
        var bar2 = document.getElementById('bar2');
        var bar3 = document.getElementById('bar3');

var status = 1

function toogle(){
    if(status == 1){ 
        var mnulist = document.getElementById('navlst');
       
        mnulist.style.left="-100%";
        mnulist.style.opacity="0";
        mnulist.style.transition="1s";
        mnulist.style.display="none";
        
        bar2.style.opacity="1";
        bar2.style.transition="opacity 0.7s";
        bar2.style.background="#993233";
        bar1.style.position="static";
        
        bar1.style.transform="rotate(0deg)";
        bar3.style.position="static";
        bar3.style.transform="rotate(0deg)";
       
    status = 0;
        
    } else if(status == 0){
var mnulist1 = document.getElementById('navlst');
        
        mnulist1.style.left="0px";
        mnulist1.style.opacity="1";
        mnulist1.style.transition="1s";
        mnulist1.style.display="block";
        bar1.style.position="relative";
        
        bar1.style.position="relative";
        bar1.style.transform="rotate(45deg)";
        bar1.style.transition=".4s";
        bar1.style.top="12px";
        
        bar2.style.opacity="0";
        bar2.style.transition="opacity 0.1s";
        bar2.style.background="#fcfcfc";
        bar2.style.transition=".4s";
        
        bar3.style.position="relative";
        bar3.style.transform="rotate(135deg)";
        bar3.style.transition=".4s";
        bar3.style.top="-10px";
    status = 1;
    }
    
}


/*var bar1one = document.getElementById('bar-con1');
bar1one.addEventListener('click',toogleone,false);
        var bar21 = document.getElementById('bar-s1');
        var bar22 = document.getElementById('bar-s2');
        var bar23 = document.getElementById('bar-s3');
var statusof = 1

function toogleone(){
    if(statusof == 1){ 
        var submnu1 = document.getElementById('submnu1');
       
       
        submnu1.style.opacity="0";
        submnu1.style.transition="0.7s";
        
        bar22.style.opacity="1";
        bar22.style.transition="opacity 0.7s";
        bar22.style.background="#993233";
        bar21.style.position="static";
        bar21.style.transform="rotate(0deg)";
        bar23.style.position="static";
        bar23.style.transform="rotate(0deg)";
       
    statusof = 0;
    } else if(statusof == 0){
var submnu2 = document.getElementById('submnu1');
        
        
        submnu2.style.opacity="1";
        submnu2.style.transition="1s";
       
        bar22.style.opacity="0";
        bar22.style.transition="opacity 0.1s";
        bar22.style.background="#fcfcfc";
        bar22.style.transition=".4s";
        bar21.style.position="relative";
        bar21.style.transform="rotate(45deg)";
        bar21.style.transition=".4s";
        bar21.style.top="12px";
        bar23.style.position="relative";
        bar23.style.transform="rotate(135deg)";
        bar23.style.transition=".4s";
        bar23.style.top="-10px";
    statusof = 1;
    }
    
}*/


