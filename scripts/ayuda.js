document.getElementById("ayuda").setAttribute("aria-current", "page");

var aside = document.getElementById("complementario");
var h = document.createElement("H5");
var t = document.createTextNode("Formulario para obtener información sobre complementos en GitHub");
h.appendChild(t);
aside.appendChild(h);
var form = document.createElement("FORM");
form.setAttribute("role", "form");
// First form field
var p = document.createElement("P");
var label = document.createElement("LABEL");
label.setAttribute("for", "repo");
t = document.createTextNode("cuenta/repositorio de GitHub (requerido)");
label.appendChild(t);
var inputRepo = document.createElement("INPUT");
inputRepo.setAttribute("type", "text");
inputRepo.setAttribute("id", "repo");
inputRepo.setAttribute("name", "repo");
inputRepo.setAttribute("placeholder", "Ejemplo: nvdaes/emoticons");
label.appendChild(inputRepo);
p.appendChild(label);
form.appendChild(p);
// Second form field
var p = document.createElement("P");
var label = document.createElement("LABEL");
label.setAttribute("for", "version");
t = document.createTextNode("Id de la versión (opcional). Por defecto se usará la última estable:");
label.appendChild(t);
var inputVersion = document.createElement("INPUT");
inputVersion.setAttribute("type", "text");
inputVersion.setAttribute("id", "version");
inputVersion.setAttribute("name", "version");
inputVersion.setAttribute("placeholder", "Ejemplo: 10993717");
label.appendChild(inputVersion);
p.appendChild(label);
form.appendChild(p);

var p = document.createElement("P");
var submitCount = document.createElement("INPUT");
submitCount.setAttribute("id", "submitCount");
submitCount.setAttribute("type", "button");
submitCount.setAttribute("value", "Consultar número de descargas");
p.appendChild(submitCount);
form.appendChild(p);

var p = document.createElement("P");
var submitId = document.createElement("INPUT");
submitId.setAttribute("id", "submitId");
submitId.setAttribute("type", "button");
submitId.setAttribute("value", "Consultar lista de versiones");
p.appendChild(submitId);
form.appendChild(p);

aside.appendChild(form);

$(document).ready(function () {
	$("#submitCount").click(function () {
		var version;
		if ($.trim(inputVersion.value).length === 0) {
			version = "latest";
		} else {
			version = inputVersion.value;
		}
		$.getJSON("https://api.github.com/repos/" + inputRepo.value + "/releases/" + version, function(json) {
			var assetName = json.assets[0].name;
			var downloadCount = json.assets[0].download_count;
			alert(assetName + " - " + downloadCount);
		});
	});
	
	$("#submitId").click(function () {
		$.getJSON("https://api.github.com/repos/" + inputRepo.value + "/releases", function(json) {
			var i = 0;
			var message = "";
			for (i=0; i < json.length; i++) {
				message += json[i].name + " - " + json[i].id.toString() + "\n";
			}
			alert(message);
			//alert (json[0].id.toString());
		});
	});
});
