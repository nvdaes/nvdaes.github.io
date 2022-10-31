const directDownload = document.getElementById('directDownload');
const lastReleaseUrl = 'https://api.github.com/repos/nvaccess/nvda/releases/latest';

const lastRelease = async () => {
  const response =await fetch(lastReleaseUrl);
  const json = await response.json();
  const version = await json.name.substr(9);
  await directDownload.setAttribute('href', version());  
}


lastRelease();