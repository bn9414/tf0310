var x= document.getElementsByClassName('whoh');
var y= document.getElementsByClassName('whyh');
var z= document.getElementsByClassName('whath');
var x1= document.getElementsByClassName('whop');
var y1= document.getElementsByClassName('whyp');
var z1= document.getElementsByClassName('whatp');

function who(){
    
 x[0].className='whohc whoh';
    y[0].className='whyh';
    z[0].className='whath';
    x1[0].style.display="block";
    y1[0].style.display="none";
    z1[0].style.display="none";
    
}


function why(){
       x[0].className='whoh';
        y[0].className='whyhc whyh';
 
    z[0].className='whath';
    x1[0].style.display="none";
    y1[0].style.display="block";
    z1[0].style.display="none";
    
    
}

function what(){
    
           x[0].className='whoh';
        y[0].className='whyh';
 
    z[0].className='whathc whath';
    
    x1[0].style.display="none";
    y1[0].style.display="none";
    z1[0].style.display="block";
    
    
}
who();

x[0].addEventListener('click', who,false);
y[0].addEventListener('click', why,false);
z[0].addEventListener('click', what,false);
