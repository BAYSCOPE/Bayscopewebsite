//Toggle effect for sub menu in nav
document.querySelectorAll(".drop-down-opener").forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      let dropdown = this.nextElementSibling;
      let down = this.querySelector(".fa-angle-down");
      let up = this.querySelector(".fa-angle-up");
      const dropdownMenu = document.querySelectorAll(".mid-section");
      const faupIcon = document.querySelectorAll(".fa-angle-up");
      const fadownIcon = document.querySelectorAll(".fa-angle-down");
      dropdownMenu.forEach((menu) => {
        if (menu !== dropdown && !menu.classList.contains("hidden")) {
          menu.classList.add("hidden");
        }
      });
      dropdown.classList.toggle("hidden");
      down.parentNode.classList.toggle("hidden");
      up.parentNode.classList.toggle("hidden");
      fadownIcon.forEach((icon) => {
        if (icon !== down && icon.parentNode.classList.contains("hidden")) {
          icon.parentNode.classList.remove("hidden");
        }
      });
      faupIcon.forEach((icons) => {
        if (icons !== up && !icons.parentNode.classList.contains("hidden")) {
          icons.parentNode.classList.add("hidden");
        }
      });
    });
  });


//Open and close of navbar for mobile device
const navToggler = document.getElementById("nav-toggler")
navToggler.addEventListener("click", function () {
  document.querySelector(".fixed-nav-container").classList.toggle("close-nav")
  document.querySelector(".fixed-nav-container").classList.toggle("open-nav")
  document.querySelector(".side-nav").classList.toggle("close-nav")
  document.querySelector(".side-nav").classList.toggle("open-nav")
})

document.getElementById("nav-closer").addEventListener("click", function () {
  document.querySelector(".fixed-nav-container").classList.add("close-nav")
  document.querySelector(".fixed-nav-container").classList.remove("open-nav")
  document.querySelector(".side-nav").classList.toggle("close-nav")
  document.querySelector(".side-nav").classList.toggle("open-nav")
})