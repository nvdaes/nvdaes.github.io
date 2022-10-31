const directDownload = document.getElementById('directDownload');
const lastReleaseUrl = 'https://api.github.com/repos/nvaccess/nvda/releases/latest';

const lastRelease = async () => {
  const response =await fetch(lastReleaseUrl);
  const json = await response.json();
  await directDownload.setAttribute('title', 'test');
}


lastRelease();