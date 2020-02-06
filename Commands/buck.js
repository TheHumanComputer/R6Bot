const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('BUCK - Attacker')
        .setDescription("Buck's details")
        .setThumbnail('https://cdn.discordapp.com/attachments/658429408721240065/659908586612326436/buck.png')
        .addField('UNIQUE ABILITIES AND PLAYSTYLE', "Under-barrel mounted 12 gauge shotgun with four round capacity, used in tandem with an assault rifle. The Skeleton Key allows the operator to alternate between their standard issue assault rifle and a breaching shotgun with ease and efficiency.")
        .addBlankField()
        .addField('ROLE', 'Flank, Soft-Breach')
        .addBlankField()
        .addField('Armor: ', '2', true)
        .addField('Speed: ', '2', true)
        .addField('Diffifuclty: ', '1', true)

message.channel.send(Embed);
}

module.exports.help = {
    name: "buck"
}