$(document).ready(function() {
	// HTML, CSS Editor
	var htmlInput = CodeMirror.fromTextArea(document.getElementById('input-html'), {
		mode: "text/html",
		theme: "zenburn",
		profile: 'xhtml',
		lineNumbers: true,
		lineWrapping: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		autoCloseBrackets: true,
		autoCloseTags: true,
		autoRefresh: true
	});
	emmetCodeMirror(htmlInput, {
		'Tab': 'emmet.expand_abbreviation_with_tab',
		'Cmd-Alt-B': 'emmet.balance_outward'
	});
	var cssInput = CodeMirror.fromTextArea(document.getElementById('input-css'), {
		mode: "css",
		theme: "zenburn",
		lineNumbers: true,
		lineWrapping: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		autoCloseBrackets: true,
		autoCloseTags: true,
		autoRefresh: true
	});
	var jsInput = CodeMirror.fromTextArea(document.getElementById('input-js'), {
		mode: "javascript",
		theme: "zenburn",
		lineNumbers: true,
		lineWrapping: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		autoCloseBrackets: true,
		autoCloseTags: true,
		autoRefresh: true
	});
	$('.hideAfterRendering').each( function () {
		$(this).removeClass('active')
	});
	$('.btn-result').click(function() {
		var target = $('#live_update')[0].contentWindow.document;
		target.open();
		target.close();
		$('body', target).append(htmlInput.getValue());
		$('head', target).append('<style>' + cssInput.getValue() + '</style>');
		$('head', target).append('<script>' + jsInput.getValue() + '</script>');
	});
	$('.btn-reset').click(function() {
		htmlInput.setValue('');
		cssInput.setValue('');
		jsInput.setValue('');
	});
	function save(code) {
		var b = new Blob([code]);
		saveAs(b, "untitled.html");
	}
	$('.btn-download').click(function() {
		var download = '<!DOCTYPE html><html lang="en"> <head><meta charset="UTF-8"> <style>' + cssInput.getValue() + '</style> <script>' + jsInput.getValue() + '</script> </head> <body>' + htmlInput.getValue() + '</body> </html>';
		save(download);
	});
});