// const menuToggle = document.getElementById("menuToggle");
// const menu = document.querySelector(".sidebar");
// menuToggle.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });
// const menuToggle2 = document.getElementById("menuToggleNew");
// const menu2 = document.querySelector(".sidebar");
// menuToggle2.addEventListener("click", () => {
//   menu2.classList.toggle("active");
// });
// const cartMenu = document.getElementById("cartMenu");
// const cartMenuBody = document.querySelector(".cartMenuBody");
// cartMenu.addEventListener("click", () => {
//   cartMenuBody.classList.toggle("active");
// });
// const cartMenu2 = document.getElementById("cartMenu2");
// const cartMenuBody2 = document.querySelector(".cartMenuBody");
// cartMenu2.addEventListener("click", () => {
//   cartMenuBody2.classList.toggle("active");
// });

// Modal start
const triggerButton     = document.querySelectorAll(".open-category-menu");
const modalWrapper      = document.querySelector("#modalWrapper");
const closeButtonModal  = document.querySelector(".close-button-category");
triggerButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    openModal();
  })
})


const shopTriggerButton     = document.querySelectorAll(".shopping-cart-menu");
const shopModalWrapper      = document.querySelector("#shopingCartWrapper");
const shopCloseButtonModal  = document.querySelector(".close-shop-button");
shopTriggerButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    openModalShop();
  })
})
// triggerButton.addEventListener("click", () => { openModal(); });
closeButtonModal.addEventListener("click", () => { closeModal() });
modalWrapper.addEventListener("click", (e) => {  if(e.target !== modalWrapper) return; closeModal() });

// shopTriggerButton.addEventListener("click", () => { openModalShop(); });
shopCloseButtonModal.addEventListener("click", () => { closeModalShop() });
shopModalWrapper.addEventListener("click", (e) => {  if(e.target !== shopModalWrapper) return; closeModalShop() });

function openModal() {  modalWrapper.classList.add('active'); }
function closeModal() { modalWrapper.classList.remove('active'); }
function openModalShop() {  shopModalWrapper.classList.add('active'); }
function closeModalShop() { shopModalWrapper.classList.remove('active'); }
// Modal end


// swiper Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  initialSlide: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1536: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

// swipper slider product details page
var swiper = new Swiper(".mySwiperProduct", {
  on: {
    slideChange: function () {
      const index_currentSlide = swiper.realIndex;
      const currentSlide = swiper.slides[index_currentSlide]
      //
      currentSlide.style.background = "green";
    },
  },
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    640: {
      direction: 'horizontal',
      slidesPerView: 6,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
    1024: {
      direction: 'horizontal',
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1280: {
      direction: 'vertical',
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1536: {
      direction: 'vertical',
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
var swiper2 = new Swiper(".mySwiperProductPreview", {
  // direction: 'vertical',
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1536: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

// Tab
function tabCategory(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabiconbottom");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
