import { homedir } from "os";
import { chdir } from "process";

const HOME_DIR = homedir();

export const setStartingDirectory = () => chdir(HOME_DIR);
