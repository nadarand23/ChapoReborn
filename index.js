//Last updated 11/27/22
const Discord = require('discord.js');
const bot = new Discord.Client();
const keep_alive = require('./keep_alive.js');
const token = process.env.DISCORD_BOT_SECRET;
const DRUGS_LIST = [
  "pot",
  "crack",
  "meth",
  "heroin",
  "pcp",
  "ecstasy",
  "zaza",
  "lean",
  "wok",
  "alchohol",
  "beer",
  "juul",
  "vape",
  "drug",
  "benadryl"
    ];

bot.on('ready', () => { 
  bot.user.setActivity('with the law || v5.0')
  console.log("Coked up, ready to go.")

   });

bot.on('message', (message) => {

for(var i = 0; i < DRUGS_LIST.length; i++) {
  if(message.content.toLowerCase().includes(DRUGS_LIST[i])) {
    message.channel.send("If you want it I got it...");
    break
  }
}

if(message.content.toLowerCase().includes("chapo")) {
  message.channel.send("...");
}
  
})

bot.login(token);