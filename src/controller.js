import { COMMANDS } from "./constants.js";
import { read, create, rename, copy, move, remove } from "./fs/index.js";
import { up, ls, cd } from "./nav/index.js";
import getOSInfo from "./os/getOSInfo.js";
import {
  cmdLineParser,
  InvalidInputError,
  showCurrentDirectory,
  validateCommand,
} from "./utils/index.js";

export default async function controller(line) {
  const [cmd, ...args] = cmdLineParser(line);
  try {
    await validateCommand(cmd, args);
    switch (cmd) {
      case COMMANDS.up.cmd:
        up();
        break;
      case COMMANDS.ls.cmd:
        await ls();
        break;
      case COMMANDS.cd.cmd:
        await cd(args);
        break;
      case COMMANDS.cat.cmd:
        await read(args);
        break;
      case COMMANDS.add.cmd:
        await create(args);
        break;
      case COMMANDS.rn.cmd:
        await rename(args);
        break;
      case COMMANDS.cp.cmd:
        await copy(args);
        break;
      case COMMANDS.mv.cmd:
        await move(args);
        break;
      case COMMANDS.rm.cmd:
        await remove(args);
        break;
      case COMMANDS.os.cmd:
        getOSInfo(args);
        break;
      // case "hash":
      //   await calculateHash(line);
      //   break;
      // case "compress":
      //   await compress(line);
      //   break;
      // case "decompress":
      //   await decompress(line);
      //   break;
      case ".exit":
        this.close();
        break;
      default:
        console.log("Invalid input");
        break;
    }
  } catch (err) {
    if (err instanceof InvalidInputError)
      console.log(`Invalid Input: ${err.message}`);
    else console.error(err);
  } finally {
    showCurrentDirectory();
    this.prompt();
  }
}
