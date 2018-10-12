	var oneDay = 24*60*60*1000;
	var latestRelease = new Date("2018-07-22T22:31:26Z");
	var countdownEnd = new Date("2018-10-29T22:31:26Z");
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
		var timeNow = new Date();
		//Calculates each portion of time
		var diffDays = (timeNow.getTime() - latestRelease.getTime()) / oneDay;
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
		document.getElementById("count").innerHTML = diffDays + "d : " + diffHours + "h : " + diffMinutes + "m : " + diffSeconds + "s";

		//the rest is for the countdown, it's a copy of the above
		var diffDays2 = (countdownEnd.getTime() - timeNow.getTime()) / oneDay;
		var diffHours2 = (diffDays2 - Math.floor(diffDays2)) * 24;
		var diffMinutes2 = (diffHours2 - Math.floor(diffHours2)) * 60;
		var diffSeconds2 = (diffMinutes2 - Math.floor(diffMinutes2)) * 60;
		
		diffDays2 = Math.floor(diffDays2);
		diffHours2 = Math.floor(diffHours2);
		diffMinutes2 = Math.floor(diffMinutes2);
		diffSeconds2 = Math.floor(diffSeconds2);
		
		if (countdownEnd > timeNow ){
			document.getElementById("count2").innerHTML = diffDays2 + "d : " + diffHours2 + "h : " + diffMinutes2 + "m : " + diffSeconds2 + "s";
		} else {
			document.getElementById("count2").innerHTML = "Rank Up!";
		}
		document.getElementById("count").style.fontSize = "100%";
		
		}
		else if(mode == 1){
			if(diffDays == 0){
				document.getElementById("count").innerHTML = diffDays + " Days";
			} else if (diffDays == 1){
				document.getElementById("count").innerHTML = diffDays + " Day";
			} else {
				document.getElementById("count").innerHTML = diffDays + " Days";
			};

			var diffDays2 = Math.floor(Math.abs((countdownEnd.getTime() - timeNow.getTime())/(oneDay)));

			if (timeNow > countdownEnd){
				document.getElementById("count2").innerHTML = "Rank Up!";
			} else if (diffDays2 == 1){
				document.getElementById("count2").innerHTML = diffDays2 + " Day";
			} else if (diffDays2 == 0){
				document.getElementById("count2").innerHTML = "Less than a Day";
			} else {
				document.getElementById("count2").innerHTML = diffDays2 + " Days"
			};
			document.getElementById("count").style.fontSize = "160%";
		}

		return diffDays;
	};
	
	var hiatusList = [
	['Last Episode','Next Episode','Preceding Release','Date Announced','Following Release','Days In The Dark','Days Waiting','Hiatus Length','Note'],
	['Roses Room','Coach Steven','14 May 2014','25 Jul 2014','21 Aug 2014',72,27,99,''],
	['Lion 3','Warp Tour','04 Dec 2014','30 Dec 2014','08 Jan 2015',26,9,35,''],
	['Reformed','Sworn To The Sword','30 Apr 2015','26 May 2015','15 Jun 2015',26,20,46,''],
	['Chille Tid','Cry For Help','19 Jun 2015','20 Jun 2015','13 Jun 2015',1,23,24,'Two shorts released during hiatus'],
	['Friend Ship','Nightmare Hospital','17 Jul 2015','02 Sep 2015','10 Sep 2015',47,8,55,''],
	['Too Far','The Answer','15 Oct 2015','18 Dec 2015','04 Jan 2016',64,17,81,'Four shorts released during hiatus'],
	['Log Date 7 15 2','Super Watermelon Island','08 Jan 2016','21 Apr 2016','12 May 2016',104,21,125,''],
	['Steven Floats','Drop Beat Dad','22 May 2016','30 Jun 2016','18 Jul 2016',39,18,57,'CN France Early Premiere'],
	['Onion Gang','Gem Harvest','15 Sep 2016','01 Nov 2016','17 Nov 2016',47,16,63,'Four shorts released during hiatus'],
	['Three Gems And A Baby',"Steven's Dream",'01 Dec 2016','18 Dec 2016','02 Jan 2017',17,15,32,'CN App Release'],
	['Room For Ruby','Lion 4','10 Mar 2017','30 Mar 2017','30 Mar 2017',20,0,20,'Accidentally On-Demand'],
	['Lion 4','Doug Out','30 Mar 2017','21 Apr 2017','05 may 2017',22,14,36,''],
	['Stuck Together','The Trial','10 May 2017','11 May 2017','29 May 2017',1,18,19,'CN App Release'],
	["Lar's Head",'Dewey Wins','29 May 2017','30 Oct 2017','09 Nov 2017',154,10,164,'PS Vue Release'],
	['Kevin Party','Lars Of The Stars','09 Nov 2017','13 Dec 2017','05 Jan 2018',33,24,57,''],
	['Jungle Moon','Your Mother and Mine','05 Jan 2018','08 Mar 2018','26 Mar 2018',61,18,79,'CN App / PS Vue Release'],
	['A Single Pale Rose',"Now We're Only Falling Apart",'07 May 2018','18 Jun 2018','02 Jul 2018',41,14,55,''],
	['Reunited','Legs From Here To Homeworld','06 Jul 2018','21 Jul 2018','22 Jul 2018',14,1,15,'SDCC 2018/CN App Release'],
	['Legs From Here Top Homeworld','???','22 Jul 2018','???','???',0,'N/A',0,'']
	];

	function createTable(array) {
		var diffDays = count();
		array[array.length - 1][5] = diffDays;
		array[array.length - 1][7] = diffDays;
		for(var i = 0; i < array.length ; i++){
			var row = document.createElement('tr');
			row.setAttribute("id", "myTr" + i);
			document.getElementById("hiatus").appendChild(row);
			for(var j = 0; j < 9; j++){
				var cell = document.createElement('td');
				var content = document.createTextNode(array[i][j]);
				cell.appendChild(content);
				document.getElementById("myTr" + i).appendChild(cell);
			};
		};
	};
	
	function start(){
		count();
		createTable(hiatusList);
	};
	
	window.setInterval(function(){
			count();
	}, 250);