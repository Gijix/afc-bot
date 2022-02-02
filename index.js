import { Client, Intents } from "discord.js";
import { config } from "dotenv";

config()

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

const client = new Client({
	intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

// INTERACTIONS

bot.on("ready",(bot) => {
    console.log("Bot is active...")
})

bot.login(process.env.BOT_TOKEN)

bot.on('messageCreate', (message) => {
    console.log(message.content);
    if (message.content === "😄" || "🙂" || "🥲") {
      message.reply(message.content)
    }
})








