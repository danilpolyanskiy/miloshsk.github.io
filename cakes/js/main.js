'use strict';
$(document).ready(function() {
    //SVG
    svg4everybody();
    //Slick slider activate
    $('.filling-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 350,
        cssEase: 'ease-out',
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true
            }
        }],
        nextArrow: '<button class="slider-btn filling-slider-btn-next"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#next"/></svg></button>',
        prevArrow: '<button class="slider-btn filling-slider-btn-prev"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#back"/></svg></button>'
    });
    $('.size-slider').slick({
        responsive: [{
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    cssEase: 'ease-out',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 350,
                }
            }
        ]
    })
    $('.decor-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 350,
        cssEase: 'ease-out',
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }],
        nextArrow: '<button class="slider-btn decor-slider-btn-next"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#next"/></svg></button>',
        prevArrow: '<button class="slider-btn decor-slider-btn-prev"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#back"/></svg></button>'
    });
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 350,
        arrows: true,
        dots: false,
        cssEase: 'ease-out',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }],
        nextArrow: '<button class="slider-btn reviews-slider-btn-next"><svg class="slider-icon"><use xlink:href="img/svg/symbol/sprite.svg#next"/></svg></button>',
        prevArrow: '<button class="slider-btn reviews-slider-btn-prev"><svg class="slider-icon"><use xlink:href="img/svg/symbol//sprite.svg#back"/></svg></button>'
    });

    // Main menu toggle
    $('.burger').click(function() {
        $(this).toggleClass('burger-open');
        $('.header-nav').toggleClass('header-nav-toggle');
    })

    // Get filling input value
    $('.btn-filling').click(function() {
        $('#order-form-filling').val($(this).closest('.filling-item').data('filling'));
    })

    // Get size input value
    $('.btn-size').click(function() {
        $(this).siblings('.size-item-pic').children('input[name=size]').prop('checked', true);
        $('#order-form-size').val($(this).siblings('.size-item-pic').children('input[name=size]').data('size'));
    })
    $('.size-input').change(function() {
        $('#order-form-size').val($(this).data('size'));
    })

    //Get decor input value
    $('.decor-slider-item').click(function() {
        $('#order-form-decor').val($(this).data('decor'));
    })


    function formSubmit(inputName, message) {
        var cnt = 0;
        $(this).find(inputName)
            .each(function() {
                var self = $(this);
                if ($(this).val() === '') {
                    cnt++;
                    $(this).css({
                        'border-color': '#f50049'
                    });
                    setTimeout(function() {
                        self.css({
                            'border-color': '#dddddd'
                        });
                    }, 1500);
                }
            });
        if (cnt === 0) {
            $(this).children().hide();
            $(this).append($('<p>' + message + '</p>').addClass('success-message'));
        }
    }


    $('.order-form').submit(function(e) {
        e.preventDefault();
        formSubmit.call($(this), '.order-form-input', 'Ваша заявка отправлена');
    })

    $('.contacts-form').submit(function(e) {
        e.preventDefault();
        formSubmit.call($(this), '.contacts-form-input', 'Ваша сообщение отправлено');
    });

    //Scrolling menu    
    $('ul.page-nav-menu a').click(function() {
        if ($('.burger').hasClass('burger-open')) {
            $('.burger').removeClass('burger-open');
        };
        if ($('.header-nav').hasClass('header-nav-toggle')) {
            $('.header-nav').removeClass('header-nav-toggle');
        };
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[id=' + this.hash.slice(1) + ']');
            if ($target.length) {
                $('ul.page-nav-menu li').removeClass('active');
                $(this).parent('li').addClass('active');
                var targetOffset = $target.offset().top - 100;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, 1000);
                return false;
            }
        }
    });

    //Scrolling page
    $(window).scroll(function() {
        if ($(this).scrollTop() > 750) {
            $('.header-line-wrapper').addClass('header-line-scrolled');
            $('.header-line-wrapper').css({
                'background-color': '#fff'
            });
        } else {
            $('.header-line-wrapper').removeClass('header-line-scrolled');
            $('.header-line-wrapper').css({
                'background-color': 'inherit'
            });
        }
    });

    // Logo
    $('.header-logo').click(function(e) {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    })
});