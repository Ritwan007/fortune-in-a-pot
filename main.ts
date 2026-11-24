// Fortune in a Pot — one line, 120 characters max.
// A fortune in prediction cadence for one specific plant (a little
// fern): kind, warm about the keeper, with the joke landing on the
// keeper watering before the droop, not after. Deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You will get a bigger pot this spring, little fern — and a keeper who waters you before the droop, not after.";

// The gate rejects anything over 120 characters, so fail loudly here
// rather than ship an invalid entry if the line is ever edited longer.
if (LINE.length > 120) {
  throw new Error(`entry is ${LINE.length} characters, over the 120 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
