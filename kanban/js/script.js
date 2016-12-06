$(function() {
	$( ".sorted-list" ).sortable({
		connectWith: ".sorted-list"
	}).disableSelection();
});