const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with the bot help menu.')
        .addStringOption(opt =>
            opt.setName('command')
                .setDescription("Command you want to view more info for.")),
    async execute(interaction, client) {
        interaction.reply({ content: "Sending the help menu.", ephemeral: true });

        const prefix = client.prefix;
        const roleColor = interaction.guild.me.displayHexColor === "#000000" ? "GREY" : interaction.guild.me.displayHexColor;
        const args = interaction.options.getString('command') || "ENA";

        if (args == "ENA") {
            let categories = [];
            readdirSync("./commands/messageCommands/").forEach((dir) => {
                const commands = readdirSync(`./commands/messageCommands/${dir}/`).filter((file) => file.endsWith(".ts"));

                const cmds = commands.map((command) => {
                    let file = require(`../../messageCommands/${dir}/${command}`);
                    if (!file.name) return "No command name.";
                    let name = file.name.replace(".ts", "");

                    return `\`${name}\``;
                });

                let data = new Object();

                data = {
                    name: dir.toUpperCase(),
                    value: cmds.length === 0 ? "In progress." : cmds.join(" "),
                    inline: true,
                };

                categories.push(data);
            });

            const databaseEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[0].name, categories[0].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const devOnlyEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[1].name, categories[1].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const economyEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[2].name, categories[2].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const embedEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[3].name, categories[3].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const emojiEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[4].name, categories[4].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const funEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[5].name, categories[5].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const gamesEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[6].name, categories[6].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const helpEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[7].name, categories[7].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const imageEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[8].name, categories[8].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const information1Embed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[9].name, categories[9].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const information2Embed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[10].name, categories[10].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const moderationEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[11].name, categories[11].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const nsfwEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[12].name, categories[12].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            const randomEmbed = new Discord.MessageEmbed()
                .setTitle("Commands:")
                .setDescription(`Use \`${client.prefix}help <command>\` to get more information on the command.\nExample: \`${client.prefix}help ban\``)
                .addField(categories[13].name, categories[13].value)
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setColor(roleColor)
                .setTimestamp();

            let position = 0;
            const pages = [databaseEmbed, devOnlyEmbed, economyEmbed, embedEmbed, emojiEmbed, funEmbed, gamesEmbed, helpEmbed,
                imageEmbed, information1Embed, information2Embed, moderationEmbed, nsfwEmbed, randomEmbed];

            const previous = new MessageButton()
                .setLabel("")
                .setStyle("SECONDARY")
                .setEmoji("◀️")
                .setCustomId("previous");

            const next = new MessageButton()
                .setLabel("")
                .setStyle("SECONDARY")
                .setEmoji("▶️")
                .setCustomId("next");

            const paginationbuttons = new MessageActionRow()
                .addComponents(previous, next);

            const endedP = new MessageButton()
                .setLabel("")
                .setStyle("SECONDARY")
                .setEmoji("◀️")
                .setCustomId("previous")
                .setDisabled();

            const endedN = new MessageButton()
                .setLabel("")
                .setStyle("SECONDARY")
                .setEmoji("▶️")
                .setCustomId("previous")
                .setDisabled();

            const endedbuttons = new MessageActionRow()
                .addComponents(endedP, endedN);

            function checkPos() {
                previous.setDisabled(position === 0 ? true : false);
                next.setDisabled(position === Object.keys(pages).length - 1 ? true : false);
            };

            checkPos();
            const pagination = await interaction.channel.send({
                embeds: [pages[position]],
                components: [paginationbuttons]
            });

            const collector = pagination.componentCollector(
                {
                    componentType: "BUTTON",
                    time: 60000
                });

            collector.on("collect", async (button) => {
                if (button.user.id === interaction.user.id) {
                    if (button.customId === "previous" && position > 0) position = position - 1;
                    if (button.customId === "next" && position < pages.length - 1) position = position + 1;
                    checkPos();
                    await pagination.edit({
                        content: "\u200b",
                        embeds: [pages[position]],
                        components: [paginationbuttons]
                    });
                    await button.deferUpdate();
                } else {
                    button.reply({ content: `Hey, ${button.user.username}, these buttons aren't for you to use!`, ephemeral: true });
                };
            });

            collector.on("end", async (collected) => {
                await pagination.edit(`Timed out.`, {
                    content: "\u200b",
                    embeds: [pages[position]],
                    components: [endedbuttons]
                });
            });
        } else {
            const command = client.messageCommands.get(args.toLowerCase()) || client.messageCommands.find((c) => c.aliases && c.aliases.includes(args.toLowerCase()));

            if (!command) {
                const embed = new MessageEmbed()
                    .setTitle(`Invalid command! Use \`${prefix}help\` to view all commands.`)
                    .setColor("FF0000");

                return interaction.channel.send({ embeds: [embed] });
            }

            const embed = new MessageEmbed()
                .setTitle("Command Details:")
                .addField("COMMAND:", command.name ? `> \`${command.name}\`` : "> Unnamed command??")
                .addField("DESCRIPTION:", command.description ? `> ${command.description}` : "> No description.")
                .addField("ALIASES:", command.aliases ? `> \`${command.aliases.join("` `")}\`` : "> No aliases.")
                .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor(roleColor);

            return interaction.channel.send({ embeds: [embed] });
        };
    },
};