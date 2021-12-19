import * as app from '../app/app.js'

export default new app.Command({
    name: "ping",
    async run(message){
      message.reply("pong")
    }
})