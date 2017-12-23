function setAriaCurrent() {
	var title = document.title;
	if title === "Comunidad hispanohablante de NVDA" {
		document.getElementById("inicio").setAttribute("aria-current", "page");
	} else if title.includes("- Ayuda y descarga") {
		document.getElementById("ayuda".setAttribute("aria-current", "page");
	}
}

setAriaCurrent();
