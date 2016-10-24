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

	$('.add-note').click(function() {
		$('.save-note').css('display', 'block');
		$('.btn-save-note').click(function() {
			if ($('#input-note').val() !== '') {
				addNote($('#input-note').val());
				$('.my-note').trigger('reset');
				$('.save-note').css('display', 'none');
			}
		});
	});
	addNote("First note!");
	addNote("Learning to code is hard, but coding is awesome.");
	addNote("Next step will be adding a bit more functionalities while keeping the app simple. Keep in mind this is just an exercise.");
	addNote("I expect nobody to see this, but if you have tips/suggestions please let me know.");
	$('.btn-exit-note').click(function() {
		$('.save-note').css('display', 'none');
	});
	function addNote(text) {
		$('#note-list').append('\n<li class="list-group-item"><span>' + text + '</span><i class="fa fa-trash remove-note" aria-hidden="true"></i></li>');
	}
	$('.remove-note').click(function() {
		$('.list-group-item').fadeOut('slow', function() {
			$(this).remove();
		});
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
