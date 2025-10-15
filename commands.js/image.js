// commands/image.js
module.exports = 
  name: 'image',
  description: 'Fetch an image by keyword',
  async execute(message, args) 
    if (!args.length) return message.reply('Please provide an image keyword.');
    const query = args.join(' ');
    message.channel.send(`🖼️ Searching image for:{query}`);
    // Add image API fetching logic here
  }
};
