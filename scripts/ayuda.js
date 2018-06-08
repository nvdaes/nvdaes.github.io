document.getElementById("ayuda").setAttribute("aria-current", "page");

function showLastVersion() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var p = document.createElement("P");
			var docTitle = this.responseXML.title;
			//var versionPos =docTitle.search("NVDA");
			//var version = docTitle.substring(versionPos);
			t = document.createTextNode(title);
			p.appendChild(t);
			document.querySelector("div.entry").insertBefore(p);
		}
	};
	xhttp.open("GET", "https://nvdaes.github.io/userGuide.html", true);
	xhttp.send();
}

showLastVersion();
