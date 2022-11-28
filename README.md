# auto-farm
Its Simple Package To Level Up On Some Discord Bots & For Active Your Server

<p>
    <a href="https://www.npmjs.com/package/auto-farm" target="_blank"><img src="https://nodei.co/npm/auto-farm.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
<a href="https://www.npmjs.com/package/auto-farm" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/auto-farm?logo=npm&style=flat-square"></a>
<a href="https://github.com/devsmsm/autofarm/stargazers" target="_blank"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/devsmsm/autofarm?logo=github&logoColor=white&style=flat-square"></a>


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

# Need help?

Contact me in Discord: ``</SmSm>#8700``
