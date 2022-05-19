const menu_navbar = document.querySelector(".navbar__links");
const navbar_button = document.querySelector(".navbar_icons");
const btnScroll = document.querySelector(".scroll-top-btn");
const btnOpenQuestion = document.getElementsByClassName(
  "questions-section__item"
);
const iconArrowUp = document.querySelector(".fa-angle-up");
navbar_button.addEventListener("click", () => {
  menu_navbar.classList.toggle("navbar__open");
  navbar_button.classList.toggle("open");
});

for (var i = 0; i < btnOpenQuestion.length; i++) {
  btnOpenQuestion[i].setAttribute("onclick", "onClickEvent(this)");
}

function onClickEvent(e) {
  const allChildNodes = e.childNodes[3];
  const iChild = allChildNodes.childNodes[1];
  let addHeightFitContent = window.innerWidth <= 680 ? 100 : 50;
  if (e.classList.value == "questions-section__item") {
    iChild.style.transform = "rotate(0)";
    let height = e.offsetHeight + 50;
    e.style.height = height + "px";
    e.classList.toggle("open-question");
  } else {
    let height = e.offsetHeight - 50;
    e.style.height = height + "px";
    e.classList.toggle("open-question");
    iChild.style.transform = "rotate(180deg)";
  }
}

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
btnScroll.addEventListener("click", () => {
  topFunction();
});
window.onscroll = () => {
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
});
