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
    $('.hidden').hide();
    $('.load-more').click(function(e) {
        $('#load-icon').toggleClass('arrow-toggle');
        $('.hidden').slideToggle();
    })
    //Scroll
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $('#scroll-btn').css('opacity', '1');
        } else {
            $('#scroll-btn').css('opacity', '0');
        }
    });
    $('#scroll-btn').click(function() {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
	
