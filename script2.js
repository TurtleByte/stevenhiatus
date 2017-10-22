var oneDay = 24*60*60*1000;
var firstDate = new Date();
var secondDate = new Date("2017-05-30T00:00:00Z");
var thirdDate = new Date("2017-10-26T00:00:00Z");
var fourthDate = new Date("2017-10-21T00:00:00Z");
	

var diffDays = Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
var diffDays0 = diffDays;
var diffDays1 = diffDays;
var diffDays2 = Math.floor(Math.abs((thirdDate.getTime() - firstDate.getTime())/(oneDay)));
var diffDays3 = Math.floor(Math.abs((firstDate.getTime() - fourthDate.getTime())/(oneDay)));

// Don't judge me. I'm too lazy to learn jQuery
document.getElementById("diffDays").innerHTML = diffDays + " Days";
document.getElementById("diffDays0").innerHTML = diffDays0;
document.getElementById("diffDays1").innerHTML = diffDays1;
document.getElementById("diffDays3").innerHTML = diffDays3 + " Days";
document.getElementById("nextMilestone").innerHTML = "Steven Universe Podcast Season 2 Premiere Day";
document.getElementById("lastMilestone").innerHTML = "One Month Since Steven Universe Podcast Season 1 Finale";


if (firstDate > thirdDate){
	document.getElementById("diffDays2").innerHTML = "It's Over, Isn't It?";
} else if (diffDays2 == 1){
	document.getElementById("diffDays2").innerHTML = diffDays2 + " Day";
} else if (diffDays2 == 0){
	document.getElementById("diffDays2").innerHTML = "Less than a Day";
} else {
	document.getElementById("diffDays2").innerHTML = diffDays2 + " Days"
};

if (diffDays3 > 1){
	document.getElementById("diffDays3").innerHTML = diffDays3 + " Days";
} else if (diffDays3 == 1){
	document.getElementById("diffDays3").innerHTML = diffDays3 + " Day";
} else if (diffDays3 == 0){
	document.getElementById("diffDays3").innerHTML = "Less than a Day";
};
