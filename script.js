

//javascript hamburger

let burger=document.getElementById('burger');

burger.addEventListener('click',()=>{
    
    navbar=document.querySelector('.navbar');
    navlist=document.querySelector('.nav-list');
    right=document.querySelector('.right');

    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-nav');
    right.classList.toggle('v-nav');
})