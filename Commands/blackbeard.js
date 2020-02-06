const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
		.setTitle('BLACKBEARD - Attacker')
		.setDescription("Blackbeard's details")
		.setThumbnail('https://cdn.discordapp.com/attachments/658429408721240065/660102778974109696/blackbeard.png')
		.addField('UNIQUE ABILITIES AND PLAYSTYLE', "Multiple layers of transparent polycarbonate and thermoplastic armor, coated with a spall shield and backed with ultra-light weight laminated glass. Protects the user against blunt impact and artillery fire.")
		.addBlankField()
		.addField('ROLE', 'Back-Line, Covering-Fire, Shield')
		.addBlankField()
		.addField('Armor: ', '2', true)
		.addField('Speed: ', '2', true)
		.addField('Diffifuclty: ', '1', true)

message.channel.send(Embed);
}

module.exports.help = {
    name: "blackbeard"
}