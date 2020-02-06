let Discord = module.require("discord.js")
const botsettings = require("../bot_settings.json")
module.exports.run = async (bot, message, args) => {
	message.reply(message.author.avatarURL)
}

module.exports.help = {
    name: "avatar"
}