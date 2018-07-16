const { Command } = require('discord.js-commando');
const moment = require('moment');
const { stripIndents } = require('common-tags');

module.exports = class ServerInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'quick',
			group: 'help page',
			memberName: 'help',
			description: 'Get info on the server.',
			details: `Get detailed information on the server.`,
			guildOnly: true,
			throttling: {
				usages: 2,
				duration: 3
			}
		});
	}

	run(msg) {
		return msg.embed({
            color: 3447003,
			fields: [
				{
					name: '> Not Allowed',
					value: stripIndents`
					        • Do Not Post Any NSFW Content in SFW Channels
						• Do Not Spam in any voice Channels 
						• Do Not Swear AT any Member
						• Do not be Racist
						• Do not Argue with Staff! Staff's always right
					`,
					inline: true
                },
                {
					name: '❯ Allowed',
					value: stripIndents`
					        • Spamming NSFW Pictures in NSFW Channels is Allowed
					        • Posting NSFW Pictures in NSFW Channels is Allowed 
					        • Regurarly Swearing is Allowed! But Swearing AT someone is not!
					`,
					inline: true
				},

			],
			thumbnail: { url: msg.guild.iconURL }
		});
	}
};
