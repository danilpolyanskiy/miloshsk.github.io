$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	speed: 1100,
  	fade: true,
  	cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 550,
        settings: {
           arrows: false
        }
      }
    ]
  });
   $('.posts-items-wrapper').slick({
  	dots: false,
  	speed: 1100,
  	slidesToShow: 3,
  	slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
   $('.burger').click(function() {
      $(this).toggleClass('burger-opened');
      $('.header-nav').toggleClass('mobile-menu');
   })
});
var mixer = mixitup('.projects-container');
if(window.innerWidth <= 400) {
  mixer.destroy();
}