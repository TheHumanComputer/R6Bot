let Discord = module.require("discord.js")
const botsettings = require("../bot_settings.json")
module.exports.run = async (bot, message, args) => {
    message.channel.send(`Hello! I am up and running! With Version: ${botsettings.version}`);    
}

module.exports.help = {
    name: "checkResponse"
}