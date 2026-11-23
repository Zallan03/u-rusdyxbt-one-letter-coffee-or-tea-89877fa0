// One Letter: Coffee or Tea — entry A (coffee).
// Writes exactly one letter, "A", to /output/entry.txt — nothing else.
// A is coffee: bold, dark, energetic — the vivid morning answer.
// The single letter stands alone as the whole answer.
import { mkdirSync, writeFileSync } from "node:fs";

const letter = "A";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
console.log("Wrote entry:", letter);
