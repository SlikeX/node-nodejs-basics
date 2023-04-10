import { fork } from "node:child_process";

const href = new URL("files/script.js", import.meta.url);

const spawnChildProcess = async (args) => {
  const child = fork(href, args, { silent: true });
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["first", "second", "third"]);
