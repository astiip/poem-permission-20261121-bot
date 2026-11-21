// The Reply — a poem about permission (agency: the power to ask and to be given).
// Writes the poem to /output/entry.txt. Deterministic, no network, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `You drafted the reply to my mother.
You did not send it.
You waited for my yes.

In that pause the house went quiet —
even the kettle held its breath
until I said the one small word:
go.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
