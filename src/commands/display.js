import { MessageEmbed } from "discord.js";
import * as app from '../app/app.js'

export default new app.Command({
    name: "display",
    async run(message) {
      const user = message.mentions.members.first() ?? message.author
      let embed = new MessageEmbed({
                  image: {
                    url: user.displayAvatarURL({size: 2048, dynamic: true}),
                  }
              })

      message.channel.send({embeds:[embed]})
    }
})