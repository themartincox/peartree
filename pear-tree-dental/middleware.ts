// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const ENABLE_COHORT = process.env.ENABLE_COHORT !== "false";

export function middleware(request: NextRequest) {
  const t0 = performance.now();

  // --- early exits ---
  const ua = request.headers.get("user-agent") || "";
  if (!ua || ua.includes("bot") || request.headers.get("x-middleware-rewrite")) {
    return NextResponse.next();
  }
  const contentType = request.headers.get("content-type") || "";
  const accept = request.headers.get("accept") || "";
  if (contentType.includes("application/json") || accept.includes("application/json") || accept.includes("text/event-stream")) {
    return NextResponse.next();
  }

  // We'll fill this, then pass it to NextResponse.next()
  const reqHeaders = new Headers(request.headers);

  if (ENABLE_COHORT) {
    // --- compute cohorts ---
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

    const now = new Date();
    const hour = now.getUTCHours();
    const time = hour < 6 ? "night" : hour < 12 ? "morning" : hour < 18 ? "afternoon" : hour < 22 ? "evening" : "night";
    const day = now.getUTCDay();
    const office = day >= 1 && day <= 5 && hour >= 9 && hour < 17 ? "true" : "false";

    const isMobile = request.headers.get("sec-ch-ua-mobile") === "?1" || ua.includes("Mobi");
    const device = isMobile ? "mobile" : "desktop";

    const ref = request.headers.get("referer") || "";
    const utm = request.nextUrl.searchParams.get("utm_source") || "";
    const source = utm || (ref.includes("google.") ? "organic-google" : ref.includes("facebook.") ? "organic-facebook" : "direct");

    const cohort = `geo=${geo}; time=${time}; office-hours=${office}; device=${device}; source=${source}`;

    // ✅ 1) Set REQUEST headers *before* NextResponse.next()
    reqHeaders.set("x-ptd-cohort", cohort);
    reqHeaders.set("x-peartree-geo", geo);
    reqHeaders.set("x-peartree-time", time);
    reqHeaders.set("x-peartree-office-hours", office);
    reqHeaders.set("x-peartree-device", device);
    reqHeaders.set("x-peartree-source", source);
  }

  // ✅ 2) Now create the response, passing the modified request headers
  const res = NextResponse.next({ request: { headers: reqHeaders } });

  if (ENABLE_COHORT) {
    // Optional debug response header
    res.headers.set("x-ptd-cohort", reqHeaders.get("x-ptd-cohort") || "");

    // ✅ 3) Netlify cache segmentation (cookieless, keep minimal)
    // Use the canonical casing Netlify documents ("Netlify-Vary"); it will show as lower-case in responses.
    const varyBy = "header=x-peartree-geo|x-peartree-office-hours|x-peartree-device";
    const existing = res.headers.get("Netlify-Vary") || res.headers.get("netlify-vary");
    res.headers.set("Netlify-Vary", existing ? `${existing}, ${varyBy}` : varyBy);
  }

  // Server-Timing
  const dur = Math.round((performance.now() - t0) * 10) / 10;
  const prev = res.headers.get("Server-Timing");
  res.headers.set("Server-Timing", prev ? `${prev}, mw;dur=${dur}` : `mw;dur=${dur}`);

  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-.*\\.xml|.*\\.map|images|.*\\.(svg|png|jpg|jpeg|gif|webp|avif|txt)).*)",
  ],
};