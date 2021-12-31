const getDownloadUrl = async () => {
	try {
		const release = await fetch('https://api.github.com/nvaccess/nvda/releases/latest').json();
		return release.name;
	} catch(err) {
		console.log(err);
	}
}

const releaseName = getDownloadUrl();
document.getElementById("directDownload").innerText = `${releaseName}`;
