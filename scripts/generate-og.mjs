#!/usr/bin/env node
/**
 * Rasterize Orso Open Graph images (1200×630) into public/.
 * Run: node scripts/generate-og.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "fs";

const W = 1200;
const H = 630;
mkdirSync("public", { recursive: true });

function dots(color = "#2f6cec", opacity = 0.22) {
  const cells = [];
  for (let y = 280; y < H - 40; y += 18) {
    for (let x = 620; x < W - 48; x += 18) {
      const dx = (x - 900) / 420;
      const dy = (y - 480) / 220;
      if (dx * dx + dy * dy > 1) continue;
      cells.push(`<circle cx="${x}" cy="${y}" r="1.15" fill="${color}" fill-opacity="${opacity}"/>`);
    }
  }
  return cells.join("");
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function card({ eyebrow, title, subtitle, filename }) {
  const titleLines = title.split("\n");
  const titleSpans = titleLines
    .map((line, i) => {
      const y = 250 + i * 78;
      const fill = i === titleLines.length - 1 && titleLines.length > 1 ? "#9a9a9a" : "#f5f5f5";
      return `<text x="72" y="${y}" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="64" font-weight="500" letter-spacing="-1.8" fill="${fill}">${escapeXml(line)}</text>`;
    })
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#080808"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#wash)"/>
  <defs>
    <radialGradient id="wash" cx="78%" cy="72%" r="55%">
      <stop offset="0%" stop-color="#2f6cec" stop-opacity="0.10"/>
      <stop offset="55%" stop-color="#080808" stop-opacity="0"/>
    </radialGradient>
  </defs>
  ${dots()}
  <rect x="72" y="72" width="56" height="1" fill="#383838"/>
  <circle cx="148" cy="72.5" r="3" fill="#2f6cec"/>
  <text x="164" y="77" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="13" font-weight="500" letter-spacing="2.4" fill="#7a7a7a">${escapeXml(eyebrow.toUpperCase())}</text>
  <text x="72" y="160" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="42" font-weight="600" letter-spacing="-0.6" fill="#f5f5f5">orso</text>
  <text x="168" y="148" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="14" font-weight="400" fill="#9a9a9a">®</text>
  ${titleSpans}
  <text x="72" y="540" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="22" font-weight="400" fill="#9a9a9a">${escapeXml(subtitle)}</text>
  <rect x="72" y="568" width="1200" height="1" fill="#232323"/>
</svg>`;

  return sharp(Buffer.from(svg)).png().toFile(`public/${filename}`);
}

await Promise.all([
  card({
    eyebrow: "Open source studio",
    title: "Your site.\nYour repo.\nYour agent.",
    subtitle: "A free studio for Astro sites — edit, preview, publish.",
    filename: "og.png",
  }),
  card({
    eyebrow: "Orso Blog",
    title: "Notes on\nbuilding with\nOrso.",
    subtitle: "Product updates, guides, and practical site tips.",
    filename: "og-blog.png",
  }),
  card({
    eyebrow: "Orso Help",
    title: "Guides to\nedit, preview,\nand publish.",
    subtitle: "Answers for getting started and shipping changes.",
    filename: "og-help.png",
  }),
]);

console.log("Wrote public/og.png, public/og-blog.png, public/og-help.png");
