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
		screen.innerHTML = screen.innerHTML.concat("");
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
	} else if(screen.innerHTML === output) {
		var can = Math.sqrt(parseFloat(output));
		screen.innerHTML = can;
	}
}, false);

document.querySelector(".giaithua").addEventListener("click", function() {
	if (screen.innerHTML === "") {
		screen.innerHTML = screen.innerHTML.concat("");
	} else if (screen.innerHTML === output) {
		var x = parseFloat(output);
		var giaiThua = 1;
		for(var i = 1; i <= output; i++) {
			giaiThua *= i;
		}
		screen.innerHTML = giaiThua;
	}
}, false);

document.querySelector(".binhphuong").addEventListener("click", function() {
	if (screen.innerHTML === "") {
		screen.innerHTML = screen.innerHTML.concat("");
	} else if (screen.innerHTML === output) {
		var binhPhuong = parseFloat(output);
		binhPhuong *= binhPhuong;
	}
	screen.innerHTML = binhPhuong;
}, false);