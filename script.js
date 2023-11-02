const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: '60px',
  duration: 1500, 
  delay: 400,
  reset: true
});

sr.reveal(".text", {
  delay: 200,
  origin: 'top', 
});

sr.reveal(".form-container form", {
  delay: 800,
  origin: 'left', 
});

sr.reveal(".heading", {
  delay: 500,
  origin: 'top', 
});

sr.reveal(".ride-container .box", {
  delay: 600,
  origin: 'top', 
});

sr.reveal(".services-container .box", {
  delay: 600,
  origin: 'top', 
});

sr.reveal(".about-container .box", {
  delay: 600,
  origin: 'top', 
});

sr.reveal(".reviwes-container", {
  delay: 600,
  origin: 'top', 
});

sr.reveal(".newsletter .box", {
  delay: 400,
  origin: 'bottom', 
});


let swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true, 
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});



