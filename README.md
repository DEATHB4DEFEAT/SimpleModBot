# SimpleModBot

A bot for Discord I originally made for moderation but grew over time into a multipurpose bot.

The current prefix is `\` but you can change it with the `config` command. You can invite the bot using [this invite link](https://discord.com/oauth2/authorize?client_id=911112976793215006&permissions=8&scope=bot%20applications.commands).

---

Please read SECURITY.md as it doesn't appear below files like README.md does and it contains other useful information.

## Additional information (PLEASE READ ME)

This project is open source **only** so people can contribute and test it easily. I will **not** allow people to claim any of this code as theirs without modification or permission.

---

Most of the data is not that useful or really easy to repair so I do not believe it is worth me trying to get it all back when it occurs.

## Features

- Message commands
- Slash commands
- **Level system
- Developer commands
- Economy system
- Emoji commands
- Fun commands
- Games system
- Image manipulation
- Information
- Moderation
- **Music

*\*Currently disfunctional or disabled. Might get added back/fixed, might not.*

*\*\*Guaranteed to not be coming back on the full release. Is still possible that I add it back in a future update, just unlikely.*

## Contributing

Contributions are always welcome!

If you are a developer and would like to help with the bot, please join me in the [community server](https://discord.gg/49KeKwXc8g) and tell me how you want to help. Or join the server just to interact with the community and ask questions!

The bot uses a file called `settings.json` to function. make sure to create the file in the root directory.

```json
{
    "Discord" : {
        "dev_ids" : [
        ],
        "token" : "",
        "app_id" : ""
    }
}
```

### Getting Started

Prerequisits:

* `NodeJS >=19.6.0`
* `git`
* `Typescript`
* If on windows: `Visual Studio 17 or greater`

Firstly, clone the repository

```bash
mein@mein-pc:~$ cd ~/Coding

mein@mein-pc:~/Coding$ git clone https://github.com/SimpleModBot/SimpleModBot.git
```
Once git has finished cloning the SimpleModBot repository, cd into the directory and run `npm run install_deps` or `npm install`

```bash
mein@mein-pc:~/Coding$ cd SimpleModBot
mein@mein-pc:~/Coding/SimpleModBot$ npm run install_deps
```

