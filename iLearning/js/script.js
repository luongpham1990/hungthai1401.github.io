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
	$("#top-course").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items : 4,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
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

	$('#btn-rc').click(function() {
		$(this).css('display', 'none');
		$('.redeem-field').css('display', 'block');
		$('.btn-redeem').css('display', 'block');
		return false;
	});
	if($('#couponCode').val('abc30')) {
		$('.btn-redeem').click(function() {
			$('.redeem-field').css('display', 'none');
			$('.btn-redeem').css('display', 'none');
			$('.redeem-submitted-left').css('display', 'block');
			$('.redeem-submitted-right').css('display', 'block');
			var totalCost;
			totalCost = (parseFloat($('.original-price-right span.course-price').text())*1000000 + parseFloat($('.redeem-submitted-right span.course-price').text()*1000))/1000000;
			totalCost = String(totalCost).concat('.000.000');
			$('.cost-total-right span.course-price').text(totalCost);
			$('.payment-mobilecard-content span.course-price').text(totalCost)
		});
	}
	$('.payment-mobilecard-checkout button.btn-checkout').click(function() {
		var totalCost;
		totalCost = (parseFloat($('.payment-mobilecard-content span.course-price').text())*1000000 - parseFloat($('#mobileValue').val())*1000)/1000000;
		totalCost = String(totalCost).concat('.000.000');	
		$('#mobileValue').val(1);
		$('#cardNumber').val('');
		$('#cardSeri').val('');
		$('.payment-mobilecard-content span.course-price').text(totalCost);
		return false;
	});
	$('#full-right-content').click(function() {
		$('.course-detail-container').toggleClass('full');
		$('.course-detail-right').toggleClass('show-mobile');
	});
	$('#full-right-content-mobile').click(function() {
		$('.course-detail-right').toggleClass('show-mobile');
		$('.course-detail-container').toggleClass('full');
	});
	$('#my-profile').click(function() {
		$('.my-profile').addClass('full');
		$('.my-profile-right').addClass('show-mobile');
		$('.btn-exit').removeClass('hide-laptop');
	});
	$('.btn-exit').click(function() {
		$('.my-profile').removeClass('full');
		$('.my-profile-right').removeClass('show-mobile');
		$('.btn-exit').addClass('hide-laptop');
	});

	$('#input-cm').click(function() {
		$('#input-cm').attr('rows', '3');
		$('.discussion-btn').css('display', 'block');
	});
	$('.btn-later').click(function() {
		$('.discussion-btn').css('display', 'none');
		$('#input-cm').attr('rows', '1');
	});

	var listId = 0;
	var date = new Date();
	var dateString = null;
	month = date.getMonth() + 1;
	dateString = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + date.getDate() + "/" + month + "/" + date.getFullYear();

	$('.add-note').click(function() {
		$('.save-note').css('display', 'block');
		$('.btn-save-note').click(function() {
			if ($('#input-note').val() !== '') {
				addNote($('#input-note').val());
				$('.my-note').trigger('reset');
				$('.save-note').css('display', 'none');
			}
		});
		listId++;
	});
	addNote("Hyper Text Markup Language");
	addNote("Cascading Style Sheets");
	addNote("Javascript");
	addNote("Jquery");
	$('.btn-exit-note').click(function() {
		$('.save-note').css('display', 'none');
	});
	function addNote(text) {
		$('#note-list').append('\n<li data-id="' + listId + '" class="list-group-item"><div class="note-content"><span>' + text + '</span></div><div class="note-date"><span>' + dateString +'</span></div><i class="fa fa-trash remove-note" aria-hidden="true"></i></li>');
	}
	$('#note-list').on('click', 'li', function() {
		var idList = $(this).data('id');
		$('#note-list li.selected').removeClass('selected');
		$(this).addClass('selected');
		$('.remove-note').click(function() {
			var id = $('#note-list li.selected').data('id');
			if(idList == id) {
				$('#note-list li.selected').fadeOut('slow', function() {
					$(this).remove();
				});
			}
		});
		$('#edit-note').val(contentNote);
	});

	var price = $('.btn-bn');
	if (price.length) {
		var priceOffset = price.offset().top;
	}
	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		if (scrollPosition >= priceOffset) {
			$('.fixed-price-box').removeClass('hide');
			$('.fixed-price-box').addClass('animated fadeInUp');
		} else {
			$('.fixed-price-box').addClass('hide');
		}
	});

	// Navbar fixed Courses

	var menu = $('.top-menu');
	if (menu.length) {
		var menuOffset = menu.offset().top;
	}
	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		if (scrollPosition >= menuOffset) {
			$('.top-menu').addClass('navbar-fixed-top top-menu-bg');
		} else {
			$('.top-menu').removeClass('navbar-fixed-top top-menu-bg');
		}
	});

});
