module.exports = (client) => {
    const colors = require('colors')
    client.user.setActivity(`evan.systems | syst(help)`, { type: 'WATCHING' })
      console.log( colors.brightGreen('[LOGIN] ') + `Logged in as ${client.user.tag} on discord.`)
  }
  