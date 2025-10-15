const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason } = require("@adiwajshing/baileys");
const P = require('pino');
const { menu, fetchingAudioMsg, downloadedAudioMsg, BOT_NAME, BOT_IMAGE_URL } = require('./commands');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');
  const { version, isLatest } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    logger: P({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state,
    version
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if(connection === 'close') {
      const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log('Connection closed due to', lastDisconnect.error, ', reconnecting:', shouldReconnect);
      if(shouldReconnect) startBot();
    } else if(connection === 'open') {
      console.log(`${BOT_NAME} Connected!`);
    }
  });

  sock.ev.on('messages.upsert', async (m) => {// Only handle new messages
    if (m.type !== 'notify') return;
    const msg = m.messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const sender = msg.key.remoteJid;

    try {
      if(msg.message.conversation === '!menu' || msg.message.conversation === '!help') {
        await sock.sendMessage(sender, {
          image: { url: BOT_IMAGE_URL },
          caption: menu()
        });
      }

      if(msg.message.conversation.startsWith('!play ')) {
        const song = msg.message.conversation.slice(6);
        await sock.sendMessage(sender, { text: fetchingAudioMsg(song) });
        // Here you'd add code to download/play the song
        setTimeout(async () => {
          await sock.sendMessage(sender, { text: downloadedAudioMsg(song) });
        }, 5000);
      }

      // Add more commands here as needed

    } catch (err) {
      console.error('Error handling message:', err);
    }
  });
}

startBot();