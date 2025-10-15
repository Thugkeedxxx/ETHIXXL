module.exports = {
  name: 'help',
  description: 'Shows all commands',
  execute: async (client, message, args) => {
    const menu = `
✨ *THUGKEED PLUG* ✨  
🎵 *Music, Tools & More!*  
--------------------------------  
📌 *Commands:*  
▶️ !play [song] - Download music  
📥 !sniff [file link] - Download files  
🔨 !ban [@user] - Ban user (Admin)  
💡 !help - Show this menu  
--------------------------------  
📢 *Join our WhatsApp Channel:*  
https://chat.whatsapp.com/yourchannel  
    `;
    await message.reply(menu);
  },
};
