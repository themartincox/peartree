import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Dental Membership Plan | Sign Up Online | Pear Tree Dental",
  description: "Sign up for affordable dental membership plans in Burton Joyce. From £14.50/month. Skip NHS waiting lists, get premium care, immediate access to dental treatments.",
  keywords: [
    "dental membership signup",
    "join dental plan Burton Joyce",
    "dental membership registration Nottingham",
    "private dental care signup",
    "NHS alternative membership",
    "affordable dental plan Burton Joyce",
    "dental subscription Nottinghamshire",
    "family dental membership signup"
  ],
  openGraph: {
    title: "Join Our Dental Membership Plan | Pear Tree Dental",
    description: "Sign up for affordable dental membership plans and get immediate access to premium dental care",
    type: "website",
    url: "https://peartree.dental/membership/signup"
  },
  alternates: {
    canonical: "https://peartree.dental/membership/signup"
  }
};

export default function MembershipSignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
