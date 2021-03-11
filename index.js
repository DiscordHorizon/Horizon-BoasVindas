const discord = require('discord.js');
const { config } = require('./utils/horizonUtils');
const { welcome } = require('./include/welcome');

const bot = new discord.Client();

bot.on('ready', () => {
    console.log('[Bot] Connected');
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (message.content === '!bravanzin') {
        welcome(message);
        //console.log(message.author)
    }
})

bot.login(config.discord);