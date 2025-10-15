const ytdl = require('ytdl-core')
const fs = require('fs')
const path = require('path')

module.exports = async function(url, sock, from) {
  const BOT_NAME = '🧠 𝙴𝚃𝙷𝙸𝚇𝚇𝙻‑𝚇𝙼𝙳 🤖'

  try {
    await sock.sendMessage(from, { text: `BOT_NAME🎧 Fetching audio...🔗 URL:{url}` })

    const info = await ytdl.getInfo(url)
    const title = info.videoDetails.title
    const filename = `title.mp3`
    const filePath = path.join(__dirname, '..', filename)

    const stream = ytdl(url,  filter: 'audioonly' )
    const file = fs.createWriteStream(filePath)

    stream.pipe(file)

    file.on('finish', async () => 
      await sock.sendMessage(from, 
        audio: fs.readFileSync(filePath),
        mimetype: 'audio/mp4',
        ptt: false,
        fileName: filename
      )

      await sock.sendMessage(from,  text: `✅ Done! Sent by{BOT_NAME}` })
      fs.unlinkSync(filePath)
    })

  } catch (err) {
    await sock.sendMessage(from, {
      text: `❌ ${BOT_NAME}\nError fetching audio.\nMake sure it's a valid YouTube link.`
    })
  }
}