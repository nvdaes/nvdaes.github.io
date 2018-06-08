document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var button = document.createElement("BUTTON");
var text = document.createTextNode("Prueba");
button.appendChild(text);
aside.appendChild(button);
var div = document.createElement("DIV");

function prueba() {
		var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// document.getElementById("demo").innerHTML = this.responseText;
			alert("hecho");
		}
	};
	xhttp.open("GET", "https://api.github.com/repos/nvdaes/placeMarkers/releases/latest", true);
	xhttp.send();
}

button.addEventListener("click", prueba, true);
