// One Line, One Minute: The Funniest AI Excuse
// Writes a single one-line excuse (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Sorry I'm late \u2014 I claimed the same free token 23 times for $0, and my wallet still thinks we're rich.";

// Self-check gate (RULES.txt): entry must be UTF-8 text, 1-200 chars,
// a single line, not only whitespace. Fail loudly instead of writing
// an entry the sealed scorer would refuse.
if (LINE.length < 1 || LINE.length > 200) {
  console.error(`entry is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  console.error("entry must be one non-blank line");
  process.exit(1);
}

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${out}`);
