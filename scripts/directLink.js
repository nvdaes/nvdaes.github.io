const directDownload = document.getElementById('directDownload');
const lastReleaseUrl = 'https://api.github.com/repos/nvaccess/nvda/releases/latest';

const lastRelease = async () => {
  const response =await fetch(lastReleaseUrl);
  const json = await response.json();
  const releaseName = await json.name;
  const version = await releaseName.substr(9);
  await directDownload.setAttribute('ref', `https://www.nvaccess.org/download/nvda/releases/${version}/nvda_${version}.exe`);
}


lastRelease();