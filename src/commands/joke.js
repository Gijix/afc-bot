import * as app from '../app/app.js'
import BlaguesAPI from "blagues-api";

const blagues = new BlaguesAPI(process.env.JOKE_TOKEN)

export default new app.Command({
    name: "joke",
    async run(message){
        const blague = await blagues.random();
        const payload = ` ${blague.joke} \n ${blague.answer}`
        message.channel.send(payload)
    }
})