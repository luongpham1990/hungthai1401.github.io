$(document).ready(function() {
	var htmInput = CodeMirror.fromTextArea(document.getElementById('input-html'), {
		mode: "text/html",
		theme: "zenburn",
		lineNumbers: true,
		lineWrapping: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		autoCloseBrackets: true,
		autoCloseTags: true
	});
});