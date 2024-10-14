import { readlineInit } from "./readline.js";
import { welcomeToUser } from "./user.js";
import { setStartingDirectory, showCurrentDirectory } from "./utils/index.js";

function init() {
  welcomeToUser();
  setStartingDirectory();
  showCurrentDirectory();

  // the main process controlled by readline
  readlineInit();
}

init();
