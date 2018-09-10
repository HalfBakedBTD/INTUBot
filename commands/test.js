const Discord = require("discord.js");
const api = "https://wallet.intucoin.com/apidocs/swagger.json";
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    snekfetch.get(api).then(r => console.log(r));
}

module.exports.help = {
  name: "test"
}
