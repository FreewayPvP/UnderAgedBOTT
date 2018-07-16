const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const client = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'other commands',
            memberName: 'kick',
            description: 'Kicking.....',
            userPermissions: ['KICK_MEMBERS'],
            clientPermissions: ['KICK_MEMBERS'],
            guildOnly: true
        });
    }

async run(message, args) {
    if(!message.member.hasPermission("KICK_MEMBERS"))     return message.channel.send({embed: {
        color: 3447003,
        description: ":x: I See you dont have enough permissions, please check if you have the right permissions! :x:"
    }})
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
    return message.channel.send({embed: {
        color: 3447003,
        description: `${message.author.tag} Please mention a valid member of this server`
      }})
    if(!member.kickable) 
    return message.channel.send({embed: {
        color: 3447003,
        description: `${message.author.tag} I cannot kick this user! Do they have a higher role? Do I have kick permissions?`
      }})
    await member.kick()
      .catch(error => message.channel.send({embed: {
        color: 3447003,
        description: `Sorry ${message.author.tag} I couldn't kick because of : ${error}`
      }}))
      message.channel.send({embed: {
        color: 3447003,
        description: `${message.author.tag} has Kicked ${member.user.tag} 🎉`
          }
      })}}

      module.exports = EmbedCommand;
