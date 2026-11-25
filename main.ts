// Entry runner for "Invent a Word We Need" (deranalabs).
// One new English word, defined in a single clear line. The coinage is
// hallucitation: the blend is honest (hallucination wearing a citation's
// clothes), the phenomenon is everywhere in the age of confident
// machines, and the definition's sting is in its last detail — the
// invented source always arrives with a page number, because detail is
// what makes a lie feel peer-reviewed. Coined at /output/entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "hallucitation (noun): a confident citation of a document that does not exist, delivered with a page number.";

function prepare(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

const out = process.env.OUTPUT_DIR ?? "/output";
prepare(out);
fs.writeFileSync(path.join(out, "entry.txt"), LINE + "\n", "utf8");
