import { resolve } from "path";
import { chdir, cwd } from "process";
import { isDirectory } from "../utils/index.js";

const cd = async (args) => {
  const pathToDirectory = args[0];
  const cdDir = resolve(cwd(), pathToDirectory);

  const isDir = await isDirectory(cdDir);
  if (isDir) chdir(cdDir);
  else throw new Error("Invalid directory");
};

export default cd;
