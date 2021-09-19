const Discord = require('discord.js');

module.exports = {
    name: 'logissue',
    aliases: ['log'],
    DMU: true,
    description: 'Sends a message to the console.',
    async execute(message, args, data, client) {
        const consoleMessage = args.join(" ");
        console.log(`[${message.author.id}] sent: ` + consoleMessage);
        message.channel.send({ embeds: [new Discord.MessageEmbed().setDescription("I have succesfully sent your message to the console. Please do not flood it or you will be blacklisted.").setColor('GREY')] });
    },
};