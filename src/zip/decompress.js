import { createBrotliDecompress } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { parse, resolve } from "path";
import { cwd } from "process";
import { isDirectory, isFile } from "../utils/index.js";

const decompress = async ([filePath, dest]) => {
  const pathToFile = resolve(cwd(), filePath);
  const pathToDestination = resolve(cwd(), dest);

  const isFileExist = await isFile(pathToFile);
  const isDestinationExist = await isDirectory(pathToDestination);
  if (!isFileExist) throw new Error("File doesn't exist");
  if (!isDestinationExist)
    throw new Error("Destination directory doesn't exist");

  const { name, ext } = parse(pathToFile);
  if (ext !== ".br") throw new Error("This is not compressed file");

  const pathToDestinationFile = resolve(pathToDestination, name);

  const brotli = createBrotliDecompress();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToDestinationFile);

  source.pipe(brotli).pipe(destination);
};

export default decompress;
