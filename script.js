	var oneDay = 24*60*60*1000;
	var secondDate = new Date("2017-05-30T00:00:00Z");
	var thirdDate = new Date("2017-10-26T00:00:00Z");
	
	function count(){
	var firstDate = new Date();
	
	//Calculates each portion of time
	var diffDays = (firstDate.getTime() - secondDate.getTime()) / oneDay;
	var diffHours = (diffDays - Math.floor(diffDays)) * 24;
	var diffMinutes = (diffHours - Math.floor(diffHours)) * 60;
	var diffSeconds = (diffMinutes - Math.floor(diffMinutes)) * 60;
	
	//Removes all decimal places in each portion
	diffDays = Math.floor(diffDays);
	diffHours = Math.floor(diffHours);
	diffMinutes = Math.floor(diffMinutes);
	diffSeconds = Math.floor(diffSeconds);
	var diffDays0 = diffDays;
	var diffDays1 = diffDays0;
	
	//Update page
	document.getElementById("count").innerHTML = diffDays + "d : " + diffHours + "h : " + diffMinutes + "m : " + diffSeconds + "s";
	
	// Don't judge me. I'm too lazy to learn jQuery
	document.getElementById("diffDays0").innerHTML = diffDays0;
	document.getElementById("diffDays1").innerHTML = diffDays1;
	
	//the rest is for the countdown, it's a copy of the above
	
	var diffDays2 = (thirdDate.getTime() - firstDate.getTime()) / oneDay;
	var diffHours2 = (diffDays2 - Math.floor(diffDays2)) * 24;
	var diffMinutes2 = (diffHours2 - Math.floor(diffHours2)) * 60;
	var diffSeconds2 = (diffMinutes2 - Math.floor(diffMinutes2)) * 60;
	
	diffDays2 = Math.floor(diffDays2);
	diffHours2 = Math.floor(diffHours2);
	diffMinutes2 = Math.floor(diffMinutes2);
	diffSeconds2 = Math.floor(diffSeconds2);
	
	if (thirdDate > firstDate ){
		document.getElementById("count2").innerHTML = diffDays2 + "d : " + diffHours2 + "h : " + diffMinutes2 + "m : " + diffSeconds2 + "s";
	} else {
		document.getElementById("count2").innerHTML = "It's Over, Isn't It?";
	}
	
	};
		
	window.setInterval(function(){
		count();
	}, 250);
