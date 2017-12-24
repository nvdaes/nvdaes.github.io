function footerSetAriaCurrent() {
	var title = document.title;
	if title.includes("contacto") {
		document.getElementById("contact").setAttribute("aria-current", "page");
	} else if title.includes("correo") {
		document.getElementById("group").setAttribute("aria-current", "page");
	}
}

footerSetAriaCurrent();
