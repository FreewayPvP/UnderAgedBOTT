const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const client = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'other commands',
            memberName: 'ping',
            description: 'My ping.',
            guildOnly: true
        });
    }

async run(message, args) {
    const m = await message.channel.send({embed: {
        color: 3447003,
        description: `Pinging...`
          }})
          m.edit({embed: {
            title: "Pinged Successfully",
            color: 3447003,
            description:`I've Generated My Ping! -> ${m.createdTimestamp - message.createdTimestamp}ms Latency`
        }})
    console.log() // Logs to Console someone used The Command

}};

module.exports = EmbedCommand;
