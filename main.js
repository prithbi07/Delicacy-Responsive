var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let profile = document.querySelector('#scroll');
let option = document.querySelector('.option');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll=()=>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

profile.onclick = () => { 
  profile.classList.toggle('bx-caret-up');
  option.classList.toggle('active');
}