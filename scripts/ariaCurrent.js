function setAriaCurrent() {
	var title = document.title;
	if title== "Comunidad hispanohablante de NVDA " {
		var id = "inicio"
	}
	document.getElementById(id).removeAttribute("accesskey");
	document.getElementById(id).setAttribute("aria-current", "page");
}

setAriaCurrent();
