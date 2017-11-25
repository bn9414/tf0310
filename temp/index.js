var area=document.getElementsByClassName('area');
var click=document.getElementsByClassName('click');
var more=document.getElementsByClassName('more');
var less=document.getElementsByClassName('less');
var benp=document.getElementsByClassName('ben1p');

function first()
{
    area[0].style.display='none';
    area[1].style.display='none';
    area[2].style.display='none';
    
    area[1].style.display='block';
    
}

click[1].addEventListener('click', first, false);

function benvis(n){
            benp[n].style.display="block";
            more[n].style.display="none";
            less[n].style.display="block";    
}

function benvisc(n){
    benp[n].style.display="none";
            more[n].style.display="block";
            less[n].style.display="none";
}
more[0].addEventListener('click',function(){benvis(0);},false);
more[1].addEventListener('click',function(){benvis(1);},false);
more[2].addEventListener('click',function(){benvis(2);},false);
more[3].addEventListener('click',function(){benvis(3);},false);


less[0].addEventListener('click',function(){benvisc(0);},false);
less[1].addEventListener('click',function(){benvisc(1);},false);
less[2].addEventListener('click',function(){benvisc(2);},false);
less[3].addEventListener('click',function(){benvisc(3);},false);


