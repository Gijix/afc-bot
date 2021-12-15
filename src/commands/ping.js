import Command from "../app/commandHandler.js";

export default new Command({
    name: "ping",
    async run(message){
      message.reply("pong")
    }
})