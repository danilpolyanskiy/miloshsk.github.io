$(document).ready(function() { 

//Animate
	wow = new WOW(
	{
		mobile: false
	})
	wow.init();
//Mobile menu
	$('.hide-menu').click(function() {
		$(this).toggleClass('active-menu');
	});

	$('.hide-menu').click(function() {
		$('.menubar').toggleClass('menubar-mobile')
	});

	$('.hide-menu').click(function() {
		$('.mainmenu').toggleClass('mainmenu-hide')
	});
	$('.mainmenuli').click(function(){
		$('.menubar').addClass('menubar-mobile')
	});

//Window resize
	$(window).resize(function () { 
		var widthMenu = $('body').innerWidth()
		if (widthMenu < 722) {
   			 $('.mainmenu').addClass('mainmenu-hide');
   			}
   		else
   			$('.mainmenu').removeClass('mainmenu-hide');
	});

	//Scrolling		   
	$('ul.mainmenu a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('ul.mainmenu li').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-200;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});

	//ScrollLink
	$('.header-button-area').click(function() {
		var targetOffset = $('section.portfolio').offset().top-105;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});


	$('.button-to-contact').click(function() {
		var targetOffset = $('section.contact').offset().top -105;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});

	$('.scroll-button').click(function() {
		var targetOffset = $('section.about').offset().top -105;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});


});