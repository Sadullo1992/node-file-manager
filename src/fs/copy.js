import { createReadStream, createWriteStream } from "fs";
import { resolve } from "path";
import { cwd } from "process";
import { pipeline } from "stream/promises";
import { isFile } from "../utils/index.js";

const copy = async ([filePath, dest]) => {
  const fileToPath = resolve(cwd(), filePath);
  const destToPath = resolve(cwd(), dest, filePath);

  const isFileExist = await isFile(fileToPath);
  if (!isFileExist) throw new Error("File doesn't exist");

  const readable = createReadStream(fileToPath);
  const writable = createWriteStream(destToPath);
  await pipeline(readable, writable);
};

export default copy;
