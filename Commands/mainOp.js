const Discord = module.require("discord.js");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
     fs.writeFile(`./Operators/${args[0]}.json`, JSON.stringify(message.author.username + "#" + message.author.discriminator), err => {
                    if(err) throw err;
                    console.log(message.author.username + "#" + message.author.discriminator);
                })
}

module.exports.help = {
    name: "mainOperator"
}