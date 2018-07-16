const music = require('telk-music');
const { Discord, Client, MessageAttachment } = require('discord.js');
const Commando = require('discord.js-commando');
const chalk = require('chalk');

const client = new Commando.Client({
    commandPrefix: 'n!',
    owner: ['367910644181368833'],
    disableEveryone: true,
    unknownCommandResponse: false
});

// Lets set our Bot's Activity and Status -> [Online] [dnd -> Do not Disturb] [Idle -> Away]

function GameStatus() {
      let status = [
        `Over ${client.users.size} Users! | n!help`,
        `Over ${client.channels.size} Channels! | n!help`,
      ];
      let rstatus = Math.floor(Math.random() * status.length);
      client.user.setActivity(status[rstatus], {
          "type": "WATCHING"
      });
    }; setInterval(GameStatus, 15000)

client.on("ready", () => {
  console.log(chalk.blue.bgRed.bold(`Bot has started, with ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`));
    client.user.setStatus('online');
});

client.on("guildMemberAdd", member => {
  member.addRole('467978289173102602')
  member.addRole('467978289173102602') 
});

client.on("guildMemberAdd", (member) => {
  console.log(chalk.yellow.bgRed.bold(`User "${member.user.username}" has joined "${member.guild.name}"`));
  let target = member.guild.channels.find('name', 'arrivals')
  if (!target) return;

  target.send({embed: {
    color: 3447003,
    description: `:white_check_mark: Oh Hey! Look at That! ${member.user.username} has joined our Server!`,
  }})
});

client.on("guildMemberRemove", (member) => {
  console.log(chalk.yellow.bgRed.bold(`User "${member.user.username}" has Left "${member.guild.name}"` ));
  let target = member.guild.channels.find('name', 'farewells')
  if (!target) return;

  target.send({embed: {
    color: 3447003,
    title: "A Member has left UnderAged | NSFW",
    description: `${member.user.username}(ID: ${member.user.id})\nhas left UnderAged | NSFW!`,
    footer: {
      text: "Is the server Getting Boring? Then just DM a Owner to suggest Stuff!"
    }
  }})
});

const path = require('path');

client.registry
  .registerGroups([
    ['help page', 'Help Page'],
    ['memes', 'Meme Commands'],
    ['other commands', 'Others']
    ])

    .registerDefaultGroups()
    .registerDefaultTypes()
    .registerDefaultCommands({ help: false, ping: false })
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.login(process.env.BOT_TOKEN);
