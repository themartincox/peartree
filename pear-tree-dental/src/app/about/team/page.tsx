import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Users, Award, Heart } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | Pear Tree Dental - Experienced Dental Professionals in Burton Joyce",
  description: "Meet our experienced team of dental professionals at Pear Tree Dental. Led by principal dentists Javaad Mirza and Imrana Ishaque, our dedicated team provides exceptional dental care.",
  keywords: "dental team, dentists Burton Joyce, Javaad Mirza, Imrana Ishaque, dental professionals Nottingham",
  openGraph: {
    title: "Our Team | Pear Tree Dental",
    description: "Meet our experienced team of dental professionals dedicated to providing exceptional care.",
    type: "website",
  },
};

const principals = [
  {
    name: "Javaad Mirza",
    qualifications: "MD, BDS",
    role: "Principal Dentist",
    gdc: "290378",
    image: "https://ext.same-assets.com/523564123/2131251075.jpeg",
    description: "With extensive experience in comprehensive dental care, Javaad leads our practice with a commitment to the highest standards of patient care and modern dental techniques."
  },
  {
    name: "Imrana Ishaque",
    qualifications: "BDS, MFDS",
    role: "Principal Dentist",
    gdc: "252578",
    image: "https://ext.same-assets.com/523564123/3375693680.jpeg",
    description: "Imrana brings specialised expertise in restorative and aesthetic dentistry, ensuring our patients receive the most advanced treatments available."
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

const supportTeam = [
  {
    name: "Kirsten Pownall",
    role: "Practice Manager",
    image: "https://ext.same-assets.com/523564123/1366642287.jpeg",
    description: "Kirsten ensures the smooth operation of our practice and coordinates patient care to provide an exceptional experience."
  },
  {
    name: "Jade Taore",
    qualifications: "BSc (Hons)",
    role: "Dental Therapist",
    image: "https://ext.same-assets.com/523564123/221362571.jpeg",
    description: "Jade specialises in preventive treatments and oral health education, working closely with our dentists to maintain your oral health."
  },
  {
    name: "Lee-Anne Smith",
    role: "Hygienist",
    image: "https://ext.same-assets.com/523564123/3263532149.png",
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
    image: "https://ext.same-assets.com/523564123/2850927388.jpeg"
  },
  {
    name: "Caitlin Swinscoe",
    role: "Dental Nurse",
    image: "https://ext.same-assets.com/523564123/4087775093.jpeg"
  },
  {
    name: "Hannah Buckley",
    role: "Apprentice Dental Nurse",
    image: "https://ext.same-assets.com/523564123/2850927388.jpeg"
  },
  {
    name: "Katy Parkes",
    role: "Apprentice Dental Nurse",
    image: "https://ext.same-assets.com/523564123/1108163630.jpeg"
  },
  {
    name: "Sarah Simpson",
    role: "Apprentice Dental Nurse",
    image: "https://ext.same-assets.com/523564123/1195986396.jpeg"
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
              We are a friendly, well-experienced team dedicated to providing our patients with the greatest care possible.
              We are continually striving to learn more and invest in ourselves and the practice to ensure our patients
              receive the most up-to-date treatments and care available.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Dentists Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-pear-primary/10 rounded-full">
                <Award className="h-8 w-8 text-pear-primary" />
              </div>
            </div>
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Principal Dentists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our practice is led by experienced principal dentists committed to excellence in dental care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principals.map((dentist) => (
              <Card key={dentist.gdc} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pear-primary/30">
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
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <h3 className="heading-serif text-2xl font-bold text-pear-primary mb-2">
                      {dentist.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <Badge variant="secondary" className="bg-pear-primary/10 text-pear-primary">
                        {dentist.qualifications}
                      </Badge>
                      <p className="text-lg font-semibold text-gray-700">{dentist.role}</p>
                      <p className="text-sm text-gray-500">GDC: {dentist.gdc}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {dentist.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Associate Dentists Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-pear-primary/10 rounded-full">
                <Stethoscope className="h-8 w-8 text-pear-primary" />
              </div>
            </div>
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Associate Dentists
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals providing specialised care across all areas of dentistry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {associates.map((dentist) => (
              <Card key={dentist.gdc} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="relative mb-6 mx-auto w-40 h-40">
                      <Image
                        src={dentist.image}
                        alt={`${dentist.name} - ${dentist.role} at Pear Tree Dental`}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover rounded-full border-4 border-pear-primary/20"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <h3 className="heading-serif text-xl font-bold text-pear-primary mb-2">
                      {dentist.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <Badge variant="outline" className="border-pear-primary/30 text-pear-primary">
                        {dentist.qualifications}
                      </Badge>
                      <p className="text-lg font-semibold text-gray-700">{dentist.role}</p>
                      <p className="text-sm text-gray-500">GDC: {dentist.gdc}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {dentist.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                href="tel:01159312520"
                className="bg-white text-pear-primary px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-300 flex items-center justify-center gap-2"
              >
                📞 Call 0115 931 2520
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
