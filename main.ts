import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "Low tide threads creeks through the marsh.",
  "Dusk gathers in the grass.",
  "One star in each pool—",
  "the same light, repeated",
  "till the pools run together.",
  "The sea holds one star.",
].join("\n");

const codePointCount = Array.from(text).length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new Error(`Entry must be 1–280 code points; got ${codePointCount}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
