// Custom Function Start Here

$(function () {

  // Sticky Header Jquery Start Here
  $(window).scroll(function(){
    let scrolling = $(this).scrollTop();
    if(scrolling > 100) {
        $('.header').addClass('header-bg');
    }else {
        $('.header').removeClass('header-bg');
    }
});
  // Sticky Header Jquery End Here

  //  Banner Slider Jquery Code Start Here
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300,
  });

  //  Banner Slider Jquery Code End Here

  //  ScreenShop Slider Jquery Code Start Here
  $('.screenshot-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  //  ScreenShop Slider Jquery Code End Here

  //  VenoBox Jquery Code Start Here
  $('.venobox').venobox();
  //  VenoBox Jquery Code End Here

  //  Team Slider Jquery Code Start Here
  $('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300,
    centerMode: true,
    centerPadding: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  //  Team Slider Jquery Code End Here

  //  Feed Back Text Slider Jquery Code Start Here
  $('.feedback-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300,
    asNavFor: '.feedback-image-slider',
  });
  //  Feed Back Text Slider Jquery Code End Here

  //  FeedBack Image Jquery Code Start Here
  $('.feedback-image-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300,
    asNavFor: '.feedback-text-slider',
  });
  //  FeedBack Image Jquery Code End Here

  //  Common Jquery Code Start Here

  //  Common Jquery Code End Here

});
// Custom Function End Here