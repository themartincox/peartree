import React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/button"

// Client component is dynamically imported to avoid SSR issues
const SmileQuizClient = dynamic(() => import("@/components/SmileQuizClient"), { ssr: false })

export const metadata = {
  title: "Smile Design Quiz — Peartree Dental",
  description: "Discover your perfect smile in 60 seconds. Take our Smile Design quiz to get a personalised plan and book a consultation.",
}

export default function SmileDesignPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Discover your perfect smile — take our 60-second Smile Design quiz
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your smile and goals — we’ll tell you the best next step and how quickly we can help.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#quiz-start" className="inline-block">
                <Button variant="default" size="lg">Start the 60s quiz</Button>
              </a>
              <a href="#how-it-works" className="inline-block">
                <Button variant="outline" size="lg">How it works</Button>
              </a>
            </div>
            <div className="mt-6 flex gap-4 items-center text-sm text-muted-foreground">
              <div>✅ 60 seconds</div>
              <div>✅ Personalised plan</div>
              <div>✅ Book your consultation</div>
            </div>
          </div>

          <div>
            {/* Slider placeholder - replace with your existing slider component / images */}
            <div className="w-full aspect-video bg-gradient-to-br from-pear-primary/10 to-pear-primary/5 rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-semibold">Before / After slider placeholder</div>
                <div className="mt-2 text-sm text-muted-foreground">Replace with your 16:9 slider component (place images in public/images/smile-slides/)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-muted p-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="font-semibold">60 seconds</h3>
            <p className="text-sm text-muted-foreground">Answer 10 quick questions — we’ll do the rest.</p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Personalised plan</h3>
            <p className="text-sm text-muted-foreground">A tailored recommendation from our cosmetic team.</p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Book consultation</h3>
            <p className="text-sm text-muted-foreground">Hot leads can book instantly; we’ll contact every respondent.</p>
          </div>
        </div>
      </section>

      <section id="quiz-start" className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-card rounded-2xl p-6 shadow">
          <SmileQuizClient />
        </div>
      </section>
    </main>
  )
}