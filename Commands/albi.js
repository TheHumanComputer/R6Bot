const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
		.setTitle('ALIBI - Defender')
		.setDescription("Alibi's details")
		.setThumbnail('https://cdn.discordapp.com/attachments/658429408721240065/659908130565783612/alibi.png')
		.addField('UNIQUE ABILITIES AND PLAYSTYLE', 'Prisma projects holograms identical to Alibi in an idle position. If you shoot or touch the holograms, you’ll be marked and pinged for the next few seconds. If Prisma is deployed outside, a false “Defender Outside” warning is triggered for Attackers. To add an element of surprise, Prisma conceals the identity of any Defender who ventures outside. Any bullet, melee, or explosives damages Prisma, and will shoot through the hologram. Be careful not to stand too close.')
		.addBlankField()
		.addField('ROLE', 'Intel-Denier, Intel-Gatherer, Roam, Trap')
		.addBlankField()
		.addField('Armor: ', '1', true)
		.addField('Speed: ', '3', true)
		.addField('Diffifuclty: ', '3', true)

message.channel.send(Embed);
}

module.exports.help = {
    name: "alibi"
}