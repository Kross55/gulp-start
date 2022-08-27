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

   const mixer = mixitup('.galery__inner', {
      //по дефолту будет выбран класс этой кнопки
      load: {
         filter: '.living'
      }
   });
})