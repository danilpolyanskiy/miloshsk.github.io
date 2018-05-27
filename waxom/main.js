$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	speed: 1100,
  	fade: true,
  	cssEase: 'ease-in-out'
  });
   $('.posts-items-wrapper').slick({
  	dots: false,
  	speed: 1100,
  	slidesToShow: 3,
  	slidesToScroll: 1
  });
});
var mixer = mixitup('.projects-container');