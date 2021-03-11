const Discord = require("discord.js");
const { discord } = require("./utils/horizonUtils");
const { welcome } = require("./include/welcome");

require('./server');

const bot = new Discord.Client();

bot.on("ready", async () => {
    await bot.user.setPresence({
        activity: {
            name: `Seja bem vindo ao Horizon!!`,
            type: 1,
            url: "https://twitch.tv/bravanzin",
        },
    });
    console.log("[Bot] Connected");
});

bot.on("guildMemberAdd", (user) => {
    welcome(user);
});

bot.login(discord);
