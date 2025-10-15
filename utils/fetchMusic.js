const ytdl = require('ytdl-core');

async function fetchMusic(url) {
  if (!ytdl.validateURL(url)) throw new Error('Invalid YouTube URL');
  const info = await ytdl.getInfo(url);
  const audioStream = ytdl(url, { filter: 'audioonly' });
  return { stream: audioStream, title: info.videoDetails.title };
}

module.exports = fetchMusic;
