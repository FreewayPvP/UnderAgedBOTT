const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'say',
            memberName: 'say',
            description: 'Replies with the text you provide.',
            userPermissions: ['MANAGE_MESSAGES'],
            examples: ['say Hi there!'],
            args: [
                {
                    key: 'text',
                    prompt: '**What text would you like the bot to say?**',
                    type: 'string'
                }
            ]
        });    
    }


    run(msg, { text }) {
        if(!msg.member.hasPermission("MANAGE_MESSAGES"))     return msg.channel.send({embed: {
            color: 3447003,
            description: ":x: I See you dont have enough permissions, please check if you have the right permissions! :x:"
        }})
        msg.delete();
        return msg.say(text);
    }
};