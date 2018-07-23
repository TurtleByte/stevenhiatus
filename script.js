	var oneDay = 24*60*60*1000;
	var secondDate = new Date("2018-07-22T22:35:56Z");
	var thirdDate = new Date("2018-07-21T17:00:00Z");
	var mode = 0;
	//Convert time to UTC from EDT (UTC -4), you useless pebble.
	
	function switchMode(){
		if(mode == 0){
			mode = 1;
			document.getElementById("moreorless").innerHTML = "more";
		}
		else if(mode == 1){
			mode = 0;
			document.getElementById("moreorless").innerHTML = "less";
		};
	};
	
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
		
		diffDays1 = diffDays;
		diffDays2 = diffDays;
		
		if (mode == 0){
		
		//Update page
		document.getElementById("diffDays1").innerHTML = diffDays1;
		document.getElementById("diffDays2").innerHTML = diffDays2;
		document.getElementById("count").innerHTML = diffDays + "d : " + diffHours + "h : " + diffMinutes + "m : " + diffSeconds + "s";

		
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
			document.getElementById("count2").innerHTML = "Legs From Here To Homeworld";
		}
		document.getElementById("count").style.fontSize = "100%";
		
	/*
		//wow look, a count up. you'd think i'd do this more efficiently
		
		var diffDays3 = (firstDate.getTime() - fourthDate.getTime()) / oneDay;
		var diffHours3 = (diffDays3 - Math.floor(diffDays3)) * 24;
		var diffMinutes3 = (diffHours3 - Math.floor(diffHours3)) * 60;
		var diffSeconds3 = (diffMinutes3 - Math.floor(diffMinutes3)) * 60;
		
		//Removes all decimal places in each portion
		diffDays3 = Math.floor(diffDays3);
		diffHours3 = Math.floor(diffHours3);
		diffMinutes3 = Math.floor(diffMinutes3);
		diffSeconds3 = Math.floor(diffSeconds3);
		
		//Update page
		document.getElementById("count3").innerHTML = diffDays3 + "d : " + diffHours3 + "h : " + diffMinutes3 + "m : " + diffSeconds3 + "s";
		};
	*/
		}
		else if(mode == 1){
			if(diffDays == 0){
				document.getElementById("count").innerHTML = diffDays + " Days";
			} else if (diffDays == 1){
				document.getElementById("count").innerHTML = diffDays + " Day";
			} else {
				document.getElementById("count").innerHTML = diffDays + " Days";
			};

			var diffDays2 = Math.floor(Math.abs((thirdDate.getTime() - firstDate.getTime())/(oneDay)));

			if (firstDate > thirdDate){
				document.getElementById("count2").innerHTML = "The Aftermath begins.";
			} else if (diffDays2 == 1){
				document.getElementById("count2").innerHTML = diffDays2 + " Day";
			} else if (diffDays2 == 0){
				document.getElementById("count2").innerHTML = "Less than a Day";
			} else {
				document.getElementById("count2").innerHTML = diffDays2 + " Days"
			};
			document.getElementById("count").style.fontSize = "160%";
		}
	}
	
	window.setInterval(function(){
			count();
	}, 250);