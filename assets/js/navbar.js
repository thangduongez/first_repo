const menu_navbar = document.querySelector(".navbar__links");
const navbar_button = document.querySelector(".navbar_icons");
const navbar_element_a = document.querySelectorAll(".navbar__link")
// const iconArrowUp = document.querySelector(".fa-angle-up");
navbar_button.addEventListener("click", () => {
  menu_navbar.classList.toggle("navbar__open");
  navbar_button.classList.toggle("open");
});

// console.log(navbar_element_a)

// add event close for all element a


for(let i = 0; i < navbar_element_a.length ; i++){
// console.log(navbar_element_a[i])
    navbar_element_a[i].addEventListener("click", () =>{
        menu_navbar.classList.remove('navbar__open')
        navbar_button.classList.remove('open')
    })
}