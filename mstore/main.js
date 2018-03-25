const menuBtn = document.querySelector('.hide-menu');
const headerNav = document.querySelector('.header-nav');

menuBtn.addEventListener('click', function() {
	headerNav.classList.toggle('header-nav-mobile'),
	menuBtn.classList.toggle('hide-menu-active');
})
