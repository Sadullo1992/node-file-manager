import { open } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process";

const create = async ([filePath]) => {
  const pathToFile = resolve(cwd(), filePath);
  let fileHandle;

  try {
    fileHandle = await open(pathToFile, "a");
  } finally {
    await fileHandle?.close();
  }
};

export default create;
