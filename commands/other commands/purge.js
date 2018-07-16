const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
const client = new Discord.Client();

module.exports = class PurgeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'other commands',
            memberName: 'purge',
            description: 'Purge some messages from a Text Channel.',
            examples: ['purge 5'],

            args: [
                {
                    key: 'numToPurge',
                    label: 'number',
                    prompt: 'Please input a number ( > 0) of messages to be deleted.',
                    type: 'integer'
                }
            ]
        });
    }

    run(msg, { numToPurge }) {
        if(!msg.member.hasPermission("MANAGE_MESSAGES"))     return msg.channel.send({embed: {
            color: 3447003,
            description: ":x: I See you dont have enough permissions, please check if you have the right permissions! :x:"
        }})
        let channel = msg.channel;

        // fail if number of messages to purge is invalid
        if (numToPurge <= 0) {
            return msg.reply('Purge number must be greater than 0');
        }

        // channel type must be text for .bulkDelete to be available
        else if (channel.type === 'text') {
            return channel.fetchMessages({limit: numToPurge})
                .then(msgs => channel.bulkDelete(msgs))
                .then(msgs => msg.reply(`Purge deleted ${msgs.size} message(s)`))
                .catch(console.error);
        }
        else {
            return msg.reply('Purge command only available in Text Channels');
        }
    }
};
