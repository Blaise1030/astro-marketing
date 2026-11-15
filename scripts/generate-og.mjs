#!/usr/bin/env node
/**
 * Rasterize Project Orso Open Graph images (1200×630) into public/.
 * Run: npm run og
 *
 * Light theme, same frame as the landing page: double rails, the bear mark and
 * wordmark, a headline with one phrase in the brand selection box, and a faint
 * bear walking in from the right edge.
 */
import sharp from "sharp";
import { mkdirSync, readFileSync } from "fs";

const W = 1200;
const H = 630;
mkdirSync("public", { recursive: true });

const C = {
  ground: "#fcfcfc",
  ink: "#1d1d1f",
  muted: "#6e6e73",
  faint: "#a1a1a6",
  hairline: "#e8e8ea",
  brand: "#2f6cec",
};
const SANS = "Helvetica Neue";
const MONO = "Menlo";

// The bear mark from the site logo component, so the two never drift apart.
const logo = readFileSync("src/components/landing/Logo.astro", "utf8");
const BEAR = logo.match(/<path d="([^"]+)"/)[1];
const [bx, by, bw, bh] = logo.match(/viewBox="([^"]+)"/)[1].split(" ").map(Number);

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** Measure rendered text width (px) with the same font stack librsvg will use. */
async function textWidth(text, size, weight = "Medium") {
  const { info } = await sharp({
    text: { text: `<span font_family="${SANS}" font_weight="${weight === "Medium" ? 500 : 400}" size="${size * 1024}">${esc(text)}</span>`, dpi: 72, rgba: true },
  }).toBuffer({ resolveWithObject: true });
  return info.width;
}

function bear(x, y, height, fill, opacity = 1) {
  const s = height / bh;
  return `<g transform="translate(${x} ${y}) scale(${s}) translate(${-bx} ${-by})"><path d="${BEAR}" fill="${fill}" fill-opacity="${opacity}"/></g>`;
}

async function card({ eyebrow, lines, highlight, label, subtitle, filename }) {
  const size = 72;
  const lineH = 84;
  const top = 250;

  const text = [];
  for (const [i, line] of lines.entries()) {
    // Extra room above the highlighted line for its label tab.
    const y = top + i * lineH + (i >= highlight ? 30 : 0);
    if (i === highlight) {
      // Brand selection box around the whole line, with its label tab — as in the hero.
      const w = await textWidth(line, size);
      const pad = 10;
      const boxY = y - size * 0.78 - pad;
      const boxH = size * 0.98 + pad * 2;
      text.push(
        `<rect x="${72 - pad}" y="${boxY}" width="${w + pad * 2}" height="${boxH}" fill="${C.brand}" fill-opacity="0.06" stroke="${C.brand}" stroke-width="2"/>`,
        ...[
          [72 - pad, boxY],
          [72 + w + pad, boxY],
          [72 - pad, boxY + boxH],
          [72 + w + pad, boxY + boxH],
        ].map(([cx, cy]) => `<rect x="${cx - 4}" y="${cy - 4}" width="8" height="8" fill="#fff" stroke="${C.brand}" stroke-width="2"/>`),
        `<rect x="${72 - pad}" y="${boxY - 26}" width="${label.length * 8.4 + 16}" height="22" rx="3" fill="${C.brand}"/>`,
        `<text x="${72 - pad + 8}" y="${boxY - 10.5}" font-family="${MONO}" font-size="13" fill="#fff">${esc(label)}</text>`,
      );
    }
    text.push(
      `<text x="72" y="${y}" font-family="${SANS}" font-size="${size}" font-weight="500" letter-spacing="-2.2" fill="${C.ink}">${esc(line)}</text>`,
    );
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${C.ground}"/>

  <!-- Double rails, as on the landing page -->
  <rect x="28" y="0" width="1" height="${H}" fill="${C.hairline}"/>
  <rect x="34" y="0" width="1" height="${H}" fill="${C.hairline}"/>
  <rect x="${W - 35}" y="0" width="1" height="${H}" fill="${C.hairline}"/>
  <rect x="${W - 29}" y="0" width="1" height="${H}" fill="${C.hairline}"/>
  <line x1="35" y1="120" x2="${W - 35}" y2="120" stroke="${C.hairline}" stroke-dasharray="2 4"/>
  <line x1="35" y1="${H - 96}" x2="${W - 35}" y2="${H - 96}" stroke="${C.hairline}" stroke-dasharray="2 4"/>

  <!-- Faint bear walking along the bottom rule -->
  ${bear(720, H - 96 - 220, 220, C.ink, 0.06)}

  <!-- Wordmark -->
  ${bear(72, 56, 30, C.ink)}
  <text x="${72 + (30 * bw) / bh + 14}" y="80" font-family="${SANS}" font-size="26" font-weight="400" letter-spacing="-0.4" fill="${C.faint}">project <tspan fill="${C.ink}" font-weight="600">orso</tspan></text>
  <text x="${W - 72}" y="78" text-anchor="end" font-family="${MONO}" font-size="14" letter-spacing="1.6" fill="${C.muted}">${esc(eyebrow.toUpperCase())}</text>

  ${text.join("\n  ")}

  ${[].concat(subtitle).map((l, i) => `<text x="72" y="${top + lines.length * lineH + 22 + i * 34}" font-family="${SANS}" font-size="25" fill="${C.muted}">${esc(l)}</text>`).join("")}

  <!-- Footer strip -->
  <circle cx="78" cy="${H - 50}" r="4" fill="${C.brand}"/>
  <text x="92" y="${H - 45}" font-family="${MONO}" font-size="15" fill="${C.muted}">free &amp; open source  ·  content ops on github  ·  claude · cursor · codex</text>
</svg>`;

  return sharp(Buffer.from(svg)).png().toFile(`public/${filename}`);
}

await card({
  eyebrow: "Open source project",
  lines: ["Developer tools for", "the whole team."],
  highlight: 1,
  label: "team / marketing",
  subtitle: ["Drafts, previews and a Publish button over your repo,", "plus an AI agent anyone on the team can ask."],
  filename: "og.png",
});
await card({
  eyebrow: "Blog",
  lines: ["Notes on content,", "agents and GitHub."],
  highlight: 1,
  label: "blog / latest",
  subtitle: ["Project notes, guides and news from Project Orso."],
  filename: "og-blog.png",
});
await card({
  eyebrow: "Help",
  lines: ["Draft, preview,", "and publish."],
  highlight: 1,
  label: "help / guides",
  subtitle: ["Guides for editing your site with Project Orso,", "no Git required."],
  filename: "og-help.png",
});

console.log("Wrote public/og.png, public/og-blog.png, public/og-help.png");
