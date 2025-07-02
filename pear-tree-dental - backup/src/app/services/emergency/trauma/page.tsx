import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Shield,
  Heart,
  Zap,
  Timer,
  Activity,
  Target,
  Siren
} from "lucide-react";
import ServiceStructuredData from "@/components/seo/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Dental Trauma Treatment | Emergency Dental Injury Care Burton Joyce - Pear Tree Dental",
  description: "Emergency dental trauma treatment in Burton Joyce. Knocked out teeth, broken teeth from sports injuries, accidents. Immediate care available 24/7.",
  keywords: [
    "dental trauma Burton Joyce",
    "emergency dental care",
    "knocked out tooth",
    "broken tooth emergency",
    "dental injury",
    "sports dental injury",
    "emergency dentist Burton Joyce"
  ],
};

const traumaTypes = [
  {
    injury: "Knocked Out Tooth (Avulsion)",
    urgency: "Critical - 30 minutes",
    description: "Complete tooth displacement from socket due to trauma",
    symptoms: ["Tooth completely out of mouth", "Bleeding from socket", "Pain and swelling", "Gap where tooth was"],
    firstAid: ["Find the tooth immediately", "Handle by crown only", "Store in milk or saliva", "Get to dentist within 30 minutes"],
    treatment: "Emergency reimplantation and stabilization",
    success: "90% if treated within 30 minutes"
  },
  {
    injury: "Broken/Fractured Tooth",
    urgency: "Immediate",
    description: "Tooth cracked, chipped, or broken from impact",
    symptoms: ["Visible crack or break", "Sharp edges", "Pain when biting", "Sensitivity"],
    firstAid: ["Save tooth fragments", "Rinse mouth gently", "Apply cold compress", "Avoid hot/cold foods"],
    treatment: "Emergency bonding, crown, or restoration",
    success: "Excellent with immediate treatment"
  },
  {
    injury: "Loose Tooth (Luxation)",
    urgency: "Immediate",
    description: "Tooth displaced but still in socket",
    symptoms: ["Tooth feels loose", "Pain when touched", "Difficulty biting", "Bleeding around tooth"],
    firstAid: ["Don't touch or move tooth", "Eat soft foods only", "Apply cold compress", "Seek immediate care"],
    treatment: "Stabilization and splinting",
    success: "Very good with prompt treatment"
  },
  {
    injury: "Tooth Pushed Into Gum",
    urgency: "Critical",
    description: "Tooth driven into the jawbone (intrusion)",
    symptoms: ["Tooth appears shorter", "Severe pain", "Unable to bite", "Bleeding and swelling"],
    firstAid: ["Apply cold compress", "Take pain medication", "Avoid touching area", "Emergency appointment"],
    treatment: "Surgical repositioning or extraction",
    success: "Depends on severity and age"
  },
  {
    injury: "Jaw Injury",
    urgency: "Critical",
    description: "Fractured or dislocated jaw from severe trauma",
    symptoms: ["Unable to close mouth", "Jaw pain", "Swelling", "Difficulty speaking"],
    firstAid: ["Support jaw with hands", "Apply ice pack", "Don't attempt to close", "Emergency room if severe"],
    treatment: "Surgical repair and stabilization",
    success: "Good with immediate treatment"
  },
  {
    injury: "Soft Tissue Injuries",
    urgency: "Urgent",
    description: "Cuts to lips, tongue, cheeks, or gums",
    symptoms: ["Bleeding", "Pain", "Swelling", "Visible cuts or tears"],
    firstAid: ["Apply direct pressure", "Clean with water", "Use cold compress", "Control bleeding"],
    treatment: "Cleaning, suturing if needed",
    success: "Excellent healing expected"
  }
];

const immediateActions = [
  {
    timeframe: "First 5 Minutes",
    actions: [
      "Stay calm and assess the situation",
      "Control any bleeding with direct pressure",
      "Find any knocked-out teeth or fragments",
      "Call our emergency line: 0115 931 2935"
    ],
    priority: "Critical"
  },
  {
    timeframe: "First 15 Minutes",
    actions: [
      "Store knocked-out tooth in milk or saliva",
      "Apply cold compress to reduce swelling",
      "Take over-the-counter pain relief",
      "Arrange immediate transport to practice"
    ],
    priority: "Urgent"
  },
  {
    timeframe: "First 30 Minutes",
    actions: [
      "Arrive at dental practice for emergency care",
      "Bring tooth fragments and any medications",
      "Prepare medical history information",
      "Continue pain management as directed"
    ],
    priority: "Essential"
  }
];

const preventionTips = [
  {
    activity: "Sports",
    protection: "Custom Sports Mouthguard",
    description: "Professional mouthguards reduce injury risk by 60x compared to no protection",
    cost: "From £150",
    sports: ["Rugby", "Football", "Boxing", "Hockey", "Basketball"]
  },
  {
    activity: "Children's Play",
    protection: "Supervision & Safe Environment",
    description: "Most childhood dental trauma occurs during unsupervised play",
    cost: "Prevention",
    sports: ["Playground equipment", "Bicycle riding", "Skateboarding", "Running"]
  },
  {
    activity: "Motor Vehicle",
    protection: "Seatbelts & Airbags",
    description: "Proper restraints significantly reduce facial and dental injuries",
    cost: "Standard safety",
    sports: ["Car accidents", "Motorcycle accidents", "Cycling"]
  },
  {
    activity: "Home/Work",
    protection: "Safety Equipment",
    description: "Use appropriate safety gear for DIY, work, and home activities",
    cost: "Varies",
    sports: ["Tools", "Ladders", "Heavy lifting", "Construction work"]
  }
];

const treatmentTimeline = [
  {
    time: "0-30 minutes",
    title: "Golden Window",
    description: "Critical period for tooth reimplantation",
    actions: ["Emergency assessment", "Pain management", "Tooth reimplantation", "Initial stabilization"],
    success: "Highest success rates"
  },
  {
    time: "30-60 minutes",
    title: "Urgent Care",
    description: "Still good chances for successful treatment",
    actions: ["Detailed examination", "X-rays", "Treatment planning", "Emergency procedures"],
    success: "Good success rates"
  },
  {
    time: "1-2 hours",
    title: "Important Window",
    description: "Treatment still beneficial but success rates lower",
    actions: ["Comprehensive assessment", "Stabilization", "Pain relief", "Planning follow-up"],
    success: "Moderate success"
  },
  {
    time: "2+ hours",
    title: "Late Treatment",
    description: "Focus shifts to pain relief and restoration options",
    actions: ["Pain management", "Infection prevention", "Restoration planning", "Alternative treatments"],
    success: "Limited for reimplantation"
  }
];

const afterCare = [
  {
    period: "First 24 Hours",
    instructions: [
      "Take prescribed antibiotics and pain medication",
      "Apply ice packs for 15 minutes every hour",
      "Eat soft foods and avoid chewing on injured area",
      "Avoid smoking and alcohol",
      "Sleep with head elevated"
    ]
  },
  {
    period: "First Week",
    instructions: [
      "Maintain excellent oral hygiene around uninjured teeth",
      "Use prescribed mouth rinse",
      "Attend follow-up appointments as scheduled",
      "Watch for signs of infection (fever, increased swelling)",
      "Avoid hard or chewy foods"
    ]
  },
  {
    period: "Long-term Follow-up",
    instructions: [
      "Regular monitoring for 1-2 years minimum",
      "Watch for color changes in treated teeth",
      "Maintain excellent oral hygiene",
      "Use custom mouthguard for sports",
      "Report any new symptoms immediately"
    ]
  }
];

const faqs = [
  {
    question: "What should I do if my tooth gets knocked out?",
    answer: "Act fast! Find the tooth, handle it by the crown (not root), rinse gently if dirty, and store in milk or saliva. Get to our practice within 30 minutes for the best chance of successful reimplantation. Never scrub the tooth or let it dry out."
  },
  {
    question: "Can a knocked-out tooth be saved?",
    answer: "Yes, if you act quickly! Success rates are 90% if the tooth is reimplanted within 30 minutes, dropping to 50% after 1 hour. The key is proper handling, storage in milk or saliva, and immediate professional treatment."
  },
  {
    question: "How much does emergency dental trauma treatment cost?",
    answer: "Emergency treatment starts from £50 for the appointment. Additional costs depend on treatment needed: reimplantation (£300-500), splinting (£200-400), or restoration (£150-750). We prioritize saving your tooth and will discuss costs upfront."
  },
  {
    question: "Should I go to A&E or the dentist for dental trauma?",
    answer: "For isolated dental trauma, come directly to us for faster, specialized care. Go to A&E if you have: head injury, loss of consciousness, severe bleeding that won't stop, suspected jaw fracture, or other serious injuries."
  },
  {
    question: "Will my tooth look normal after trauma treatment?",
    answer: "Most trauma treatments achieve excellent aesthetic results. Some teeth may need additional cosmetic treatment later. We monitor treated teeth long-term and can address any color changes or other issues that develop."
  },
  {
    question: "How can I prevent dental trauma in sports?",
    answer: "Wear a custom-made sports mouthguard! They're far superior to store-bought guards and reduce injury risk by 60 times. We can make custom guards that are comfortable and don't interfere with breathing or speaking."
  }
];

export default function DentalTraumaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData
        serviceName="Dental Trauma Emergency Treatment"
        description="Emergency dental trauma treatment for knocked out teeth, broken teeth, sports injuries, and accidents. Immediate care available 24/7."
        provider={{
          "@type": "Dentist",
          "name": "Pear Tree Dental Centre",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "22 Nottingham Road",
            "addressLocality": "Burton Joyce",
            "addressRegion": "Nottinghamshire",
            "postalCode": "NG14 5AE",
            "addressCountry": "GB"
          }
        }}
        areaServed={["Burton Joyce", "Nottingham", "Nottinghamshire"]}
        availableChannel={{
          "@type": "ServiceChannel",
          "serviceUrl": "https://peartree.dental/services/emergency/trauma",
          "servicePhone": "0115 931 2935"
        }}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-red-600 text-white">
                <Siren className="w-4 h-4 mr-2" />
                Emergency Trauma Care
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary leading-tight mb-6">
                Dental Trauma
                <span className="block text-red-600">Emergency Treatment</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Knocked out tooth? Sports injury? Accident? We provide immediate emergency
                treatment for all dental trauma. Every minute counts - call us now.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <div>
                    <div className="font-bold text-red-800">KNOCKED OUT TOOTH?</div>
                    <div className="text-red-700 text-sm">You have 30 minutes for best results - call NOW!</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:01159312935">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    EMERGENCY: 0115 931 2935
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full sm:w-auto">
                    Emergency Contact
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">30min</div>
                  <div className="text-sm text-gray-600">Critical Window</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">90%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Line</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">Same Day</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl border-2 border-red-200">
                <div className="aspect-[4/3] bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-pear-primary mb-2">TRAUMA SPECIALIST</h3>
                    <p className="text-gray-600">Expert emergency care</p>
                  </div>
                </div>
              </Card>

              {/* Critical time badge */}
              <div className="absolute -top-4 -left-4 bg-red-600 text-white rounded-full px-4 py-2 shadow-lg animate-pulse">
                <div className="text-center">
                  <Timer className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">30 MIN</p>
                  <p className="text-xs">CRITICAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Dental Trauma */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Types of Dental Trauma Emergencies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognize the type of injury and understand the urgency level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {traumaTypes.map((trauma, index) => (
              <Card key={index} className={`border-l-4 ${
                trauma.urgency.includes('Critical') ? 'border-red-600 bg-red-50' :
                trauma.urgency === 'Immediate' ? 'border-orange-600 bg-orange-50' :
                'border-yellow-600 bg-yellow-50'
              }`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{trauma.injury}</CardTitle>
                    <Badge className={`${
                      trauma.urgency.includes('Critical') ? 'bg-red-600' :
                      trauma.urgency === 'Immediate' ? 'bg-orange-600' :
                      'bg-yellow-600'
                    } text-white`}>
                      {trauma.urgency}
                    </Badge>
                  </div>
                  <CardDescription>{trauma.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Symptoms:</h4>
                    <ul className="space-y-1">
                      {trauma.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-600" />
                          <span className="text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Immediate First Aid:</h4>
                    <ul className="space-y-1">
                      {trauma.firstAid.map((aid, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-white text-xs font-bold">{idx + 1}</span>
                          </div>
                          <span className="text-sm">{aid}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Treatment:</span>
                      <div className="font-medium">{trauma.treatment}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Success Rate:</span>
                      <div className="font-medium text-green-600">{trauma.success}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Action Timeline */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Critical Action Timeline
            </h2>
            <p className="text-xl text-gray-600">
              What to do in the crucial first 30 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {immediateActions.map((timeframe, index) => (
              <Card key={index} className={`p-6 border-2 ${
                timeframe.priority === 'Critical' ? 'border-red-600 bg-red-50' :
                timeframe.priority === 'Urgent' ? 'border-orange-600 bg-orange-50' :
                'border-yellow-600 bg-yellow-50'
              }`}>
                <div className="text-center mb-4">
                  <Badge className={`${
                    timeframe.priority === 'Critical' ? 'bg-red-600' :
                    timeframe.priority === 'Urgent' ? 'bg-orange-600' :
                    'bg-yellow-600'
                  } text-white text-lg px-4 py-2`}>
                    {timeframe.timeframe}
                  </Badge>
                </div>
                <ul className="space-y-3">
                  {timeframe.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        timeframe.priority === 'Critical' ? 'bg-red-600' :
                        timeframe.priority === 'Urgent' ? 'bg-orange-600' :
                        'bg-yellow-600'
                      }`}>
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Treatment Success by Time
            </h2>
            <p className="text-xl text-gray-600">
              Why immediate treatment is critical for best outcomes
            </p>
          </div>

          <div className="space-y-6">
            {treatmentTimeline.map((period, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className={`w-24 flex items-center justify-center text-white font-bold ${
                    index === 0 ? 'bg-green-600' :
                    index === 1 ? 'bg-yellow-600' :
                    index === 2 ? 'bg-orange-600' :
                    'bg-red-600'
                  }`}>
                    {period.time}
                  </div>
                  <div className="flex-1 p-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="font-semibold text-xl text-pear-primary mb-2">{period.title}</h3>
                        <p className="text-gray-600 text-sm">{period.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Actions:</h4>
                        <ul className="text-sm space-y-1">
                          {period.actions.map((action, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Success Rate:</h4>
                        <Badge className={`${
                          index === 0 ? 'bg-green-600' :
                          index === 1 ? 'bg-yellow-600' :
                          index === 2 ? 'bg-orange-600' :
                          'bg-red-600'
                        } text-white`}>
                          {period.success}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Preventing Dental Trauma
            </h2>
            <p className="text-xl text-gray-600">
              Protection strategies for high-risk activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {preventionTips.map((tip, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-pear-primary">{tip.activity}</h3>
                  <Badge variant="outline" className="text-green-600 border-green-600">{tip.cost}</Badge>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-red-600 mb-2">{tip.protection}</h4>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">High-Risk Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tip.sports.map((sport, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">{sport}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-4">
              Post-Trauma Care
            </h2>
            <p className="text-xl text-gray-600">
              Essential aftercare for optimal healing and recovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {afterCare.map((period, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-red-600 text-lg mb-4">{period.period}</h3>
                <ul className="space-y-2">
                  {period.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-pear-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-pear-primary mb-4">
              Dental Trauma Questions
            </h2>
            <p className="text-lg text-gray-600">
              Critical information about dental trauma and emergency treatment
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-pear-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Dental Trauma Emergency?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Every second counts with dental trauma. Knocked out teeth have the best
            chance of survival if treated within 30 minutes. Don't wait - call now!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="tel:01159312935">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Siren className="w-5 h-5 mr-2" />
                EMERGENCY: 0115 931 2935
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Emergency Contact
              </Button>
            </Link>
          </div>

          <div className="text-red-100 space-y-2">
            <p className="font-medium">⚡ 30-minute golden window • Expert trauma care • 90% success rate</p>
            <p className="text-sm">22 Nottingham Road, Burton Joyce, Nottinghamshire NG14 5AE</p>
          </div>
        </div>
      </section>
    </div>
  );
}
