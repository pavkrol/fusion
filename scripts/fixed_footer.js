const footer = document.getElementById("hero-footer");
const logo = document.getElementById("logo");
const link = document.getElementById("contact_link");
const nav = document.getElementById("navigation");
const nav_position = nav.getBoundingClientRect();

window.addEventListener("scroll", (e) => {
  const scroll_position = window.scrollY;
  const screen_size = window.innerHeight - 100;
  if(scroll_position > screen_size) {
    link.classList.add("link_fixed");
    logo.classList.add("fixed");
  }
  else {
    link.classList.remove("link_fixed");
    logo.classList.remove("fixed");
  }
  if(scroll_position > nav_position.top) {
    nav.classList.add("fixed");
  }
  else {
    nav.classList.remove("fixed");
  }
})