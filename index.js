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
    let emoPat = /(?=\p{Emoji})(?!\p{Number})/u
    
    //Bloc conditionnel
    if (emoPat.test(msgcon)) {
      if (!message.author.bot) {
        //match permet de vérifier si une chaine donnée existe dans une autre chaine. En gros ça va trouver tout les matchs.
        let matchs = msgcon.match(emoPat)
        console.log(matchs);
        console.log("le test est : " + emoPat.test(matchs));
        //comme match() renvoi un tableau je veux récupérer les input pour répondre avec le même input
        // Je vais donc la push dans un array que je pourrais vérifier
        let myArray = [];
        myArray.push(matchs)
        console.log("myArray est : " + myArray);

        message.reply(msgcon)
      }
      if (message.author.bot) {
        return //car l'auteur du message est un bot
      }
    }
})

// RENVOIE GIF 


bot.on('messageCreate', (message) => {

  // variables contenant ma liste de mot à utiliser pour trigger un meme

  let salutations = ["hi", "hey", "hello", "heya", "yo"]
  let risitas = ["issou", "kekw", "kek"]
  let daway = ["the way", "da way", "da we", "da weh", "da wae", " da wey", "de wey", "de way", "de weh"]

  // Reply en foction de la liste

  if (salutations.includes(message.content.toLowerCase())) {
    message.reply("https://i.pinimg.com/originals/fd/75/14/fd75149899abe3e57e4c9d3bf4243e9c.gif")
  }

  if (risitas.includes(message.content.toLowerCase())) {
    message.reply("https://thumbs.gfycat.com/DescriptiveSlushyGrizzlybear-max-1mb.gif")
  }

  if (daway.includes(message.content.toLowerCase())) {
    message.reply("https://c.tenor.com/D_Zn-MlO4mEAAAAC/do-you-know-the-way-ugandan-knuckles.gif")
  }

})








