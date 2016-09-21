var arrImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var currentCard = null;
var isPlaying = false;
var score = 0;
var remainTime = 60;
var run = null;

function playMusic(){
    var audio = document.getElementById("bg-music");
    audio.play();
    audio.loop = true;
}

function playSound(type) {
    document.getElementById(type + '-sound').load();
    document.getElementById(type + '-sound').play();
}

function shuffle(array) {
	var currentIndex = array.length, tempValue, randomIndex;
	while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
    return array;
}

function openModal(type) {
	$('.overlay').css('display', 'block');
	$('.modal').hide();
	$('.modal.' + type).fadeIn();
}

function closeModal() {
	$('.overlay').css('display', 'none');
	$('.modal').hide();
}

function loadMode(numberCard) {
	$('.timer').css('display', 'none');
	var randomImg = [];
	for (var i = 0; i < numberCard; i++) {
		randomImg[i] = arrImg[i];
	}
	randomImg = randomImg.concat(randomImg);
	randomImg = shuffle(randomImg);

	for (var i = 0; i < randomImg.length; i++) {
		$('.container').append('<div class="grid"><div class="card shadow" data-name="' + randomImg[i] + '""><div class="front">' + '<img src="images/' + randomImg[i] +'.jpg">' + '</div>' + '<div class="back">' + '<img src="images/back.jpg">' + '</div></div></div>');
	}
}

function startGame(numberCard) {
	$('.timer').css('display', 'block');
	playSound('welcome');
	var currentCard = null;
	isPlaying = true;
	closeModal();
	run = setInterval(function(){
		remainTime--;
		$('progress').val(remainTime);
		if (remainTime == 0) {
			playSound('defeat');
			setTimeout(function(){
				stopGame();
				openModal('lose');
			}, 1000);
		}
	}, 1000);

	$('.card').click(function() {
		var card = $(this);
		$(card).toggleClass('flipped');
		$(card).css('pointer-events', 'none');

		if (!currentCard) {
			currentCard = $(card);
		} else {
			$('.card').css('pointer-events', 'none');
			if (currentCard.attr('data-name') != $(card).attr('data-name')) {
				playSound('incorrect');
				setTimeout(function() {
					$(card).toggleClass('flipped');
					currentCard.toggleClass('flipped');
					currentCard = null;
					if (isPlaying) {
						$('.card').css('pointer-events', 'auto');
					}
				}, 500);
			} else {
				playSound('correct');
				setTimeout(function() {
					$(card).css('opacity', '0');
					currentCard.css('opacity', '0');
					currentCard = null;
					score++;
					$('.top h1').html('Score: ' + score + '/' + numberCard);
					if (score == numberCard) {
						playSound('rampage');
						stopGame();
						openModal('win');	
					} else {
						$('.card').css('pointer-events', 'auto');
					}
				}, 500);
			}
		}
	});
}

function stopGame() {
	isPlaying = false;

	if (run != null) {
		clearInterval(run);
		run = null;
	}

	$('.card').css('pointer-events', 'none');
}

function startEasy(){
	loadMode(4)
	startGame(4);
}

function startNormal(){
	loadMode(8)
	startGame(8);
}

function startHard(){
	loadMode(12)
	startGame(12);
}

function begin() {
	window.location.href = "index.html";
}

$(document).ready(function() {
	openModal('begin');
	playMusic();
});

