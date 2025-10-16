// app/reviews/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import ReviewHub from "./review-hub";

export const metadata: Metadata = {
  title: "Leave a Review | Pear Tree Dental",
  description:
    "Had a visit with Pear Tree Dental? Share your experience on Google, Facebook, Trustpilot, or Yelp—or send private feedback to the practice owner.",
  alternates: { canonical: "/reviews" },
  robots: { index: false, follow: true }, // Usually you don't need this indexed
};

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading…</div>}>
      <ReviewHub />
    </Suspense>
  );
}