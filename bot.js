const { Client, Attachment } = require('discord.js');
const botsettings = require("./bot_settings.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true})
const prefix = botsettings.prefix;
const fs = require("fs");

bot.commands = new Discord.Collection();

fs.readdir("./Commands/", (err, files) => {
    if(err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
    	console.log(`                                                                                            
                                _____ _____ _____ _____ _____                                
 _ _ _ _ _ _ _ _ _ _ _ _ _ _   |   __| __  | __  |     | __  |   _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
|_'_|_'_|_'_|_'_|_'_|_'_|_'_|  |   __|    -|    -|  |  |    -|  |_'_|_'_|_'_|_'_|_'_|_'_|_'_|
|_,_|_,_|_,_|_,_|_,_|_,_|_,_|  |_____|__|__|__|__|_____|__|__|  |_,_|_,_|_,_|_,_|_,_|_,_|_,_|
                                                                                             `);
        console.log("No Commands to load!");
    }
    if(jsfiles.length >=1){
        console.log(`                                    
 _ _ _     _                        
| | | |___| |___ ___ _____ ___      
| | | | -_| |  _| . |     | -_|   _ 
|_____|___|_|___|___|_|_|_|___|  |_|
                                    `)
    	console.log(`Loading ${jsfiles.length} commands!`);
    }

    jsfiles.forEach((f, i) => {
        let props = require(`./Commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
})

bot.on("ready", async() =>{

console.log(`                                         
                                         
 ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ 
|___|___|___|___|___|___|___|___|___|___|
                                         
                                         `);

    console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`)
	console.log(`Bot Version: ${botsettings.version}`)
    bot.user.setActivity(`Bot Version: ${botsettings.version}`, { type: 'LISTENING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
	console.log(`Generating invite link...`);
	try{
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e){
        console.log(e.stack);
    }
})
bot.on("message", async message =>{

    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.reply("Get outta my DM's BOY!");

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
})

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if(!channel) return console.log(`${member.guild.name} has no log channel! I am unable to log their joined users!`);
  channel.send(`User, ${member.user.mention}#${member.user.discriminator} has joined the ${message.guild.name} sever!`);
  new Discord.RichEmbed(embed);
  embed.AddField()
})

bot.on("messageDelete", messageDelete => {
 const channel = messageDelete.guild.channels.find(ch => ch.name === 'jlogs');
 if(!channel) return console.log(`${messageDelete.guild.name} has no log channel! I am unable to log their deleted messages!!`);
 channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author} was deleted.`);
})

bot.on("channelCreate", channelCreate =>{ 
    const channel = channelCreate.guild.channels.find(ch => ch.name === 'jlogs');
    if(!channel) return console.log(`${channelCreate.guild.name} has no log channel! I am unable to log their created channels!`);
    channel.send(`Channel or Category: ${channelCreate.name} was created by ${channelCreate.author}.`);
});
bot.on('message', message => {
  if (message.content == 'rip') {
    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.react(`670514373294424071`)
  }
});

bot.login(botsettings.token);