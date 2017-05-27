$(document).ready(function() { 
	$('.new-products-slider').slick({
     infinite: true,
 	   slidesToShow: 3,
  	 slidesToScroll: 3,
  	 variableWidth: true,
  	 mobileFirst: true
  });
	$('.featured-products-slider').slick({
     infinite: true,
 	   slidesToShow: 4,
  	 slidesToScroll: 4,
  	 variableWidth: true,
  	 mobileFirst: true
  });
});