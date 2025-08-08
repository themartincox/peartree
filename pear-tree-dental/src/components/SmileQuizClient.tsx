"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

type AnswerOption = {
  text: string
  score: number
}

type Question = {
  question: string
  options: AnswerOption[]
}

const questions: Question[] = [
  {
    question: "How confident are you when you smile in photos?",
    options: [
      { text: "Very confident", score: 5 },
      { text: "Somewhat confident", score: 3 },
      { text: "Not confident at all", score: 1 },
    ],
  },
  {
    question: "What best describes your reason for improving your smile?",
    options: [
      { text: "I want to look my best for personal confidence", score: 5 },
      { text: "Upcoming special event (wedding, reunion, etc.)", score: 4 },
      { text: "For work/professional reasons", score: 3 },
      { text: "Other", score: 2 },
    ],
  },
  {
    question: "How would you describe the current colour of your teeth?",
    options: [
      { text: "Bright and white", score: 5 },
      { text: "Slightly discoloured", score: 3 },
      { text: "Quite stained or yellow", score: 1 },
    ],
  },
  {
    question: "Are you happy with the alignment of your teeth?",
    options: [
      { text: "Yes, perfectly aligned", score: 5 },
      { text: "Mostly aligned with minor imperfections", score: 3 },
      { text: "No, they are quite misaligned", score: 1 },
    ],
  },
  {
    question: "Do you have any missing teeth?",
    options: [
      { text: "No missing teeth", score: 5 },
      { text: "One or two missing", score: 3 },
      { text: "Several missing", score: 1 },
    ],
  },
  {
    question: "How soon are you looking to make improvements?",
    options: [
      { text: "Immediately", score: 5 },
      { text: "Within 6 months", score: 4 },
      { text: "Within a year", score: 3 },
      { text: "Just exploring for now", score: 1 },
    ],
  },
  {
    question: "How important is it to you that treatment is discreet?",
    options: [
      { text: "Very important", score: 5 },
      { text: "Somewhat important", score: 3 },
      { text: "Not important", score: 1 },
    ],
  },
  {
    question: "Would you like to combine treatments for the best result?",
    options: [
      { text: "Yes, open to all options", score: 5 },
      { text: "Maybe, depends on cost", score: 3 },
      { text: "No, one treatment only", score: 1 },
    ],
  },
  {
    question: "What’s your investment range for your smile?",
    options: [
      { text: "£5,000+", score: 5 },
      { text: "£2,000 - £5,000", score: 4 },
      { text: "Under £2,000", score: 2 },
    ],
  },
  {
    question: "What’s your postcode?",
    options: [],
  },
]

export default function SmileQuizClient() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<(number | string)[]>(Array(questions.length).fill(null))
  const [leadScore, setLeadScore] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [postcodeScore, setPostcodeScore] = useState(0)

  const handleSelect = (score: number) => {
    const newAnswers = [...answers]
    newAnswers[step] = score
    setAnswers(newAnswers)
    if (step < questions.length - 1) setStep(step + 1)
  }

  const handlePostcode = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[step] = value
    setAnswers(newAnswers)
  }

  const calculateScore = async () => {
    let baseScore = answers
      .slice(0, questions.length - 1)
      .reduce((sum, val) => sum + (typeof val === "number" ? val : 0), 0)

    const postcode = answers[questions.length - 1]
    let postcodeBoost = 0

    if (typeof postcode === "string" && postcode.trim()) {
      try {
        const res = await fetch(`/netlify/functions/postcode-enrich?postcode=${encodeURIComponent(postcode)}`)
        const data = await res.json()
        if (data && typeof data.score === "number") {
          postcodeBoost = data.score
          setPostcodeScore(data.score)
        }
      } catch (err) {
        console.error("Postcode enrichment failed", err)
      }
    }

    setLeadScore(baseScore + postcodeBoost)
    return baseScore + postcodeBoost
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const finalScore = await calculateScore()

    const formData = new FormData()
    formData.append("form-name", "smile-design-quiz")
    formData.append("leadScore", String(finalScore))
    answers.forEach((ans, i) => {
      formData.append(`q${i + 1}`, String(ans))
    })

    await fetch("/", {
      method: "POST",
      body: formData,
    })

    setSubmitted(true)
  }

  if (submitted && leadScore !== null) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Your Smile Design Results</h2>
        <p className="text-lg">
          Based on your answers, we’re confident we can help you achieve the smile you’ve always wanted.
        </p>
        <p className="text-3xl font-semibold text-pear-primary">Your score: {leadScore}</p>
        <Button size="lg" onClick={() => window.location.href = "/contact"}>
          Book Your Consultation Now
        </Button>
      </div>
    )
  }

  return (
    <form
      name="smile-design-quiz"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="smile-design-quiz" />
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="bg-pear-primary h-full transition-all"
          style={{ width: `${(step / questions.length) * 100}%` }}
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold">{questions[step].question}</h3>

        {step < questions.length - 1 ? (
          <div className="mt-4 grid gap-3">
            {questions[step].options.map((opt, idx) => (
              <Button
                key={idx}
                type="button"
                variant="outline"
                onClick={() => handleSelect(opt.score)}
              >
                {opt.text}
              </Button>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <input
              type="text"
              name="postcode"
              placeholder="Enter your postcode"
              className="w-full border rounded-lg px-4 py-2"
              onChange={(e) => handlePostcode(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <Button
          type="button"
          variant="secondary"
          onClick={() => setStep((prev) => Math.max(0, prev - 1))}
          disabled={step === 0}
        >
          Previous
        </Button>
        {step < questions.length - 1 ? (
          <Button
            type="button"
            onClick={() => setStep((prev) => Math.min(questions.length - 1, prev + 1))}
            disabled={answers[step] === null}
          >
            Next
          </Button>
        ) : (
          <Button type="submit">See My Results</Button>
        )}
      </div>
    </form>
  )
}
