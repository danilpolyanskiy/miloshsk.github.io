$(document).ready(function(){
    $('.hide-menu').click(function() {
        $(this).toggleClass('active-menu'),
        $('.header-menu').toggleClass('header-menu-show')
    })
});