import { createWriteStream } from "node:fs";

const fileName = "fileToWrite.txt";
const path = "files";
const href = getFullPath(`${path}/${fileName}`);

const write = async () => {
  const stream = createWriteStream(href);
  process.stdin.pipe(stream);
};
function getFullPath(path) {
  return new URL(path, import.meta.url);
}
await write();
