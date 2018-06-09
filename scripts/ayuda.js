document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var h5 = document.createElement("h5");
var t = "Formulario para obtener información sobre complementos en GitHub";
var aside.appendChild(h5);
var form = document.createElement("FORM");
form.setAttribute("role", "form");
var p = document.createElement("P");
var label = document.createElement("LABEL");
label.setAttribute("for", "repo");
t = document.createTextNode("cuenta/repositorio de GitHub");
label.appendChild(t);
var input = document.createElement("INPUT");
input.setAttribute("type", "text");
input.setAttribute("id", "repo");
input.setAttribute("name", "repo");
input.setAttribute("placeholder", "example: nvdaes/emoticons")
label.appendChild(input);
var submit = document.createElement("INPUT");
submit.setAttribute("id", "submit");
submit.setAttribute("type", "button");
submit.setAttribute("value", "Consultar descargas de última versión");
p.appendChild(label);
form.appendChild(p);
form.appendChild(submit);
aside.appendChild(form);

$(document).ready(function () {
	$("#submit").click(function () {
		$.getJSON("https://api.github.com/repos/" + input.value + "/releases/latest", function(json) {
			var assetName = json.assets[0].name;
			var downloadCount = json.assets[0].download_count;
			alert(assetName + " " + downloadCount);
		});
	});
});

