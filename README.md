# AutoFarm
Its Simple Package To Level Up On Some Discord Bots & For Active Your Server

<p>
    <a href="https://www.npmjs.com/package/auto-farm" target="_blank"><img src="https://nodei.co/npm/auto-farm.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
<a href="https://www.npmjs.com/package/auto-farm" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/auto-farm?logo=npm&style=flat-square"></a>
<a href="https://github.com/devsmsm/AutoFarm/stargazers" target="_blank"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/devsmsm/AutoFarm?logo=github&logoColor=white&style=flat-square"></a>


**I Don't Take Any Responsibility For Blocked Discord Accounts That Used This module.**
**Using this on a user account is prohibited by the [Discord TOS](https://discord.com/terms) and can lead to the account block.**

# Leveling Account
```js
const { Client } = require('discord.js-selfbot-v13'); // npm i discord.js-selfbot-v13
const client = new Client({
});
const AutoFarm = require("auto-farm")

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
  })
  

AutoFarm({
Client: client, // Type Client
ChannelID: "", // ID Text Channel
Time: 15 // Type Time With Second
})





client.login("") // Put Token Account
```

# Leveling OwO
```js
const { Client } = require('discord.js-selfbot-v13'); // npm i discord.js-selfbot-v13
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
OwO: true // If true Account Will Play
})





client.login("") // Put Token Account
```


# Want Leveling More Than Account

**Before You Use Code Make Sure To Make ``tokens.txt`` File**
**And Must Add Tokens On The File**
```js
const { Client } = require("discord.js-selfbot");
const fs = require('fs')
const data = fs.readFileSync('tokens.txt', 'UTF-8')
const lines = data.split(/\r?\n/)
const AutoFarm = require("auto-farm")

lines.forEach((line) => {
    Hosting(line);
})

function Hosting(token)
{
try{
const client = new Client({})
client.on("ready", async () =>
  {
console.log(`${client.user.tag} Ready!! `)
  })

AutoFarm({
Client: client, // Type Client
ChannelID: "", // ID Text Channel
Time: 15 // Type Time With Second
})


client.login(token)
  } catch (err) {
 console.log(err)
  }
}
```

# Need help?

Contact me in Discord: ``</SmSm>#8700``
