document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var details = document.createElement("DETAILS");
details.setAttribute("id", "details");
details.setAttribute("summary", "información sobre placeMarkers");
aside.appendChild(details);

$(document).ready(function () {
	$("#details").click(function () {
		$.getJSON("https://api.github.com/repos/nvdaes/placeMarkers", function(json) {
			var name = json.name;
			$("#details").text(name);
		});
	});
});
