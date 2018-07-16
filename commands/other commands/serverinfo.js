const { Command } = require('discord.js-commando');
const moment = require('moment');
const { stripIndents } = require('common-tags');

const humanLevels = {
	0: 'None',
	1: 'Low',
	2: 'Medium',
	3: '(╯°□°）╯︵ ┻━┻',
	4: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

module.exports = class ServerInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'server-info',
			group: 'info',
			memberName: 'server',
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
			description: `Info on **${msg.guild.name}** (ID: ${msg.guild.id})`,
			fields: [
				{
					name: '❯ Statistics',
					value: stripIndents`
					    • Owner: ${msg.guild.owner.user.tag}
					        (ID: ${msg.guild.ownerID})
						• Members: **${msg.guild.memberCount}**
						• Humans: **${msg.guild.members.filter(member => !member.user.bot).size}**
						• Bots: **${msg.guild.members.filter(member => member.user.bot).size}**
						• Member Status:\n<:online:441725499828600832> **${msg.guild.members.filter(o => o.presence.status === 'online').size}** Online\n<:idle:441725390109802500> **${msg.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n<:dnd:441725318516965376> **${msg.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n<:offline:441725444715315210> **${msg.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n<:streaming:441725535752683530> **${msg.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming
					`,
					inline: true
				},
				{
					name: '❯ Other',
					value: stripIndents`
						• Roles: ${msg.guild.roles.size}
						• Region: ${msg.guild.region}
						• Created at: ${moment.utc(msg.guild.createdAt).format('dddd, MMMM Do YYYY')}
						• Verification Level: ${humanLevels[msg.guild.verificationLevel]}
					`
				},
				{
					name: '❯ Channels',
					/* eslint-disable max-len */
					value: stripIndents`
						• ${msg.guild.channels.filter(ch => ch.type === 'text').size} Text, ${msg.guild.channels.filter(ch => ch.type === 'voice').size} Voice
						• Default: ${msg.guild.defaultChannel}
						• AFK: ${msg.guild.afkChannelID ? `<#${msg.guild.afkChannelID}> after ${msg.guild.afkTimeout / 60}min` : 'None.'}
					`,
					/* eslint-enable max-len */
					inline: true
				}
			],
			thumbnail: { url: msg.guild.iconURL }
		});
	}
};
