function getCurrentTime() {
    var today = new Date();
	var date = pad(today.getDate()) + '-' + pad((today.getMonth()+1)) + '-' + today.getFullYear();
	var time = pad(today.getHours()) + ":" + pad(today.getMinutes()) + ":" + pad(today.getSeconds()) + "." + pad3(today.getMilliseconds());
	var dateTime = date +' '+ time;
	return dateTime;
} 

function pad(num) {
	return ('0' + num).slice(-2);
}

function pad3(num) {
	return ('00' + num).slice(-3);
}