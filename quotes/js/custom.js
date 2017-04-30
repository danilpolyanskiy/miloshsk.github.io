$(document).ready(function() { 
	// Mobile menu
	$('.hide-menu').click(function(){
 	 	$(this).toggleClass('active-menu');
	});
	$('.hide-menu').click(function(){
 	 	$('.overlay').toggleClass('overlay-show');
	})
	$('.overlay').click(function(){
 	 	$(this).toggleClass('overlay-show');
	})
	$('.overlay').click(function(){
 	 	$('.hide-menu').toggleClass('active-menu');
	})
	// Slider	
	 $('.slider').slick({
	 	 dots: true
  });
});