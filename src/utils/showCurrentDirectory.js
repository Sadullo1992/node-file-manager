import { cwd } from "process";

export default function showCurrentDirectory() {
  console.log(`You are currently in ${cwd()}`);
}
