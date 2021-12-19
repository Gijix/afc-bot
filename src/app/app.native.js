import convert from 'node-html-to-image'
import { readFile } from 'fs/promises'



export async function getImgFromHtml(path,param = {}) {
    let _htmlTemplate = (await readFile(path)).toString()
    
    Object.keys(param).forEach(key => {
      _htmlTemplate.replace("${"+ key + "}",param[key])
    })

    const images = await convert({
        html: _htmlTemplate,
        quality: 100,
        type: 'jpeg',
        puppeteerArgs: {
          args: ['--no-sandbox'],
        },
        encoding: 'buffer',
    })

    return images
}

