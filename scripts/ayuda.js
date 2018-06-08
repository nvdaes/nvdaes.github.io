document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var div = document.createElement("DIV");
var button = document.createElement("BUTTON");
var text = document.createTextNode("Información sobre placeMarkers");
button.appendChild(text);
aside.appendChild(button);

function showAddonInfo(addon) {
		var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var responseText = xhttp.responseText;
			var json = JSON.parse(responseText.substring(responseText.search("{")));
			var name = json.name;
			var info = document.createTextNode(addon + name);
			div.appendChild(info);
		}
	};
	xhttp.open("GET", "https://api.github.com/repos/nvdaes/" + addon + "/releases/latest", true);
	xhttp.send();
}

function showPlaceMarkersInfo() {
	showAddonInfo("placeMarkers");
}

button.addEventListener("click", showPlaceMarkersInfo, true);
