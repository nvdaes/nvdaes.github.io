function setAriaCurrent() {
	var title = document.title
	if title.includes("Ayuda y descarga") {
		document.getElementById("ayuda".setAttribute("aria-current", "page");
	}
}

setAriaCurrent();
