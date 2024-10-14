import { createReadStream } from "fs";
import { resolve } from "path";
import { cwd } from "process";
import { isFile, showCurrentDirectory } from "../utils/index.js";

const { createHash } = await import("crypto");

const calculateHash = async ([filePath]) => {
  const pathToFile = resolve(cwd(), filePath);

  const isFileExist = await isFile(pathToFile);
  if (!isFileExist) throw new Error("Invalid file path");

  const readable = createReadStream(pathToFile);
  const hash = createHash("sha256");

  readable.on("readable", () => {
    const data = readable.read();
    if (data) hash.update(data);
  });
  readable.on("end", () => {
    console.log(hash.digest("hex"));
    showCurrentDirectory();
  });
};

export default calculateHash;
