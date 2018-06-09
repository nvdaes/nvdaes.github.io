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
var submit = document.createElement("INPUT");
submit.setAttribute("type", "submit");
submit.setAttribute("id", "submit");
p.appendChild(label);
form.appendChild(p);
form.appendChild(submit);
aside.appendChild(form);

$(document).ready(function () {
	$("#submit").click(function () {
		$.getJSON("https://api.github.com/repos/" + $("#repo").val() + "/releases/latest", function(json) {
			var name = json.name);
			var p = document.createElement("P");
			var t = document.createTextNode(name);
			p.appendChild(t);
			aside.appendChild(p);
		});
	});
});
