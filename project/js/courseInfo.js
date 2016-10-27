$(document).ready(function() {
	var priceOffset = $('.btn-bn').offset().top;
	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		if (scrollPosition >= priceOffset) {
			$('.fixed-price-box').removeClass('hide');
			$('.fixed-price-box').addClass('animated fadeInUp');
		} else {
			$('.fixed-price-box').addClass('hide');
		}
	});

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
});