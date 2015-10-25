
//variables
var note = 0;
var lyric = 0;
var inspiration = 0;
var song = 0;
var fan = 0;
var money = 0;

//gain functions

function inspirationGain(number){
	inspiration = inspiration + number
	document.getElementById("inspiration").innerHTML = inspiration;
}

function noteGain(number){
	if (inspiration >= 1){
	note = note + number
	inspiration = inspiration - number
	document.getElementById("inspiration").innerHTML = inspiration;
	document.getElementById("note").innerHTML = note;};
};

function lyricGain(number){
	if (inspiration >= 1){
	lyric = lyric + number
	inspiration = inspiration - number
	document.getElementById("inspiration").innerHTML = inspiration;
	document.getElementById("lyric").innerHTML = lyric;};
};

function songGain(number){
	if (lyric >= (200 * number)){
		if (note >= (200 * number)){
			lyric = lyric - 200
			note = note - 200
			song = song + number
			document.getElementById("lyric").innerHTML = lyric;
			document.getElementById("note").innerHTML = note;
			document.getElementById("song").innerHTML = song;
		};
	};
};

//auto-gain functions and gain interval

function fanGain(){
	if (song >= 1){
		fan = fan + song
		document.getElementById("fan").innerHTML = fan;
	};
};

window.setInterval(function(){
	fanGain();
}, 10000)

function moneyGain(){
	if (fan >= 1){
		money = Math.round((money + (fan / 100))*100) / 100
		document.getElementById("fan").innerHTML = fan;
		document.getElementById("money").innerHTML = money;
	};
};

window.setInterval(function(){
	moneyGain();
}, 5000)