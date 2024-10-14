import { readdir } from "node:fs/promises";

const ls = async () => {
  const contents = await readdir(process.cwd(), { withFileTypes: true });

  const folders = [];
  const files = [];

  for (const item of contents) {
    if (item.isDirectory())
      folders.push({
        name: item.name,
        type: "directory",
      });
    else
      files.push({
        name: item.name,
        type: "file",
      });
  }

  folders.sort((a, b) => a.name.localeCompare(b.name));
  files.sort((a, b) => a.name.localeCompare(b.name));

  console.table([...folders, ...files]);
};

export default ls;
