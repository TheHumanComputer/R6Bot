const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const Embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Castle - Attacker')
        .setDescription("Castle's details")
        .setThumbnail('https://cdn.discordapp.com/attachments/658429408721240065/659920267560222752/castle.png')
        .addField('UNIQUE ABILITIES AND PLAYSTYLE', "Castle is an anchor and secure Operator, capable of creating defensive strongholds around the objective, controlling the flow of the attackers and slowing down their assault. Castle's unique ability is to create reinforced barricades using the: UTP1-Universal Tactical Panel.")
        .addBlankField()
        .addField('ROLE', 'Anchor, Secure')
        .addBlankField()
        .addField('Armor: ', '2', true)
        .addField('Speed: ', '2', true)
        .addField('Diffifuclty: ', '2', true)

message.channel.send(Embed);
}

module.exports.help = {
    name: "castle"
}