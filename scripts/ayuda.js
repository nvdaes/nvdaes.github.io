document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var div = document.createElement("DIV");
div.setAttribute("id", "div");
var button = document.createElement("BUTTON");
var text = document.createTextNode("Información sobre placeMarkers");
button.appendChild(text);
aside.appendChild(button);

$(document).ready(function () {
	getPlaceMarkersInfo();
});

function getPlaceMarkersInfo() {
	$.getJSON("https://api.github.com/repos/nvdaes/placeMarkers/tags").done(function (json) {
		var release = json[0];
		var name = release.name;
		$("#div").innerHTML(name);
	});    
}
