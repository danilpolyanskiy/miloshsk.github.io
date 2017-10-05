$(document).ready(function() { 
	// Mobile menu
	$('.hide-menu').click(function(){
 	 	$(this).toggleClass('active-menu');
 	 	$('.overlay').toggleClass('overlay-show');
 	 	$('.header-top-wrapper-scroll').toggleClass('header-top-wrapper-color');
 	 	$('.header-logo').toggleClass('header-logo-display');
	});
	$('.overlay').click(function(){
 	 	$(this).toggleClass('overlay-show');
 	 	$('.hide-menu').toggleClass('active-menu');
 	 	$('.header-top-wrapper-scroll').toggleClass('header-top-wrapper-color');
 	 	$('.header-logo').toggleClass('header-logo-display');
	});
	$('.header-main-menu-link').click(function(){
		$('.overlay').toggleClass('overlay-show');
		$('.hide-menu').toggleClass('active-menu');
		$('.header-top-wrapper-scroll').toggleClass('header-top-wrapper-color');
		$('.header-logo').toggleClass('header-logo-display');
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
	    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
	    	document.querySelector("#header-top-wrapper").classList.add('header-top-wrapper-scroll');
	    	document.querySelector(".header-logo").classList.add('header-logo-scroll');
	    	document.querySelector(".hide-menu").classList.add('hide-menu-scroll');

	    } else if(document.body.scrollTop < 150 || document.documentElement.scrollTop < 150)  {
	    	document.querySelector("#header-top-wrapper").classList.remove('header-top-wrapper-scroll');
	    	document.querySelector(".header-logo").classList.remove('header-logo-scroll');
	    	document.querySelector(".hide-menu").classList.remove('hide-menu-scroll');
		}
		 if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
	        document.getElementById("up-button").style.display = "block";

	    } else if (document.body.scrollTop < 750 || document.documentElement.scrollTop < 750) {
	    	 document.getElementById("up-button").style.display = "none";

	    }
	}
	 $('#up-button').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
	// Slider	
	 $('.slider').slick({
	 	 dots: true
  });
});
