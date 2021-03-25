$(document).ready(function () {

  // BXslider ===========
  // $('.slider').bxSlider({
  //   minSlides: 1,
  //   maxSlides: 5,
  //   moveslides: 3,
  //   slideMargin: 5,
  //   slideWidth: 0
  // });

  //owl-carousel
  $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplaySpeed:1000,
      margin:10,
      nav:true,
      navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

  // Meanmenu ===========
    $('#main_menu').meanmenu({
      meanMenuContainer: '#mobile_menu',
      meanScreenWidth: "900" 
    });

});



