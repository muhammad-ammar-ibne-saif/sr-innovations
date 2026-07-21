/**
 * Portfolio hero screenshot capture
 * -----------------------------------------------------
 * Captures the above-the-fold "hero" section of each site
 * in sites.json, sized to match the portfolio card's
 * aspect ratio (4:3), and saves optimized JPGs.
 *
 * Usage:
 *   npm install
 *   npx playwright install chromium
 *   node capture.js
 *
 * Output:
 *   ./output/<slug>.jpg        (raw viewport capture)
 *   ./output-cropped/<slug>.jpg (resized/cropped to 1200x900, compressed)
 *   ./case-studies-snippet.json (ready-to-paste screenshot map)
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const sites = require("./sites.json");

// Card aspect ratio is 4:3 — capture at 2x for retina sharpness, then downscale
const VIEWPORT = { width: 1200, height: 900 };
const OUT_RAW = path.join(__dirname, "output");
const OUT_FINAL = path.join(__dirname, "output-cropped");

const COOKIE_SELECTORS = [
  'button:has-text("Accept all")',
  'button:has-text("Accept All")',
  'button:has-text("Accept Cookies")',
  'button:has-text("Accept")',
  'button:has-text("I Accept")',
  'button:has-text("Got it")',
  'button:has-text("OK")',
  'button:has-text("Allow all")',
  'button:has-text("Allow All")',
  '#onetrust-accept-btn-handler',
  '.cky-btn-accept',
  '.cc-btn.cc-allow',
  '[aria-label="Accept cookies"]',
];

async function dismissCookieBanners(page) {
  for (const sel of COOKIE_SELECTORS) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 800 })) {
        await el.click({ timeout: 800 });
        await page.waitForTimeout(400);
      }
    } catch (_) {
      // selector not present — ignore and continue
    }
  }
}

async function captureSite(browser, site) {
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2, // retina-quality capture
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  });
  const page = await context.newPage();

  try {
    console.log(`→ ${site.name} (${site.url})`);

    if (site.requiresAuth) {
      console.log(`  ⚠ skipped — requires login, capture manually`);
      await context.close();
      return { slug: site.slug, status: "skipped-auth" };
    }

    await page.goto(site.url, { waitUntil: "load", timeout: 45000 });

    // Let hero animations / lazy images settle
    await page.waitForTimeout(1800);

    await dismissCookieBanners(page);
    await page.waitForTimeout(500);

    // Freeze CSS animations/transitions so nothing is mid-motion in the shot
    await page.addStyleTag({
      content: `*, *::before, *::after {
        animation-play-state: paused !important;
        transition: none !important;
      }`,
    });
    await page.waitForTimeout(300);

    const rawPath = path.join(OUT_RAW, `${site.slug}.jpg`);
    await page.screenshot({ path: rawPath, type: "jpeg", quality: 90 });

    await context.close();
    return { slug: site.slug, status: "ok", rawPath };
  } catch (err) {
    console.log(`  ✗ failed: ${err.message}`);
    await context.close();
    return { slug: site.slug, status: "failed", error: err.message };
  }
}

async function processImage(slug) {
  const rawPath = path.join(OUT_RAW, `${slug}.jpg`);
  const finalPath = path.join(OUT_FINAL, `${slug}.jpg`);
  if (!fs.existsSync(rawPath)) return;

  await sharp(rawPath)
    .resize(1200, 900, { fit: "cover", position: "top" }) // keep hero, crop from top
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(finalPath);
}

async function main() {
  fs.mkdirSync(OUT_RAW, { recursive: true });
  fs.mkdirSync(OUT_FINAL, { recursive: true });

  const browser = await chromium.launch();
  const results = [];

  for (const site of sites) {
    const result = await captureSite(browser, site);
    results.push({ ...site, ...result });
    if (result.status === "ok") {
      await processImage(site.slug);
    }
  }

  await browser.close();

  // Build the snippet you can paste into site.ts
  const snippet = results
    .filter((r) => r.status === "ok")
    .map((r) => ({
      slug: r.slug,
      name: r.name,
      screenshot: `/portfolio/${r.slug}.jpg`,
    }));

  fs.writeFileSync(
    path.join(__dirname, "case-studies-snippet.json"),
    JSON.stringify(snippet, null, 2)
  );

  const failed = results.filter((r) => r.status !== "ok");
  console.log("\n----- SUMMARY -----");
  console.log(`✓ captured: ${snippet.length}`);
  console.log(`✗ failed/skipped: ${failed.length}`);
  if (failed.length) {
    failed.forEach((f) => console.log(`  - ${f.name}: ${f.status} ${f.error || ""}`));
  }
  console.log("\nFinal images are in ./output-cropped/");
  console.log("Copy them all into your project's /public/portfolio/ folder.");
  console.log("Screenshot map written to ./case-studies-snippet.json");
}

main();