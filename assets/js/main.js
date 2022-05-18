const menu_navbar = document.querySelector(".navbar__links");
const navbar_button = document.querySelector(".navbar_icons");
const btnScroll = document.querySelector(".scroll-top-btn");
const btnOpenQuestion = document.querySelector(".questions-section__item");
const iconArrowUp = document.querySelector(".fa-angle-up");
navbar_button.addEventListener("click", () => {
  menu_navbar.classList.toggle("navbar__open");
  navbar_button.classList.toggle("open");
});

btnOpenQuestion.addEventListener("click", () => {
  iconArrowUp.style.transform = "rotate(180deg)";
});

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
btnScroll.addEventListener("click", () => {
  topFunction();
});
window.onscroll = () => {
  // console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 200) {
    btnScroll.classList.add("append_btn");
  } else {
    btnScroll.classList.remove("append_btn");
  }
};
const swiper = new Swiper(".swiper", {
  effect: "sidebar",
  // spaceBetween: 200,
  autoHeight: true,
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
  longSwipesMs: 300,
  longSwipesRatio: 0.5,
  animating: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
