import { createReadStream } from "fs";
import { resolve } from "path";
import { cwd } from "process";
import { showCurrentDirectory, isFile } from "../utils/index.js";

const read = async ([filePath]) => {
  const pathToFile = resolve(cwd(), filePath);

  const isFileExist = await isFile(pathToFile);
  if (!isFileExist) throw new Error("Invalid file path");

  const readableStream = createReadStream(pathToFile);

  readableStream.on("data", (chunk) => {
    console.log("\n" + chunk.toString());
  });
  readableStream.on("error", () => {
    console.log("Operation failed");
  });
  readableStream.on("end", () => {
    showCurrentDirectory();
  });
};

export default read;
