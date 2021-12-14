import { Client } from "discord.js";

const bot = new Client({
  intents: [
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_TYPING",
    "GUILDS",
    "GUILD_MEMBERS",
    "DIRECT_MESSAGE_REACTIONS",
    "GUILD_BANS",
    "GUILD_MESSAGES",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_EMOJIS_AND_STICKERS"
  ],
});

bot.on("messageCreate",(msg) => {
    if(msg.content === "ping") msg.reply("pong")
})

bot.login(process.env.BOT_TOKEN)
