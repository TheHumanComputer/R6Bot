const { Client, Attachment } = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/658429408721240065/660107176748122122/sledge.png');
        message.channel.send(attachment);
}

module.exports.help = {
    name: "sledge"
}