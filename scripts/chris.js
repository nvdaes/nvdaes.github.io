var audio = document.getElementById("chris");

function pauseChris() {
	if (952 > audio.currentTime || audio.currentTime >= 1283) {
		audio.pause();
		audio.currentTime = 952;
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
