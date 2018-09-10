const Discord = require("discord.js");
const api = "https://wallet.intucoin.com/apidocs/swagger.json";
const nodefetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
    nodefetch.get(api).then(r => console.log(r));
}

module.exports.help = {
  name: "test"
}
