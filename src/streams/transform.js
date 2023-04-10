import { Transform } from "node:stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reversedStr = (str) => str.split("").reverse().join("");
  const transformData = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reversedStr(chunk.toString()));
    },
  });
  await pipeline(process.stdin, transformData, process.stdout);
};

await transform();
