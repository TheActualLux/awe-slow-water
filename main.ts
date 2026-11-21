import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "The tide turned under the house",
  "while its rooms slept.",
  "A spoon cooled in its cup.",
  "A rope slipped down the pier post.",
  "Moonlight broke, gathered, broke again.",
  "At dawn, the shore drew back;",
  "salt shone between stones.",
  "Beyond the harbor, water",
  "moved softly around the whole earth.",
].join("\n");

const codePointCount = Array.from(text).length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new Error(`Entry must be 1–280 code points; got ${codePointCount}`);
}

console.log(codePointCount);
console.log(text);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
