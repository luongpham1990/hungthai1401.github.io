var op1 = {
	name: 'Monkey D. Luffy',
	nickname: 'Straw Hat',
	avatar: '1.jpg',
	devilFruit: 'Gum-Gum',
	haki:'Haoshoku',
	money: '500000000'
}
var op2 = {
	name: 'Shanks',
	nickname: 'Red-Haired',
	avatar: '2.jpg',
	devilFruit: 'Gum-Gum',
	haki:'Haoshoku',
	money: '5000000000'
}
var op3 = {
	name: 'Edward Newgate',
	nickname: 'Whitebeard',
	avatar: '3.jpg',
	devilFruit: 'Gum-Gum',
	haki:'Haoshoku',
	money: '4000000000'
}
var op4 = {
	name: 'Portgas D. Ace',
	nickname: 'Fire Fist',
	avatar: '4.jpg',
	devilFruit: 'Gum-Gum',
	haki:'Haoshoku',
	money: '550000000'
}
var op5 = {
	name: 'Trafalgar Law',
	nickname: 'Surgeon of Death',
	avatar: '5.jpg',
	devilFruit: 'Gum-Gum',
	haki:'Kenbunshoku',
	money: '440000000'
}
var op6 = {
	name: 'Roronoa Zoro',
	nickname: 'Pirate Hunter',
	avatar: '6.jpg',
	devilFruit: 'Gum-Gum',
	haki:'Busoshoku',
	money: '320000000'
}
var op7 = {
	name: 'Sanji',
	nickname: 'Black Leg',
	avatar: '7.jpg',
	devilFruit: 'Gum-Gum',
	haki:'Kenbunshoku',
	money: '177000000'
}
var op8 = {
	name: 'Dracule Mihawk',
	nickname: 'Hawk Eyes',
	avatar: '8.jpg',
	devilFruit: 'Gum-Gum',
	haki:'Busoshoku',
	money: '3000000000'
}


var arr = [op1, op2, op3, op4, op5, op6, op7, op8];
var count = 0;

function creatTable() {
	for (var i = 0; i < arr.length; i++) {
		$('tbody').append('<tr><td id="no">' + (i + 1) + '</td><td id="name">' + arr[i].name + '</td><td id="nickname">' + arr[i].nickname + '</td><td id="avatar"><img src="images/' + arr[i].avatar + '"></td><td id="fruit">' + arr[i].devilFruit +'</td><td id="haki">' + arr[i].haki + '</td><td id="money">' + arr[i].money + '</td></tr>');
	}
}

creatTable();

//  f : 1 ascending order, -1 descending order
//  n : n-th child(<td>) of <tr>
function sortTable(f, n) {
	var rows = $('#mytable tbody tr').get();

	rows.sort(function(a, b) {
		var A = getVal(a);
		var B = getVal(b);
		if(A < B) {
			return -1*f;
		}
		if(A > B) {
			return 1*f;
		}
		return 0;
	});

	function getVal(elm){
		var v = $(elm).children('td').eq(n).text().toUpperCase();
		if($.isNumeric(v)){
			v = parseInt(v,10);
		}
		return v;
	}

	$.each(rows, function(index, row) {
		$('#mytable').children('tbody').append(row);
	});
}

var f_sl = 1; // flag to toggle the sorting order
var count = 0;
$('th').click(function(){
	count++;
    f_sl *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_sl,n);
    if (count%2 == 0) {
    	$("i").attr('class', 'fa fa-sort');
    	$(this).children('i').attr('class', 'fa fa-sort-desc');
    } else {
    	$("i").attr('class', 'fa fa-sort');
    	$(this).children('i').attr('class', 'fa fa-sort-asc');
    }

});

