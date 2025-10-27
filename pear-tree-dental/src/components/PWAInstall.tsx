"use client";

import { useEffect, useRef, useState } from "react";
import { usePostHog } from "posthog-js/react";
import clsx from "clsx";

function isiOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as Record<string, unknown>).standalone === true
  );
}

type PWAInstallProps = {
  className?: string;
  buttonText?: string;
  installedText?: string;
  showIOSHelper?: boolean;
  dense?: boolean;
};

export default function PWAInstall({
  className,
  buttonText = "Install app",
  installedText = "App installed",
  showIOSHelper = true,
  dense = false,
}: PWAInstallProps) {
  const posthog = usePostHog();
  const deferredPromptRef = useRef<BeforeInstallPromptEvent | null>(null);

  const [supported, setSupported] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [ios, setIOS] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showIOSHint, setShowIOSHint] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);

  useEffect(() => {
    if (isStandalone()) {
      setInstalled(true);
      try {
        posthog?.capture("pwa_opened_installed");
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("[PWA]", error);
        }
      }
    }
  }, [posthog]);

  useEffect(() => {
    setIOS(isiOS());

    if (isStandalone()) return;

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      deferredPromptRef.current = event as BeforeInstallPromptEvent;
      setSupported(true);
      setShowButton(true);
      try {
        posthog?.capture("pwa_install_prompt_available");
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("[PWA]", error);
        }
      }
    };

    const onInstalled = () => {
      setInstalled(true);
      setShowButton(false);
      try {
        posthog?.capture("pwa_installed");
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("[PWA]", error);
        }
      }
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener);
    window.addEventListener("appinstalled", onInstalled);

    if (isiOS() && showIOSHelper) {
      setShowIOSHint(true);
      try {
        posthog?.capture("pwa_ios_helper_shown");
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("[PWA]", error);
        }
      }
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, [posthog, showIOSHelper]);

  const handleInstallClick = async () => {
    setClickedOnce(true);
    try {
      posthog?.capture("pwa_install_clicked");
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("[PWA]", error);
      }
    }

    const deferredPrompt = deferredPromptRef.current;
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice?.outcome === "accepted") {
      try {
        posthog?.capture("pwa_install_accepted");
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("[PWA]", error);
        }
      }
    } else {
      try {
        posthog?.capture("pwa_install_dismissed");
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("[PWA]", error);
        }
      }
      setShowButton(true);
    }
    deferredPromptRef.current = null;
  };

  if (installed) {
    return (
      <div
        className={clsx(
          "inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700",
          className,
        )}
        aria-live="polite"
      >
        <span role="img" aria-hidden="true">
          ✅
        </span>{" "}
        {installedText}
      </div>
    );
  }

  return (
    <div className={clsx("flex flex-col gap-3", className)}>
      {showButton && supported && (
        <button
          type="button"
          onClick={handleInstallClick}
          className={clsx(
            "inline-flex w-full items-center justify-center rounded-xl border border-neutral-200 px-4 shadow-sm hover:shadow md:transition sm:w-auto",
            dense ? "py-2 text-sm" : "py-3 text-base",
            clickedOnce ? "opacity-95" : "opacity-100",
          )}
          aria-label="Install Progressive Web App"
        >
          <span role="img" aria-hidden="true">
            📲
          </span>{" "}
          {buttonText}
        </button>
      )}

      {ios && showIOSHint && !supported && !isStandalone() && (
        <div
          className={clsx(
            "rounded-xl border border-neutral-200 bg-white p-4 shadow-sm",
            dense ? "text-sm" : "text-base",
          )}
        >
          <div className="mb-1 font-medium">Add to Home Screen (iPhone/iPad)</div>
          <ol className="ml-5 list-decimal space-y-1">
            <li>
              Tap the{" "}
              <span aria-label="share" role="img">
                🔗
              </span>{" "}
              Share icon in Safari.
            </li>
            <li>
              Choose <strong>Add to Home Screen</strong>.
            </li>
            <li>
              Tap <strong>Add</strong> to install.
            </li>
          </ol>
          <div className="mt-2 text-sm text-neutral-500">
            (iOS doesn’t show an install prompt — this is the official method.)
          </div>
        </div>
      )}
    </div>
  );
}

type BeforeInstallPromptEvent = Event & {
  readonly platforms: string[];
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome?: "accepted" | "dismissed"; platform?: string }>;
};
