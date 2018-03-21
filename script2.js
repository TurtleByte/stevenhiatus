var oneDay = 24*60*60*1000;
var firstDate = new Date();
var secondDate = new Date("2018-01-06T01:00:00Z");
var thirdDate = new Date("2018-03-26T04:00:00Z");
	

var diffDays = Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	
// Don't judge me. I'm too lazy to learn jQuery
diffDays0 = diffDays - 61;
diffDays1 = diffDays;

//Update page
document.getElementById("diffDays0").innerHTML = diffDays0;
document.getElementById("diffDays1").innerHTML = diffDays1;

if(diffDays == 0){
	document.getElementById("diffDays").innerHTML = diffDays + " Days";
} else if (diffDays == 1){
	document.getElementById("diffDays").innerHTML = diffDays + " Day";
} else {
	document.getElementById("diffDays").innerHTML = diffDays + " Days";
};

/* Currently In The Dark
*/
var diffDays2 = Math.floor(Math.abs((thirdDate.getTime() - firstDate.getTime())/(oneDay)));

if (firstDate > thirdDate){
	document.getElementById("diffDays2").innerHTML = "Stranded!";
} else if (diffDays2 == 1){
	document.getElementById("diffDays2").innerHTML = diffDays2 + " Day";
} else if (diffDays2 == 0){
	document.getElementById("diffDays2").innerHTML = "Less than a Day";
} else {
	document.getElementById("diffDays2").innerHTML = diffDays2 + " Days"
};

