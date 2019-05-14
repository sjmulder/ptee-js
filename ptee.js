/* ptee.js - Copyright (c) 2019, Sijmen J. Mulder (see LICENSE.md) */

const process = require("process");
const childProcess = require("child_process");

var command = process.argv.slice(2);

if (command && command[0] === "--") {
  command = command.slice(1);
}

if (!command.length || command[0][0] == "-") {
  console.error("usage: ptee program [argument ...]");
  process.exit(1);
}

const child = childProcess.spawn(command[0], command.slice(1), {
  stdio: ["pipe", "inherit", "inherit"]
});

process.on("exit", code => {
  process.exit(code);
});

process.stdin.on("close", () => {
  childProcess.stdin.close();
});

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(chunk);
    child.stdin.write(chunk);
  }
});
