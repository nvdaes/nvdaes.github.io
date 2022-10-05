const downloadParagraph = document.getElementById("downloadParagraph");
const downloadLink = document.getElementById("directDownload");
const button = document.createElement("button");
button.innerText = "Copiar enlace de descarga";

// button.addEventListener("click", copyUrl);

const copyUrl = () => {
	try {
		navigator.clipboard.writeText(downloadLink.getAttribute("href"));
		alert("Enlace copiado");
	} catch (err) {
		alert("No se ha podido copiar el enlace");
	}
}

downloadParagraph.appendChild(button);
