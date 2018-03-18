$(document).ready(function(){
    $('.slider').slick({
    	infinite: true,
    	arrows: false,
        slidesToShow: 4,
        dots: true,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: false
                }
            }
        ]
	});
    
    $('.hide-menu').click(function() {
        $(this).toggleClass('active-menu'),
        $('.header-menu').toggleClass('active-menu')
    });
});
	
