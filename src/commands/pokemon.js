import { Command, pokemon }  from "../app/app.js";
import { MessageEmbed } from "discord.js";

export default new Command({
    name: "pokemon",
    async run(message) {
        const name = message.args[0]
        const url  =  pokemon.getSprite(name)
        let embed = new MessageEmbed({
            image: {
                url,
                height: 2048,
                width: 2048,
            }
        })

        message.channel.send({embeds:[embed]})
    }
})