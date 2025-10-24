"use client";

import { useEffect, useMemo, useState } from "react";
import { LocationSession } from "@/lib/location-session";
import { haversineMiles } from "@/lib/haversine";
import { practiceInfo } from "@/data/practiceInfo";

type State = "idle" | "ready" | "requesting" | "done" | "denied" | "error";

const DELAY_MS = 5000;

export default function LocationSlideIn() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [miles, setMiles] = useState<number | null>(null);

  // Clinic coordinates from central practice info
  const CLINIC = useMemo(
    () => ({ lat: practiceInfo.address.gps.latitude, lng: practiceInfo.address.gps.longitude }),
    []
  );

  // Show after delay if not already granted/denied and not shown this session
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion by not animating; still delay logic
    const show = async () => {
      // Already have coords? No prompt; show a friendly message silently
      if (LocationSession.get()) {
        const c = LocationSession.get()!;
        const d = haversineMiles({ lat: c.lat, lng: c.lng }, CLINIC);
        setMiles(d);
        setState("done");
        setOpen(true);
        return;
      }

      try {
        // @ts-ignore: PermissionName union
        const p = await navigator.permissions?.query?.({ name: "geolocation" as PermissionName });
        if (p?.state === "granted") {
          readLocation();
          return;
        }
        if (p?.state === "denied") {
          setState("denied");
          LocationSession.markPromptShown();
          return;
        }
      } catch {
        // ignore permissions api failures
      }

      if (!LocationSession.wasPromptShown()) {
        setState("ready");
        setOpen(true);
        LocationSession.markPromptShown();
      }
    };

    const t = window.setTimeout(show, DELAY_MS);
    return () => window.clearTimeout(t);
  }, [CLINIC]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const message = useMemo(() => {
    if (miles == null) return "";
    const mi = Math.round(miles);
    const approxMinutes = Math.max(1, Math.round((miles / 28) * 60)); // ~28mph blended avg
    if (mi <= 25)
      return `Great, you're just ${mi} miles from Nottingham's top-rated dentist (~${approxMinutes} min).`;
    if (mi <= 50)
      return `OK, you're ${mi} miles from the area's top-rated dentist — it's worth the drive! (~${approxMinutes} min)`;
    return `Hmmm, you're ${mi} miles from Nottingham's top-rated dentist. Our patients love us, but it's quite a drive for you! (~${approxMinutes} min)`;
  }, [miles]);

  function readLocation() {
    if (!("geolocation" in navigator)) {
      setState("error");
      return;
    }
    setState("requesting");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude, ts: Date.now() };
        LocationSession.set(coords);
        const d = haversineMiles(coords, CLINIC);
        setMiles(d);
        setState("done");
        setOpen(true);
      },
      () => {
        setState("denied");
        setOpen(true);
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
    );
  }

  const mapsHref = `https://www.google.com/maps/dir/?api=1&destination=${CLINIC.lat},${CLINIC.lng}`;

  // Subtle slide-in animation control
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setEntered(true), 10);
      return () => clearTimeout(t);
    } else {
      setEntered(false);
    }
  }, [open]);
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      className={
        `fixed bottom-4 right-4 z-50 max-w-sm w-[92vw] sm:w-96 rounded-2xl shadow-xl border bg-white p-4 ` +
        `motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out ` +
        `${entered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'} ` +
        `motion-reduce:transition-none`
      }
    >
      <div className="text-base font-semibold">
        Want to see how close you are from Nottingham’s top-rated dental clinic?
      </div>
      <div className="text-sm mt-1 text-gray-700">
        {state === "done" && miles !== null
          ? message
          : "Find out how far you are from Nottingham’s top-rated dental clinic."}
      </div>

      {state === "ready" && (
        <div className="mt-3 flex gap-2">
          <button
            onClick={readLocation}
            className="px-3 py-2 rounded-xl border bg-black text-white"
            aria-label="Share my location"
          >
            Share my location
          </button>
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-xl border"
            aria-label="No thanks"
          >
            No thanks
          </button>
        </div>
      )}

      {state === "requesting" && <div className="mt-3 text-sm">Checking…</div>}

      {state === "done" && (
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={mapsHref}
            className="px-3 py-2 rounded-xl border"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check drive time
          </a>
          <a href="/book" className="px-3 py-2 rounded-xl border bg-black text-white">
            Book now
          </a>
          <button onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl border">
            Close
          </button>
        </div>
      )}

      {(state === "denied" || state === "error") && (
        <div className="mt-3 text-sm">
          We’ll keep everything working without location. You can still {" "}
          <a className="underline" href="/book">
            book now
          </a>
          .
        </div>
      )}

      <p className="mt-3 text-xs text-gray-500">
        We only use your location to personalise this visit. Nothing is stored after you leave.
      </p>
    </div>
  );
}
