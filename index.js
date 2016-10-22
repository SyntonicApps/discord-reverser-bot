const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'MjM5MjI1NDk3NjUxNzczNDQx.CuxrnQ.3dckruulZ9FQ6gsFbIhCImYXuGI';

bot.on('ready', () => {
	console.log('Hello World!');
});

// Event to listen to messages sent to the server where the bot is located
bot.on('message', message => {
	// So the bot doesn't reply to iteself
	if (message.author.bot) return;
	
	// Check if the message starts with the `!` trigger
	if (message.content.indexOf('!') === 0) {
		// Get the user's message excluding the `!`
		var text = message.content.substring(1);
		
		// Reverse the message
		var reversed = '';
		var i = text.length;
		
		while (i > 0) {
			reversed += text.substring(i - 1, i);
			i--;
		}
		
		// Reply to the user's message
		message.reply(reversed);
	}
});

bot.login(token);