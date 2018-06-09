document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");


addons = [
	"clipContentsDesigner",
	"emoticons",
	"eMule",
	"placeMarkers",
	"readFeeds",
	"reportSymbols",
]

var addonsLength = addons.length;
for (var i = 0; i < addonsLength; i++) {
	var details = document.createElement("DETAILS");
	var summary = document.createElement("SUMMARY");
	details.setAttribute("id", addons[i]);
	var t = document.createTextNode(addons[i]);
	summary.appendChild(t);
	details.appendChild(summary);
	aside.appendChild(details);
}

$(document).ready(function () {
	$("details").click(function () {
		$.getJSON("https://api.github.com/repos/nvdaes/" + "placeMarkers" + "/releases/latest", function(json) {
			var name = json.name;
			this.innerText(name);
		});
	});
});
