const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');

module.exports = {
    name: "weather",
    async execute(message, args, data, client) {
        try {
            if (!args[0]) return message.channel.send(`Please say city name.`);
            weather.find({ search: args.join(" "), degreeType: 'F' }, function (err, result) {

                if (err) message.channel.send(err.message);
                if (result.length === 0) return message.channel.send({ content: `Please enter a valid location.` });

                var current = result[0].current;
                var location = result[0].location;

                const embed = new MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor(`🌥️ Weather for ${current.observationpoint}`)
                    .setThumbnail(current.imageUrl)
                    .addField('**Timezone**', `UTC ${location.timezone}`, true)
                    .addField('**Tempurature Type**', `${location.degreetype}`, true)
                    .addField('**Temperature**', `${current.temperature} Degrees`, true)
                    .addField('**Feels Like**', `${current.feelslike} Degrees`, true)
                    .addField('**Winds**', `${current.winddisplay}`, true)
                    .addField('**Humidity**', `${current.humidity}%`, true)
                    .addField('**Date**', `${current.date}`, true)
                    .addField('**Day**', `${current.day}`, true)
                    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setColor(message.guild.me.displayHexColor);

                message.channel.send({ embeds: [embed] })

            });
        } catch (err) {
            message.channel.send({ content: `Please enter a valid location.` });
            Promise.reject(new err);
        }
    },
};