const Discord = require('discord.js');
const { discord } = require('./utils/horizonUtils');
const { welcome } = require('./include/welcome');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('[Bot] Connected');
});

bot.on('guildMemberAdd', user => {
    welcome(user);
});

bot.login(discord);