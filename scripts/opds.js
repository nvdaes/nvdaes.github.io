
let opds = document.getElementById("opds");

function copy() {
	opds.select()
	opds.setSelectionRange(0, 99999); /*For mobile devices*/
	document.execCommand("copy");
	alert("Enlace copiado: " + opds.value);
}

function addCopyButton() {
	let paragraph = document.getElementById("p");
	let button = document.createElement("BUTTON");
	button.setAttribute("type", "button");
	button.addEventListener("click", copy);
	button.innerText = "Copiar enlace OPDS";
	paragraph.appendChild(button);
}


addCopyButton();
opds.blur()