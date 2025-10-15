module.exports = async function(sock, from) {
  const BOT_NAME = '🧠 𝙴𝚃𝙷𝙸𝚇𝚇𝙻‑𝚇𝙼𝙳 🤖'
  const BOT_IMAGE = 'https://freeimage.host/i/KeQ2raR'
  const CHANNEL_LINK = 'https://wa.me/27630425996' // or your channel/group invite link

  const caption = `
╭━━━〔 BOT_NAME 〕━━━⬣
┃
┃ 👤 Owner: Thugkeed Tech
┃ 🧠 Bot Type: WhatsApp AI     Tools
┃ 🌐 Channel:{CHANNEL_LINK}
┃
┣━━━〔 📜 Commands 〕━━⬣
┃
┃ 🎧 !ytmp3 <url> — YouTube Music Downloader
┃ 📶 !ping — Bot Status / Online Check
┃ 🧾 !menu — Show this menu
┃ 🚫 !ban <user> — Admin-only (Coming Soon)
┃ 🔧 Dev Tools — (Coming Soon)
┃
╰━━━━━━━━━━━━━━━━━━━━⬣
🔮 Stay updated. More features dropping soon!
`

  await sock.sendMessage(from, {
    image: { url: BOT_IMAGE },
    caption: caption
  })
}
