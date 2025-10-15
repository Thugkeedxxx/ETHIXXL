// ping.js
module.exports = {
  name: 'ping',
  description: 'Check bot response time ⚡',
  async execute(sock, m, args) {
    const start = Date.now();
    await sock.sendMessage(m.key.remoteJid, { text: 'Pinging... 🛰️' }, { quoted: m });
    const end = Date.now();
    const ping = end - start;

    await sock.sendMessage(m.key.remoteJid, {
      text: `*📡 global.botName || 'Bot' Ping Response*⚡ Response: *{ping}ms*`,
      contextInfo: {
        externalAdReply: {
          title: `${global.botName || 'Bot'} - Always online 💫`,
          body: 'Join our WhatsApp channel for updates 🚀',
          thumbnailUrl: 'https://catbox.moe/your-bot-image.jpg', // Replace with your link
          sourceUrl: 'https://chat.whatsapp.com/your-channel-link',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  }
};
