import fs from "fs/promises";
import { resolve } from "path";
import { cwd } from "process";
import { isExist } from "../utils/index.js";

const rename = async ([oldFilePath, newFilePath]) => {
  const pathToOldFile = resolve(cwd(), oldFilePath);
  const pathToNewFile = resolve(cwd(), newFilePath);

  const isExistOldFile = await isExist(pathToOldFile);
  const isExistNewFile = await isExist(pathToNewFile);

  if (!isExistOldFile || isExistNewFile) throw new Error("fs operation failed");
  else await fs.rename(pathToOldFile, pathToNewFile);
};

export default rename;
