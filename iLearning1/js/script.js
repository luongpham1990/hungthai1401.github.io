$(document).ready(function() {
	$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.navbar-laptop').css('display', 'none');
        } else {
            $('.navbar-laptop').css('display', 'block');
            $('.navbar-laptop').addClass('animated').addClass('fadeInDown');
        };
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
	$('.btn-result').click(function() {
		var target = $('#live_update')[0].contentWindow.document;
		target.open();
		target.close();

		var html = fetchHtml();
		var css = fetchCss();
		var js = fetchJs();

		$('body', target).append(html);
		$('head', target).append('<style>' + css + '</style>');
		$('head', target).append('<script>' + js + '</script>');
	});
	$('.btn-reset').click(function() {
		$('.html-input').val('');
		$('.css-input').val('');
		$('.js-input').val('');
	});

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
		flag = $(this).attr('id');
	});
	$.correctAns = function(dapAn) {
		if(dapAn == arrQues[count - 1].result) {
			result = true;
			score += 1;
		} else {
			result = false;
		}
		return score;
	}
	$('.btn-check-quiz').click(function() {
		score = $.correctAns(flag);
		$.resetChecked();
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

	// Load Lecture
	var lecture1 = {
		title: "Tổng quan về HTML",
		lesson1: "Ứng dụng HTML đầu tiên",
		lesson2: "Heading, Paragraph & Special characters",
		lesson3: "Các thẻ format text",
		lesson4: "BT: Tạo trang HTML đầu tiên"
	};
	var lecture2 = {
		title: "Tổng quan về CSS",
		lesson1: "CSS và cách sử dụng trên trang HTML",
		lesson2: "CSS syntax",
		lesson3: "CSS Selectors",
		lesson4: "Styling text",
		lesson5: "Hướng dẫn sử dụng Chrome Developer Tools",
		lesson6: "Thực hành selectors"
	};
	var lecture3 = {
		title: "Image & Link",
		lesson1: "Chèn ảnh vào trang web",
		lesson2: "Các loại đường dẫn",
		lesson3: "Styling image",
		lesson4: "Chèn link vào trang web",
		lesson5: "Pseudo Class",
		lesson6: "Pseudo Element",
		lesson4: "BT: Thực hành Link + Image"
	};
	var lecture4 = {
		title: "Cross browser compatibility",
		lesson1: "Cross Browser compatibility phần 1",
		lesson2: "Cross Browser compatibility phần 2"
	};
	var lecture5 = {
		title: "Photoshop cơ bản",
		lesson1: "Làm quen với Photoshop",
		lesson2: "Hướng dẫn một số công cụ cơ bản",
		lesson3: "Cắt ghép ảnh trong Photoshop"
	};
	var lecture6 = {
		title: "CSS positioning",
		lesson1: "Div, span và thuộc tính Float",
		lesson2: "Sizing - Tinh chỉnh kích thước",
		lesson3: "BT: Tạo trang Image Gallery",
		lesson4: "Thuộc tính Display",
		lesson5: "Thuộc tính Position"
	};
	var lecture7 = {
		title: "CSS3 effect qua ví dụ",
		lesson1: "Transition & Opacity",
		lesson2: "Transform, Overflow & Box Shadow",
		lesson3: "Animation",
		lesson4: "BT: Tạo thiệp chúc mừng online"
	};
	var lecture8 = {
		title: "List trong HTML",
		lesson1: "Các loại List",
		lesson2: "Styling List",
		lesson3: "BT: Ứng dụng menu đa cấp vào trang web"
	};
	var lecture9 = {
		title: "Javascript cơ bản",
		lesson1: "Javascript và cách sử dụng trên trang HTML",
		lesson2: "Biến, kiểu dữ liệu phần 1",
		lesson3: "Biến, kiểu dữ liệu phần 2",
		lesson4: "Function",
		lesson5: "Vòng lặp",
		lesson6: "Điều kiện, rẽ nhánh phần 1",
		lesson7: "Điều kiện, rẽ nhánh phần 2",
		lesson8: "BT vẽ hình"
	};
	var lecture10 = {
		title: "Javascript HTML DOM",
		lesson1: "Document Object Model",
		lesson2: "DOM event",
		lesson3: "Animation",
	};
	var lecture11 = {
		title: "jQuery qua ví dụ game Memory Card",
		lesson1: "jQuery",
		lesson2: "BT: Memory card 1",
		lesson3: "BT: Memory card 2",
		lesson4: "BT: Memory card 3",
	};
	var lecture12 = {
		title: "Fonts",
		lesson1: "Web fonts",
		lesson2: "Thư viện Font Awesome"
	};
	var lecture13 = {
		title: "Form",
		lesson1: "Login form",
		lesson2: "Register form",
		lesson3: "Validate form"
	};
	var lecture14 = {
		title: "Table",
		lesson1: "Table",
		lesson2: "BT: Tạo bảng dữ liệu, sắp xếp dữ liệu"
	};
	var lecture15 = {
		title: "Tối ưu trang web",
		lesson1: "HTML5 layout",
		lesson2: "Search Engine Optimization"
	};
	var lecture16 = {
		title: "Responsive web design",
		lesson1: "Media query",
		lesson2: "Giới thiệu Bootstrap",
		lesson3: "Bootstrap và Grid layout",
		lesson4: "Bootstrap Javascript",
		lesson5: "BT: Responsive web"
	};
	var lecture17 = {
		title: "Ứng dụng Kanban Board",
		lesson1: "Web application",
		lesson2: "Mockup giao diện ứng dụng",
		lesson3: "Tạo khung layout",
		lesson4: "Tính năng Thêm mới công việc",
		lesson5: "Tính năng Xóa công việc",
		lesson6: "HTML5 Local Storage",
		lesson7: "Xử lý, lưu trữ dữ liệu phần 1",
		lesson8: "Xử lý, lưu trữ dữ liệu phần 2",
		lesson9: "Xử lý, lưu trữ dữ liệu phần 3"
	};
	var lecture18 = {
		title: "Cắt HTML, CSS từ file PSD",
		lesson1: "Cắt HTML, CSS từ file PSD phần 1",
		lesson2: "Cắt HTML, CSS từ file PSD phần 2",
		lesson3: "BT: Cắt HTML, CSS từ file PSD"
	};
	var arrLecture = [lecture1, lecture2, lecture3, lecture4, lecture5, lecture6, lecture7, lecture8, lecture9, lecture10, lecture11, lecture12, lecture13, lecture14, lecture15, lecture16, lecture17, lecture18];
	for(var i = 1; i < arrLecture.length; i++ ) {
		var html1 = '<div class="panel panel-default"> <div class="panel-heading" role="tab" id="headingOne"> <h4 class="panel-title"> <a role="button" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> ' + arrLecture[i].title + ' </a> </h4> </div> <div id="collapseOne" role="tabpanel" aria-labelledby="headingOne"> <div class="panel-body"> <ul>';
		var html3 = '</ul> </div> </div> </div>';
		var lecture = Object.keys(arrLecture[i]);
		var html2 = '';
		for(var j = 1; j < lecture.length; j++) {
			var lesson = 'lesson' + j;
			html2 += '<li> <a href="#"> <div class="row"> <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9"> <i class="fa fa-circle" aria-hidden="true"></i> <span>' + arrLecture[i][lesson] + '</span> </div> <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-right"> <span>02:33</span> </div> </div> </a> </li>';
		}
		var html = html1 + html2 + html3;
		$('#lectures_list #accordion').append(html);
	}

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
});
