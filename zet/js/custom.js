$(document).ready(function(){
   // Slider
    $('.slider-wrapper').slick({
          arrows: false,
          dots: true,
          autoplaySpeed: 2000,
          speed: 900,
          slidesToShow: 1,
          slidesToScroll: 1
        }
    );
    // Menu
    $('.header-menu-button-wrapper').click(function() {
     $('.page-nav').toggleClass('page-nav-show'),
      $('.header-nav-list').toggleClass('active-menu')
    });
});
	