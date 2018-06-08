document.getElementById("ayuda").setAttribute("aria-current", "page");

function prueba() {
	alert("prueba");
}

var aside = document.getElementById("complementario");
var button = document.createElement("BUTTON");
var text = document.createTextNode("Prueba");
button.appendChild(text);
aside.appendChild(button);
button.addEventListener("click", "prueba");
