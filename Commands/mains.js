const Discord = module.require("discord.js");
const fs = require('fs');
var content;
module.exports.run = async (bot, message, args) => {
     fs.readFile(`./Operators/${args[0]}.json`, `utf8`,(err, data) => {
                    if(err) throw err;
                    content = data
                    processFile();
                })
};
function processFile(){
	console.log(content);
}

module.exports.help = {
    name: "mains"
}