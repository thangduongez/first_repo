const menu_navbar = document.querySelector(".navbar__links");
const navbar_button = document.querySelector(".navbar_icons");

navbar_button.addEventListener("click", () => {
  menu_navbar.classList.toggle("navbar__open");
  navbar_button.classList.toggle("open");
});

const swiper = new Swiper(".swiper", {
  effect: "sidebar",
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
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
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
