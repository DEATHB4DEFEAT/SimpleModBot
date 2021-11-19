const fs = require("fs");
const figlet = require("figlet");
const rgb = require("lolcatjs");

module.exports = (client) => {
    client.handleEvents = async (eventFiles, path) => {
        for (const file of eventFiles) {
            client.en = client.en + 1;
            const event = require(`../../events/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            };
        };
    };
};