"use client"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/button"

// Questions and scoring map
const QUESTIONS = [
  {
    id: "q1",
    question: "How do you feel about your smile today?",
    type: "single",
    options: [
      { label: "I’m happy with it — it’s fine.", value: "fine", score: 0 },
      { label: "I’d like some small improvements (colour/shape).", value: "small", score: 1 },
      { label: "I’m unhappy and want clear change.", value: "change", score: 3 },
      { label: "My smile needs a full makeover.", value: "makeover", score: 4 },
    ],
  },
  {
    id: "q2",
    question: "What’s your top goal?",
    type: "single",
    options: [
      { label: "Brighter teeth / whitening.", value: "whitening", score: 1 },
      { label: "Straighter teeth (aligners).", value: "aligners", score: 3 },
      { label: "Veneers / cosmetic shaping.", value: "veneers", score: 4 },
      { label: "Replace missing teeth / implants.", value: "implants", score: 5 },
    ],
  },
  {
    id: "q3",
    question: "How soon would you like to see results?",
    type: "single",
    options: [
      { label: "Within 1 month — ASAP.", value: "asap", score: 4 },
      { label: "1–3 months.", value: "1-3", score: 3 },
      { label: "3–12 months.", value: "3-12", score: 2 },
      { label: "Not sure yet.", value: "unsure", score: 0 },
    ],
  },
  {
    id: "q4",
    question: "Which treatments would interest you? (pick all that apply)",
    type: "multi",
    options: [
      { label: "Whitening", value: "whitening", score: 1 },
      { label: "Aligners (Invisalign)", value: "aligners", score: 3 },
      { label: "Veneers / Cosmetic Bonding", value: "veneers", score: 4 },
      { label: "Implants / Full Rehab", value: "implants", score: 5 },
    ],
  },
  {
    id: "q5",
    question: "When you smile in photos or meetings, how do you feel?",
    type: "single",
    options: [
      { label: "Comfortable and confident.", value: "confident", score: 0 },
      { label: "A little self-conscious.", value: "selfconscious", score: 2 },
      { label: "I avoid smiling broadly.", value: "avoidsmile", score: 4 },
    ],
  },
  {
    id: "q6",
    question: "Do you avoid social events because of your teeth?",
    type: "single",
    options: [
      { label: "Never.", value: "never", score: 0 },
      { label: "Sometimes.", value: "sometimes", score: 2 },
      { label: "Often / regularly.", value: "often", score: 4 },
    ],
  },
  {
    id: "q7",
    question: "Which budget range feels realistic for you today?",
    type: "single",
    options: [
      { label: "Under £500.", value: "<500", score: 1 },
      { label: "£500 – £2,000.", value: "500-2000", score: 2 },
      { label: "£2,000 – £6,000.", value: "2000-6000", score: 3 },
      { label: "£6,000+ (transformational).", value: "6000+", score: 4 },
      { label: "Unsure — want to discuss.", value: "unsure", score: 2 },
    ],
  },
  {
    id: "q8",
    question: "How would you like us to follow up?",
    type: "single",
    options: [
      { label: "Book online now (calendar).", value: "online", score: 1 },
      { label: "Call me (phone number).", value: "phone", score: 2 },
      { label: "I’d like a quick callback to discuss options.", value: "callback", score: 3 },
    ],
  },
  {
    id: "q9",
    question: "Any current dental problems we should know about?",
    type: "single",
    options: [
      { label: "No, purely cosmetic.", value: "no", score: 0 },
      { label: "Minor issues (sensitivity, chips).", value: "minor", score: 2 },
      { label: "Significant concerns (pain, broken or missing teeth).", value: "significant", score: 3 },
    ],
  },
  {
    id: "q10",
    question: "Do you prefer a natural subtle look or a dramatic change?",
    type: "single",
    options: [
      { label: "Subtle / natural.", value: "subtle", score: 2 },
      { label: "Dramatic transformation.", value: "dramatic", score: 3 },
      { label: "Open to expert recommendation.", value: "open", score: 3 },
    ],
  },
]

function initialAnswers() {
  const a = {}
  for (const q of QUESTIONS) {
    if (q.type === "single") a[q.id] = null
    if (q.type === "multi") a[q.id] = []
  }
  return a
}

export default function SmileQuizClient() {
  const [answers, setAnswers] = useState(initialAnswers)
  const [step, setStep] = useState(0)
  const [postcodeScore, setPostcodeScore] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [contact, setContact] = useState({ name: "", email: "", phone: "", postcode: "", consent: false })
  const formRef = useRef(null)
  const totalSteps = QUESTIONS.length + 1 // plus contact step

  useEffect(() => {
    // restore from session if available
    const saved = sessionStorage.getItem("smile-quiz-answers")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.answers) setAnswers(parsed.answers)
        if (parsed.step) setStep(parsed.step)
        if (parsed.contact) setContact(parsed.contact)
      } catch (e) {}
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("smile-quiz-answers", JSON.stringify({ answers, step, contact }))
  }, [answers, step, contact])

  const rawScore = useMemo(() => {
    // q4 multi: take max selected treatment score (or 0)
    let sum = 0
    for (const q of QUESTIONS) {
      const a = answers[q.id]
      if (q.type === "single") {
        const opt = q.options.find(o => o.value === a)
        sum += opt ? opt.score : 0
      } else if (q.type === "multi") {
        if (Array.isArray(a) && a.length > 0) {
          const scores = q.options.filter(o => a.includes(o.value)).map(o => o.score)
          sum += scores.length ? Math.max(...scores) : 0
        }
      }
    }
    return sum
  }, [answers])

  const finalScore = (rawScore ?? 0) + (postcodeScore ?? 0)
  const leadValue = finalScore >= 15 ? "Hot" : finalScore >= 10 ? "Warm" : "Cold"

  function setAnswer(qid, value) {
    setAnswers(prev => {
      const copy = { ...prev }
      copy[qid] = value
      return copy
    })
  }

  function toggleMulti(qid, val) {
    setAnswers(prev => {
      const copy = { ...prev }
      const arr = Array.isArray(copy[qid]) ? [...copy[qid]] : []
      const idx = arr.indexOf(val)
      if (idx === -1) arr.push(val)
      else arr.splice(idx, 1)
      copy[qid] = arr
      return copy
    })
  }

  async function enrichPostcode(pc) {
    try {
      const p = pc.trim()
      if (!p) return 0
      const res = await fetch(`/.netlify/functions/postcode-enrich?postcode=${encodeURIComponent(p)}`)
      if (!res.ok) return 0
      const j = await res.json()
      return j.score ?? 0
    } catch (e) {
      return 0
    }
  }

  async function handleFinalSubmit(e) {
    e.preventDefault()
    if (!contact.name || !contact.email || !contact.phone || !contact.postcode) {
      alert("Please complete your contact details including postcode.")
      return
    }
    if (!contact.consent) {
      alert("Please confirm you agree to our privacy policy to continue.")
      return
    }
    setSubmitting(true)
    const ps = await enrichPostcode(contact.postcode)
    setPostcodeScore(ps)

    // set hidden fields and submit native form
    const form = formRef.current
    if (form) {
      const answersInput = form.querySelector("#answers")
      const rawScoreInput = form.querySelector("#rawScore")
      const postcodeScoreInput = form.querySelector("#postcodeScore")
      const finalScoreInput = form.querySelector("#finalScore")
      const leadValueInput = form.querySelector("#leadValue")
      const utmInput = form.querySelector("#utm")

      if (answersInput) answersInput.value = JSON.stringify(answers)
      if (rawScoreInput) rawScoreInput.value = String(rawScore)
      if (postcodeScoreInput) postcodeScoreInput.value = String(ps)
      if (finalScoreInput) finalScoreInput.value = String(rawScore + ps)
      if (leadValueInput) leadValueInput.value = leadValue
      if (utmInput) utmInput.value = new URLSearchParams(window.location.search).toString()

      // also set basic contact fields into the native form inputs (for Netlify)
      const nameEl = form.querySelector("input[name='name']")
      const emailEl = form.querySelector("input[name='email']")
      const phoneEl = form.querySelector("input[name='phone']")
      const postcodeEl = form.querySelector("input[name='postcode']")
      const consentEl = form.querySelector("input[name='consent']")

      if (nameEl) nameEl.value = contact.name
      if (emailEl) emailEl.value = contact.email
      if (phoneEl) phoneEl.value = contact.phone
      if (postcodeEl) postcodeEl.value = contact.postcode
      if (consentEl) consentEl.checked = contact.consent

      // small delay for inputs to be set, then submit
      setTimeout(() => {
        form.submit()
      }, 200)
    } else {
      console.error("Form ref not found")
    }
  }

  // Render functions
  function renderQuestion(q, index) {
    const current = answers[q.id]
    return (
      <div key={q.id} className="space-y-4">
        <h2 className="text-xl font-semibold">{index + 1}. {q.question}</h2>
        <div className="space-y-2">
          {q.type === "single" && q.options.map(opt => (
            <label key={opt.value} className={"flex items-center gap-3 p-3 rounded-lg border cursor-pointer " + (current === opt.value ? "border-pear-primary bg-pear-primary/5" : "border-border")}>
              <input type="radio" name={q.id} checked={current === opt.value} onChange={() => setAnswer(q.id, opt.value)} className="accent-pear-primary" />
              <div>
                <div className="font-medium">{opt.label}</div>
              </div>
            </label>
          ))}
          {q.type === "multi" && q.options.map(opt => {
            const checked = Array.isArray(current) && current.includes(opt.value)
            return (
              <label key={opt.value} className={"flex items-center gap-3 p-3 rounded-lg border cursor-pointer " + (checked ? "border-pear-primary bg-pear-primary/5" : "border-border")}>
                <input type="checkbox" checked={checked} onChange={() => toggleMulti(q.id, opt.value)} className="accent-pear-primary" />
                <div>
                  <div className="font-medium">{opt.label}</div>
                </div>
              </label>
            )
          })}
        </div>
      </div>
    )
  }

  if (step < QUESTIONS.length) {
    const q = QUESTIONS[step]
    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">Step {step + 1} of {totalSteps}</div>
          <div className="text-sm font-medium">Progress: {Math.round(((step) / (totalSteps - 1)) * 100)}%</div>
        </div>

        {renderQuestion(q, step)}

        <div className="mt-6 flex justify-between">
          <div>
            <button className="text-sm text-foreground underline" onClick={() => { setStep(s => Math.max(0, s - 1)) }} disabled={step === 0}>Back</button>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="sm" onClick={() => { setStep(s => Math.min(totalSteps - 1, s + 1)) }}>Skip</Button>
            <Button onClick={() => setStep(s => Math.min(totalSteps - 1, s + 1))}>Next</Button>
          </div>
        </div>
      </div>
    )
  }

  // Contact / final step
  return (
    <div>
      <h2 className="text-2xl font-semibold">Almost done — tell us how to reach you</h2>
      <p className="text-sm text-muted-foreground mt-2">We only need a few details. We will contact you and help book a consultation.</p>

      <form
        name="smile-design-quiz"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        ref={formRef}
        onSubmit={handleFinalSubmit}
        className="mt-6 space-y-4"
      >
        <input type="hidden" name="form-name" value="smile-design-quiz" />
        <input type="hidden" name="bot-field" />
        <input type="hidden" id="answers" name="answers" />
        <input type="hidden" id="rawScore" name="rawScore" />
        <input type="hidden" id="postcodeScore" name="postcodeScore" />
        <input type="hidden" id="finalScore" name="finalScore" />
        <input type="hidden" id="leadValue" name="leadValue" />
        <input type="hidden" id="utm" name="utm" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input name="name" className="mt-1 input" value={contact.name} onChange={e => setContact(c => ({...c, name: e.target.value}))} />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" className="mt-1 input" value={contact.email} onChange={e => setContact(c => ({...c, email: e.target.value}))} />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input name="phone" className="mt-1 input" value={contact.phone} onChange={e => setContact(c => ({...c, phone: e.target.value}))} />
          </div>
          <div>
            <label className="block text-sm font-medium">Postcode</label>
            <input name="postcode" className="mt-1 input" value={contact.postcode} onChange={e => setContact(c => ({...c, postcode: e.target.value}))} />
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" name="consent" checked={contact.consent} onChange={e => setContact(c => ({...c, consent: e.target.checked}))} />
          <label className="text-sm">I consent to Peartree Dental contacting me regarding my enquiry. <a href="/privacy" className="underline">Privacy policy</a>.</label>
        </div>

        <div className="pt-4 border-t">
          <div className="mb-4">
            <strong>Estimated lead score:</strong>
            <div className="mt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 mr-2">{leadValue}</span>
              <span className="text-sm text-muted-foreground">Final score is calculated after postcode enrichment.</span>
            </div>
            <div className="mt-2 text-sm">Raw score: {rawScore} • Postcode score: {postcodeScore ?? "—"} • Final: {finalScore}</div>
          </div>

          <div className="flex gap-3">
            <Button type="submit" disabled={submitting}>{submitting ? "Submitting…" : "Submit & request consultation"}</Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact us</a>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}