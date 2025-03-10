var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // no of slider show
    spaceBetween: 30,
    slidesPerGroup: 1, // no of slider move per click
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });