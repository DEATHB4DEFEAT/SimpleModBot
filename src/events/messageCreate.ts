const Discord = require('discord.js');
const Levels = require('discord-xp');
const mongis = require('../database/mongoose.ts');
const schema = require('../database/models/ccSchema.ts');
const mongoose = require('mongoose');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        await mongis.init();
        client.emit('antiInviteMessageCreate', message, client);

        if (message.channel.type == 'DM') return;
        if (message.author.bot) return;

        const Guild = require('../database/models/guildSchema.ts');
        const guildProfile = await Guild.findOne({ guildID: message.guild.id });
        if (guildProfile) client.prefix = guildProfile.prefix;

        let balanceDB = client.data.getBalanceDB(message.author.id);
        let blacklistDB = client.data.getBlacklistDB(message.author.id);
        let guildDB = client.data.getGuildDB(message.guild.id);
        let inventoryDB = client.data.getInventoryDB(message.author.id);

        let data = {
            config: "An Error Occurred Loading This Information.",
            balance: "An Error Occurred Loading This Information.",
            blacklisted: "An Error Occurred Loading This Information.",
            guild: "An Error Occurred Loading This Information.",
            inventory: "An Error Occurred Loading This Information.",
        };

        data.config = client;
        data.balance = balanceDB;
        data.blacklisted = blacklistDB;
        data.guild = guildDB;
        data.inventory = inventoryDB;

        if (guildDB.levelSystem) if (guildDB.levelSystem == true) {
            const randomXP = Math.floor(Math.random() * 25) + 5;
            const hasLeveledUP = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
            if (hasLeveledUP) {
                const user = await Levels.fetch(message.author.id, message.guild.id);
                message.channel.send({ embeds: [new Discord.MessageEmbed().setDescription(`${message.member.user.tag}, you have leveled up to ${user.level}!`).setColor('GREY')] });
            };
        };

        const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(client.prefix)})\\s*`);
        if (!prefixRegex.test(message.content)) return;
        if (message.content == `<@!${client.user.id}>`) return message.channel.send({ embeds: [new Discord.MessageEmbed().setTitle("It appears you mentioned me!").setDescription(`Hello! I am SimpleModBot! An easy to use multipurpose bot.\n\nIf you wish to know my prefix its set to \`${client.prefix}\` but you can change it if your the owner!\nI will always have <@${client.user.id}> as a prefix though!\n\nIf you wish to know my commands type \`${client.prefix}help\`.`).setFooter('I hope you like me!').setImage('https://cdn.discordapp.com/attachments/885009693645344829/891421005082398750/simplemodbot.gif').setTimestamp().setColor('GREY')] });

        const [, matchedPrefix] = message.content.match(prefixRegex);
        let args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
        if (!args[1]) args[1] = "ENA";
        args = args.filter(e => e);
        let commandName = args.shift().toLowerCase();

        const dataa = await schema.findOne({ Guild: message.guild.id, Command: commandName });
        if (dataa) return message.channel.send({ embeds: [new Discord.MessageEmbed().setDescription(dataa.Response).setFooter(`CustomCommand: ${dataa.Command}`).setColor("GREY").setTimestamp()] });

        let command = client.messageCommands.get(commandName) || client.messageCommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        let profile = await require("../database/models/blackListSchema.ts").findOne({
            userID: message.author.id
        });

        try {
            if (profile) return message.author.send({ embeds: [new Discord.MessageEmbed().setDescription('You cannot use this bot as you are banned for ' + profile.reason + '. You can appeal in the support server: https://discord.gg/26NtPVvNCU').setColor('GREY')] });
        } catch (err) {
            Promise.reject(new err);
        };
        if (command.devOnly == true && message.author.id !== client.ownerID) return message.channel.send({ embeds: [new Discord.MessageEmbed().setDescription('You don\'t have permission to use this command as it is only for developers.').setColor('GREY')] });
        const { cooldowns } = client;
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        };

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;

        if (timestamps.has(message.author.id) && message.author.id !== client.ownerID) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.author.send({ embeds: [new Discord.MessageEmbed().setDescription(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`).setColor('GREY')] });
            };
        };

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        await client.channels.cache.get('883251143151599646').send({ embeds: [new Discord.MessageEmbed().setDescription(`${message.author}(${message.author.tag}) used \`${command.name} ${args.join(' ').replace('ENA', '')}\`.`).setColor('GREY').setTimestamp()] });
        await command.execute(message, args, data, client);
    },
};