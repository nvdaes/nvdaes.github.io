document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");

var form = document.createElement("FORM");
var p = document.createElement("P");
var label = document.createElement("LABEL");
label.setAttribute("for", "repo");
t = document.createTextNode("cuenta/repositorio de GitHub");
label.appendChild(t);
var input = document.createElement("INPUT");
input.setAttribute("type", "text");
input.setAttribute("id", "repo");
input.setAttribute("name", "repo");
label.appendChild(input);
var submit = document.createElement("BUTTON");
submit.setAttribute("id", "submit");
submit.setAttribute("type", "button");
var t = document.createTextNode("Consultar descargas de última versión");
submit.appendChild(t);
p.appendChild(label);
form.appendChild(p);
form.appendChild(submit);

$(document).ready(function () {
	$("#submit").click(function () {
		$.getJSON("https://api.github.com/repos/releases/latest", function(json) {
			var name = json.name;
		});
	});
});
