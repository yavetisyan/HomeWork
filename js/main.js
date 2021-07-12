$(function () {
  $(".about__slider").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
    infinite: false,
  });
});
