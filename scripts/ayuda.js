document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var div = document.createElement("DIV");
div.setAttribute("id", "div");
var button = document.createElement("BUTTON");
button.setAttribute("id", "button");
var text = document.createTextNode("Información sobre placeMarkers");
button.appendChild(text);
aside.appendChild(button);
aside.appendChild(div)

$(document).ready(function () {
	$("#button").click(function () {
		$.getJSON("https://api.github.com/repos/nvdaes/repos/placeMarkers/releases/latest", function(json) {
			$("#div").text(json.name);
		};
	});
});

