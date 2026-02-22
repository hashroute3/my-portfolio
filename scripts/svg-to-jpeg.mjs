#!/usr/bin/env node
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
import { join } from 'path';

const downloads = '/Users/mahendranv/Downloads';
const outDir = join(process.cwd(), 'public', 'blog');

const files = [
  'diagram-memory-problem.svg',
  'diagram-taxonomy-forgetting.svg',
];

for (const name of files) {
  const inputPath = join(downloads, name);
  const outName = name.replace(/\.svg$/i, '.jpeg');
  const outputPath = join(outDir, outName);
  const svg = readFileSync(inputPath);
  await sharp(svg)
    .resize(1400) // width 1400, height auto from aspect ratio
    .jpeg({ quality: 90 })
    .toFile(outputPath);
  console.log('Written:', outputPath);
}

console.log('Done.');
