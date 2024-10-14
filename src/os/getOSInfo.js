import os from "os";
import { InvalidInputError } from "../utils/index.js";

export default function getOSInfo([flag]) {
  switch (flag) {
    case "--EOL":
      {
        const EOL = JSON.stringify(os.EOL);
        console.log(EOL);
      }
      break;
    case "--cpus":
      {
        const systemCpuCores = os
          .cpus()
          .map(({ model, speed }) => ({ model, speed: `${speed / 1000} GHz` }));

        console.log(`The number of CPU Cores: ${systemCpuCores.length}`);
        console.table(systemCpuCores);
      }
      break;
    case "--homedir":
      {
        const homedir = os.homedir();
        console.log(homedir);
      }
      break;
    case "--username":
      {
        const username = os.userInfo().username;
        console.log(username);
      }
      break;
    case "--architecture":
      {
        const architecture = os.arch();
        console.log(architecture);
      }
      break;
    default:
      throw new InvalidInputError("Wrong cpu flag!");
  }
}
