	var oneDay = 24*60*60*1000;
	var latestRelease = new Date("2018-07-22T22:31:26Z"); // End of Legs From Here To Homeworld
	var countdownEnd = new Date("2018-10-29T22:31:26Z"); // Next Milestone is 99 Full Days Later
	var mode = 0; //DD:HH:MM:SS mode is default
	
	//voodoo magic
	function GetThen(yourUrl, onload){
		var Httpreq = new XMLHttpRequest();
		Httpreq.open("GET",yourUrl,true);
		Httpreq.onload = function() {
			if (Httpreq.readyState === Httpreq.DONE && Httpreq.status === 200) {
				onload(Httpreq.responseText);
			}
		};
		Httpreq.send(null);
		}
	
	//Initially loads the last 100 posts on subreddit
	function requestSubredditData(after = null) {
		var url = 'https://www.reddit.com/r/StevenUniverse/new.json?limit=100';
		GetThen(after ? url + '&after=' + after : url, checkSubreddit);
	}
		
	//looks at the loaded posts, this runs four times every half-second
	function checkSubreddit(response){
		var subbredditJSON = JSON.parse(response);
		var lastHiatusMention;
		//list of words that counts as a mention of the hiatus
		var keywords = ["hiatus"];
		for(var i = 0; i < 100; i++){
			for(var j = 0; j < keywords.length; j++){
				//checks only post titles and post content if self-post
				if(subbredditJSON.data.children[i].data.selftext.toLowerCase().includes(keywords[j]) == true || subbredditJSON.data.children[i].data.title.toLowerCase().includes(keywords[j]) == true){
					lastHiatusMention = new Date(subbredditJSON.data.children[i].data.created_utc * 1000);
					document.getElementById("hiatusLink").href = "https://old.reddit.com" + subbredditJSON.data.children[i].data.permalink;
					i = 100;
				};
			};
		};
		//loads the next 100 if hiatus is not mentioned then runs the function again
		if (lastHiatusMention == null){
			requestSubredditData(subbredditJSON.data.after);
		};
		return lastHiatusMention;
	};

	function switchMode(){
		if(mode == 0){
			//DAYS only mode
			mode = 1;
			document.getElementById("moreorless").innerHTML = "more";
		}
		else if(mode == 1){
			//DD:HH:MM:SS mode
			mode = 0;
			document.getElementById("moreorless").innerHTML = "less";
		};
	};
	 
	function timer(updown, zeroTime, id){
		var timeNow = new Date();
		if (updown == "up"){
			var diffDays = (timeNow.getTime() - zeroTime.getTime()) / oneDay;
			}
		else if (updown == "down"){
			var diffDays = (zeroTime.getTime() - timeNow.getTime()) / oneDay;
		}
		
		var diffHours = (diffDays - Math.floor(diffDays)) * 24;
		var diffMinutes = (diffHours - Math.floor(diffHours)) * 60;
		var diffSeconds = (diffMinutes - Math.floor(diffMinutes)) * 60;
		
		//Removes all decimal places in each portion
		diffDays = Math.floor(diffDays);
		diffHours = Math.floor(diffHours);
		diffMinutes = Math.floor(diffMinutes);
		diffSeconds = Math.floor(diffSeconds);
	
		if (mode == 0){
			document.getElementById(id).innerHTML =  diffDays + "d : " + diffHours + "h : " + diffMinutes + "m : " + diffSeconds + "s";
			document.getElementById(id).style.fontSize = "100%";
		}
		else if (mode == 1){
			if (diffDays == 1){
				document.getElementById(id).innerHTML =  diffDays + " Day";	
			}
			else if (diffDays == 0){
				document.getElementById(id).innerHTML =  "Less Than A Day";		
			}
			else {
				document.getElementById(id).innerHTML =  diffDays + " Days";		
			}
			document.getElementById(id).style.fontSize = "160%";
		};
		
		if (updown == "down" && diffDays < 0){
			document.getElementById(id).innerHTML =  "Rank Up!";
		}
		
		return diffDays
	};
	
	//The Grand Array of Hiatuses
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
	['Legs From Here To Homeworld','???','22 Jul 2018','???','???',0,'N/A',0,'']
	];
	
	//makes an HTML table from the array
	function createTable(array) {
		var diffDays = timer("up", latestRelease, "count");
		array[array.length - 1][5] = diffDays;
	//	array[array.length - 1][6] = diffDays; <-- Not being used as we're In The Dark
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

	//does the ticking
	window.setInterval(function(){
		timer("up", latestRelease, "count");
		timer("down", countdownEnd, "count2");
	}, 250);
	
	//every 30 seconds, the most recent 100 posts on the subreddit are loaded up again in case there has been a new post that mentions hiatus
	window.setInterval(requestSubredditData, 30000);
