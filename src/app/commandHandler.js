//@ts-check
import { Message } from "discord.js";
import { readdir } from "fs/promises";
import path from "path";

/**
 * @callback run
 * @param {Message} message
 * @return {Promise<void>}
 */
/**
 * @typedef commandOptions
 * @property {string} name
 * @property {string} description
 * @property {run} run
 */

/**
 * @param {"commands"} dir
 * @returns {Promise<Command[]>}
 */
async function loadFile(dir) {
  let fullPath = path.join(process.cwd(), "src", dir);
  const filenames = await readdir(fullPath);
  const filepathList = [];
  for (const filename of filenames) {
    const filepath = path.join(fullPath, filename);
    filepathList.push(filepath);
  }
  const exportRaws = await Promise.all(
    filepathList.map(async (filepath) => {
      const tableFile = await import("file://" + filepath);
      return tableFile.default;
    })
  );
  return exportRaws;
}

export default class Command {
  /**
   * @type {Command[]}
   */
  static commandList = [];

  static async load() {
    const commands = await loadFile("commands");
    this.commandList = [...commands]
  }

  /**
   * @param {Message} message
   */
  static async run(message) {
    this.commandList.forEach(async ({options}) => {
      if(message.author.id !== process.env.BOT_OWNER) return
      if (message.author.bot) return;
      if(!message.content.startsWith(process.env.PREFIX + options.name)) return
      await options.run(message);
    });
  }

  /**
   * @param {commandOptions} options
   */
  constructor(options) {
    this.options = options;
  }
}
