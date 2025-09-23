// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Feature toggle (optional): set ENABLE_COHORT="false" in env to kill headers temporarily
const ENABLE_COHORT = process.env.ENABLE_COHORT !== "false";

export function middleware(request: NextRequest) {
  const t0 = performance.now();

  // Skip bots/internal rewrites ASAP
  const ua = request.headers.get("user-agent") || "";
  if (!ua || ua.includes("bot") || request.headers.get("x-middleware-rewrite")) {
    return NextResponse.next();
  }

  // Skip JSON/SSE/API-ish requests
  const contentType = request.headers.get("content-type") || "";
  const accept = request.headers.get("accept") || "";
  if (
    contentType.includes("application/json") ||
    accept.includes("application/json") ||
    accept.includes("text/event-stream")
  ) {
    return NextResponse.next();
  }

  const res = NextResponse.next();

  if (ENABLE_COHORT) {
    // ---------- Cohorts (all O(1), no network) ----------
    // Geo from platform headers (cheap)
    const city = request.geo?.city || "";
    const region = request.geo?.region || "";
    const country = request.geo?.country || "";
    const postal = request.geo?.postalCode || "";

    let geo = "global";
    if (city === "Nottingham") {
      geo = postal.startsWith("NG4") ? "gedling" : "nottingham-city";
    } else if (region === "England") {
      geo = "england";
    } else if (country === "GB") {
      geo = "uk-national";
    }

    // Time of day (UTC at edge)
    const now = new Date();
    const hour = now.getUTCHours();
    const time =
      hour < 6 ? "night" : hour < 12 ? "morning" : hour < 18 ? "afternoon" : hour < 22 ? "evening" : "night";
    const day = now.getUTCDay(); // 0=Sun
    const office = day >= 1 && day <= 5 && hour >= 9 && hour < 17 ? "true" : "false";

    // Device cohort (CH-UA first, UA fallback)
    const isMobile = request.headers.get("sec-ch-ua-mobile") === "?1" || ua.includes("Mobi");
    const device = isMobile ? "mobile" : "desktop";

    // Source cohort (utm > referrer heuristics)
    const ref = request.headers.get("referer") || "";
    const utm = request.nextUrl.searchParams.get("utm_source") || "";
    const source =
      utm ||
      (ref.includes("google.") ? "organic-google" : ref.includes("facebook.") ? "organic-facebook" : "direct");

    // Expose as a single header for server/client consumption
    res.headers.set(
      "x-ptd-cohort",
      `geo=${geo}; time=${time}; office-hours=${office}; device=${device}; source=${source}`
    );
  }

  // Server-Timing: see exact middleware cost in DevTools → Network
  const dur = Math.round((performance.now() - t0) * 10) / 10;
  const prev = res.headers.get("Server-Timing");
  res.headers.set("Server-Timing", prev ? `${prev}, mw;dur=${dur}` : `mw;dur=${dur}`);

  return res;
}

// Broad HTML matcher; exclude static/robotic paths entirely
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-.*\\.xml|.*\\.map|images|.*\\.(svg|png|jpg|jpeg|gif|webp|avif|txt)).*)",
  ],
};