import { mkdirSync, writeFileSync } from "node:fs";

// Unsent: The Micro-Confession Sprint
// A message typed to someone who can never receive it again.
// Deterministic: writes the exact same bytes on every run.
const entry = `To: Mum
I still play your voicemail from the night before you died, just to hear you say my name one more time.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
