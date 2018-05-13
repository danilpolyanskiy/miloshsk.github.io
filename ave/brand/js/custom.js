$(document).ready(function(){
    $('.hide-menu').click(function() {
        $(this).toggleClass('active-menu'),
        $('.header-nav').toggleClass('header-nav-show')
    });
   });
 