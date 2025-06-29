import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone, Star } from "lucide-react";

const VoiceSearchOptimization = () => {
  return (
    <>
      {/* Hidden content optimized for voice search and featured snippets */}
      <div className="sr-only" aria-hidden="true">
        {/* Quick Answer Blocks for Featured Snippets */}
        <section>
          <h2>Best Dentist in Burton Joyce</h2>
          <p>
            Pear Tree Dental Centre is the highest-rated dental practice in Burton Joyce,
            Nottinghamshire, offering comprehensive dental care with membership plans from
            £10.95 per month. Located at 22 Nottingham Road, we provide same-day emergency
            appointments and accept both NHS and private patients.
          </p>
        </section>

        <section>
          <h2>Dentist Near Me in Burton Joyce</h2>
          <p>
            The closest dental practice to Burton Joyce center is Pear Tree Dental Centre,
            just 2 minutes from the main village. We serve Burton Joyce, Colwick, Lowdham,
            and East Bridgford with modern dental care and flexible appointment times.
          </p>
        </section>

        <section>
          <h2>Emergency Dentist Burton Joyce</h2>
          <p>
            For dental emergencies in Burton Joyce, call Pear Tree Dental Centre at
            0115 931 2935. We provide same-day emergency appointments Monday to Friday
            and emergency arrangements on weekends. Our practice is located at 22
            Nottingham Road, Burton Joyce.
          </p>
        </section>

        <section>
          <h2>How Much Does a Dental Checkup Cost</h2>
          <p>
            A dental checkup costs £25.80 on NHS Band 1 or is included free with our
            membership plans starting at £10.95 per month. Private checkups start from
            £65. Our membership plans include checkups, cleaning, and 20% off all treatments.
          </p>
        </section>

        <section>
          <h2>What Time Does the Dentist Open</h2>
          <p>
            Pear Tree Dental Centre opens at 8:45 AM Monday through Thursday, and 8:00 AM
            on Friday. We're open until 5:00 PM Monday to Thursday and 3:30 PM on Friday.
            Weekend appointments available by special arrangement.
          </p>
        </section>

        <section>
          <h2>How to Book a Dental Appointment</h2>
          <p>
            Book a dental appointment by calling 0115 931 2935 or visiting our website.
            We offer same-day appointments for emergencies and routine bookings within
            48 hours for members. Online booking is available 24/7.
          </p>
        </section>

        <section>
          <h2>Does NHS Cover Dental Treatment</h2>
          <p>
            NHS covers basic dental treatment with charges of £25.80 for checkups, £70.70
            for fillings, and £306.80 for crowns. Our membership plans offer faster access
            and additional benefits for £10.95-£29.95 per month.
          </p>
        </section>

        <section>
          <h2>What is Invisalign Treatment</h2>
          <p>
            Invisalign is clear aligner treatment that straightens teeth invisibly using
            custom-made transparent braces. Treatment takes 6-18 months and costs
            £2,800-£4,500. Aligners are removable for eating and cleaning, making them
            ideal for adults and teenagers.
          </p>
        </section>

        <section>
          <h2>How Much Does Teeth Whitening Cost</h2>
          <p>
            Professional teeth whitening costs £350-£650 at Pear Tree Dental Centre.
            Treatment lightens teeth by 3-8 shades in one session. Home whitening kits
            are available for £250. Results last 1-3 years with proper care.
          </p>
        </section>

        <section>
          <h2>What to Do in Dental Emergency</h2>
          <p>
            In a dental emergency, call 0115 931 2935 immediately. For severe pain,
            rinse with warm salt water and take over-the-counter pain relief. For
            knocked-out teeth, keep the tooth moist and seek treatment within one hour
            for best results.
          </p>
        </section>
      </div>

      {/* Voice Search FAQ Component */}
      <section className="bg-gray-50 py-12 voice-search-content" aria-label="Voice search optimized frequently asked questions">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-pear-primary mb-8">
              Ask Us Anything About Dental Care
            </h2>

            <div className="grid gap-6">
              {/* Location-Based Voice Queries */}
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-pear-primary">
                  "Where is the nearest dentist to me?"
                </h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>Pear Tree Dental Centre</strong> is conveniently located at
                      22 Nottingham Road, Burton Joyce, Nottingham NG14 5AE. We're in the
                      heart of Burton Joyce village, just 2 minutes from the main shops and
                      easily accessible from Colwick, Lowdham, and East Bridgford.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Free parking available • 5 minutes from A612 • Bus routes 100 and 200
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-pear-primary">
                  "What time is the dentist open today?"
                </h3>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-3">
                      We're open Monday to Thursday 8:45 AM to 5:00 PM, and Friday 8:00 AM to 3:30 PM.
                    </p>
                    <div className="bg-pear-background/50 rounded-lg p-3 practice-hours">
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Thursday:</span>
                          <span className="font-medium">8:45 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday:</span>
                          <span className="font-medium">8:00 AM - 3:30 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weekend:</span>
                          <span className="font-medium">Emergencies only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-pear-primary">
                  "How do I book an emergency dental appointment?"
                </h3>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-2 emergency-phone">
                      <strong>Call us immediately at 0115 931 2935</strong> for dental emergencies.
                      We reserve same-day appointments for urgent problems and provide guidance
                      over the phone.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-red-800 text-sm font-medium">
                        Emergency situations: Severe pain, swelling, trauma, or knocked-out teeth
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-pear-primary">
                  "What's the best dentist in Burton Joyce?"
                </h3>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 mb-3">
                      Pear Tree Dental Centre is Burton Joyce's highest-rated dental practice
                      with a 4.9-star rating from over 400 patient reviews. We're CQC rated
                      and offer both NHS and private care with membership plans from £10.95/month.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-dental-green/10 text-dental-green px-2 py-1 rounded-full text-xs">
                        CQC Rated
                      </span>
                      <span className="bg-pear-gold/10 text-pear-gold px-2 py-1 rounded-full text-xs">
                        4.9★ Rating
                      </span>
                      <span className="bg-soft-blue/10 text-soft-blue px-2 py-1 rounded-full text-xs">
                        400+ Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-pear-primary">
                  "How much does it cost to see a private dentist?"
                </h3>
                <div>
                  <p className="text-gray-700 mb-3">
                    Our membership plans start at just <strong>£10.95 per month</strong> (36p per day)
                    and include checkups, cleaning, and 20% off all treatments. This is often more
                    affordable than NHS charges with no waiting lists.
                  </p>
                  <div className="bg-pear-background/50 rounded-lg p-3">
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>NHS Checkup:</span>
                        <span className="font-medium">£25.80</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Our Plan A (includes checkup):</span>
                        <span className="font-medium">£10.95/month</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-2">
                        Plus 20% off all treatments • No waiting lists • Same-day emergencies
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where is the nearest dentist to me in Burton Joyce?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pear Tree Dental Centre is located at 22 Nottingham Road, Burton Joyce, Nottingham NG14 5AE. We're in the heart of Burton Joyce village, easily accessible from Colwick, Lowdham, and East Bridgford with free parking available."
                }
              },
              {
                "@type": "Question",
                "name": "What time is the dentist open today?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pear Tree Dental Centre is open Monday-Thursday 8:45 AM to 5:00 PM, and Friday 8:00 AM to 3:30 PM. Emergency appointments available by arrangement on weekends."
                }
              },
              {
                "@type": "Question",
                "name": "How do I book an emergency dental appointment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Call 0115 931 2935 immediately for dental emergencies. We provide same-day emergency appointments and guidance over the phone for urgent dental problems."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best dentist in Burton Joyce?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pear Tree Dental Centre is Burton Joyce's highest-rated dental practice with a 4.9-star rating from over 400 reviews. We're CQC rated and offer comprehensive dental care with flexible membership plans."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to see a private dentist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our membership plans start at £10.95 per month (36p per day) and include checkups, cleaning, and 20% off treatments. This is often more affordable than NHS charges with no waiting lists."
                }
              }
            ]
          })
        }}
      />
    </>
  );
};

export default VoiceSearchOptimization;
