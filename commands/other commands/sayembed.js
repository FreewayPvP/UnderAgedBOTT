const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sayembed',
            group: 'other commands',
            memberName: 'sayembed',
            description: 'Embeds the text you provide.',
            userPermissions: ['MANAGE_MESSAGES'],
            examples: ['embed Embeds are cool.'],
            args: [
                {
                    key: 'text',
                    prompt: '**What Text would you Like the Bot to say in the Embed?**',
                    type: 'string'
                }
            ]
        });    
    }


    run(msg, args) {
        if(!msg.member.hasPermission("MANAGE_MESSAGES"))     return msg.channel.send({embed: {
            color: 3447003,
            description: ":x: I See you dont have enough permissions, please check if you have the right permissions! :x:"
        }})
        msg.delete();
        const { text } = args;
        const embed = new RichEmbed()
            .setDescription(text)
            .setColor("#ff4533")
        return msg.embed(embed);
    }
};
