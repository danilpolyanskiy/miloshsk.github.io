$(document).ready(function() { 
// Animate 
    wow = new WOW( {
      mobile: false
    } )
    wow.init();
//Mobile menu
	$('.header-menu-button').click(function() {
		if(!$(this).hasClass('active')) {
			$(this).addClass('active'),
			$('.header-nav-list').slideDown()
		} else {
			$(this).removeClass('active'),
			$('.header-nav-list').slideUp()
		}
	});
	$('.header-nav-list a').click(function() {
		$('.header-menu-button').toggleClass('active'),
		$('.header-nav-list').toggleClass('active-menu')
	})
//Scroll
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
	    	document.querySelector(".header-top-row").classList.add('top-row-shadow');

	    } else if(document.body.scrollTop < 450 || document.documentElement.scrollTop < 450)  {
	    	document.querySelector(".header-top-row").classList.remove('top-row-shadow');
		}
	}
//Scroll top
	 $('#home').click(function () {
        $('body,html').animate({
           scrollTop: 0
        }, 800);
        return false;
       });
//Scrolling		   
	$('ul.header-nav-list a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('ul.header-nav-list li').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-100;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});
