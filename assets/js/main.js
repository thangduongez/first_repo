const menu_navbar = document.querySelector('.navbar__links')
const navbar_button = document.querySelector('.navbar_icons')

navbar_button.addEventListener('click', ()=> {
  menu_navbar.classList.toggle("navbar__open")
  navbar_button.classList.toggle('open')
})