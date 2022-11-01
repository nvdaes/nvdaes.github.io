const downloadLink = document.getElementById("directDownload");
const lastReleaseUrl = 'https://api.github.com/repos/nvaccess/nvda/releases/latest';

const lastRelease = async() => {
	const response = await fetch(lastReleaseUrl);
	const data = await response.json();
	const tagName = data["tag_name"];
	const releaseNameForUrl =tagName.substr(9);
	console.log(releaseNameForUrl);
}