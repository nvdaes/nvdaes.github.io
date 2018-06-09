document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var details = document.createElement("DETAILS");
var summary = document.createElement("SUMMARY");

addons = [
	"clipContentsDesigner",
	"emoticons",
	"eMule",
	"placeMarkers",
	"readFeeds",
	"reportSymbols",
]

for (addon in addons) {
	details.setAttribute("id", addon);
	var t = document.createTextNode(addon);
	summary.appendChild(t);
	details.appendChild(summary);
	aside.appendChild(details);
}

$(document).ready(function () {
	$("details").click(function () {
		$.getJSON("https://api.github.com/repos/nvdaes/" + $(this).attr("id") + "releases/latest", function(json) {
			var name = json.name;
			$("#details").text(name);
		});
	});
});
