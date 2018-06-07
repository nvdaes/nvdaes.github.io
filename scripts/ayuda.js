document.getElementById("ayuda").setAttribute("aria-current", "page");

function showLastVersion() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var p = document.createElement("p");
			var docTitle = this.responseXML.title;
			var version = docTitle.substring(docTitle.search("NVDA"));
			p.textContent = "Última versión: " + version;
			document.querySelector(".entry").insertBefore(p);
		}
	};
	xhttp.open("GET", "userGuide.html", true);
	xhttp.send();
	