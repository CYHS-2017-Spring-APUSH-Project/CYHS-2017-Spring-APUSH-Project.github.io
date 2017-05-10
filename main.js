
function adjustTableWidth() {
	var x = document.getElementById("navBar").getElementsByTagName("td");
	var length = document.getElementById("navBar").getElementsByTagName("td").length;
	
	for (var i = 0; i < length; i++) {
		x[i].style.width = (1060/length) + "px";
		//x[i].style.backgroundColor = "red"; 
	}     
}

var iterate = 0;
		
function scroll() {
	iterate = iterate + 1;
	document.getElementById("gallery").style.backgroundPosition = iterate + "px center";
}
		
setInterval(scroll, 40);

window.onload = function() {
  adjustTableWidth();
}

// Im going to be coming back here later to work on this function - Bryce
function dropDown(menuNum) {

	document.getElementById(menuNum).style.visibility = visible;
	
}
