import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Users, Award, Heart, ExternalLink } from "lucide-react";
import Image from "next/image";
import ReviewBox from "@/components/ReviewBox";
import { teamReviews } from "@/data/teamReviews";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meet Our Top-Rated Nottingham Dentists | Pear Tree Dental",
  description: "Meet our experienced team of dental professionals serving Nottingham. Led by principal dentists Javaad Mirza and Imrana Ishaque, our dedicated Nottingham team provides exceptional dental care.",
  keywords: "dental team Nottingham, top rated dentists Nottingham, Javaad Mirza, Imrana Ishaque, dental professionals Nottingham, Best Nottingham dentist, dental experts Nottingham",
  openGraph: {
    title: "Meet Our Top-Rated Nottingham Dentists | Pear Tree Dental",
    description: "Meet our experienced team of Nottingham dental professionals dedicated to providing exceptional care and treatment to patients throughout Nottingham.",
    type: "website",
    url: "https://peartree.dental/about/team"
  },
  alternates: {
    canonical: "https://peartree.dental/about/team"
  }
};

const principals = [
  {
    name: "Javaad Mirza",
    qualifications: "MD, BDS",
    role: "Principal Dentist",
    gdc: "290378",
    image: "https://ext.same-assets.com/523564123/2131251075.jpeg",
    description: "Dual qualified as both Doctor and Dentist, Javaad has a whole-body holistic outlook towards oral care. With extensive experience in comprehensive dental care, Javaad leads our practice with a commitment to the highest standards of patient care and modern dental techniques."
  },
  {
    name: "Imrana Ishaque",
    qualifications: "BDS, MFDS",
    role: "Principal Dentist",
    gdc: "252578",
    image: "https://ext.same-assets.com/523564123/3375693680.jpeg",
    description: "Imrana brings specialised expertise in restorative and aesthetic dentistry, her calm manner ensures patients young and old all receive the most advanced treatments available."
  }
];

const associates = [
  {
    name: "Janet Kerr",
    qualifications: "BDS LDS RCS",
    role: "Associate Dentist",
    gdc: "60861",
    image: "https://ext.same-assets.com/523564123/686632134.jpeg",
    description: "With years of experience in general and restorative dentistry, Janet provides compassionate care with a gentle approach."
  },
  {
    name: "Gavin Goh",
    qualifications: "BDS",
    role: "Associate Dentist",
    gdc: "264893",
    image: "https://ext.same-assets.com/523564123/410337074.jpeg",
    description: "Gavin focuses on preventive care and modern treatment techniques, helping patients maintain optimal oral health."
  }
];

const dentists = [...principals, ...associates];

const supportTeam = [
  {
    name: "Kirsten Pownall",
    role: "Practice Manager",
    image: "https://ext.same-assets.com/523564123/1366642287.jpeg",
    description: "Kirsten ensures the smooth operation of our practice and coordinates patient care to provide an exceptional experience."
  },
  {
    name: "Jade Traoré",
    qualifications: "BSc (Hons)",
    role: "Dental Therapist",
    image: "https://ext.same-assets.com/523564123/221362571.jpeg",
    description: "Jade specialises in preventive treatments and oral health education, working closely with our dentists to maintain your oral health."
  },
  {
    name: "Lee-Anne Smith",
    role: "Hygienist",
    image: "/images/team/lee-anne-smith.webp",
    description: "Lee-Anne provides professional cleaning and hygiene treatments, helping you maintain healthy gums and teeth."
  }
];

const nurses = [
  {
    name: "Amy Simpson",
    role: "Dental Nurse",
    image: "https://ext.same-assets.com/523564123/2699379883.jpeg"
  },
  {
    name: "Madiyah Qadeer",
    role: "Dental Nurse",
    image: "/images/team/madiyah-qadeer.webp"
  },
  {
    name: "Caitlin Swinscoe",
    role: "Dental Nurse",
    image: "https://ext.same-assets.com/523564123/4087775093.jpeg"
  },
  {
    name: "Hannah Buckley",
    role: "Apprentice Dental Nurse",
    image: "/images/team/hannah-buckley.webp"
  },
  {
    name: "Katy Parkes",
    role: "Apprentice Dental Nurse",
    image: "https://ext.same-assets.com/523564123/1108163630.jpeg"
  },
  {
    name: "Sarah Simpson",
    role: "Apprentice Dental Nurse",
    image: "/images/team/sarah-simpson.webp"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Users className="h-12 w-12" />
              </div>
            </div>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-pear-gold">Dedicated</span> Team
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-8">
              Dedication. Expertise. Passion.
            </p>
            <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto">
              We are a friendly, highly-experienced team dedicated to providing our patients with the greatest care possible.
              We continually strive to learn more, investing in ourselves and the practice to ensure our patients
              receive the most up-to-date treatments and care available. Our patient focus is why we are Nottingham's top-rated dental clinic and Dental Clinic of the Year for Nottinghamshire.
            </p>
          </div>
        </div>
      </section>

      {/* Dentists Section - Unified */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-pear-primary/10 rounded-full">
                <Award className="h-8 w-8 text-pear-primary" />
              </div>
            </div>
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Dentists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our practice is led by experienced dentists committed to excellence in dental care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {dentists.map((dentist) => (
              <div key={dentist.gdc} className="space-y-4">
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-primary/30">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="relative mb-6 mx-auto w-48 h-48">
                        <Image
                          src={dentist.image}
                          alt={`${dentist.name} - ${dentist.role} at Pear Tree Dental`}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover rounded-full border-4 border-pear-primary/20"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
                      <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-2">
                        {dentist.name}
                      </h3>
                      <div className="space-y-2 mb-4">
                        {dentist.qualifications && (
                          <Badge variant="secondary" className="bg-pear-primary/10 text-pear-primary">
                            {dentist.qualifications}
                          </Badge>
                        )}
                        <p className="text-lg font-semibold text-gray-700">{dentist.role}</p>
                        {dentist.gdc && (
                          <p className="text-sm text-gray-500">GDC: {dentist.gdc}</p>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {dentist.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews CTA Section */}
      <section className="py-12 bg-pinky-fade">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/testimonials" className="group">
              <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl border-0 overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  <h3 className="heading-serif text-2xl sm:text-3xl font-bold mb-4 text-dental-green group-hover:text-dental-green/90 transition-colors">
                    Read why our team have received over 500 ⭐⭐⭐⭐⭐ reviews on Google
                  </h3>
                  <div className="flex justify-center">
                    <Button variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white group-hover:scale-105 transition-all duration-300">
                      View All Testimonials
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-pear-primary/10 rounded-full">
                <Heart className="h-8 w-8 text-pear-primary" />
              </div>
            </div>
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Support Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated support professionals ensure every aspect of your care is exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTeam.map((member) => (
              <Card key={member.name} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-4 mx-auto w-32 h-32">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} at Pear Tree Dental`}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full border-3 border-pear-primary/20"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <h3 className="heading-serif text-lg font-bold text-pear-primary mb-2">
                      {member.name}
                    </h3>
                    <div className="space-y-1 mb-3">
                      {member.qualifications && (
                        <Badge variant="outline" className="border-pear-primary/30 text-pear-primary text-xs">
                          {member.qualifications}
                        </Badge>
                      )}
                      <p className="font-semibold text-gray-700">{member.role}</p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nursing Team Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Meet Our Nurses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our lovely nurses are here to always ensure you are comfortable every step of the way
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {nurses.map((nurse) => (
              <Card key={nurse.name} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="relative mb-3 mx-auto w-24 h-24">
                      <Image
                        src={nurse.image}
                        alt={`${nurse.name} - ${nurse.role} at Pear Tree Dental`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-full border-2 border-pear-primary/20"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <h3 className="heading-serif text-sm font-bold text-pear-primary mb-1">
                      {nurse.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-700">{nurse.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pear-primary to-pear-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">
              Ready to Meet Our Team?
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Experience the difference that dedicated, experienced professionals can make to your dental health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01159312935"
                className="bg-white text-pear-primary px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-300 flex items-center justify-center gap-2"
              >
                📞 Call 0115 931 2935
              </a>
              <a
                href="/membership"
                className="bg-pear-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-pear-gold/90 transition-colors duration-300"
              >
                Join Our Practice
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
