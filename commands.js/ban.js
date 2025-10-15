// commands/ban.js
module.exports = {
  name: 'ban',
  description: 'Ban a user',
  async execute(message, args) {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
      return message.reply('❌ You do not have permission to ban users.');
    }
    const user = message.mentions.users.first();
    if (!user) return message.reply('Please mention a user to ban.');const member = message.guild.members.cache.get(user.id);
    if (!member) return message.reply('User not found in this server.');

    await member.ban( reason: 'Banned by bot command' );
    message.channel.send(`🚫 Banned user:{user.tag}`);
  }
};
