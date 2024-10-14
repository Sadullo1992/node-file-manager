import { COMMANDS } from "../constants.js";
import { InvalidInputError } from "./InvalidInputError.js";

const validateCommand = async (cmd, args) => {
  if (cmd === ".exit") return;

  const command = COMMANDS[cmd];
  if (!command) throw new InvalidInputError("Unknown Operation");

  if (command.argsLength !== args.length)
    throw new InvalidInputError(
      `Wrong arguments, expected ${command.argsLength} arguments`
    );
};

export default validateCommand;
