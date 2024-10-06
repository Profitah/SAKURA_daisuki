document.addEventListener("DOMContentLoaded", function () {
  var useSwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
});