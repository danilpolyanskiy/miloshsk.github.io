const menuBtn = document.querySelector('.hide-menu');
const headerNav = document.querySelector('.header-nav');

menuBtn.addEventListener('click', function() {
	headerNav.classList.toggle('header-nav-mobile'),
	menuBtn.classList.toggle('hide-menu-active');
})

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled >= 115){
  	headerNav.style.top = 0 + 'px';
  } else if (scrolled <= 115) {
  	headerNav.style.top = 115 - scrolled + 'px';
  }
}