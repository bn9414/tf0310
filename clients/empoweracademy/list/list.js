var bar = document.getElementById('barcon');
bar.addEventListener('click',toogle,false);
        var bar1 = document.getElementById('bar1');
        var bar2 = document.getElementById('bar2');
        var bar3 = document.getElementById('bar3');

var status = 1

function toogle(){
    if(status == 1){ 
        var ecomlst = document.getElementById('ecomlst');
       
        ecomlst.style.right="-100%";
        ecomlst.style.opacity="0";
        ecomlst.style.transition="1s";
        
        
        bar2.style.opacity="1";
        bar2.style.transition="opacity 0.7s";
        bar2.style.background="#fcfcfc";
        bar1.style.position="static";
        
        bar1.style.transform="rotate(0deg)";
        bar3.style.position="static";
        bar3.style.transform="rotate(0deg)";
       
    status = 0;
        
    } else if(status == 0){
var ecomlst1 = document.getElementById('ecomlst');
        
        ecomlst1.style.right="0%";
        ecomlst1.style.opacity="1";
        ecomlst1.style.transition="1s";
        
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