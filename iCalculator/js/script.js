var number, output, limit, operators;
var screen = document.getElementById("screen");
var keys = document.querySelectorAll(".number");
var operator = document.querySelectorAll(".operator");

document.querySelector(".clear").addEventListener("click", function() {
	screen.innerHTML = "";
}, false);

for (var i = 0; i < keys.length; i++) {
	keys[i].addEventListener("click", function() {
		number = this.value;
		output = screen.innerHTML += number;
		limit = output.length;
		if (limit > 16) {
			alert("Sorry no more input is allowed!");
		}
	}, false);
}

document.querySelector(".zero").addEventListener("click", function() {
	var zero = this.value;
	if (screen.innerHTML === "") {
		screen.innerHTML = screen.innerHTML.concat("");
	} else {
		output = screen.innerHTML += zero;
	}
}, false);

for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener("click", function() {
		operators = this.value;
		if (screen.innerHTML === "") {
			screen.innerHTML = screen.innerHTML.concat("0.");
		} else if(output) {
			screen.innerHTML = output.concat(operators);
		}
	}, false);
}

document.querySelector(".period").addEventListener("click", function() {
	if (screen.innerHTML === "") {
		screen.innerHTML = screen.innerHTML.concat("0.");
	} else if(screen.innerHTML === output) {
		screen.innerHTML = screen.innerHTML.concat(".");
	}
}, false);

document.querySelector(".eval").addEventListener("click", function() {
	if (screen.innerHTML === output) {
		screen.innerHTML = eval(output);
	} else {
		screen.innerHTML = "";
	}
}, false);

document.querySelector(".can").addEventListener("click", function() {
	if (screen.innerHTML === "") {
		screen.innerHTML = screen.innerHTML.concat("");
	} else {
		var can = Math.sqrt(parseFloat(screen.innerHTML));
		screen.innerHTML = can;
	}
}, false);

document.querySelector(".giaithua").addEventListener("click", function() {
	if (screen.innerHTML === "") {
		screen.innerHTML = screen.innerHTML.concat("");
	} else {
		var x = parseFloat(screen.innerHTML);
		var giaiThua = 1;
		for(var i = 1; i <= x; i++) {
			giaiThua *= i;
		}
		screen.innerHTML = giaiThua;
	}
}, false);

document.querySelector(".binhphuong").addEventListener("click", function() {
	if (screen.innerHTML === "") {
		screen.innerHTML = screen.innerHTML.concat("");
	} else {
		var binhPhuong = parseFloat(screen.innerHTML);
		binhPhuong *= binhPhuong;
	}
	screen.innerHTML = binhPhuong;
}, false);