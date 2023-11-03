
//menu
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


//scroll effects

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

sr.reveal(".about-container .about-img img", {
  delay: 700,
  origin: 'left', 
});

sr.reveal(".reviwes-container", {
  delay: 600,
  origin: 'top', 
});

//slider

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

// caritems with oop

class CarsCarts {
  constructor (img,alt,year,car,price,rentTime,parentSelector) {
    this.img = img;
    this.alt = alt;
    this.year = year;
    this.car = car;
    this.price = price;
    this.rentTime = rentTime;
    this.parent = document.querySelector(parentSelector);
  };

  render () {
    const {img,alt,year,car,price,rentTime,parent} = this;
    const elem = document.createElement("div");
    elem.classList.add("box");
    elem.innerHTML = `
              <div class="box-img">
                    <img src=${img} alt=${alt}>
                </div>
                <p>${year}</p>
                <h3>${car}</h3>
                <h2> ${price} <span>${rentTime}</h2>
                <a href="#" class="btn">Rent Now</a>
    `;
    parent.append(elem);
  };
};

  new CarsCarts (
    "img/ferrari.png",
    "car",
    "2019",
    "Ferrari F8 Tributo",
    "$14.300 / $630",
    "month/day",
    ".services-container"
  ).render();

  new CarsCarts (
    "img/mercedes.png",
    "car",
    "2020",
    "Mercedes Benz C300 Convertible",
    "$6.700 / $420",
    "month/day",
    ".services-container"
  ).render();

  new CarsCarts (
    "img/bmw1.png",
    "car",
    "2020",
    "Voodoo Blue BMW M3 ",
    "$6.550 / $255",
    "month/day",
    ".services-container"
  ).render();

  new CarsCarts (
    "img/kia.png",
    "car",
    "2023",
    "Kia Optima",
    "$4.800 / $290",
    "month/day",
    ".services-container"
  ).render();

  new CarsCarts (
    "img/mazda.png",
    "car",
    "2023",
    "Mazda CX-30",
    "$3.800 / $320",
    "month/day",
    ".services-container"
  ).render();

  new CarsCarts (
    "img/astonmartin.png",
    "car",
    "2024",
    "Aston Martin DB12 revealed ",
    "$18.650$ / $920",
    "month/day",
    ".services-container"
  ).render();

  new CarsCarts (
    "img/bugatti.png",
    "car",
    "2022",
    "Bugatti Chiron Sport",
    "$18.700 / $820",
    "month/day",
    ".services-container"
  ).render();

  new CarsCarts (
    "img/hyundai.png",
    "car",
    "2023",
    "Hyundai Santa Fe",
    "$9.000 / $370",
    "month/day",
    ".services-container"
  ).render();

  new CarsCarts (
    "img/tesla.png",
    "car",
    "2022",
    "Tesla Model 3",
    "$21.300 / $1.000",
    "month/day",
    ".services-container"
  ).render();


