const Discord = require("discord.js");
const { discord, guild } = require("./utils/horizonUtils");
const { users } = require("./include/users");
const { welcome } = require("./include/welcome");

const bot = new Discord.Client();

bot.on("ready", async () => {
    await bot.user.setPresence({
        activity: {
            name: `Seja bem vindo ao Horizon!!`,
            type: 1,
            url: "https://twitch.tv/bravanzin",
        },
    });
    users(bot.guilds.cache.get(guild));
    console.log("[Bot] Connected");
});

bot.on("guildMemberAdd", (user) => {
    users(user.guild);
    welcome(user);
});

bot.on("guildMemberRemove", (user) => {
    users(user.guild);
});

bot.login(discord);
