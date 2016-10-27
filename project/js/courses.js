$(document).ready(function() {
	// Navbar fixed Courses
	var menuOffset = $('.top-menu').offset().top;
	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		if (scrollPosition >= menuOffset) {
			$('.top-menu').addClass('navbar-fixed-top top-menu-bg');
		} else {
			$('.top-menu').removeClass('navbar-fixed-top top-menu-bg');
		}
	});
});