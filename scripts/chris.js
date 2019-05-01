var audio = document.getElementById("chris");
addChrisButton();
playChris();

function addChrisButton() {
	var div = document.getElementById("audioContainer");
	var button = document.createElement("BUTTON");
	button.setAttribute("type", "button");
	button.setAttribute("onclick", "playChris()");
	button.innerText = "Escuchar a Chris";
	div.insertBefore(button, audio);
}

pauseChris() {
	audio.pause();
}

function playChris() {
	audio.currentTime = 952;
	audio.play();
	setTimeout(pauseChris, 331000);
}

