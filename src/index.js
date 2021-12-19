import { Client } from "discord.js";
import { config } from "dotenv";
import * as app from './app/app.js'

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

async function startBOT() {
  config()
  await app.Command.load()
  await bot.login(process.env.BOT_TOKEN)
}

startBOT()

bot.on("ready",async(client) => {
  client.user.setActivity({
    type: "WATCHING",
    name: "faire le bot"
  })
  client.user.setPresence({
    status: "online"
  })
  console.log("afc-bot is ready")  
})

bot.on("messageCreate", async(message) => {
  app.Command.run(message)
})
