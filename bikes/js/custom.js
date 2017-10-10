$(document).ready(function() { 

// Select run
	  $('select').niceSelect();

// Mobile menu
	$('.hide-menu').click(function() {
		$(this).toggleClass('active-menu');
		$('.header-menu').toggleClass('header-menu-show')
	});
	$('.header-menu a').click(function() {
		$('.header-menu').toggleClass('header-menu-show');
		$('.hide-menu').toggleClass('active-menu');
	});



	$('ul.header-menu a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('ul.header-menu li').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-50;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});

