function addContent() {
	var content = $("#content").val();
	var user_id = $("#user_id").val();
	$.ajax({
		method : "POST",
		url : "http://localhost/todo-mvc/todo/add",
		data : {
			content : content,
			user_id : user_id,
			action : "add"
		},
		success : function (data) {
			console.log(data);
			var append = '<div class="row list"><span id="row-content-todo-'+data+'">'+content+'</span>' +
				'<a href="javascript:void(0)" class="del" onclick="deleteContent('+data+')"> <span class="glyphicon glyphicon-remove"></span> </a>' +
				'<a href="javascript:void(0)" class="next" onclick="updateStatus('+data+', 1)"> <span class="glyphicon glyphicon-chevron-right"></span> </a>' +
				'<a href="javascript:void(0)" class="edit" id="edit_todo" onclick="showedit('+data+')"> <span class="glyphicon glyphicon-edit"></span> </a></div>';
			$('.todo').append(append);
			$("#content").val('');
		}
	})
}

function showedit(id) {
	$("#edit").modal();
	$("#id_edit").val(id);
	var content = $('#row-content-todo-'+id).text();
	$("#todo_edit").val(content.trim());
}

function edit() {
	var id = $("#id_edit").val();
	var content = $('#todo_edit').val();
	$.ajax({
		method : "POST",
		url : "http://localhost/todo-mvc/todo/edit",
		data : {
			id : id,
			content : content,
			action : "edit"
		},
		success : function (data) {
			console.log(data);
			$('#row-content-todo-'+id).text(data);
		}
	})
	$("#edit").modal('toggle');

}

function updateStatus(id, status) {
	$.post("http://localhost/todo-mvc/todo/update", {id : id, status : status, action : "update"}, function (data) {
		data = $.parseJSON(data);
		if (data.status == 1) {
			var append1 = '<div class="row list"><span id="row-content-todo-'+data.id+'">'+data.content+'</span>' +
				'<a href="javascript:void(0)" class="del" onclick="deleteContent('+data.id+')"> <span class="glyphicon glyphicon-remove"></span> </a>' +
				'<a href="javascript:void(0)" class="next" onclick="updateStatus('+data.id+','+data.status+')"> <span class="glyphicon glyphicon-chevron-right"></span> </a>' +
				'<a href="javascript:void(0)" class="edit" id="edit_todo" onclick="showedit('+data.id+')"> <span class="glyphicon glyphicon-edit"></span> </a></div>';
			$('.todo').append(append1);
			$('#row-content-doing-'+data.id).parent().remove();
		} else if (data.status == 2) {
			var append2 = '<div class="row list"><span id="row-content-doing-'+data.id+'">'+data.content+'</span>' +
				'<a href="javascript:void(0)" class="del" onclick="deleteContent('+data.id+')"> <span class="glyphicon glyphicon-remove"></span> </a>' +
				'<a href="javascript:void(0)" class="next" onclick="updateStatus('+data.id+','+data.status+')"> <span class="glyphicon glyphicon-chevron-right"></span> </a>' +
				'<a href="javascript:void(0)" class="edit" onclick="undoStatus('+data.id+','+data.status+')"> <span class="glyphicon glyphicon-chevron-left"></span> </a></div>';
			$('.doing').append(append2);
			$('#row-content-todo-'+data.id).parent().remove();
			$('#row-content-done-'+data.id).parent().remove();
		} else if (data.status == 3) {
			var append3 = '<div class="row list"><span id="row-content-done-'+data.id+'">'+data.content+'</span>' +
				'<a href="javascript:void(0)" class="del" onclick="deleteContent('+data.id+')"> <span class="glyphicon glyphicon-remove"></span> </a>' +
				'<a href="javascript:void(0)" class="edit" onclick="undoStatus('+data.id+','+data.status+')"> <span class="glyphicon glyphicon-chevron-left"></span> </a></div>';
			$('.done').append(append3);
			$('#row-content-doing-'+data.id).parent().remove();
		}
	})
}

function undoStatus(id, status) {
	$.post("http://localhost/todo-mvc/todo/update", {id : id, status : status, action : "undo"}, function (data) {
		data = $.parseJSON(data);
		console.log(data);
		if (data.status == 1) {
			var append1 = '<div class="row list"><span id="row-content-todo-'+data.id+'">'+data.content+'</span>' +
				'<a href="javascript:void(0)" class="del" onclick="deleteContent('+data.id+')"> <span class="glyphicon glyphicon-remove"></span> </a>' +
				'<a href="javascript:void(0)" class="next" onclick="updateStatus('+data.id+','+data.status+')"> <span class="glyphicon glyphicon-chevron-right"></span> </a>' +
				'<a href="javascript:void(0)" class="edit" id="edit_todo" onclick="showedit('+data.id+')"> <span class="glyphicon glyphicon-edit"></span> </a></div>';
			$('.todo').append(append1);
			$('#row-content-doing-'+data.id).parent().remove();
		} else if (data.status == 2) {
			var append2 = '<div class="row list"><span id="row-content-doing-'+data.id+'">'+data.content+'</span>' +
				'<a href="javascript:void(0)" class="del" onclick="deleteContent('+data.id+')"> <span class="glyphicon glyphicon-remove"></span> </a>' +
				'<a href="javascript:void(0)" class="next" onclick="updateStatus('+data.id+','+data.status+')"> <span class="glyphicon glyphicon-chevron-right"></span> </a>' +
				'<a href="javascript:void(0)" class="edit" onclick="undoStatus('+data.id+','+data.status+')"> <span class="glyphicon glyphicon-chevron-left"></span> </a></div>';
			$('.doing').append(append2);
			$('#row-content-todo-'+data.id).parent().remove();
			$('#row-content-done-'+data.id).parent().remove();
		} else if (data.status == 3) {
			var append3 = '<div class="row list"><span id="row-content-done-'+data.id+'">'+data.content+'</span>' +
				'<a href="javascript:void(0)" class="del" onclick="deleteContent('+data.id+')"> <span class="glyphicon glyphicon-remove"></span> </a>' +
				'<a href="javascript:void(0)" class="edit" onclick="undoStatus('+data.id+','+data.status+')"> <span class="glyphicon glyphicon-chevron-left"></span> </a></div>';
			$('.done').append(append3);
			$('#row-content-doing-'+data.id).parent().remove();
		}
	})
}

function deleteContent(id) {
	$.ajax({
		method : "POST",
		url : "http://localhost/todo-mvc/todo/delete",
		data : {
			id : id,
			action : "delete"
		},
		success : function (data) {
			$('#row-content-todo-'+data).parent().remove();
			$('#row-content-doing-'+data).parent().remove();
			$('#row-content-done-'+data).parent().remove();
		}
	})

}