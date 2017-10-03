$(document).ready(function() { 
	// Mobile menu
	$('.hide-menu').click(function(){
 	 	$(this).toggleClass('active-menu');
 	 	$('.overlay').toggleClass('overlay-show');
	});
	$('.overlay').click(function(){
 	 	$(this).toggleClass('overlay-show');
 	 	$('.hide-menu').toggleClass('active-menu');
	});
	$('.header-main-menu-link').click(function(){
		$('.overlay').toggleClass('overlay-show');
		$('.hide-menu').toggleClass('active-menu');
	})
	$('ul.header-main-menu a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('ul.header-main-menu li').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-200;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
	//Scroll
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
	        document.getElementById("up-button").style.display = "block";
	    } else {
	        document.getElementById("up-button").style.display = "none";
	    }
	}
	 $('#up-button').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
	// Slider	
	 $('.slider').slick({
	 	 dots: true
  });
});
