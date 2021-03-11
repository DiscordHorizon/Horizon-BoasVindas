const Discord = require("discord.js");
const { discord } = require("./utils/horizonUtils");
const { users } = require("./include/users");
const { welcome } = require("./include/welcome");

const bot = new Discord.Client();

bot.on("ready", () => {
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
