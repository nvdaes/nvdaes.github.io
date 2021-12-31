const getDownloadUrl = async () => {
	try {
		const release = await fetch('https://api.github.com/nvaccess/nvda/releases/latest').json();
		await console.log(release.name)
	} catch(err) {
		console.log(err);
	}
}


