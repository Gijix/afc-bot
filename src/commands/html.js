import { Command,getImgFromHtml} from '../app/app.js'

export default new Command({
    name: "html",
    async run(message) {
        const image = await getImgFromHtml("src/html/pokeCard.html")
        message.channel.send({
            content: "\n",
            files: [{
                attachment: image
            }]
        })
    }
})