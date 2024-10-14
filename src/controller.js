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
      // case "up":
      //   up(line);
      //   break;
      // case "ls":
      //   await ls();
      //   break;
      // case "cd":
      //   await cd(line);
      //   break;
      // case "cat":
      //   await read(line);
      //   break;
      // case "add":
      //   await create(line);
      //   break;
      // case "rn":
      //   await rename(line);
      //   break;
      // case "cp":
      //   await copy(line);
      //   break;
      // case "mv":
      //   await move(line);
      //   break;
      // case "rm":
      //   await remove(line);
      //   break;
      // case "os":
      //   getOSInfo(line);
      //   break;
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
    else console.log("Operation failed");
  } finally {
    showCurrentDirectory();
    this.prompt();
  }
}
