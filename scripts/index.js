const swiper = new Swiper(".swiper", {
  speed: 400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});
const secondSwiper = new Swiper(".swiper-second", {
  speed: 400,
  slidesPerView: 4,
  spaceBetween: 30,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const thirdSwiper = new Swiper(".swiper-third", {
  speed: 400,
  slidesPerView: 4,
  spaceBetween: 30,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let productFavoritesImgs = document.querySelectorAll(".product--favorites img");
for (let productFavoritesImg of productFavoritesImgs) {
  productFavoritesImg.addEventListener("click", () => {
    console.log("hello");
    if (productFavoritesImg.getAttribute("src") == "img/favorites_blue.svg") {
      productFavoritesImg.setAttribute("src", "img/favorites.svg");
    } else {
      productFavoritesImg.setAttribute("src", "img/favorites_blue.svg");
    }
  });
}
