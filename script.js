	var oneDay = 24*60*60*1000;
	var secondDate = new Date("2017-05-30T00:00:00Z");

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
	var diffDays1 = diffDays;
	var diffDays2 = diffDays1;
	
	//Updates page
	document.getElementById("diffDays").innerHTML = diffDays;
	document.getElementById("diffHours").innerHTML = diffHours;
	document.getElementById("diffMinutes").innerHTML = diffMinutes;
	document.getElementById("diffSeconds").innerHTML = diffSeconds;
	
	// Don't judge me. I'm too lazy to learn jQuery
	document.getElementById("diffDays1").innerHTML = diffDays1;
	document.getElementById("diffDays2").innerHTML = diffDays2;
	};
	
	window.setInterval(function(){
		count();
	}, 500);