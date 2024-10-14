import { showCurrentDirectory } from "./utils/index.js";

export default async function controller(line) {
  const cmd = line.trim().split(" ")[0];
  try {
    switch (cmd) {
      case ".exit":
        this.close();
        break;
      default:
        console.log("Invalid input");
        break;
    }
  } catch (err) {
    console.log("Operation failed");
  } finally {
    showCurrentDirectory();
    this.prompt();
  }
}
