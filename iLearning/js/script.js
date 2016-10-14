$(document).ready(function() {
	$('.menu-mobile').click(function() {
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

	// HTML, CSS Editor
	function fetchHtml() {
		var html = $('.html-input').val();
		return html;
	}
	function fetchCss() {
		var css = $('.css-input').val();
		return css;
	}
	function fetchJs() {
		var js = $('.js-input').val();
		return js;
	}
	$('.innerbox').on("keyup", function() {
		var target = $('#live_update')[0].contentWindow.document;
		target.open();
		target.close();

		var html = fetchHtml();
		var css = fetchCss();
		var js = fetchJs();

		$('body', target).append(html);
		$('head', target).append('<style>' + css + '</style>');
		$('head', target).append('<script>' + js + '</script>');
	})

	// Quiz
	var question1 = {
		question: "Một thẻ trong HTML được bao bọc bởi cặp ký tự nào?",
		ans1: "< và >",
		ans2: "( và )",
		ans3: "? và !",
		ans4: "! và !",
		result: "ans1"
	};

	var question2 = {
		question: "HTML là viết tắt của cụm từ nào?",
		ans1: "Hyper Tool Markup Language",
		ans2: "Holistic Technical Method Library",
		ans3: "Home Tool Markup Language",
		ans4: "Hyper Text Markup Language",
		result: "ans4"
	};

	var question3 = {
		question: "Ký tự nào luôn có mặt trong thẻ đóng của element?",
		ans1: "+",
		ans2: "-",
		ans3: "*",
		ans4: "/",
		result: "ans4"
	};

	var question4 = {
		question: "Thẻ nào tạo ra tiêu đề lớn nhất?",
		ans1: "&lt;p&gt;",
		ans2: "&lt;h1&gt;",
		ans3: "&lt;h2&gt;",
		ans4: "&lt;h3&gt;",
		result: "ans2"
	};

	var question5 = {
		question: "CSS là viết tắt của cụm từ nào?",
		ans1: "Colorful Style Sheets",
		ans2: "Computer Style Sheets",
		ans3: "Creative Style Sheets",
		ans4: "Cascading Style Sheets",
		result: "ans4"
	};

	var arrQues = [question1, question2, question3, question4, question5];

	var flag;
	var score = 0;
	var count = 1;
	var numberClick = 0;
	var max = 4;
	var result;

	$.resetChecked = function() {
		$('.ans').each(function() {
			$(this).attr('checked', false);
		});
	}

	$('.ans').click(function() {
		$.resetChecked();
		$(this).attr('checked', true);
		$('.btn-check-quiz').removeAttr('disabled');
		var flag = $(this).attr('id');
		if(flag == arrQues[count-1].result) {
			result = true;
			score += 1;
		} else {
			result = false;
		}
	});

	$('.btn-check-quiz').click(function() {
		$('.btn-check-quiz').addClass('hidden');
		$('.btn-next-quiz').removeClass('hidden');
		$('.ans').attr('disabled', true);
		if(result == true) {
			$('#modal-quiz .modal-footer').addClass('correct');
			$('.result-correct').removeClass('hidden')
		} else {
			$('#modal-quiz .modal-footer').addClass('incorrect');
			$('.result-incorrect').removeClass('hidden')
		}
		$('#modal-quiz .progress-bar').css('width', + score * 20 + "%");
	});

	$('.btn-next-quiz').click(function() {
		$('.ans').removeAttr('disabled');
		$('.btn-check-quiz').attr('disabled', true);
		$('.btn-check-quiz').removeClass('hidden');
		$('.btn-next-quiz').addClass('hidden');
		$('#modal-quiz .modal-footer').removeClass('correct');
		$('.result-correct').addClass('hidden')
		$('#modal-quiz .modal-footer').removeClass('incorrect');
		$('.result-incorrect').addClass('hidden');
		$.resetChecked();
		numberClick++;
		if (numberClick <= max) {
			$('#ques').html(arrQues[count].question);
			$('label[for = "ans1"]').html(arrQues[count].ans1);
			$('label[for = "ans2"]').html(arrQues[count].ans2);
			$('label[for = "ans3"]').html(arrQues[count].ans3);
			$('label[for = "ans4"]').html(arrQues[count].ans4);
			if (count == max)
				$('.btn-next-quiz').html("Kết quả");
			count++;
		} else {
			if(score == arrQues.length ) {
				$('#modal-quiz .modal-body').html('<h1>Chúc mừng bạn</h1><p>Bạn đã vượt qua bài kiểm tra với số câu trả lời đúng là: ' + score + '/' + arrQues.length + '.');
				$('.btn-check-quiz').addClass('hidden');
			} else {
				$('#modal-quiz .modal-body').html('<h1>Chia buồn cùng bạn</h1><p>Bạn đã vượt qua bài kiểm tra với số câu trả lời đúng là: ' + score + '/' + arrQues.length + '.');
				$('.btn-check-quiz').addClass('hidden');
			}	
		}
	});

});