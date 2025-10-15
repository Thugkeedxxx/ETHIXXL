// commands.js
const BOT_NAME = "𝙴𝚃𝙷𝙸𝚇𝚇𝙻-𝚇𝙼𝙳";
const BOT_IMAGE_URL = "https://freeimage.host/i/KeQ2raR"; // replace with your catbox image link

const menu = () => {
  return `
✨ *Welcome to BOT_NAME* ✨

👋 Hello user! Here’s the menu:

🔹 *Commands:*
1️⃣ !play [song] - 🎵 Play music from YouTube  
2️⃣ !download [url] - ⬇️ Download media  
3️⃣ !ban [user] - 🚫 Ban a user  
4️⃣ !help - 📚 Show this menu

🌐 Join our WhatsApp Channel:  
https://whatsapp.com/channel/0029VbB7a9v6LwHqDQERef0M

⚡ Powered by *{BOT_NAME}*  
`;
};

const fetchingAudioMsg = (song) => {
  return `⏳ *BOT_NAME* is fetching your audio: 🎶{song} ...`;
};

const downloadedAudioMsg = (song) => {
  return `✅ Audio downloaded successfully: 🎧 song - Enjoy¡;
;

module.exports = 
  menu,
  fetchingAudioMsg,
  downloadedAudioMsg,
  BOT_NAME,
  BOT_IMAGE_URL
;
