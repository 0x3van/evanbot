const config = require("./config.json");
const { MessageEmbed } = require('discord.js')
//ok :yaycat:
exports.help = {
    evangory: "information"
}

exports.run = (client, messageCreate, args) => {
    
    const message = messageCreate

    message.channel.send(client.commands.map(cmd => `${cmd.evangory}`))



    }
//}