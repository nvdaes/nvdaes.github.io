document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var button = document.createElement("BUTTON");
button.setAttribute("id", "button");
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
	/*$("#addonsButton").click(function () {
		for (var i = 0; i < addonsLength; i++) {
			var details = document.createElement("DETAILS");
			var summary = document.createElement("SUMMARY");
			var t = document.createTextNode(addons[i]);
			summary.appendChild(t);
			details.appendChild(summary);
			$.getJSON("https://api.github.com/repos/nvdaes/" + addons[i] + "/releases/latest", function(json) {
				var name = json.name;
				var ul = document.createElement("UL");
				var li = document.createElement("LI");
				var t = document.createTextNode(name);
				li.appendChild(t);
				ul.appendChild(li);")
				details.appendChild(ul);
				aside.appendChild(details);
			});
		}
	});*/
});
