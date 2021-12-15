import Command from "../app/commandHandler.js";

export default new Command({
    name: "clear",
    async run(message){
        let number = +message.content.split(" ")[1]
        if(message.channel.type === "GUILD_TEXT") {
            message.channel.bulkDelete(number)
        }
    }
})