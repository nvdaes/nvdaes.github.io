document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var button = document.createElement("BUTTON");
button.setAttribute("id", "addonsButton");
var buttonText = document.createTextNode("Información sobre complementos de nvdaes");
button.appendChild(buttonText);
aside.appendChild(button);

addons = [
	"clipContentsDesigner",
	"emoticons",
	"eMule",
	"placeMarkers",
	"readFeeds",
	"reportSymbols",
]

var addonsLength = addons.length;

$(document).ready(function () {
	$("#addonsButton").click(function () {
		for (var i = 0; i < addonsLength; i++) {
			var details = document.createElement("DETAILS");
			var summary = document.createElement("SUMMARY");
			var t = document.createTextNode(addons[i]);
			summary.appendChild(t);
			details.appendChild(summary);
			var p = document.createElement("P");
			$.getJSON("https://api.github.com/repos/nvdaes/" + addons[i] + "/releases/latest", function(json) {
				var t = document.createTextNode(json.name);
				p.appendChild(t);
			});
			details.appendChild(p);
			aside.appendChild(details); 
		}
	});
});
