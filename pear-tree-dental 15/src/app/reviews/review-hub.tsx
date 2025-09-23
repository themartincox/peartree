"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Star, ThumbsUp, MessageSquare, ShieldAlert } from "lucide-react";

// --- CONFIG ---
const BASE_UTM = "utm_source=sms&utm_medium=review_request&utm_campaign=post_visit";

const PLATFORMS = {
  google: {
    label: "Google",
    href: `https://g.page/r/XXXXX/review?${BASE_UTM}`,
    brand: "google",
  },
  facebook: {
    label: "Facebook",
    href: `https://www.facebook.com/yourpage/reviews/?${BASE_UTM}`,
    brand: "facebook",
  },
  trustpilot: {
    label: "Trustpilot",
    href: `https://uk.trustpilot.com/review/yourdomain?${BASE_UTM}`,
    brand: "trustpilot",
  },
  yelp: {
    label: "Yelp",
    href: `https://www.yelp.co.uk/writeareview/biz/your-biz-id?${BASE_UTM}`,
    brand: "yelp",
  },
  other: {
    label: "Other platform",
    href: `https://example.com/reviews/other?${BASE_UTM}`,
    brand: "other",
  },
} as const;

type PlatformKey = keyof typeof PLATFORMS;

const brandStyles: Record<PlatformKey, string> = {
  google: "border-emerald-300 bg-emerald-50",
  facebook: "border-blue-300 bg-blue-50",
  trustpilot: "border-emerald-400 bg-emerald-50",
  yelp: "border-red-300 bg-red-50",
  other: "border-slate-300 bg-slate-50",
};

export default function ReviewHub() {
  const params = useSearchParams();

  // Normalize & validate ?priority=
  const priorityFromUrl = (params.get("priority") || "").toLowerCase() as PlatformKey;
  const initialPriority: PlatformKey =
    priorityFromUrl && priorityFromUrl in PLATFORMS ? priorityFromUrl : "google";

  const [priority, setPriority] = useState<PlatformKey>(initialPriority);

  const visitId = params.get("visitId") ?? "";
  const clinician = params.get("clinician") ?? "";
  const location = params.get("location") ?? "";

  const priorityPlatform = useMemo(() => {
    return PLATFORMS[priority] ?? PLATFORMS.google;
  }, [priority]);

  // Safe URL builder
  const trackedUrl = (raw: string) => {
    try {
      const u = new URL(raw);
      if (visitId) u.searchParams.set("visitId", visitId);
      if (clinician) u.searchParams.set("clinician", clinician);
      if (location) u.searchParams.set("location", location);
      return u.toString();
    } catch {
      const hasQuery = raw.includes("?");
      const qs = new URLSearchParams({
        ...(visitId ? { visitId } : {}),
        ...(clinician ? { clinician } : {}),
        ...(location ? { location } : {}),
      }).toString();
      return qs ? `${raw}${hasQuery ? "&" : "?"}${qs}` : raw;
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Thanks for visiting Pear Tree Dental</h1>
        <p className="mt-2 text-slate-600">
          We read every review. Choose your preferred platform below—or send private feedback to the practice owner.
        </p>
      </header>

      {/* Priority block */}
      <div
        className={`border rounded-2xl p-6 mb-6 ${
          brandStyles[priorityPlatform.brand as PlatformKey] ?? "border-slate-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <ThumbsUp className="w-6 h-6" />
          <h2 className="text-xl font-medium">Prefer to review on {priorityPlatform.label}?</h2>
        </div>
        <p className="mt-2 text-slate-700">
          Click below to go directly to our {priorityPlatform.label} review page. (You can also choose another platform
          further down.)
        </p>

        {/* “Yes” CTA goes to the selected platform */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href={trackedUrl(priorityPlatform.href)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 hover:bg-white shadow-sm"
            prefetch={false}
            target="_blank"
          >
            <Star className="w-4 h-4" />
            Leave a review on {priorityPlatform.label}
            <ExternalLink className="w-4 h-4" />
          </Link>

          {/* Platform selector */}
          <div className="ml-auto flex gap-2">
            {(Object.entries(PLATFORMS) as [PlatformKey, (typeof PLATFORMS)[PlatformKey]][]).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setPriority(key)}
                className={`text-sm rounded-lg border px-3 py-1.5 transition ${
                  key === priority ? "bg-black text-white border-black" : "bg-white hover:bg-slate-50 border-slate-300"
                }`}
                aria-pressed={key === priority}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Exact link preview */}
        <p className="mt-3 text-xs text-slate-500 break-all">
          Direct link:&nbsp;
          <span className="underline">{trackedUrl(priorityPlatform.href)}</span>
        </p>
      </div>

      {/* All platforms list */}
      <div className="rounded-2xl border border-slate-200 p-6 mb-8">
        <h3 className="text-lg font-medium mb-3">Or choose another platform</h3>
        <ul className="space-y-3">
          {(Object.entries(PLATFORMS) as [PlatformKey, (typeof PLATFORMS)[PlatformKey]][]).map(([key, p]) => (
            <li key={key} className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium">{p.label}</p>
                <p className="text-xs text-slate-500 break-all">{trackedUrl(p.href)}</p>
              </div>
              <Link
                href={trackedUrl(p.href)}
                prefetch={false}
                target="_blank"
                className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm ${
                  key === priority ? "border-black" : "border-slate-300"
                } hover:bg-white`}
              >
                Go to {p.label} <ExternalLink className="w-4 h-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Private feedback path */}
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Not happy? Tell the practice owner directly</h3>
        </div>
        <p className="mt-2 text-slate-700">
          Your feedback helps us improve. This message goes to the owner—not published as a review.
        </p>

        {/* Netlify Forms */}
        <form
          name="owner-feedback"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="mt-4 space-y-3"
        >
          <input type="hidden" name="form-name" value="owner-feedback" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <input type="hidden" name="visitId" value={visitId} />
          <input type="hidden" name="clinician" value={clinician} />
          <input type="hidden" name="location" value={location} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Your name (optional)</label>
              <input name="name" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email (optional)</label>
              <input name="email" type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Your message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="Tell us what happened and how we can help…"
            />
          </div>

          <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2">
            <MessageSquare className="w-4 h-4" />
            Send to owner
          </button>

          <p className="text-xs text-slate-500 mt-2">
            We respond within 1 business day. You’ll also receive a copy by email if provided.
          </p>
        </form>
      </div>

      <footer className="mt-10 text-xs text-slate-500">
        We never discourage honest reviews. Public review options are always visible on this page.
      </footer>
    </section>
  );
}