"use client";

import { useEffect, useMemo, useState } from "react";

interface JudgeBannerProps {
  city: string;
}

export default function JudgeBanner({ city }: JudgeBannerProps) {
  const [hidden, setHidden] = useState(false);
  const [overrideLocal, setOverrideLocal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (localStorage.getItem("ptd_hideJudgeBanner") === "1") {
      setHidden(true);
    }
    if (localStorage.getItem("ptd_isLocalOverride") === "1") {
      setOverrideLocal(true);
    }
  }, []);

  useEffect(() => {
    if (hidden) {
      localStorage.setItem("ptd_hideJudgeBanner", "1");
    }
  }, [hidden]);

  const displayCity = city || "there";

  const mapsLink = useMemo(() => {
    const query = encodeURIComponent(`best dentist in ${displayCity}`);
    return `https://www.google.com/maps/search/${query}?hl=en`;
  }, [displayCity]);

  if (hidden || overrideLocal) {
    return null;
  }

  return (
    <aside
      className="mx-auto mb-6 max-w-5xl rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-900 shadow-sm"
      role="note"
      aria-live="polite"
      data-noindex="true"
    >
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-lg font-semibold">Hello {displayCity}! 👋</p>
          <p className="mt-2 leading-relaxed">
            Pear Tree Dental is an award-winning clinic in Nottingham. We would love to welcome you, but it is a long way to travel for dentistry.
            Although we would recommend the trip for our artistic skills, attention to detail, and patient care (4.9/5 from 550+ reviews), you will probably prefer someone closer to home.
          </p>
          <p className="mt-2 leading-relaxed">
            Try highly rated clinics near you:
            {" "}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80"
            >
              best dentists in {displayCity}
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setHidden(true);
            }}
            className="rounded-md border border-amber-200 px-3 py-1.5 text-sm font-medium hover:bg-amber-100"
          >
            Thanks, hide this
          </button>
          <button
            type="button"
            onClick={() => {
              localStorage.setItem("ptd_isLocalOverride", "1");
              setOverrideLocal(true);
            }}
            className="rounded-md border border-amber-200 px-3 py-1.5 text-sm font-medium hover:bg-amber-100"
          >
            That is not my city
          </button>
        </div>
        <p className="text-xs text-amber-700/80">
          We personalise content based on your approximate location. If we got it wrong, you will not see this again.
        </p>
      </div>
    </aside>
  );
}
