var audio = document.getElementById("chris");

function pauseChris() {
	if (audio.currentTime >= 331000) {
		audio.pause();
		clearInterval(interval);
	}
}

function playChris() {
	audio.currentTime = 952;
	audio.play();
	var interval = setInterval(pauseChris, 1000);
}

function addChrisButton() {
	var div = document.getElementById("audioContainer");
	var button = document.createElement("BUTTON");
	button.setAttribute("type", "button");
	button.addEventListener("click", playChris);
	button.innerText = "Escuchar a Chris";
	div.insertBefore(button, audio);
}


addChrisButton();
