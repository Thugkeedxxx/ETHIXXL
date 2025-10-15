const { MessageMedia } = require('whatsapp-web.js');

async function replyWithImage(client, chat, imageUrl, caption = '') {
  const media = await MessageMedia.fromUrl(imageUrl);
  await client.sendMessage(chat.id._serialized, media, { caption });
}module.exports = replyWithImage;
