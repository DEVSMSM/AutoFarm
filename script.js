const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
});
const AutoFarm = require("auto-farm")

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
  })
  

AutoFarm({
Client: client, // Type Client
ChannelID: "", // ID Text Channel
Time: 15, // Type Time With Second
Pass: "", // To Get Pass Contact With Owner Package
OwO: false // This Option For OwO Put false Or true
})





client.login("") // Put Token Account

