const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const client = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'warn',
            group: 'other commands',
            memberName: 'warn',
            description: 'Warning.....',
            guildOnly: true
        });
    }

async run(message, args) {
    if(!message.member.hasPermission("KICK_MEMBERS"))     return message.channel.send({embed: {
        color: 3447003,
        description: ":x: I See you dont have enough permissions, please check if you have the right permissions! :x:"
    }})
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send({embed: {
        color: 3447003,
        description: `${message.author.tag} Please mention a valid member of this server`
      }})
      message.channel.send({embed: {
        color: 3447003,
        description: `${message.author.tag} has Warned ${member.user.tag} 🎉`
            }
          })
          }   
        }

module.exports = EmbedCommand;
