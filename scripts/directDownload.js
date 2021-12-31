const getDownloadUrl = async () => {
	try {
		const release = await fetch('https://api.github.com/nvaccess/nvda/releases/latest').json();
		await document.getElementById("directDownload").innerText = `${release.name}`;
	} catch(err) {
		console.log(err);
	}
}


