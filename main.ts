import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "At low tide, creeks thread the marsh.",
  "Dusk rises through the grass.",
  "One star in each pool—",
  "the same light, repeated",
  "as the pools run together,",
  "then the sea,",
  "holding one star.",
].join("\n");

const codePointCount = Array.from(text).length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new Error(`Entry must be 1–280 code points; got ${codePointCount}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
