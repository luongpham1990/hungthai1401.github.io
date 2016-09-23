var question1 = {
	question: "Cocacola là hãng gì?",
	ans1: "Nước rửa bát",
	ans2: "Nước giải khát",
	ans3: "Sữa",
	result: "ans2"
};

var question2 = {
	question: "Hà Nội thuộc miền nào?",
	ans1: "Miền Bắc",
	ans2: "Miền Trung",
	ans3: "Miền Nam",
	result: "ans1"
};

var question3 = {
	question: "Sơn Tùng MTP là ai?",
	ans1: "Đạo sĩ",
	ans2: "Bác sĩ",
	ans3: "Y sĩ",
	result: "ans1"
};

var question4 = {
	question: "Cr7 chơi môn thể thao nào?",
	ans1: "Bóng chuyền",
	ans2: "Bóng rổ",
	ans3: "Bóng đá",
	result: "ans3"
};

var question5 = {
	question: "Việt Nam có bao nhiêu mùa?",
	ans1: "4",
	ans2: "2",
	ans3: "3",
	result: "ans1"
};

var question6 = {
	question: "Năm nhuận có bao nhiêu ngày?",
	ans1: "366",
	ans2: "364",
	ans3: "365",
	result: "ans1"
};

var question7 = {
	question: "T2 năm nhuận có bao nhiêu ngày?",
	ans1: "28",
	ans2: "29",
	ans3: "30",
	result: "ans2"
};

var question8 = {
	question: "Một ngày có bao nhiêu giờ?",
	ans1: "24",
	ans2: "22",
	ans3: "23",
	result: "ans1"
};

var question9 = {
	question: "Một giờ có bao nhiêu phút?",
	ans1: "60",
	ans2: "58",
	ans3: "59",
	result: "ans1"
};

var question10 = {
	question: "Một phút có bao nhiêu giây?",
	ans1: "60",
	ans2: "61",
	ans3: "62",
	result: "ans1"
};

var arrQues = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

var flag;
var score = 0;
var count = 1;
var lastScore = 0;
var numberClick = 0;
var max = 9;
var answer = document.querySelectorAll(".answer span");

function start() {
	window.location.href = "quiz.html";
}

function resetColor() {
	for (var i = 0; i < answer.length; i++) {
		answer[i].style.backgroundColor = "#cccccc";
	}
}

function changeColor(button) {
		resetColor();
		button.style.backgroundColor = "#f1ff92";
		flag = button.id;
}

function correctAns(dapAn) {
	if (dapAn == arrQues[count - 1].result) {
		score += 1;
	}
	return score;
}

function nextQuestion() {
	lastScore = correctAns(flag);
	resetColor();
	numberClick++;
	if (numberClick <= max) {
		document.getElementById("ques").innerHTML = arrQues[count].question;
		document.getElementById("ans1").innerHTML = arrQues[count].ans1;
		document.getElementById("ans2").innerHTML = arrQues[count].ans2;
		document.getElementById("ans3").innerHTML = arrQues[count].ans3;

		if(count == max)
			document.getElementById("next").innerHTML = "Kết quả";
		count++;
	} else {
		if (lastScore == arrQues.length) {
			window.location.href = "win.html";
		} else {
			window.location.href = "lose.html";
		}
	}
}

function backToStart() {
	window.location.href = "index.html";
}