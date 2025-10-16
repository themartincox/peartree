#!/usr/bin/env node
// Ping Bing IndexNow with a list of URLs (from --file or argv)
import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const ENDPOINT = 'https://www.bing.com/indexnow';

function postJSON(url, payload) {
  return new Promise((resolve, reject) => {
    const data = Buffer.from(JSON.stringify(payload));
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname + (u.search || ''),
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': data.length },
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function readUrlsFromFile(filePath) {
  try {
    const txt = fs.readFileSync(filePath, 'utf-8');
    return txt.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.startsWith('http'));
  } catch {
    return [];
  }
}

const args = new Map(process.argv.slice(2).flatMap((a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  return m ? [[m[1], m[2] ?? true]] : [];
}));

const SITE_URL = (process.env.SITE_URL || 'https://peartree.dental').replace(/\/$/, '');
const KEY = process.env.INDEXNOW_KEY || 'b1a2c3d4e5f60718293a4b5c6d7e8f90';
const KEY_FILE = `${KEY}.txt`;
const KEY_LOCATION = `${SITE_URL}/${KEY_FILE}`;

let urlList = [];
if (args.has('file')) {
  const f = args.get('file');
  urlList = readUrlsFromFile(path.resolve(process.cwd(), f));
} else {
  // Minimal default: ping homepage and primary sitemaps index consumers often crawl from there
  urlList = [
    `${SITE_URL}/`,
    `${SITE_URL}/services`,
    `${SITE_URL}/patient-education`,
  ];
}

if (!urlList.length) {
  console.error('No URLs to ping. Provide --file=<path> or ensure defaults.');
  process.exit(1);
}

const payload = { host: new URL(SITE_URL).host, key: KEY, keyLocation: KEY_LOCATION, urlList: Array.from(new Set(urlList)) };

postJSON(ENDPOINT, payload)
  .then((res) => {
    console.log(`IndexNow: ${res.status}`);
    console.log(res.body || '');
    process.exit(0);
  })
  .catch((err) => {
    console.error('IndexNow error:', err?.message || err);
    process.exit(1);
  });

