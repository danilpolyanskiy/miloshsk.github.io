$(document).ready(function(){
	svg4everybody();
	//Slick slider
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:
		 `<button class="btn-slider arrow-prev">
					<svg class="arrow-prev__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrowprev" />
					</svg>
			</button>`,
		nextArrow: `
			<button class="btn-slider arrow-next">
					<svg class="arrow-next__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrownext" />
					</svg>
			</button>`,
		fade: true,
		infinite: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: false,
		dots: false,
		variableWidth: true,
		infinite: true,
		focusOnSelect: true
	});
	$('.residents__list').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		variableWidth: true,
		infinite: true
	});
	$('.investments__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		prevArrow:
		 `<button class="btn-slider arrow-prev">
					<svg class="arrow-prev__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrowprev" />
					</svg>
			</button>`,
		nextArrow: `
			<button class="btn-slider arrow-next">
					<svg class="arrow-next__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrownext" />
					</svg>
			</button>`,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.news__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		prevArrow:
		 `<button class="btn-slider arrow-prev">
					<svg class="arrow-prev__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrowprev" />
					</svg>
			</button>`,
		nextArrow: `
			<button class="btn-slider arrow-next">
					<svg class="arrow-next__icon arrow-icon">
						<use xlink:href="img/svg/symbol//sprite.svg#arrownext" />
					</svg>
			</button>`,
	});
	// Button down click
	$('.btn-scroll-down').on('click', function() {
		var nextSection = $(this).closest("section").next();
		$('html, body').animate({
			scrollTop: nextSection.offset().top
		}, 1000);
	});
	//Form validate

	// Form label animate
	var inputList = $('.contacts__form-input');
	inputList.on('focus', function() {
		$(this).next().addClass('label-active');
	});
	inputList.on('blur', function() {
		if(!$(this).val()) {
			$(this).next().removeClass('label-active');
		}
	});
	// Form validate
	$('.contacts__form').on('submit', function(e) {
		e.preventDefault();
		var validFields = 0;
		var formInputs = $('.contacts__form-input');
		formInputs.each(function(i, el) {
			if(el.value) {
				validFields++;
			}
		});
		if(validFields < formInputs.length) {
			$('.contacts__form-content').show();
			$('.contacts__form-success').hide();
		}else {
			$('.contacts__form-content').hide();
			$('.contacts__form-success').show();
		}
	});

	//Show scroll button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
			$('.btn-scroll-up').show();

		} else if (document.body.scrollTop < 750 || document.documentElement.scrollTop < 750) {
			$('.btn-scroll-up').hide();

		}
	}
	// Scroll to top
	$('.btn-scroll-up, .page__logo-link').on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});

	//Burger and menu animation
	$('.burger').on('click', function() {
		$('.menu').toggleClass('menu-active');
		$(this).toggleClass('burger-active');
	});
	$('.menu__link').click(function() {
		if($('.burger').hasClass('burger-active')) {
			$('.burger').removeClass('burger-active');
		}
		if($('.menu').hasClass('menu-active')) {
			$('.menu').removeClass('menu-active');
		}
	});

	//Menu links click scroll
	$('.menu__link').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('.menu__link').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-0;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
});

