$(function() {

   $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close')
   }) 
   $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close')
   })

   $('.top__slider').slick({
      dots: true,
      arrows: false,
      fade: true,//прочитать!  ????
      autoplay: true,//every 3 sec by default
   })

   $('.contacts-slider').slick({
      slidesToShow: 10,
      slidesToScroll:10,
      dots: true,
      arrows: false,
   })

   //slider with custom buttons
   $('.article-slider__box').slick({
      prevArrow: '<button type="button" class="slick-prev"><img class="article-slider__arrow article-slider__arrowleft" src="images/arrow-slider-left.svg" alt="arrow left"></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="article-slider__arrow article-slider__arrowright" src="images/arrow-slider-right.svg" alt="arrow right"></button>'
   })

   const mixer = mixitup('.galery__inner', {
      //по дефолту будет выбран класс этой кнопки
      load: {
         filter: '.living'
      }
   });
})