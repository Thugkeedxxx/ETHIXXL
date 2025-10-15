// commands/play.js
const ytdl = require('ytdl-core');

module.exports = {
  name: 'play',
  description: 'Download/play music from YouTube link',
  async execute(message, args) {
    if (!args.length) return message.reply('Please provide a YouTube link!');
    const url = args[0];
    if (!ytdl.validateURL(url)) return message.reply('Invalid YouTube URL.');

    // Download or stream logic here (example: just reply for now)
    message.channel.send(`🎵 Fetching audio from: ${url}`);
    // Add your logic to download or stream the audio here
  }
};