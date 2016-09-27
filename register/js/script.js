var arr = [];
var arrInfo= [];

var userReg = /^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
var passReg = /^([a-zA-Z0-9@*#]{8,15})$/;
var emailReg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var fbReg = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
var mobileReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;

function getInfo() {
	var url = location.search;
	url = decodeURIComponent(url);
	url = url.slice(1, url.length);
	arr = url.split('&');
	for (var i = 0; i < arr.length; i++) {
		arrInfo.push(arr[i].split('='));
	}
	for (var i = 0; i < arrInfo.length; i++) {
		$('.info').append('<label>' + arrInfo[i][0] + '<span>:</span></label><p id="info">' + arrInfo[i][1] + '</p>');
	}
}

$(document).ready(function() {

	$('form').on('submit', function() {

		var isValid = true;

		if ($('#username').val().trim() == '') {
			$('#username').next('strong').text('Username is empty!');
			isValid = false;
		} else {
			if ($('#username').val().match(userReg)) {
				$('#username').next('strong').text('');
			} else {
				$('#username').next('strong').text('Username is invalid!');
				isValid = false;
			}
		}

		if ($('#password').val().trim() == '') {
			$('#password').next('strong').text('Password is empty!');
			isValid = false;
		} else {
			if ($('#password').val().match(passReg)) {
				$('#password').next('strong').text('');
			} else {
				$('#password').next('strong').text('Password is invalid!');
				isValid = false;
			}
		}

		if ($('#confirm').val().trim() == '') {
			$('#confirm').next('strong').text('Confirm Password is empty!');
			isValid = false;
		} else {
			if ($('#confirm').val() === $('#password').val()) {
				$('#confirm').next('strong').text('');
			} else {
				$('#confirm').next('strong').text('Confirm must match Password!');
				isValid = false;
			}
		}

		if ($('#email').val().trim() == '') {
			$('#email').next('strong').text('Email is empty!');
			isValid = false;
		} else {
			if ($('#email').val().match(emailReg)) {
				$('#email').next('strong').text('');
			} else {
				$('#email').next('strong').text('Email is invalid!');
				isValid = false;
			}
		}

		if ($('#fb').val().trim() == "") {
			$('#fb').next('strong').text('Facebook is empty!');
			isValid = false;
		} else {
			if ($('#fb').val().match(fbReg)) {
				isValid = true;
			} else {
				$('#fb').next('strong').text('Facebook is invalid!');
				isValid = false;
			}
		}

		if ($('#mobile').val().trim() == '') {
			$('#mobile').next('strong').text('Mobile is empty!');
			isValid = false;
		} else {
			if ($('#mobile').val().match(mobileReg)) {
				$('#mobile').next('strong').text('');
			} else {
				$('#mobile').next('strong').text('Mobile is invalid!');
				isValid = false;
			}
		}

		return isValid;
	}); 

	getInfo();

});