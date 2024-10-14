import { join } from "path";
import { cwd, chdir } from "process";

const up = () => chdir(join(cwd(), "../"));

export default up;
