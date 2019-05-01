var audio = document.getElementById("chris");

function pauseChris() {
	if (audio.currentTime >= 331000) {
		audio.pause();
	}
}

function playChris() {
	audio.currentTime = 952;
	audio.play();
	var interval = setInterval(pauseChris, 1000);
}

function clearInterval() {
	clearInterval(interval)
}

function addChrisButton() {
	var div = document.getElementById("audioContainer");
	var button = document.createElement("BUTTON");
	button.setAttribute("type", "button");
	button.addEventListener("click", playChris);
	audio.addEventListener("pause", clearInterval);
	audio.addEventListener("seeking", clearInterval);
	button.innerText = "Escuchar a Chris";
	div.insertBefore(button, audio);
}


addChrisButton();
