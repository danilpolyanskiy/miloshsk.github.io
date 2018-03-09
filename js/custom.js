$(document).ready(function() { 
// Animate 
    wow = new WOW( {
      mobile: false
    } )
    wow.init();
//Mobile menu
	$('.hide-menu').click(function() {
		$(this).toggleClass('active-menu'),
		$('.menubar').toggleClass('menubar-mobile')
	});

	$('.mainmenu-link').click(function() {
		$('.menubar').toggleClass('menubar-mobile'),
		$('.hide-menu').toggleClass('active-menu')
	});
	//Scrolling		   
	$('ul.mainmenu a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('ul.mainmenu li').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-100;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
	//Scroll top
	 $('#home').click(function () {
        $('body,html').animate({
           scrollTop: 0
        }, 800);
        return false;
       });
	//ScrollLink
	$('.header-button-area').click(function() {
		var targetOffset = $('section.portfolio').offset().top-105;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});
});
