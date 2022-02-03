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

// LE BOT REPOND PAR LE MEME EMOJI
bot.on('messageCreate', (message) => {
  //init variable
    let msgcon = message.content
    console.log(msgcon); // log les messages reçus

    
    //Bloc conditionnel
    if (/(?=\p{Emoji})(?!\p{Number})/u.test(msgcon)) {
      if (!message.author.bot) {
        message.reply(message.content)
      }
      if (message.author.bot) {
        return //car l'auteur du message est un bot
      }
    }
})








