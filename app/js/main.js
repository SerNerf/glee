// $(document).ready(function () {

//   // $('#products-week__wrapper').mixItUp({
//   //   selectors: {
//   //     filter: '.products-week__filter-btn'
//   //   }
//   // })

//   var mixer = mixitup('#products-week__wrapper');
//   var mixer_2 = mixitup('.new-design__wrapper');
  

//   // $('.new-design__wrapper').mixItUp({
//   //   selectors: {
//   //     filter: '.new-design__filter-btn'
//   //   }
//   // })

// });

$(document).ready(function () {
  
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

    $('.price__input').ionRangeSlider({
      type: "double",
      hide_min_max: true,
      hide_from_to: true,

      onStart: function(data) {
        $('.price__num--from').text(data.from);
        $('.price__num--to').text(data.to);
      },
      
      onChange: function (data) {
        $('.price__num--from').text(data.from);
        $('.price__num--to').text(data.to);
      }
    });


          
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
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  })
  
  $(".recent__stars").rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });
  
  $(".product-card__stars").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
  });
  
  $(".product-detalis__stars").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  
});
