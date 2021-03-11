$(function(){
  
  // $(document).click(function(event) {
  //   if($(window).width() <= 575){
  //       //Скрыть меню на смартфоне при клике вне него
  //       if (
  //            !($('.menu__items').find(event.target).length 
  //            || $('.menu__items')[0] == $(event.target)[0] 
  //            || $('.menu__btn').find(event.target).length)
             
  //            && $('.menu__items').hasClass('menu__items--active')
  //            && $('.calculator-window--eror').hasClass('hide')
  //            && !$(event.target).hasClass('menu__btn')
  //            ){
  //           $('.menu__items').removeClass('menu__items--active');
  //           $('.menu__line').removeClass('menu__line--active');
  //       }
  //   }
  // });
  
  $('.user-nav__link--menu').click(function(){
    $('.menu').toggleClass('menu--active');
  })

  $('.main-slider__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  })

  $('.sponsors__items').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
  })
  
  var mixer = mixitup('.products-week__wrapper');
});