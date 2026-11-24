import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for my Wi-Fi: it is there, then it is not. It ghosts me
// mid-call, mid-download, mid-everything, and drifts back pretending
// nothing happened. Everybody's home Wi-Fi does this; the word names
// the exact behaviour in one instantly readable hit.
const word = "Ghosting";

// Self-checking gate: the sealed scorer only accepts 1-20 characters
// of non-whitespace text. Refuse to write an over-cap entry instead
// of silently submitting an invalid one.
if ([...word].length < 1 || [...word].length > 20 || word.trim().length === 0) {
  throw new Error(`entry ${JSON.stringify(word)} fails the 1-20 char gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
