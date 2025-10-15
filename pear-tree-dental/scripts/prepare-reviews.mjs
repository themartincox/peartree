#!/usr/bin/env node
// Prepare public/reviews.json from src/data/reviews.json
// - sanitizes BOM, comments, trailing commas
// - tries to recover truncated JSON by closing the reviews array

import { promises as fs } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const srcPath = path.join(projectRoot, 'src', 'data', 'reviews.json');
const destPath = path.join(projectRoot, 'public', 'reviews.json');

function sanitize(input) {
  let s = input.replace(/^\uFEFF/, '');
  s = s.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
  s = s.replace(/,\s*([}\]])/g, '$1');
  return s.trim();
}

async function main() {
  try {
    const raw = await fs.readFile(srcPath, 'utf-8');
    let s = sanitize(raw);
    let parsed;
    try {
      parsed = JSON.parse(s);
    } catch {
      // Attempt recovery for objects truncated at the end of the reviews array
      const reviewsIdx = s.indexOf('"reviews"');
      const arrStart = s.indexOf('[', reviewsIdx);
      if (reviewsIdx !== -1 && arrStart !== -1) {
        const lastObjEnd = s.lastIndexOf('}');
        if (lastObjEnd > arrStart) {
          // Slice array content up to last full object
          let arrContent = s.slice(arrStart + 1, lastObjEnd + 1).trim();
          arrContent = arrContent.replace(/,\s*$/, ''); // drop trailing comma
          s = `{"reviews":[${arrContent}]}`;
          parsed = JSON.parse(s);
        }
      }
    }

    if (!parsed) {
      console.warn('[prepare-reviews] Could not parse src/data/reviews.json; skipping copy');
      return;
    }

    // Normalize to { reviews: [...] }
    const reviews = Array.isArray(parsed) ? parsed : parsed.reviews ?? [];
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.writeFile(destPath, JSON.stringify({ reviews }, null, 2) + '\n', 'utf-8');
    console.log(`[prepare-reviews] Wrote ${destPath} with ${reviews.length} reviews.`);
  } catch (e) {
    console.warn('[prepare-reviews] No src/data/reviews.json found or unreadable; skipping');
  }
}

main();

