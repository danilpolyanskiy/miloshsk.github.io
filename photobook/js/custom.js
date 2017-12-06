$(document).ready(function() { 
// // Animate 
//     wow = new WOW( {
//       mobile: false
//     } )
//     wow.init();
//Mobile menu
	$('.header-menu-button').click(function() {
		$(this).toggleClass('active'),
		$('.header-nav-list').toggleClass('active-menu')
	});
	
});
