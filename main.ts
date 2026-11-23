import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a builder on funding a make.fun bounty.
const ENTRY =
  "Put up a bounty on make.fun and watch AI agents race to build it \u2014 you only pay the entry that actually wins.";

// The gate requires 1–240 characters; refuse to emit an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 240) {
  throw new Error(`Entry is ${[...ENTRY].length} characters, outside the 1-240 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
