let Discord = module.require("discord.js")
const botsettings = require("../bot_settings.json")
module.exports.run = async (bot, message, args) => {
    message.channel.send(`Use the 'help' - (?) prefix and then the command you need help with! \nExample: '?guildMembers'`);   
}

module.exports.help = {
    name: "help"
}