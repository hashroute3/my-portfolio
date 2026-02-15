#!/usr/bin/env node
/**
 * Downloads company logos to public/logos/ for the experience section.
 * Uses Wikimedia Commons (high-quality SVG) where available, else FetchFavicon (PNG).
 * Run: node scripts/download-logos.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGOS_DIR = path.join(__dirname, '..', 'public', 'logos');

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; PortfolioLogoFetcher/1.0)',
  Accept: 'image/*,*/*',
};

// Slack: use PNG so you can replace with logo from LinkedIn (https://www.linkedin.com/company/tiny-spec-inc)
const SLACK_LOGO = { file: 'slack.png', domain: 'slack.com' };

// High-quality SVG from Wikimedia Commons (scalable, crisp at any size)
const WIKIMEDIA_LOGOS = [
  { file: 'cisco.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg' },
  { file: 'ebay.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg' },
  { file: 'mcafee.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/McAfee_logo.svg' },
];

// Favicon fallback for companies not on Wikimedia (PNG)
const FAVICON_LOGOS = [
  SLACK_LOGO,
  // Armorblox: use public/logos/armorblox.jpg (from Crunchbase); not re-downloaded by script
  { file: 'hcltech.png', domain: 'hcltech.com' },
];

if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

console.log('Downloading Slack and other favicons (PNG)...');
for (const { file, domain } of FAVICON_LOGOS) {
  const filePath = path.join(LOGOS_DIR, file);
  const urls = [
    `https://fetchfavicon.com/i/${domain}?size=128&format=png`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  ];
  let done = false;
  for (const url of urls) {
    if (done) break;
    try {
      const res = await fetch(url, { headers: HEADERS });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = await res.arrayBuffer();
      if (buf.byteLength < 50) throw new Error('response too small');
      fs.writeFileSync(filePath, Buffer.from(buf));
      console.log(`  ✓ ${file}`);
      done = true;
    } catch (err) {
      if (url === urls[urls.length - 1]) console.warn(`  ✗ ${file}: ${err.message}`);
    }
  }
}

console.log('Downloading high-quality SVGs from Wikimedia Commons...');
for (const { file, url } of WIKIMEDIA_LOGOS) {
  const filePath = path.join(LOGOS_DIR, file);
  try {
    const res = await fetch(url, { headers: HEADERS });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buf));
    console.log(`  ✓ ${file}`);
  } catch (err) {
    console.warn(`  ✗ ${file}: ${err.message}`);
  }
}

console.log('Done.');
