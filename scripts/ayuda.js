document.getElementById("ayuda").setAttribute("aria-current", "page");

function showLastVersion() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var p = document.createElement("p");
			var docTitle = this.responseXML.title;
		}
	};
	xhttp.open("GET", "userGuide.html", true);
	xhttp.send();
}

showLastVersion();
