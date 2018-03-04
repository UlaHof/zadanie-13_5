function convertTime(time) {
	var time = Math.round(time),
		seconds = (time % 60),
		minutes = Math.floor((time/60)%60),
		hours = Math.floor(time/3600);  
	var time = "";
	if (hours > 0) { 
		time+= hours + " godz ";
	}
	if (minutes > 0) {
		time+= minutes + " min ";
	}
	if (seconds > 0) {
		time+= seconds + " sek";
	}
	return(time);
}
 exports.timeConverter = convertTime;