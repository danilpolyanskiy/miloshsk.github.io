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
    // // Menu
    $('.header-menu-button-wrapper').click(function() {
     $('.page-nav').toggleClass('page-nav-show'),
     $('.header-nav-list').toggleClass('active-menu'),
     $('.header-menu-button').toggleClass('header-menu-button-active')
    });

    $('.nav-list a').click(function() {
      $('.header-menu-button').toggleClass('header-menu-button-active'),
      $('.page-nav').toggleClass('page-nav-show')
    });
    //Scrolling      
  $('.nav-list a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
      if ($target.length) {
        $('.nav-list a').removeClass('active');
        $(this).parent('li').addClass('active');
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset}, 1000);
        return false;
      }
    }
  });
    //ScrollLink
     $('.header-button-area').click(function() {
    var targetOffset = $('.services-items-wrapper').offset().top-225;
    $('html,body').animate({scrollTop: targetOffset}, 1200);
  });
});
	
