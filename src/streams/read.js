import { createReadStream } from "node:fs";

const fileName = "fileToRead.txt";
const path = "files";
const href = getFullPath(`${path}/${fileName}`);

const read = async () => {
  const stream = createReadStream(href);
  stream.pipe(process.stdout);
};
function getFullPath(path) {
  return new URL(path, import.meta.url);
}

await read();
