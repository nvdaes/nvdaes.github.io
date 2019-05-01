var audio = document.getElementById("chris");
var interval = setInterval(pauseChris, 1000);

function pauseChris() {
	if (audio.currentTime >= 331000) {
		audio.pause();
	} else {
		audio.currentTime = 952;
	}
}

function playChris() {
	audio.currentTime = 952;
	audio.play();
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
