document.getElementById("ayuda").setAttribute("aria-current", "page");
var aside = document.getElementById("complementario");
var button = document.createElement("BUTTON");
var text = document.createTextNode("Prueba");
button.appendChild(text);
aside.appendChild(button);
button.addEventListener("click", prueba, true);

function prueba() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var div = document.createElement("DIV");
			div.innerHTML(this.responseText);
			aside.appendChild(div);
		}
	};
	xhttp.open("GET", "https://api.github.com/repos/nvdaes/repos/placeMarkers/releases/latest", true);
	xhttp.send();
}

