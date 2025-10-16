import { NextRequest, NextResponse } from "next/server";
import { pingIndexNow } from "@/lib/indexnow";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json().catch(() => ({}))) as { urls?: string[] };
    const urls = Array.isArray(data?.urls) ? data.urls.filter((u) => typeof u === "string" && u.startsWith("http")) : [];
    if (!urls.length) {
      return NextResponse.json({ ok: false, error: "No URLs provided" }, { status: 400 });
    }

    const result = await pingIndexNow(urls);
    return NextResponse.json({ ok: result.ok, status: result.status, statusText: result.statusText });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Unknown error" }, { status: 500 });
  }
}

