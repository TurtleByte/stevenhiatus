//Animations

$(function(){
	$('#Gameplay').hide().slideDown(800);
	$('#Currencies').hide().slideDown(800);
	$.notify({
	title: '<strong>Warning!</strong>',
	message: "All of this is a work in progress so just sit tight and maybe I'll fix things"
},{
	type: 'danger'
});
})

//currency variables
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

//inspiration buildings

var stare = 0;

function buyStare(){
	var StareCost = Math.floor(50 * Math.pow(1.15, stare));
	if (inspiration >= StareCost){
		stare = stare + 1;
		inspiration = inspiration - StareCost;
		document.getElementById("stare").innerHTML = stare;
		document.getElementById("inspiration").innerHTML = inspiration;
	}
	else{
		$.notify({
		// options
		message: "<strong>Not enough Inspiration!</strong> You don't have enough inspiration to buy that." 
		},{
		// settings
		type: 'danger',
		animate: {
		enter: 'animated fadeInRight',
		exit: 'animated fadeOutRight'
	}
		});
	};
	var nextCost = Math.floor(50 * Math.pow(1.15, stare));
	document.getElementById("StareCost").innerHTML = nextCost;
};

//MAIN GAIN FUNCTION

window.setInterval(function(){
	inspirationGain(stare);
	noteGain(pitchpipe);
	lyricGain(phrase);
}, 1000)

//note buildings

var pitchpipe = 0;

function buyPitchpipe(){
	var PitchpipeCost = Math.floor(50 * Math.pow(1.15, pitchpipe));
	if (note >= PitchpipeCost){
		pitchpipe = pitchpipe + 1;
		note = note - PitchpipeCost;
		document.getElementById("pitchpipe").innerHTML = pitchpipe;
		document.getElementById("note").innerHTML = note;
	}
	else{
		$.notify({
		// options
		message: "<strong>Not enough Notes!</strong> You don't have enough notes to buy that." 
		},{
		// settings
		type: 'danger',
		animate: {
		enter: 'animated fadeInRight',
		exit: 'animated fadeOutRight'
	}
		});
	};
	var nextCost = Math.floor(50 * Math.pow(1.15, pitchpipe));
	document.getElementById("PitchpipeCost").innerHTML = nextCost;
};

//lyric buildings

var phrase = 0;

function buyPhrase(){
	var PhraseCost = Math.floor(50 * Math.pow(1.15, phrase));
	if (lyric >= PhraseCost){
		phrase = phrase + 1;
		lyric = lyric - PhraseCost;
		document.getElementById("phrase").innerHTML = phrase;
		document.getElementById("lyric").innerHTML = lyric;
	}
	else{
		$.notify({
		// options
		message: "<strong>Not enough Lyrics!</strong> You don't have enough lyrics to buy that." 
		},{
		// settings
		type: 'danger',
		animate: {
		enter: 'animated fadeInRight',
		exit: 'animated fadeOutRight'
	}
		});
	};
	var nextCost = Math.floor(50 * Math.pow(1.15, phrase));
	document.getElementById("PhraseCost").innerHTML = nextCost;
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
