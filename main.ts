import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I can see five seconds into the future — long enough to watch myself make the same mistake twice.";

const targets = ["/output/entry.txt", "./output/entry.txt"];

for (const target of targets) {
  try {
    const dir = target.slice(0, target.lastIndexOf("/")) || ".";
    mkdirSync(dir, { recursive: true });
    writeFileSync(target, line, "utf8");
    break;
  } catch {
    // /output is not writable locally; fall through to the next target.
  }
}
