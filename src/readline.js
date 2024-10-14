import { createInterface } from "node:readline";
import controller from "./controller.js";
import { byeToUser } from "./user.js";

const close = () => {
  byeToUser();
  process.exit(0);
};

export const readlineInit = () => {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
  });

  readline.prompt();

  readline.on("line", controller.bind(readline)).on("close", close);
};
