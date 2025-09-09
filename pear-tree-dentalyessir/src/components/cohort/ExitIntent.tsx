'use client'
import { useEffect, useState } from 'react'

export default function ExitIntent({ serviceSlug, suburbSlug }:{serviceSlug:string; suburbSlug:string}) {
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if we've already shown this in the current session
    const hasShownExit = sessionStorage.getItem('exit_intent_shown')
    if (hasShownExit) return

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true)
        // Mark as shown for this session
        sessionStorage.setItem('exit_intent_shown', 'true')
      }
    }

    // Wait a few seconds before adding the listener to avoid triggering immediately
    const timer = setTimeout(() => {
      window.addEventListener('mouseout', onLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  async function handleSubmit() {
    if (!name && !phone) return

    setLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'exit_intent',
          service: serviceSlug,
          suburb: suburbSlug,
          name,
          phone
        })
      })
      setSent(true)
    } catch (error) {
      console.error('Error submitting exit intent form:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white rounded-xl p-5 w-full max-w-md shadow-xl">
        {sent ? (
          <>
            <h3 className="text-lg font-semibold">Thanks!</h3>
            <p className="text-sm text-slate-600 mt-2">We'll be in touch soon about your dental needs.</p>
            <button
              className="mt-4 w-full rounded-lg px-3 py-2 bg-emerald-600 text-white"
              onClick={() => setShow(false)}
            >
              Continue browsing
            </button>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold">Save your spot?</h3>
            <p className="text-sm text-slate-600">Leave your details and we'll help you book {serviceSlug.replace(/-/g,' ')} in {suburbSlug.replace(/-/g,' ')}.</p>
            <div className="mt-3 flex flex-col gap-2">
              <input
                className="rounded-lg border px-3 py-2"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                className="rounded-lg border px-3 py-2"
                placeholder="Phone"
                inputMode="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div className="mt-3 flex gap-2">
              <button
                className="rounded-lg px-3 py-2 bg-emerald-600 text-white"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
              <button
                className="rounded-lg px-3 py-2 border"
                onClick={() => setShow(false)}
              >
                No thanks
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
