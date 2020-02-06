const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Capitao - Attacker')
        .setDescription("Capitao's details")
        .setThumbnail('https://cdn.discordapp.com/attachments/658429408721240065/660102909270294559/capitao.png')
        .addField('UNIQUE ABILITIES AND PLAYSTYLE', "Use a glass bolt to deliver a swift and silent assault against hostiles without alerting them to your position. The glass cartridge breaks on impact releasing a gas that ignites the oxygen in the surrounding area. Deliver swift and agile assaults without alerting your opponents of your position.")
        .addBlankField()
        .addField('ROLE', 'Area-Denial, Flank, Front-Line')
        .addBlankField()
        .addField('Armor: ', '1', true)
        .addField('Speed: ', '3', true)
        .addField('Diffifuclty: ', '2', true)

message.channel.send(Embed);
}

module.exports.help = {
    name: "capitao"
}