document.getElementById("ayuda").setAttribute("aria-current", "page");

function prueba() {
	aside = document.getElementById("complementario");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			div.innerHTML(this.responseText);
			aside.appendChild(div);
		}
	};
	xhttp.open("GET", "../userGuide.html", true);
	xhttp.send();
}

var button = document.createElement("BUTTON");
var text = document.createTextNode("Prueba");
button.appendChild(text);
aside.appendChild(button);
button.addEventListener("click", prueba, true);
var div = document.createElement("DIV");
aside.appendChild(div);