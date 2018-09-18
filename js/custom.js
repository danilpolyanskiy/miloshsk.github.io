$(document).ready(function() { 
//Mobile menu
	$('.header-burger').click(function() {
		$(this).toggleClass('header-burger-active'),
		$('.header-menu__list').toggleClass('header-menu__list-mobile')
	});

	$('.header-menu__link').click(function() {
		$('.header-menu__list').toggleClass('header-menu__list-mobile'),
		$('.header-burger').toggleClass('header-burger-active')
	});
	//Scrolling		   
	$('.header-menu__link').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('.header-menu__link').removeClass('active');
				$(this).parent('.header-menu__link').addClass('active');
				var targetOffset = $target.offset().top-100;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
	//ScrollLink
	$('.header-scroll-button').click(function() {
		var targetOffset = $('section.portfolio').offset().top-105;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});
	// Form
	$(".contact-form").submit(function(e) {
	    e.preventDefault();
	    $(this)
	      .find(".contact-form-item")
	      .each(function() {
	        var _this = this;

	        if ($(this).val() == "") {
	          $(this).addClass("contact-form__item-error");
	          setTimeout(function() {
	            $(_this).removeClass("contact-form__item-error");
	          }, 2500);
	        }
	      });
	    if ($(this).find(".contact-form__item-error").length === 0) {
	      $(this)
	        .children()
	        .hide();
      $(this).append($("<p>Отправлено</p>").addClass("success-message"));
    }
  });
	//Tabs
	$('.portfolio-tabs__item').click(function() {
		var tabid = $(this).attr('data-tab');
		$('.portfolio-tabs').find('.portfolio-tabs__item').removeClass('portfolio-tabs__item-active');
		$('.portfolio-list').removeClass('portfolio-list__active');
		$(this).addClass('portfolio-tabs__item-active');
		$('#'+tabid).addClass('portfolio-list__active');

	})
	//Portfolio overlay
	$('.overlay-button').click(function() {
		$(this).toggleClass('overlay-button-active');
		$(this).siblings('.overlay').toggleClass('overlay-active');
	})
});