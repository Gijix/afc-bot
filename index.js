import { BitField, Client, ReactionEmoji } from "discord.js";
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

bot.on("ready",(bot) => {
    console.log("Bot is ready")
})

bot.login(process.env.BOT_TOKEN)

bot.on('messageCreate', (message) => {
    if (message.content === "ping") {
      message.react("<:smiley:920785800701038593>")
      message.reply("pong mon bg")
    }
})

