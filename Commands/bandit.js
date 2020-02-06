const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
		.setTitle('BANDIT - Defender')
		.setDescription("Bandit's details")
		.setThumbnail('https://cdn.discordapp.com/attachments/658429408721240065/659908586968973312/bandit.png')
		.addField('UNIQUE ABILITIES AND PLAYSTYLE', "Bandit is a secure, anti-hard breacher and roamer, capable of denying key entry points for the attackers and defending the objective while on the move. Bandit is capable of electrifying a variety of surfaces thanks to his special ability: Crude Electrical Device or CED-1 Shock Wire.")
		.addBlankField()
		.addField('ROLE', 'Anti-Hard-Breach, Roam, Secure')
		.addBlankField()
		.addField('Armor: ', '1', true)
		.addField('Speed: ', '3', true)
		.addField('Diffifuclty: ', '1', true)

message.channel.send(Embed);
}

module.exports.help = {
    name: "bandit"
}