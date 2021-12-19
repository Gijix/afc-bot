import * as app from '../app/app.js'

export default new app.Command({
    name: "clear",
    async run(message){
        let number = +message.content.split(" ")[1]
        if(message.channel.type === "GUILD_TEXT") {
            message.channel.bulkDelete(number)
        }
    }
})