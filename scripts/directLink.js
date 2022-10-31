const directDownload = document.getElementById('directDownload');
const lastReleaseUrl = 'https://api.github.com/repos/nvaccess/nvda/releases/latest';

const lastRelease = async () => {
  const response =await fetch(lastReleaseUrl);
  const json = await response.json();
  const version = await json.name;
  await directDownload.setAttribute('title', version);  
}


lastRelease();