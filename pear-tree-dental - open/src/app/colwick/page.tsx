import { CalendarDays, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dentist Colwick | Pear Tree Dental | Expert Local Care",
  description:
    "Professional dental care serving Colwick and surrounding areas. Comprehensive dental services with convenient access from Colwick. Book your appointment today.",
  openGraph: {
    title: "Dentist Colwick | Pear Tree Dental",
    description:
      "Professional dental care serving Colwick and surrounding areas",
    type: "website",
    url: "https://peartree.dental/colwick",
  },
  alternates: {
    canonical: "https://peartree.dental/colwick",
  },
};

export default function ColwickPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Colwick Dental Care</Badge>
          <h1 className="text-4xl font-bold text-pear-primary mb-6">
            Professional Dental Care for Colwick
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert dental services just minutes from Colwick
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-dental-green text-white">
                <CalendarDays className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <a href="tel:01159312935">
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                0115 931 2935
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
