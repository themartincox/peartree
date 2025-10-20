"use client"
import { useEffect } from "react"
import posthog from "posthog-js"

export function PosthogProvider() {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!apiKey) return

    // Guard against duplicate initialization across re-mounts/navigation
    if (typeof window !== "undefined" && (window as any).__PH_INITIALIZED__) {
      return
    }
    if (typeof window !== "undefined") {
      ;(window as any).__PH_INITIALIZED__ = true
    }

    posthog.init(apiKey, {
      api_host: "/ingest",
      ui_host: "https://eu.posthog.com",
      capture_pageview: true,
      persistence: "memory",                 // 🍪 no cookies/localStorage
      disable_session_recording: true,      // 🔒 no session recording
      opt_out_capturing_by_default: true,   // 🚫 nothing until consent
      autocapture: true,
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
  }, [])

  return null
}
