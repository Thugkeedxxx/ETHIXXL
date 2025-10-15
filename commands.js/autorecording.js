client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // Show typing indicator for 3 seconds whenever someone sends a message
  message.channel.sendTyping();

  // Optionally wait a few seconds, then send reply
  // await new Promise(resolve => setTimeout(resolve, 3000));
});