const commando = require('discord.js-commando');
const moment = require('moment');
const { stripIndents } = require('common-tags');
const Discord = require('discord.js'); // To Install Discord.js | Run This Command in Console/Terminal `npm install --save discordjs/discord.js`
const client = new Discord.Client();

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            group: 'other commands',
            memberName: 'userinfo',
            description: 'Generating UserInfo.....',
            guildOnly: true
        });
    }

run(msg) {
    return msg.channel.send({embed: {
        color: 3447003,
        title: "UserInfo",
        author: {
            name: msg.author.username,
            icon_url: msg.author.avatarURL
          },
        fields: [
            {
                name: '❯ User',
                value: stripIndents`
                    • Avatar ID: ${msg.author.avatar}
                    • Bot?: **${msg.author.bot}**
                    • User ID: **${msg.author.id}**
                    • Created At: **${msg.author.createdAt}**
                `,
                inline: true
            }
        ],
        thumbnail: { url: msg.author.avatarURL }
    }})}

};

module.exports = EmbedCommand;
