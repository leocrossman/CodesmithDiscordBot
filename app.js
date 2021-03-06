const { token } = require('./secret.json');
const Discord = require('discord.js');
const fs = require('fs');
const getVictim = require('./getVictim');
const bot = new Discord.Client({
  // intents: [34359738368],
  // intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
  intents: [Discord.Intents.FLAGS.GUILDS],
});
// bot.commands = new Discord.Collection();

//Playing Message
bot.on('ready', async () => {
  //Log Bot's username and the amount of servers its in to console
  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

  // const channel = bot.channels.cache.get('912344104644530199');
  // channel.send(`HAPPY NEW YEAR EVERYONE😘 CAN'T WAIT TO TARGET YOU ALL IN THE NEW YEAR😈🎯`);

  //Set the Presence of the bot user
  bot.user.setActivity('The Victim Game', { type: 'PLAYING' });
});

bot.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'victim') {
    await interaction.reply(getVictim());
  }
});

//Token needed in token.json
bot.login(token);
