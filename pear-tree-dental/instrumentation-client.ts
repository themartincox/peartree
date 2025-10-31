import posthog from "posthog-js"

const globalScope = globalThis as typeof globalThis & {
  __posthogCookielessInitialized?: boolean
}

const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

if (typeof window !== "undefined" && apiKey && !globalScope.__posthogCookielessInitialized) {
  posthog.init(apiKey, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    capture_pageview: true,
    persistence: "memory",                 // 🍪 no cookies/localStorage
    disable_session_recording: true,      // 🔒 no session recording
    opt_out_capturing_by_default: false,  // Allow cookieless autocapture without explicit opt-in
    autocapture: true,
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
    bootstrap: {
      distinctID: undefined,
      isIdentifiedID: false,
      featureFlags: {},
    },
    sanitize_properties: (props) => {
      delete props.$ip
      return props
    },
  })

  if (typeof window !== "undefined") {
    ;(window as any).__PH_INITIALIZED__ = true
  }
  globalScope.__posthogCookielessInitialized = true
}
