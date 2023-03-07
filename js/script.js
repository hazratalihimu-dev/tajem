$(function(){
  // NAV-SIDBAR

  $('.bar').on("click",function(){
    $('.nav-sidebar').css('visibility', 'visible')
    $('.nav-sidebar').css('width', '100%')
  })
  $('.cross').on("click",function(){
    $('.nav-sidebar').css('visibility', 'hidden')
    $('.nav-sidebar').css('width', '0px')
  })

  // BANNER SLIDER
  $('.banner-text-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    dots: true,
  });

  // TESTIMONIAL SLIDER
  $('.test-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    dots: true,
  });

})