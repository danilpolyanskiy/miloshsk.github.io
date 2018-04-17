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