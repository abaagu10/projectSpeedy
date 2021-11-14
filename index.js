let big=document.getElementsByClassName('dot1');
let pinki=document.querySelector('.dot2');
let yellow=document.getElementsByClassName('dot3');
let white=document.getElementsByClassName('dot4');
let rollerSection=document.getElementsByClassName('main');
let shoppingCart=document.getElementsByClassName('sidebar-left');
let container=document.querySelector('body');
//dom
function ChangeColor()
    {
        var ChangeColor = document.getElementsByClassName('body');
        ChangeColor.style.background-color = 'red';
    }
pinki.addEventListener('click', ChangeColor(){
    document.querySelector('body').style.background = 'red';    
});
