var oneDay = 24*60*60*1000;
var firstDate = new Date();
var secondDate = new Date("2017-05-30T00:00:00Z");
var thirdDate = new Date("2017-11-10T00:00:00Z");
	

var diffDays = Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
var diffDays2 = Math.floor(Math.abs((thirdDate.getTime() - firstDate.getTime())/(oneDay)));

// Don't judge me. I'm too lazy to learn jQuery
document.getElementById("diffDays").innerHTML = diffDays + " Days";


if (firstDate > thirdDate){
	document.getElementById("diffDays2").innerHTML = "Are You Ready For A Miracle";
} else if (diffDays2 == 1){
	document.getElementById("diffDays2").innerHTML = diffDays2 + " Day";
} else if (diffDays2 == 0){
	document.getElementById("diffDays2").innerHTML = "Less than a Day";
} else {
	document.getElementById("diffDays2").innerHTML = diffDays2 + " Days"
};

