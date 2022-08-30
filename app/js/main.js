$(function() {

   $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close')
   }) 
   $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close')
   })

   //for adopted btn-menu
   $('.header__btn-menu').on('click', function() {
      $('.menu').toggleClass('menu--open');
   }) 

   // for /.works-path/ putting item--measuring inside items-box
   if($(window).width()<651){
      $('.works-path__item--measuring').appendTo($('.works-path__items-box'))
   }

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
      responsive: [
         {
            breakpoint: 1700,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 8,
            }
          },
         {
           breakpoint: 1510,
           settings: {
             slidesToShow: 6,
             slidesToScroll: 6,
           }
         },
         {
           breakpoint: 1100,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 4
           }
         },
         {
           breakpoint: 730,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3
           }
         },
         {
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ]
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