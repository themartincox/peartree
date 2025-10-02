export type IndexNowPayload = {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
};

const INDEXNOW_ENDPOINT = "https://www.bing.com/indexnow";

export async function pingIndexNow(urls: string[], opts?: { key?: string; siteUrl?: string; keyFileName?: string }) {
  const siteUrl = (opts?.siteUrl || process.env.SITE_URL || "https://peartree.dental").replace(/\/$/, "");
  const u = new URL(siteUrl);
  const host = u.host;
  const key = opts?.key || process.env.INDEXNOW_KEY || "b1a2c3d4e5f60718293a4b5c6d7e8f90";
  const keyFile = opts?.keyFileName || `${key}.txt`;
  const keyLocation = `${u.protocol}//${host}/${keyFile}`;

  const payload: IndexNowPayload = {
    host,
    key,
    keyLocation,
    urlList: Array.from(new Set(urls.filter(Boolean))),
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await res.text().catch(() => "");
  return { ok: res.ok, status: res.status, statusText: res.statusText, body: text };
}

