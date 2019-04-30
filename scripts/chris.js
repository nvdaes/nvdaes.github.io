var audio = document.getElementById("chris");
audio.ontimeupdate = function() {
	if (audio.currentTime == 1293) {
		audio.curentTime = 952;
	}
}
