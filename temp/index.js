var area=document.getElementsByClassName('area');
var click=document.getElementsByClassName('click');

function first()
{
    area[0].style.display='none';
    area[1].style.display='none';
    area[2].style.display='none';
    
    area[1].style.display='block';
    
}

click[1].addEventListener('click', first, false);



