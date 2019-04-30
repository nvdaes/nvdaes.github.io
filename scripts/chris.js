var audio = document.getElementById("chris");
audio.ontimeupdate = function() {
	if (audio.currentTime == 955) {
		alert("audio");
		// audio.currentTime = 952;
	}
}
