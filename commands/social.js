const Discord = require("discord.js");

module.exports = {
    name: 'social',
    description: 'Displays my social medias.',
    async execute(message, args, client) {

        const twitchEmbed = new Discord.MessageEmbed()
            .setTitle("DEATHB4DEFEET")
            .setURL("https://twitch.tv/deathb4defeet")
            .setColor("#7716E9")
            .addField("Check out my creators Twitch!", "I would like it if you followed and watched the streams.");

        const discordEmbed = new Discord.MessageEmbed()
            .setTitle("Join my creators main server for support or to hang out!")
            .setURL("https://discord.gg/26NtPVvNCU")
            .setColor("#7289da")
            .setTimestamp();

        const inviteEmbed = new Discord.MessageEmbed()
            .setTitle("Invite me to your discord server to help grow my bot and help with your moderation!")
            .setURL("https://top.gg/bot/808196506833125396")
            .setColor("#b31217")
            .setTimestamp();

        message.channel.send(twitchEmbed).catch((err) => console.log(err));
        message.channel.send(discordEmbed).catch((err) => console.log(err));
        message.channel.send(inviteEmbed).catch((err) => console.log(err));

        if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.delete();
        }
    },
};