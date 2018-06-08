document.getElementById("ayuda").setAttribute("aria-current", "page");

function prueba() {
	alert("prueba");
}

var aside = document.querySelector("aside");
var button = document.createElement("BUTTON");
aside.appendChild(button);
button.onclick = "prueba";
