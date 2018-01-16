var x=document.getElementsByClassName('quest');
var y=document.getElementsByClassName('qopen');
var z=document.getElementsByClassName('close');
var expand=document.getElementsByClassName('expand');
var proexpand=document.getElementsByClassName('pro_expand');
var suit=document.getElementsByClassName('suit_open');
var exoffer=document.getElementsByClassName('exoffer');
var offer=document.getElementsByClassName('offer');
var tick=0;
var suit_tick=0;
var offer_tick=0;
function open(n){
if(n==0||n==1||n==2||n==3||n==4||n==5||n==6||n==7||n==8||n==9||n==10||n==11||n==12||n==13||n==14||n==15||n==16||n==17||n==18||n==19){ 
    y[0].style.display="none";
    y[1].style.display="none";
    y[2].style.display="none";
    y[3].style.display="none";
     y[4].style.display="none";
    y[5].style.display="none";
       y[6].style.display="none";
           y[7].style.display="none";
           y[8].style.display="none";
           y[9].style.display="none";
      y[10].style.display="none";
      y[11].style.display="none";
      y[12].style.display="none";
      y[13].style.display="none";
      y[14].style.display="none";
      y[15].style.display="none";
      y[16].style.display="none";
      y[17].style.display="none";
      y[18].style.display="none";
      y[19].style.display="none";
    
  
    y[n].style.display="block";
}
        if(n=='a'){    
    y[0].style.display="none";
            y[1].style.display="none";
            y[2].style.display="none";
            y[3].style.display="none";
                  y[4].style.display="none";
             y[5].style.display="none";
               y[6].style.display="none";
               y[7].style.display="none";
               y[8].style.display="none";
               y[9].style.display="none";
             y[10].style.display="none";
             y[11].style.display="none";
             y[12].style.display="none";
             y[13].style.display="none";
             y[14].style.display="none";
                  y[15].style.display="none";
                  y[16].style.display="none";
                  y[17].style.display="none";
                  y[18].style.display="none";
                  y[19].style.display="none";
            
}
tick=!tick;
}

function suitopen(n){
    if(suit_tick==0)
        {
            suit[n].style.display="block";
            
       
               
        }
    
     if(suit_tick==1)
        {
            suit[0].style.display="none";
             suit[1].style.display="none";
              suit[2].style.display="none";
              
        }
    
    suit_tick=!suit_tick;
}

function offeropen(){
    if(offer_tick==0)
        {
            exoffer[0].style.display="block";
              exoffer[1].style.display="block";
              exoffer[2].style.display="block";
            document.getElementsByClassName('offer')[0].style.height='188px';
        }
    
     if(offer_tick==1)
        {
            exoffer[0].style.display="none";
               exoffer[1].style.display="none";
               exoffer[2].style.display="none";
              document.getElementsByClassName('offer')[0].style.height='50px';
        }
    
    offer_tick=!offer_tick;
}




x[0].addEventListener("click",function(){open(0);}, false);
x[1].addEventListener("click",function(){open(1);}, false);
x[2].addEventListener("click",function(){open(2);}, false);
x[3].addEventListener("click",function(){open(3);}, false);
x[4].addEventListener("click",function(){open(4);}, false);
x[5].addEventListener("click",function(){open(5);}, false);
x[6].addEventListener("click",function(){open(6);}, false);
x[7].addEventListener("click",function(){open(7);}, false);
x[8].addEventListener("click",function(){open(8);}, false);
x[9].addEventListener("click",function(){open(9);}, false);
x[10].addEventListener("click",function(){open(10);}, false);
x[11].addEventListener("click",function(){open(11);}, false);
x[12].addEventListener("click",function(){open(12);}, false);
x[13].addEventListener("click",function(){open(13);}, false);
x[14].addEventListener("click",function(){open(14);}, false);
x[15].addEventListener("click",function(){open(15);}, false);
x[16].addEventListener("click",function(){open(16);}, false);
x[17].addEventListener("click",function(){open(17);}, false);
x[18].addEventListener("click",function(){open(18);}, false);
x[19].addEventListener("click",function(){open(19);}, false);



z[0].addEventListener("click",function(){open('a');}, false);
z[1].addEventListener("click",function(){open('a');}, false);
z[2].addEventListener("click",function(){open('a');}, false);
z[3].addEventListener("click",function(){open('a')}, false);
z[4].addEventListener("click",function(){open('a')}, false);
z[5].addEventListener("click",function(){open('a')}, false);
z[6].addEventListener("click",function(){open('a')}, false);
z[7].addEventListener("click",function(){open('a')}, false);
z[8].addEventListener("click",function(){open('a')}, false);
z[9].addEventListener("click",function(){open('a')}, false);
z[10].addEventListener("click",function(){open('a')}, false);
z[11].addEventListener("click",function(){open('a')}, false);
z[12].addEventListener("click",function(){open('a')}, false);
z[13].addEventListener("click",function(){open('a')}, false);
z[14].addEventListener("click",function(){open('a')}, false);

z[15].addEventListener("click",function(){open('a')}, false);

z[16].addEventListener("click",function(){open('a')}, false);

z[17].addEventListener("click",function(){open('a')}, false);

z[18].addEventListener("click",function(){open('a')}, false);

z[19].addEventListener("click",function(){open('a')}, false);



expand[0].addEventListener("click",function(){suitopen(0);}, false);
proexpand[0].addEventListener("click",function(){suitopen(1);}, false);
proexpand[1].addEventListener("click",function(){suitopen(2);}, false);
expand[1].addEventListener("click",offeropen, false);


/* start:build */
var pm1=document.getElementsByClassName('pricem1');
var pm2=document.getElementsByClassName('pricem2');
var pm3=document.getElementsByClassName('pricem3');
var ro1=document.getElementsByClassName('rimage');
var ro2=document.getElementsByClassName('rhead');
var buildmg=document.getElementById('buildmg');


function hello(){
   
    
}
    
hello();
 

window.onscroll = function() {scrollani(),scrollanib()};
  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
function scrollani() {
    /* build*/
 if(w>500){
    if (document.body.scrollTop > 1750 || document.documentElement.scrollTop > 1750) {
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
    
    
    if(w>650){
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            pm1[0].className="pricem1 pm1";
        pm2[0].className="pricem2 pm1";
        pm3[0].className="pricem3 pm1";
 
      }
    }
       if(w<650){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            pm1[0].className="pricem1 pm1";
       
    }
           
           if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
               pm2[0].className="pricem2 pm1";
       
    }
           
       if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
              pm3[0].className="pricem3 pm1";
    }
   
       }
    
        if(w<600){
    if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
         ro1[0].style.right='0px';
          ro1[1].style.right='0px';
          ro1[2].style.right='0px';
          ro1[3].style.right='0px';
       ro1[0].style.opacity='1';
        ro1[1].style.opacity='1';
        ro1[2].style.opacity='1';
        ro1[3].style.opacity='1';
        
         ro2[0].style.left='0px';
          ro2[1].style.left='0px';
          ro2[2].style.left='0px';
          ro2[3].style.left='0px';
       ro2[0].style.opacity='1';
        ro2[1].style.opacity='1';
        ro2[2].style.opacity='1';
        ro2[3].style.opacity='1';
        
    }
        
        }
    
         if(w>600){
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
         ro1[0].style.right='0px';
          ro1[1].style.right='0px';
          ro1[2].style.right='0px';
          ro1[3].style.right='0px';
       ro1[0].style.opacity='1';
        ro1[1].style.opacity='1';
        ro1[2].style.opacity='1';
        ro1[3].style.opacity='1';
        
         ro2[0].style.left='0px';
          ro2[1].style.left='0px';
          ro2[2].style.left='0px';
          ro2[3].style.left='0px';
       ro2[0].style.opacity='1';
        ro2[1].style.opacity='1';
        ro2[2].style.opacity='1';
        ro2[3].style.opacity='1';
        
    }
        
        }
    
 
    
}
    
     /* build*/
    /* end:build */
    
/* start:EMI*/
var hdfc=document.getElementsByClassName('hdfc9');
var bank=document.getElementsByClassName('bank_n');
var allemi=document.getElementsByClassName('allemi');
var emitar=document.getElementsByClassName('emitar');
var closeemi=document.getElementsByClassName('closeemi');




function emi(n){
    hdfc[0].style.display="none";
    hdfc[1].style.display="none";
    hdfc[2].style.display="none";
    hdfc[3].style.display="none";
    hdfc[4].style.display="none";
    hdfc[5].style.display="none";
    hdfc[6].style.display="none";
    hdfc[7].style.display="none";
    hdfc[n].style.display="table";
   
     bank[0].style.color="#343434";
    bank[0].style.borderBottomColor="#f3f3f3";
    bank[1].style.color="#343434";
    bank[1].style.borderBottomColor="#f3f3f3";
    bank[2].style.color="#343434";
    bank[2].style.borderBottomColor="#f3f3f3";
    bank[3].style.color="#343434";
    bank[3].style.borderBottomColor="#f3f3f3";
     bank[4].style.color="#343434";
    bank[4].style.borderBottomColor="#f3f3f3";
    bank[5].style.color="#343434";
    bank[5].style.borderBottomColor="#f3f3f3";
    bank[6].style.color="#343434";
    bank[6].style.borderBottomColor="#f3f3f3";
    bank[7].style.color="#343434";
    bank[7].style.borderBottomColor="#f3f3f3";
    
    
    bank[n].style.color="#ED6A5A";
    bank[n].style.borderBottomColor="#ED6A5A";

}
emi(0);
bank[0].addEventListener('click', function(){ emi(0);}, false);
bank[1].addEventListener('click', function(){ emi(1);}, false);
bank[2].addEventListener('click', function(){ emi(2);}, false);
bank[3].addEventListener('click', function(){ emi(3);}, false);
bank[4].addEventListener('click', function(){ emi(4);}, false);
bank[5].addEventListener('click', function(){ emi(5);}, false);
bank[6].addEventListener('click', function(){ emi(6);}, false);
bank[7].addEventListener('click', function(){ emi(7);}, false);

emitar[0].addEventListener('click', function(){ allemi[0].style.display="block";}, false);
closeemi[0].addEventListener('click', function(){ allemi[0].style.display="none";}, false);

/* End:emi*/

