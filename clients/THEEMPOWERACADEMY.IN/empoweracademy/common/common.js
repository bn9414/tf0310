
function myFunction(x) {
    x.classList.toggle("change");
}
$(document).ready(function(){
    $(".bar-con").click(function(){
        $(".moblinks").slideToggle();
    });
    
    
})

$(document).ready(function(){
    $(".moblinks").on('click','#mmn1',function(){
        $(".emew1").slideToggle();
    });
     $(".moblinks").on('click','#mmn',function(){
        $(".emew").slideToggle();
    });
})

$(document).ready(function(){
    $(".houpsc").on('mouseenter',function(){
        $(".hovmnu").addClass('tex');
    });
    $(".houpsc").on('mouseleave',function(){
        $(".hovmnu").removeClass('tex');
    });
   $(".hovmnu").on('mouseleave',function(){
        $(".hovmnu").removeClass('tex');
    });
    $(".hovmnu").on('mouseenter',function(){
        $(".hovmnu").addClass('tex');
    });
    
     $(".houpsc1").on('mouseenter',function(){
        $(".hovmnu1").addClass('tex');
    });
    $(".houpsc1").on('mouseleave',function(){
        $(".hovmnu1").removeClass('tex');
    });
   $(".hovmnu1").on('mouseleave',function(){
        $(".hovmnu1").removeClass('tex');
    });
    $(".hovmnu1").on('mouseenter',function(){
        $(".hovmnu1").addClass('tex');
    });
    
})
