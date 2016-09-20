$(document).ready(function() {

	$('.clear').click(function() {
		$('#screen').html("");
	});

	$('.number').click(function() {
		var keys = $(this).val();
		$('#screen').html($('#screen').html() + keys);
	});

	$('.operator').click(function() {
		var operators = $(this).val();
		$('#screen').html($('#screen').html() + operators);
	});

	$('.period').click(function() {
		$('#screen').html($('#screen').html() + ".");
	});

	$('.eval').click(function() {
		$('#screen').html(eval($('#screen').html()));
	});

	$('.can').click(function() {
		$('#screen').html(Math.sqrt(parseFloat($('#screen').html())))
	});

	$('.giaithua').click(function() {
		var screen = $('#screen').html();
		var x = parseFloat(screen);
		var giaithua = 1;
		for (var i = 1; i <= x; i ++) {
			giaithua *= i;
		}
		$('#screen').html(giaithua);
	});

	$('.binhphuong').click(function() {
		var screen = $('#screen').html();
		var binhphuong = parseFloat(screen);
		binhphuong *= binhphuong;
		$('#screen').html(binhphuong);
	});

	// Change Theme

	$('#changebg').click(function() {
		var x = Math.floor(Math.random()*10);
		var url = "url(images/" + x + ".jpg)";
		$('body').css('background-image', url);
});
});

