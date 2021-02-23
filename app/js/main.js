$(function(){
  
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