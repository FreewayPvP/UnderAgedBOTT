const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const bot = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'iam18+',
            group: 'other commands',
            memberName: 'iam18+',
            description: 'Verify system for this bot',
            guildOnly: true
        });
    }

async run(message, args) {
    message.member.addRole('467978007131455490').then(console.log).catch(console.error);
    message.channel.send({embed: {
        color: 3447003,
        description: `You've now Recieved the Role "Above 18" ${message.author.username}(${message.author.id})`
          }})
  }};



module.exports = EmbedCommand;