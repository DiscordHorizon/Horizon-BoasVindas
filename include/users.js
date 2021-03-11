const { channels } = require('../utils/horizonUtils');

module.exports = {
    async users(guild) {
        const channel = await guild.channels.cache.get(channels.users);
        channel.setName(`Horizon Members: ${guild.memberCount}`);
    }
}