const menu_toggle = document.querySelector(".menu-toggle");
const nav_list = document.querySelector(".nav-list");

menu_toggle.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});
