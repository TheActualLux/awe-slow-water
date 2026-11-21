import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "At low tide, creeks thread the marsh.",
  "By dusk, the tide has risen through the grass.",
  "One star appears in each shallow pool—",
  "the same small light, repeated",
  "all the way to the sea.",
].join("\n");

const codePointCount = Array.from(text).length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new Error(`Entry must be 1–280 code points; got ${codePointCount}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
