const { Client, Attachment } = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/658429408721240065/660103205396676619/glaz.png');
        message.channel.send(attachment);
}

module.exports.help = {
    name: "glaz"
}