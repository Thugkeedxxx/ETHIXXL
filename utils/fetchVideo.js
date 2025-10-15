const ytdl = require('ytdl-core');

async function fetchVideo(url) {
  if (!ytdl.validateURL(url)) throw new Error('Invalid YouTube URL');
  const info = await ytdl.getInfo(url);
  const videoStream = ytdl(url, { quality: 'highestvideo' });
  return { stream: videoStream, title: info.videoDetails.title };
}

module.exports = fetchVideo;