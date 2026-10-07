import { randomBytes, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";
import { StringDecoder } from "node:string_decoder";

const scrypt = promisify(scryptCallback);

if (!process.stdin.isTTY || typeof process.stdin.setRawMode !== "function") {
  console.error("Run this script in an interactive terminal so the password can be entered without echo.");
  process.exit(1);
}

const decoder = new StringDecoder("utf8");
let password = "";
let finished = false;

process.stdout.write("Admin password (input hidden): ");
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on("data", async (chunk) => {
  for (const character of decoder.write(chunk)) {
    if (character === "\u0003") {
      process.stdin.setRawMode(false);
      process.exit(130);
    }
    if (character === "\r" || character === "\n") {
      if (finished) return;
      finished = true;
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdout.write("\n");

      if (!password) {
        console.error("Password cannot be empty.");
        process.exitCode = 1;
        return;
      }

      const salt = randomBytes(16);
      const hash = await scrypt(password, salt, 64);
      password = "";
      const rawHash = `scrypt$${salt.toString("hex")}$${Buffer.from(hash).toString("hex")}`;
      console.log(`ADMIN_PASSWORD_HASH=${rawHash}`);
      console.log(`For .env.local, escape dollar signs: ADMIN_PASSWORD_HASH=${rawHash.replaceAll("$", "\\$")}`);
      return;
    }
    if (character === "\u007f" || character === "\b") {
      password = Array.from(password).slice(0, -1).join("");
    } else {
      password += character;
    }
  }
});
