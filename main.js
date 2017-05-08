var iterate = 0;
		
function scroll() {
	iterate = iterate + 1;
	document.getElementById("gallery").style.backgroundPosition = iterate + "px center";
}
		
setInterval(scroll, 40);
