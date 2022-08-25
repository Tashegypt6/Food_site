let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

let s_icon = document.querySelector('#search-icon');
let s_form = document.querySelector('#search-form');

s_icon.onclick = () =>{
    s_form.classList.toggle('active');
};

let closeI = document.querySelector('#close');


closeI.onclick = () =>{
    s_form.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });