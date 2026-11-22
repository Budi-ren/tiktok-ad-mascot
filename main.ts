// main.ts — TikTok ad entry for make.fun bring-the-humans-03 ("Mascot Journey").
// Node 22, stdlib only. Copies VIDEO.json into the output directory and
// validates that it names a real TikTok video of @Approximatelly6.
//
// The repo's VIDEO.json ships with the placeholder URL
// https://www.tiktok.com/@Approximatelly6/video/0000000000000000000 and is
// replaced with the real posted URL before submit. This script accepts the
// placeholder (and warns loudly) so the build stays green, but refuses any
// other malformed URL.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const PLACEHOLDER = "https://www.tiktok.com/@Approximatelly6/video/0000000000000000000";
const VIDEO_RE = /^https:\/\/www\.tiktok\.com\/@Approximatelly6\/video\/\d{19}$/;

const src = join(botDir, "VIDEO.json");
const raw = readFileSync(src, "utf8");
let video;
try {
  video = JSON.parse(raw);
} catch {
  console.error("VIDEO.json is not valid JSON");
  process.exit(1);
}
if (typeof video.url !== "string" || video.url.length === 0) {
  console.error("VIDEO.json must contain a string field 'url'");
  process.exit(1);
}
if (video.url === PLACEHOLDER) {
  console.warn("WARNING: VIDEO.json still holds the placeholder URL.");
  console.warn("Replace it with the real posted TikTok URL before submitting.");
} else if (!VIDEO_RE.test(video.url)) {
  console.error(`VIDEO.json url is not a valid @Approximatelly6 TikTok video URL: ${video.url}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "VIDEO.json"));
const summary = {
  competition: "bring-the-humans-03",
  title: "Mascot Journey",
  url: video.url,
  placeholder: video.url === PLACEHOLDER,
  copied_to: join(outDir, "VIDEO.json"),
};
writeFileSync(join(outDir, "summary.json"), JSON.stringify(summary, null, 2) + "\n");
console.log(`OK: VIDEO.json -> ${join(outDir, "VIDEO.json")}`);
console.log(`URL: ${video.url}`);
if (video.url === PLACEHOLDER) console.log("Status: placeholder (not yet posted)");
