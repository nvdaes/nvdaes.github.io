document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var button = document.createElement("BUTTON");
var text = document.createTextNode("Prueba");
button.appendChild(text);
aside.appendChild(button);
var div = document.createElement("DIV");

function prueba() {
	var json = "https://github.com/repos/nvdaes/placeMarkers/releases/latest";
	alert("Variable creada");
}

button.addEventListener("click", prueba, true);
