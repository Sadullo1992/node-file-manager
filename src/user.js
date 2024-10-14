import { argv } from "node:process";

const getUserName = () => {
  const args = argv.slice(2);
  const usernameArgs = args.filter((arg) => arg.startsWith("--username="));

  if (usernameArgs.length === 0) return "Unknown User";

  return usernameArgs[0].replace("--username=", "");
};

export const welcomeToUser = () => {
  const userName = getUserName();
  console.log(`Welcome to the File Manager, ${userName}!`);
};

export const byeToUser = () => {
  const userName = getUserName();
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
};
