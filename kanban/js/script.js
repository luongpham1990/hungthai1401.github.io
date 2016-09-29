$(function() {
	$( ".sorted-list" ).sortable({
		connectWith: ".sorted-list",
		placeholder: 'ui state hightlight',
		start: function (event, ui) {
			$(ui.item[0]).addClass('dragging');
		},

		stop: function (event, ui) {
			$(ui.item[0]).removeClass('dragging');
		}
	});
});