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
          thumbnailUrl: 'https://freeimage.host/i/KeQ2raR', // Replace with your link
          sourceUrl: 'https://whatsapp.com/channel/0029VbB7a9v6LwHqDUERef0M',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  }
};
