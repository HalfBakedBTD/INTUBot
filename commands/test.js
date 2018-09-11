const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    const { body } = await snekfetch.get('https://wallet.intucoin.com/apidocs/swagger.json');
    message.channel.send(body.file);
}

module.exports.help = {
  name: "login"
}
