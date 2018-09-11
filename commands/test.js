const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const { body } = await snekfetch.get('https://wallet.intucoin.com/apidocs/swagger.json');

module.exports.run = async (bot, message, args) => {
    message.channel.send(body.file);
}

module.exports.help = {
  name: "login"
}
