const Discord = require("discord.js");
const api = "https://wallet.intucoin.com/apidocs/swagger.json";
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    snekfetch.get(api).then(r => {
        let body = r.body;
        let id = args[0];
        if(!id) return;
        if(isNan(id)) return;
        
        let entry = body.find(post => post.id === id);
        console.log(entry);
    });
}

module.exports.help = {
  name: "test"
}
