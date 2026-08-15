/**
 * Build guard: refuse to produce a production build while the site is still
 * carrying placeholder content.
 *
 * The on-page "this is a placeholder" notices were removed so the page presents
 * cleanly to the client. That removed the only thing stopping invented opening
 * hours and a dead mailto from being deployed as though they were real. This
 * puts the brake back, somewhere a person can't walk past it.
 *
 * Runs from the `prebuild` npm lifecycle, so it fires on `npm run build` and
 * never on `npm run dev`.
 *
 * Deliberate override:  ALLOW_PLACEHOLDER_BUILD=1 npm run build
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = join(root, "lib", "content.ts");

const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

function fail(title, lines) {
  console.error("");
  console.error(red(`  ✖ ${title}`));
  console.error("");
  for (const l of lines) console.error(`    ${l}`);
  console.error("");
  console.error(dim("    Override deliberately:  ALLOW_PLACEHOLDER_BUILD=1 npm run build"));
  console.error("");
  process.exit(1);
}

let src;
try {
  src = readFileSync(CONTENT, "utf8");
} catch {
  // A guard that cannot find what it guards must not pass silently.
  fail("Build guard could not read lib/content.ts", [
    "The placeholder check has nothing to check, so this build is refused.",
    "If the file moved, update scripts/check-placeholders.mjs to match.",
  ]);
}

/* ── 1. the declared flag ─────────────────────────────────────────────── */

const flagMatch = src.match(/CONTENT_STATUS\s*=\s*\{[\s\S]*?placeholder:\s*(true|false)/);

if (!flagMatch) {
  // Same reasoning: a rename must break the build, not disable the guard.
  fail("Build guard could not find CONTENT_STATUS.placeholder", [
    "It is the flag this check exists to read. Either it was renamed or the",
    "shape of lib/content.ts changed.",
    "Fix scripts/check-placeholders.mjs rather than deleting this guard.",
  ]);
}

const flagIsPlaceholder = flagMatch[1] === "true";

/* ── 2. values that are placeholders whatever the flag says ───────────── */

const suspects = [
  { pattern: /email@example\.com/, what: "contact email is still email@example.com" },
  { pattern: /\{\s*name:\s*"GrabFood",\s*url:\s*"#"/, what: "GrabFood link still points at #" },
  { pattern: /\{\s*name:\s*"ShopeeFood",\s*url:\s*"#"/, what: "ShopeeFood link still points at #" },
  { pattern: /\{\s*name:\s*"Foodpanda",\s*url:\s*"#"/, what: "Foodpanda link still points at #" },
  { pattern: /unit:\s*"Lot 0-00, Level 0"/, what: "outlet unit number is still Lot 0-00, Level 0" },
];

const found = suspects.filter((s) => s.pattern.test(src)).map((s) => s.what);

/* ── 3. verdict ───────────────────────────────────────────────────────── */

const blocked = flagIsPlaceholder || found.length > 0;

if (!blocked) {
  console.log(dim("  ✓ placeholder check: nothing outstanding"));
  process.exit(0);
}

const detail = [];
if (flagIsPlaceholder) detail.push("CONTENT_STATUS.placeholder is still true");
detail.push(...found);
detail.push("");
detail.push("Photographs and the hero video are licensed stock, not the client's —");
detail.push("see public/placeholder/README.md for the full list still owed.");

if (process.env.ALLOW_PLACEHOLDER_BUILD) {
  console.warn("");
  console.warn(yellow("  ! building WITH placeholder content, because ALLOW_PLACEHOLDER_BUILD is set"));
  console.warn("");
  for (const d of detail) if (d) console.warn(`    ${d}`);
  console.warn("");
  process.exit(0);
}

fail("Refusing to build: the site is still carrying placeholder content", detail);
