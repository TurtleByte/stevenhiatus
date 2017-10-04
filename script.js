	var oneDay = 24*60*60*1000;
	var secondDate = new Date("2017-05-30T00:00:00Z");
	var thirdDate = new Date("2017-10-04T18:30:00Z");
	
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
	document.getElementById("diffDays").innerHTML = diffDays;
	document.getElementById("diffHours").innerHTML = diffHours;
	document.getElementById("diffMinutes").innerHTML = diffMinutes;
	document.getElementById("diffSeconds").innerHTML = diffSeconds;
	
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
		
	document.getElementById("diffDays2").innerHTML = diffDays2;
	document.getElementById("diffHours2").innerHTML = diffHours2;
	document.getElementById("diffMinutes2").innerHTML = diffMinutes2;
	document.getElementById("diffSeconds2").innerHTML = diffSeconds2;
	};
		
	window.setInterval(function(){
		count();
	}, 250);
