$(document).ready(function() { 
//Mobile menu
	$('.hide-menu').click(function() {
		$(this).toggleClass('active-menu'),
		$('.menubar').toggleClass('menubar-mobile')
	});

	$('.mainmenu-link').click(function() {
		$('.menubar').toggleClass('menubar-mobile'),
		$('.hide-menu').toggleClass('active-menu')
	});
	//Scrolling		   
	$('ul.mainmenu a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
			if ($target.length) {
				$('ul.mainmenu li').removeClass('active');
				$(this).parent('li').addClass('active');
				var targetOffset = $target.offset().top-100;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
	//Scroll top
	 $('#home').click(function () {
        $('body,html').animate({
           scrollTop: 0
        }, 800);
        return false;
       });
	//ScrollLink
	$('.header-button-area').click(function() {
		var targetOffset = $('section.portfolio').offset().top-105;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});
	// Form

	$('.contact-form').submit(function(e) {
		e.preventDefault();
		$(this).find('.contact-form-item').each(function() {
			if($(this).val() == '') {
				$(this).addClass('empty');
				setTimeout(() => {
					$(this).removeClass('empty')
				}, 2500)
			}
		});
		if($(this).find('.empty').length === 0 ) {
			$(this).children().hide();
			$(this).append($('<div>Отправлено</div>').addClass('message'));
		};
	});
	//Tabs
	$('.tabs-btn').click(function() {
		var tabid = $(this).attr('data-tab');
		$('.tabs-btns-wrapper').find('.tabs-btn').removeClass('active-tab-btn');
		$('.tabs-items-wrapper').removeClass('active-tab');
		$(this).addClass('active-tab-btn');
		$('#'+tabid).addClass('active-tab');

	})

});