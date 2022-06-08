const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".sidebar");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
const menuToggle2 = document.getElementById("menuToggleNew");
const menu2 = document.querySelector(".sidebar");
menuToggle2.addEventListener("click", () => {
  menu2.classList.toggle("active");
});
const cartMenu = document.getElementById("cartMenu");
const cartMenuBody = document.querySelector(".cartMenuBody");
cartMenu.addEventListener("click", () => {
  cartMenuBody.classList.toggle("active");
});
const cartMenu2 = document.getElementById("cartMenu2");
const cartMenuBody2 = document.querySelector(".cartMenuBody");
cartMenu2.addEventListener("click", () => {
  cartMenuBody2.classList.toggle("active");
});


// swiper Slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView:6,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });