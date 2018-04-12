var bar = document.getElementById('bar');
bar.addEventListener('click',toogle,false);
        var bar1 = document.getElementById('bar1');
        var bar2 = document.getElementById('bar2');
        var bar3 = document.getElementById('bar3');
var status = 1

function toogle(){
    if(status == 1){ 
        var mnulist = document.getElementById('mnu-list');
       
        mnulist.style.left="-100%";
        mnulist.style.opacity="0px";
        mnulist.style.transition="1s";
        mnulist.style.display="none";
        bar2.style.opacity="1";
        bar1.style.position="static";
        bar1.style.transform="rotate(0deg)";
        bar3.style.position="static";
        bar3.style.transform="rotate(0deg)";
       
    status = 0;
    } else if(status == 0){
var mnulist1 = document.getElementById('mnu-list');
        
        mnulist1.style.left="0px";
        mnulist1.style.opacity="1px";
        mnulist1.style.transition="1s";
        mnulist1.style.display="block";
        bar2.style.opacity="0";
        bar2.style.transition=".4s";
        bar1.style.position="relative";
        bar1.style.position="relative";
        bar1.style.transform="rotate(45deg)";
        bar1.style.transition=".4s";
        bar1.style.top="12px";
        bar3.style.position="relative";
        bar3.style.transform="rotate(135deg)";
        bar3.style.transition=".4s";
        bar3.style.top="-10px";
    status = 1;
    }
    
}



var userInput = document.getElementById('userInput');
userInput.addEventListener('click',animInput,false);

function animInput(){
        var frm = document.getElementById('frm');
        frm.classList.add('focused');
}
