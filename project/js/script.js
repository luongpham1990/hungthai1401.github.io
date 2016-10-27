$(document).ready(function() {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.navbar-laptop').css('display', 'none');
			$('.navbar-laptop').removeClass('animated fadeInDown');
			$('.scrollToTop').css('display', 'block');
		} else {
			$('.navbar-laptop').css('display', 'block');
			$('.navbar-laptop').addClass('animated fadeInDown');
			$('.scrollToTop').css('display', 'none');
		};
	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});
	
	$('.menu-sidebar').click(function() {
		$('.overflow-nav').toggleClass('nav-open');
		$('.overlay-mobile').toggleClass('overlay-mobile-show');
	});
	$('.overlay-mobile').click(function() {
		$('.overflow-nav').toggleClass('nav-open');
		$('.overlay-mobile').toggleClass('overlay-mobile-show');
	});
	$('#menu-courses').click(function() {
		$('nav.overflow-nav').toggleClass('nav-open-sub');
	});
	$('.btn-backmenu').click(function() {
		$('nav.overflow-nav').toggleClass('nav-open-sub');
	});
	$('#course-curriculum h4.panel-title a').click(function() {
		$(this).toggleClass('active');
	});

	$('.modal-toggle').click(function (e) {
		var tab = e.target.hash;
		$('li > a[href="' + tab + '"]').tab("show");
	});

	var emailReg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	var passReg = /^([a-zA-Z0-9@*#]{6,12})$/;
	var mobileReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
	$('.form-register').on('submit', function() {

		var isValid = true;

		if ($('#fullname-register').val().trim() == '') {
			$('.fullname').find('p').text('Bạn chưa nhập Họ tên!');
			isValid = false;
		} else {
			$('.fullname').find('p').text('');
			isValid = true;
		}
		if ($('#email-register').val().trim() == '') {
			$('.email').find('p').text('Bạn chưa nhập Email!');
			isValid = false;
		} else {
			if ($('#email-register').val().match(emailReg)) {
				$('.email').find('p').text('');
			} else {
				$('.email').find('p').text('Email không hợp lệ!');
				isValid = false;
			}
		}
		if ($('#password-register').val().trim() == '') {
			$('.password').find('p').text('Bạn chưa nhập Mật khẩu!');
			isValid = false;
		} else {
			if ($('#password-register').val().match(passReg)) {
				$('.password').find('p').text('');
			} else {
				$('.password').find('p').text('Mật khẩu không hợp lệ!');
				isValid = false;
			}
		}
		if ($('#confirmpass-register').val().trim() == '') {
			$('.confirmpass').find('p').text('Bạn chưa nhập Mật khẩu xác nhận!');
			isValid = false;
		} else {
			if ($('#confirmpass-register').val() === $('#password-register').val()) {
				$('.confirmpass').find('p').text('');
			} else {
				$('.confirmpass').find('p').text('Mật khẩu xác nhận không trùng Mật khẩu!');
				isValid = false;
			}
		}
		if ($('#mobile-register').val().trim() == '') {
			$('.mobile').find('p').text('Bạn chưa nhập số điện thoại!');
			isValid = false;
		} else {
			if ($('#mobile-register').val().match(mobileReg)) {
				$('.mobile').find('p').text('');
			} else {
				$('.mobile').find('p').text('Số điện thoại không hợp lệ!');
				isValid = false;
			}
		}
		return isValid;
	});

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

});
