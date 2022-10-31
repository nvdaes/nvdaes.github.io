const directDownload = document.getElementById('downloadParagraph');
const lastReleaseUrl = 'https://api.github.com/repos/nvaccess/nvda/releases/latest';

const lastRelease = async () => {
  const response =await fetch(lastReleaseUrl);
  const json = await response.json();
  const releaseName = await json.name;
  const version = await releaseName.substr(8);
  const directLink = await document.createElement('a');
  await directLink.setAttribute('href', `https://www.nvaccess.org/download/nvda/releases/${version}/nvda_${version}.exe`);
  await directLink.setAttribute('accesskey', '0');
  directLink.innerText = `Descargar NVDA ${version}`;
  await directDownload.appendChild(directLink);
}


lastRelease();