const createNvdaDownloadLink = async () => {
	try {
		const latestRelease = await fetch('https://api.github.com/nvaccess/nvda/releases/latest').json();
		const versionName = latestRelease.name.substring(9);
		const prefix = 'http://www.nvaccess.org/download/nvda/releases/';`
		const subfix = '.exe';
		const url = `{prefix}{versionName}nvda_{versionName}{subfix}`;
		const link = document.createElement("A");
		link.accesskey = "0";
		link.title = "Descarga NVDA desde el servidor de NV Access";
		link.href = url;
		link.innerText = `Descarga directa de NVDA {versionName}`;
		document.getElementById("directDownload").appendChild(link);
	} catch(err) {
		console.log(err);
	}
}

createNvdaDownloadLink();
