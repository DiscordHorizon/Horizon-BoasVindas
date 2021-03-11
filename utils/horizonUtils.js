let config;
try {
    config = require("../config.json");
} catch (error) {
    config = null;
}

exports.discord = config ? config.discord : process.env.DISCORD;
exports.channels = {
    welcome: config ? config.channels.welcome : process.env.WELCOME,
    rules: config ? config.channels.rules : process.env.RULES,
};
