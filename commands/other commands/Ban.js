const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const client = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'other commands',
            memberName: 'ban',
            description: 'Baning.....',
            userPermissions: ['BAN_MEMBERS'],
            clientPermissions: ['BAN_MEMBERS '],
            guildOnly: true
        });
    }

async run(message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS"))     return message.channel.send({embed: {
        color: 3447003,
        description: ":x: I See you dont have enough permissions, please check if you have the right permissions! :x:"
    }})
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send({embed: {
        color: 3447003,
        description: `${message.author.tag} Please mention a valid member of this server`
      }})
    if(!member.bannable) 
    return message.channel.send({embed: {
        color: 3447003,
        description: `${message.author.tag} I cannot ban this user! Do they have a higher role? Do I have ban permissions?`
      }})
    
    await member.ban()
    .catch(error => message.channel.send({embed: {
        color: 3447003,
        description: `Sorry ${message.author.tag} I couldn't ban because of : ${error}`
      }}))
      message.channel.send({embed: {
        color: 3447003,
        description: `${message.author.tag} has Banned ${member.user.tag} 🎉`
          }
      })}}

module.exports = EmbedCommand;
