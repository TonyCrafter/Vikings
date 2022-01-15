$(function(){

  $('.hamburger').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>'
  });

  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false
  });

});

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});