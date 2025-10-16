"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Star, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

// --- CONFIG ---
const BASE_UTM = "utm_source=sms&utm_medium=review_request&utm_campaign=post_visit";

const PLATFORMS = {
  google: {
    label: "Google",
    href: `https://g.page/r/CRuyzKUKE1IPEBM/review?${BASE_UTM}`, // ← replace XXXXX
  },
  facebook: {
    label: "Facebook",
    href: `https://www.facebook.com/profile.php?id=100088367133379&sk=reviews{BASE_UTM}`,
  },
  trustpilot: {
    label: "Trustpilot",
    href: `https://www.trustpilot.com/review/peartree.dental?${BASE_UTM}`,
  },
  yelp: {
    label: "Yelp",
    href: `https://www.yelp.co.uk/writeareview/biz/your-biz-id?${BASE_UTM}`,
  },
} as const;

type PlatformKey = keyof typeof PLATFORMS;

// Set your two preferred platforms here or via ?options=google,trustpilot
const DEFAULT_VISIBLE: PlatformKey[] = ["google", "trustpilot"];

export default function ReviewHub() {
  const params = useSearchParams();
  const [mood, setMood] = useState<"initial" | "positive" | "negative">("initial");
  const [showOthers, setShowOthers] = useState(false);

  const formSuccess = params.get("success") === "1";

  // Allow override of the two primary platforms via ?options=google,facebook
  const optionsParam = (params.get("options") || "")
    .split(",")
    .map((s) => s.trim().toLowerCase()) as PlatformKey[];
  const visiblePlatforms: PlatformKey[] =
    optionsParam.length === 2 && optionsParam.every((k) => k in PLATFORMS)
      ? optionsParam
      : DEFAULT_VISIBLE;

  const otherPlatforms = (Object.keys(PLATFORMS) as PlatformKey[]).filter(
    (k) => !visiblePlatforms.includes(k)
  );

  // Carry tracking context through
  const visitId = params.get("visitId") ?? "";
  const clinician = params.get("clinician") ?? "";
  const location = params.get("location") ?? "";

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

  const PositiveCard = useMemo(
    () => (
      <div className="mt-6 rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Star className="w-5 h-5" />
          We’d really appreciate a quick review
        </h2>
        <p className="mt-2 text-slate-700">
          It takes less than a minute and helps others find us. Choose your preferred platform:
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {visiblePlatforms.map((key) => {
            const p = PLATFORMS[key];
            return (
              <Link
                key={key}
                href={trackedUrl(p.href)}
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50 shadow-sm"
                aria-label={`Leave a review on ${p.label}`}
              >
                Review on {p.label}
                <ExternalLink className="w-4 h-4" />
              </Link>
            );
          })}
        </div>

        {/* Show other options ONLY after 👍 (this card only renders when mood === 'positive') */}
        {otherPlatforms.length > 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-medium mb-3">Prefer a different platform?</h3>
            <button
              type="button"
              onClick={() => setShowOthers((s) => !s)}
              className="inline-flex items-center gap-2 text-sm underline underline-offset-2"
              aria-expanded={showOthers}
              aria-controls="other-options-global"
            >
              {showOthers ? (
                <>
                  Hide other options <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show other options <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>

            <div
              id="other-options-global"
              className={`overflow-hidden transition-[max-height] duration-300 ${
                showOthers ? "max-h-[300px] mt-3" : "max-h-0"
              }`}
            >
              <ul className="flex flex-wrap gap-3">
                {otherPlatforms.map((key) => {
                  const p = PLATFORMS[key];
                  return (
                    <li key={key}>
                      <Link
                        href={trackedUrl(p.href)}
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm hover:bg-slate-50"
                        aria-label={`Go to ${p.label} review page`}
                      >
                        {p.label} <ExternalLink className="w-4 h-4" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="text-xs text-slate-500 mt-3">
              We never discourage honest reviews. Public review options are always available.
            </p>
          </div>
        )}

        <p className="mt-3 text-xs text-slate-500">
          Tip: If you’re on mobile, the {PLATFORMS[visiblePlatforms[0]].label} app may open directly.
        </p>
      </div>
    ),
    [visiblePlatforms, otherPlatforms, visitId, clinician, location, showOthers]
  );

  const NegativeCard = (
    <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-6">
      <h2 className="text-lg font-semibold">Sorry we fell short — tell us how we could do better</h2>
      <p className="mt-2 text-slate-700">Your message isn’t public. Your feedback helps us improve our service.</p>

      <form
        name="owner-feedback"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/reviews?success=1"
        className="mt-4 space-y-3"
        aria-label="Private feedback form to the practice owner"
      >
        <input type="hidden" name="form-name" value="owner-feedback" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* Context */}
        <input type="hidden" name="visitId" value={visitId} />
        <input type="hidden" name="clinician" value={clinician} />
        <input type="hidden" name="location" value={location} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium" htmlFor="fb-name">
              Your name (optional)
            </label>
            <input id="fb-name" name="name" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium" htmlFor="fb-date">
              Visit date
            </label>
            <input
              id="fb-date"
              name="date"
              type="date"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium" htmlFor="fb-email">
              Email (optional)
            </label>
            <input id="fb-email" name="email" type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="fb-message">
            How can we improve?
          </label>
          <textarea
            id="fb-message"
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Share details so we can do better…"
          />
        </div>

        <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2">
          Send privately
        </button>
      </form>
    </div>
  );

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Did you have a ⭐️⭐️⭐️⭐️⭐️ service today?</h1>
        <p className="mt-2 text-slate-600">Tell us with one tap.</p>

        {formSuccess && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-300 bg-emerald-50 p-4" role="status" aria-live="polite">
            <CheckCircle className="w-5 h-5" />
            <p>
              Thanks — your message was sent to the team.
              {visitId ? <> (Ref: {visitId})</> : null}.
            </p>
          </div>
        )}
      </header>

      {/* Thumbs */}
      {mood === "initial" && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMood("positive")}
            className="flex-1 rounded-2xl border border-emerald-300 bg-emerald-50 px-6 py-5 text-center text-lg hover:bg-white"
            aria-label="Yes, I had a great experience"
          >
            <span className="text-3xl mr-2">👍</span>
            Yes — it was great
          </button>
          <button
            onClick={() => setMood("negative")}
            className="flex-1 rounded-2xl border border-amber-300 bg-amber-50 px-6 py-5 text-center text-lg hover:bg-white"
            aria-label="No, I had an issue"
          >
            <span className="text-3xl mr-2">👎</span>
            No — I had an issue
          </button>
        </div>
      )}

      {mood === "positive" && PositiveCard}
      {mood === "negative" && NegativeCard}
    </section>
  );
}