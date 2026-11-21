import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "Low tide threads creeks through the marsh.",
  "Reeds comb light from channels.",
  "One star in every pool—",
  "the same point, broken, gathered whole again",
  "as pools flow into the sea.",
  "Its reflection widens past reeds and shore.",
  "The sea holds one star.",
  "Night without shore or edge.",
].join("\n");

const codePointCount = Array.from(text).length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new Error(`Entry must be 1–280 code points; got ${codePointCount}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
