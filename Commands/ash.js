const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
		.setTitle('ASH - Attacker')
		.setDescription("Ash's details")
		.setThumbnail('https://cdn.discordapp.com/attachments/658429408721240065/660102670480048158/ash.png')
		.addField('UNIQUE ABILITIES AND PLAYSTYLE', "Ash is a fast-paced front liner; capable of breaching, flanking and dividing the Defender's attention in seconds. Ash is capable of ranged soft breaching thanks to her modified M120 CREM Breaching Rounds.")
		.addBlankField()
		.addField('ROLE', 'Disable, Flank, Front-Line, Soft-Breach')
		.addBlankField()
		.addField('Armor: ', '1', true)
		.addField('Speed: ', '3', true)
		.addField('Diffifuclty: ', '2', true)

message.channel.send(Embed);
}

module.exports.help = {
    name: "ash"
}