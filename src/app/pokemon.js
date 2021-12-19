import Pokedex from 'pokedex-promise-v2';
import fetch from 'node-fetch'
import pokefind from 'pokemon'

/**
 * 
 * @param {string} arg 
 * @param {pokefind.Language} language
 */
function translate(arg,language = "en"){
    arg = arg.toLowerCase()
    arg = arg[0].toUpperCase() + arg.slice(1)
    pokefind.languages.forEach(locale => {
        if (pokefind.all(locale).includes(arg)) {
            arg = pokefind.getName(pokefind.getId(arg,locale))
        }
    })
    arg = arg.toLowerCase()
    return arg

}

const options = {
    protocol: 'https',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000 // 5s
  }
export const pokedex = new Pokedex(options);

const apiGif = "https://www.smogon.com/dex/media/sprites/xy/"
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
/**
 * 
 * @param {string} arg 
 * @returns {Promise<>}
 */
export async function getPokemon(arg) {
    const p  = await pokedex.getPokemonByName(arg)
    const pokemon = await fetch(apiUrl + p.id).then(res => res.json())
    
    return pokemon
}
/**
 * 
 * @param {string} arg 
 * @returns 
 */
export  function getSprite(arg) {
    return apiGif + translate(arg) + ".gif"
}