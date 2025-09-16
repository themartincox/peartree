'use client'

import { useState } from 'react'

type Props = {
  serviceSlug: string
  suburbSlug: string
}

const OPTIONS = [
  'Fix crooked teeth',
  'Replace a missing tooth',
  'Whiten my teeth',
  'Stop dental pain',
  'Repair a chipped/broken tooth',
  'Improve my smile for an event',
  'Something else',
]

export default function IntentSurvey({ serviceSlug, suburbSlug }: Props) {
  const [choice, setChoice] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function submit() {
    setLoading(true)
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'intent_survey_choice',
          service: serviceSlug,
          suburb: suburbSlug,
          choice,
        })
      })

      if (phone || name) {
        await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'intent_survey',
            service: serviceSlug,
            suburb: suburbSlug,
            choice,
            name,
            phone,
          })
        })
      }
      setSent(true)
    } catch (error) {
      console.error('Error submitting intent survey:', error)
    }
    finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="mt-8 rounded-xl border p-6 bg-emerald-50">
        <p className="font-medium">Thanks! We'll be in touch.</p>
        <p className="text-sm text-slate-600 mt-1">You can also book online anytime.</p>
      </div>
    )
  }

  return (
    <section aria-labelledby="intent" className="mt-10 rounded-xl border p-6 bg-slate-50">
      <h2 id="intent" className="text-xl font-semibold mb-3">What are you hoping to achieve?</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {OPTIONS.map(o => (
          <button
            key={o}
            onClick={() => setChoice(o)}
            className={`rounded-lg border px-3 py-2 text-left hover:bg-white transition ${choice === o ? 'border-emerald-600 ring-1 ring-emerald-600' : ''}`}
            aria-pressed={choice === o}
          >
            {o}
          </button>
        ))}
      </div>

      {choice && (
        <div className="mt-5 space-y-3">
          <p className="text-sm text-slate-700">
            Great — pop your details below and we'll help with "{choice}".
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              className="flex-1 rounded-lg border px-3 py-2"
              placeholder="Your name (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="flex-1 rounded-lg border px-3 py-2"
              placeholder="Phone (optional)"
              inputMode="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <button
              onClick={submit}
              disabled={loading}
              className="rounded-lg px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-60"
            >
              {loading ? 'Sending…' : 'Send'}
            </button>
          </div>
          <p className="text-xs text-slate-500">
            Or continue below — booking and contact options are just a scroll away.
          </p>
        </div>
      )}
    </section>
  )
}
