$(document).ready(function() { 

// Select run
	  $('select').niceSelect();
//Window resize
	$(window).resize(function () { 
		var widthMenu = $('body').innerWidth()
		if (widthMenu < 770) {
   			 $('.main-menu').addClass('mainmenu-hide');
   			}
   		else
   			$('.main-menu').removeClass('mainmenu-hide');
	});

// Mobile menu
	$('.hide-menu').click(function() {
		$(this).toggleClass('active-menu');
	});

	$('.hide-menu').click(function() {
		$('.menubar').toggleClass('menubar-mobile')
	});
	$('.hide-menu').click(function() {
		$('.main-menu').toggleClass('show-menu')
	});

	$('.hide-menu').click(function() {
		$('.mainmenu').toggleClass('mainmenu-hide')
	});
	$('.mainmenuli').click(function(){
		$('.menubar').addClass('menubar-mobile')
	});
});
