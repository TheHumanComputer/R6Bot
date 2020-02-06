const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
		.setTitle('AMARU - Attacker')
		.setDescription("Amaru's details")
		.setThumbnail('https://cdn.discordapp.com/attachments/658429408721240065/660102500095098910/amaru.png')
		.addField('UNIQUE ABILITIES AND PLAYSTYLE', 'With the Garra Hook, Amaru can grapple onto ledges and windows and hoist herself up in record times. Her opponents now not only have to worry about attacks from above, but also attacks from below. With the Garra, Amaru is the only operator that can go up an open hatch, instead of down. When timed right, hooking the Garra onto a window can result in Amaru’s infamous Garra Kick, which instantly takes out an opponent standing behind the window.')
		.addBlankField()
		.addField('ROLE', 'Flank, Front-Line')
		.addBlankField()
		.addField('Armor: ', '2', true)
		.addField('Speed: ', '2', true)
		.addField('Diffifuclty: ', '2', true)

message.channel.send(Embed);
}

module.exports.help = {
    name: "amaru"
}