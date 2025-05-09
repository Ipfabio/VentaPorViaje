document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.producto-slider').forEach((slider) => {
    new Swiper(slider, {
      loop: true,
      navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
      },
    });
  });
});
