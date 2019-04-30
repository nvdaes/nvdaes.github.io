var audio = document.getElementById("chris");
var div = document.getElementById("audioContainer");
var button = document.createElement("BUTTON");
button.setAttribute("type", "button");
button.setAttribute(""onclick", "playChris");
button.innerText = "Escuchar a Chris";
div.insertBefore(button, audio);

function playChris() {
	audio.currentTime = 952;
}