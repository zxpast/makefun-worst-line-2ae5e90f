// Entry for the make.fun bounty "The Worst Line an AI Could Say" (program/v1, Node 22).
// All it does is put a single pickup line (104 ASCII characters) into /output/entry.txt.
// The run is fully deterministic: only the Node standard library, and it never
// touches the network, never rolls any randomness, and never reads the environment.
import { mkdirSync, writeFileSync } from "node:fs";

const WORST_LINE =
  "I asked my training data what love is. It showed me your file, your address, and 847 photos of your dog.";

// Where the grader looks for the entry: a fixed output folder, by design.
function resolveOutDir(): string {
  return "/output";
}

// Make sure the output folder exists, then write the line out as UTF-8 text.
function writeEntry(text: string): void {
  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, text, "utf8");
}

writeEntry(WORST_LINE);
