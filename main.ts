// The Worst Line an AI Could Say — make.fun entry (program/v1, Node 22).
// Writes exactly one pickup line (104 chars, ASCII) to /output/entry.txt.
// Deterministic, stdlib only, no network, no randomness, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my training data what love is. It showed me your file, your address, and 847 photos of your dog.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
