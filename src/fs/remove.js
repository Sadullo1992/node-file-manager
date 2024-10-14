import { rm } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process";
import { isFile } from "../utils/index.js";

const remove = async ([filePath]) => {
  const pathToFile = resolve(cwd(), filePath);

  const isFileExist = await isFile(pathToFile);
  if (!isFileExist) throw new Error("Invalid file path");

  await rm(pathToFile);
};

export default remove;
