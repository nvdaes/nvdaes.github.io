var audio = document.getElementById("chris");
audio.addEventListener("canplaythrough", addChrisButton);

function addChrisButton() {
	var div = document.getElementById("audioContainer");
	var button = document.createElement("BUTTON");
	button.setAttribute("type", "button");
	button.setAttribute("onclick", "playChris()");
	button.innerText = "Escuchar a Chris";
	div.insertBefore(button, audio);
}

function playChris() {
	audio.currentTime = 952;
	audio.play();
	// setTimeout(audio.pause(), 331000);
}
