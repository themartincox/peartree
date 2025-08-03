import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  Thermometer,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Shield,
  Clock,
  Zap,
  Target,
  Activity,
  Heart,
  Pill
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppWidget";
import ServiceStructuredData, { serviceData } from "@/components/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Dental Abscess Emergency Treatment | Severe Toothache Relief - Pear Tree Dental",
  description: "Emergency dental abscess treatment in Burton Joyce. Severe toothache, facial swelling, fever. Immediate pain relief and infection treatment available.",
};

const abscessTypes = [
  {
    type: "Periapical Abscess",
    location: "At the root tip",
    cause: "Bacterial infection from untreated tooth decay or trauma",
    symptoms: ["Severe, throbbing toothache", "Pain when biting down", "Temperature sensitivity", "Facial swelling", "Fever and malaise"],
    urgency: "Urgent",
    treatment: "Root canal treatment or extraction, antibiotics",
    complications: "Can spread to surrounding tissues and become life-threatening"
  },
  {
    type: "Periodontal Abscess",
    location: "In the gum tissue",
    cause: "Severe gum disease or foreign object trapped in gums",
    symptoms: ["Swollen, tender gums", "Pain when chewing", "Bad taste in mouth", "Loose tooth", "Pus discharge"],
    urgency: "Urgent",
    treatment: "Drainage, deep cleaning, antibiotics",
    complications: "Tooth loss, bone damage, spread of infection"
  },
  {
    type: "Gingival Abscess",
    location: "Surface of gum tissue",
    cause: "Food particles or foreign objects trapped in gums",
    symptoms: ["Localized gum swelling", "Pain when touched", "Red, shiny gums", "Pus formation", "Bad breath"],
    urgency: "Moderate",
    treatment: "Drainage, cleaning, antibiotics if needed",
    complications: "Can develop into more serious periodontal abscess"
  }
];

const emergencySymptoms = [
  {
    symptom: "Severe Facial Swelling",
    severity: "Critical",
    description: "Swelling affecting eye, neck, or throat",
    action: "Seek immediate emergency care - potential airway obstruction",
    timeframe: "Immediate"
  },
  {
    symptom: "High Fever (38.5°C+)",
    severity: "Critical",
    description: "Fever with chills, indicating systemic infection",
    action: "Emergency treatment required - infection spreading",
    timeframe: "Immediate"
  },
  {
    symptom: "Difficulty Swallowing",
    severity: "Critical",
    description: "Trouble swallowing saliva or water",
    action: "Emergency room immediately - airway risk",
    timeframe: "Immediate"
  },
  {
    symptom: "Severe Throbbing Pain",
    severity: "Urgent",
    description: "Constant, severe pain not relieved by painkillers",
    action: "Same-day emergency dental appointment",
    timeframe: "Within hours"
  },
  {
    symptom: "Pus Discharge",
    severity: "Urgent",
    description: "Visible pus or bad taste from infection",
    action: "Urgent dental care for drainage and antibiotics",
    timeframe: "Same day"
  },
  {
    symptom: "Tooth Mobility",
    severity: "Moderate",
    description: "Tooth becoming loose from infection",
    action: "Dental appointment within 24-48 hours",
    timeframe: "1-2 days"
  }
];

const immediateRelief = [
  {
    method: "Pain Management",
    steps: [
      "Take ibuprofen (400mg) and paracetamol (1000mg) together",
      "Apply cold compress to outside of face for 15 minutes",
      "Rinse with warm salt water (1 tsp salt in warm water)",
      "Sleep with head elevated to reduce pressure"
    ],
    avoid: ["Hot compresses", "Alcohol", "Very hot or cold foods", "Chewing on affected side"]
  },
  {
    method: "Infection Control",
    steps: [
      "Rinse with antimicrobial mouthwash if available",
      "Maintain oral hygiene around unaffected teeth",
      "Stay hydrated with room temperature liquids",
      "Get adequate rest to support immune system"
    ],
    avoid: ["Popping or draining abscess yourself", "Ignoring spreading infection", "Delaying professional care", "Sharing utensils"]
  },
  {
    method: "When to Call Emergency",
    steps: [
      "Facial swelling affecting eye or neck",
      "Difficulty breathing or swallowing",
      "High fever with chills",
      "Severe pain not controlled by medication"
    ],
    avoid: ["Waiting for symptoms to worsen", "Self-medicating with unprescribed antibiotics", "Assuming it will resolve", "Delaying due to dental anxiety"]
  }
];

const treatmentProcess = [
  {
    stage: "1",
    title: "Emergency Assessment",
    description: "Immediate evaluation of infection severity",
    duration: "15-30 minutes",
    includes: ["Pain assessment", "Infection evaluation", "X-rays if needed", "Antibiotic prescription", "Immediate pain relief"],
    outcome: "Pain controlled, infection assessed"
  },
  {
    stage: "2",
    title: "Drainage Procedure",
    description: "Immediate drainage to relieve pressure",
    duration: "30-60 minutes",
    includes: ["Local anaesthetic", "Incision and drainage", "Irrigation of abscess", "Immediate pain relief", "Post-procedure care"],
    outcome: "Pressure relieved, pain significantly reduced"
  },
  {
    stage: "3",
    title: "Source Treatment",
    description: "Addressing the underlying cause",
    duration: "Variable",
    includes: ["Root canal treatment", "Deep cleaning", "Extraction if necessary", "Ongoing antibiotic therapy", "Pain management"],
    outcome: "Infection source eliminated"
  },
  {
    stage: "4",
    title: "Recovery Monitoring",
    description: "Follow-up care and healing assessment",
    duration: "1-2 weeks",
    includes: ["Progress evaluation", "Antibiotic adjustment", "Pain management review", "Healing assessment", "Further treatment planning"],
    outcome: "Complete healing and pain resolution"
  }
];

const antibioticInfo = [
  {
    antibiotic: "Amoxicillin",
    dosage: "500mg three times daily",
    duration: "5-7 days",
    notes: "First-line treatment for dental infections",
    suitability: "Most adults without penicillin allergy"
  },
  {
    antibiotic: "Metronidazole",
    dosage: "400mg three times daily",
    duration: "5-7 days",
    notes: "Often combined with amoxicillin for severe infections",
    suitability: "Effective against anaerobic bacteria"
  },
  {
    antibiotic: "Clindamycin",
    dosage: "300mg four times daily",
    duration: "5-7 days",
    notes: "Alternative for penicillin-allergic patients",
    suitability: "Patients with penicillin allergy"
  },
  {
    antibiotic: "Azithromycin",
    dosage: "500mg once daily",
    duration: "3 days",
    notes: "Shorter course, good compliance",
    suitability: "Alternative option for certain patients"
  }
];

const complications = [
  {
    complication: "Ludwig's Angina",
    description: "Serious infection of mouth floor that can block airway",
    signs: ["Difficulty swallowing", "Protruding tongue", "Drooling", "Breathing difficulty"],
    action: "Emergency room immediately - life-threatening"
  },
  {
    complication: "Cavernous Sinus Thrombosis",
    description: "Blood clot in brain from spreading infection",
    signs: ["Severe headache", "Eye swelling", "Vision changes", "High fever"],
    action: "Emergency hospital treatment required"
  },
  {
    complication: "Necrotizing Fasciitis",
    description: "Flesh-eating bacterial infection",
    signs: ["Rapidly spreading swelling", "Skin color changes", "Severe pain", "Systemic illness"],
    action: "Immediate emergency surgery required"
  },
  {
    complication: "Sepsis",
    description: "Body-wide infection response",
    signs: ["High fever", "Rapid heart rate", "Confusion", "Difficulty breathing"],
    action: "Emergency room - potentially fatal"
  }
];

const faqs = [
  {
    question: "How quickly can a dental abscess become dangerous?",
    answer: "A dental abscess can become life-threatening within hours to days if left untreated. Infections can spread to vital structures like the throat, causing airway obstruction, or to the bloodstream, causing sepsis. Any facial swelling, difficulty swallowing, or high fever requires immediate emergency care."
  },
  {
    question: "Can I treat a dental abscess at home?",
    answer: "No, dental abscesses require professional treatment. While pain relief measures can help temporarily, the infection needs professional drainage and antibiotics. Home remedies cannot eliminate the bacterial infection or prevent dangerous complications."
  },
  {
    question: "Will antibiotics cure my dental abscess?",
    answer: "Antibiotics control the infection but don't cure the underlying problem. The source of infection (infected tooth or gum disease) must be treated through root canal, extraction, or gum treatment. Without addressing the source, the abscess will likely return."
  },
  {
    question: "How much does emergency abscess treatment cost?",
    answer: "Emergency consultation costs £85-120. Drainage procedures cost £150-300. Source treatment varies: root canal (£400-800), extraction (£100-300), deep cleaning (£200-600). We prioritize pain relief and will discuss all costs upfront."
  },
  {
    question: "Should I go to A&E or the dentist for an abscess?",
    answer: "Come to us for faster, specialized care unless you have: facial swelling affecting breathing/swallowing, high fever with chills, difficulty opening mouth, or other signs of severe infection. For these symptoms, go to A&E immediately."
  },
  {
    question: "Why is my abscess so painful?",
    answer: "Abscesses create pressure as pus builds up in a confined space, pressing on nerves. This causes severe, throbbing pain that's often worse at night or when lying down. The pain typically improves dramatically once the abscess is drained professionally."
  }
];

export default function DentalAbscessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData {...serviceData.emergencyAppointment} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-red-600 text-white">
                <AlertCircle className="w-4 h-4 mr-2" />
                Emergency Infection Treatment
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Dental Abscess
                <span className="block text-red-600">Emergency Treatment</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Severe toothache? Facial swelling? Fever? A dental abscess is a serious infection
                that requires immediate treatment. Don't wait - infections can spread rapidly.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Thermometer className="w-6 h-6 text-red-600" />
                  <div>
                    <div className="font-bold text-red-800">SIGNS OF SERIOUS INFECTION</div>
                    <div className="text-red-700 text-sm">Facial swelling, fever, difficulty swallowing - call NOW!</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  EMERGENCY: 0115 931 2525
                </Button>
                <WhatsAppButton
                  text="Emergency WhatsApp"
                  message="URGENT DENTAL ABSCESS: Severe toothache/swelling. Need immediate emergency appointment for dental abscess treatment!"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Line</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">Same Day</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">Immediate</div>
                  <div className="text-sm text-gray-600">Pain Relief</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">Expert</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl border-2 border-red-200">
                <div className="aspect-[4/3] bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">INFECTION SPECIALIST</h3>
                    <p className="text-gray-600">Immediate abscess treatment</p>
                  </div>
                </div>
              </Card>

              {/* Emergency warning badge */}
              <Card className="absolute -top-4 -right-4 bg-red-600 text-white p-3 shadow-lg">
                <div className="text-center">
                  <Activity className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">URGENT</p>
                  <p className="text-xs">CARE</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Dental Abscesses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Types of Dental Abscesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding different types of dental infections and their urgency levels
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {abscessTypes.map((abscess, index) => (
              <Card key={index} className="border-l-4 border-red-600 bg-red-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-red-800">{abscess.type}</CardTitle>
                    <Badge className="bg-red-600 text-white">{abscess.urgency}</Badge>
                  </div>
                  <CardDescription className="text-red-700">
                    <strong>Location:</strong> {abscess.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Common Cause:</h4>
                    <p className="text-sm text-gray-700">{abscess.cause}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Symptoms:</h4>
                    <ul className="space-y-1">
                      {abscess.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-600" />
                          <span className="text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded border border-red-200">
                    <h4 className="font-semibold mb-1">Treatment:</h4>
                    <p className="text-sm text-gray-700">{abscess.treatment}</p>
                  </div>

                  <div className="bg-red-100 p-3 rounded border border-red-300">
                    <h4 className="font-semibold mb-1 text-red-800">Potential Complications:</h4>
                    <p className="text-sm text-red-700">{abscess.complications}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Warning Signs */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Emergency Warning Signs
            </h2>
            <p className="text-xl text-gray-600">
              Recognize symptoms requiring immediate emergency care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencySymptoms.map((warning, index) => (
              <Card key={index} className={`border-2 ${
                warning.severity === 'Critical' ? 'border-red-600 bg-red-50' :
                warning.severity === 'Urgent' ? 'border-orange-600 bg-orange-50' :
                'border-yellow-600 bg-yellow-50'
              }`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{warning.symptom}</CardTitle>
                    <Badge className={`${
                      warning.severity === 'Critical' ? 'bg-red-600' :
                      warning.severity === 'Urgent' ? 'bg-orange-600' :
                      'bg-yellow-600'
                    } text-white`}>
                      {warning.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-700">{warning.description}</p>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold mb-1">Action Required:</h4>
                    <p className="text-sm text-gray-700">{warning.action}</p>
                  </div>

                  <Badge variant="outline" className={`${
                    warning.severity === 'Critical' ? 'border-red-600 text-red-600' :
                    warning.severity === 'Urgent' ? 'border-orange-600 text-orange-600' :
                    'border-yellow-600 text-yellow-600'
                  }`}>
                    {warning.timeframe}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Relief Measures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Immediate Relief Measures
            </h2>
            <p className="text-xl text-gray-600">
              What to do while waiting for emergency dental care
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {immediateRelief.map((relief, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-red-600 text-lg mb-4">{relief.method}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Steps to Take:</h4>
                    <ul className="space-y-2">
                      {relief.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <h4 className="font-semibold mb-2 text-red-800">Avoid:</h4>
                    <ul className="space-y-1">
                      {relief.avoid.map((avoid, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm text-red-700">{avoid}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Emergency Treatment Process
            </h2>
            <p className="text-xl text-gray-600">
              How we treat dental abscesses from emergency to recovery
            </p>
          </div>

          <div className="space-y-8">
            {treatmentProcess.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{stage.stage}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">{stage.title}</h3>
                        <p className="text-gray-600">{stage.description}</p>
                      </div>
                      <Badge variant="outline">{stage.duration}</Badge>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Includes:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {stage.includes.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-red-600" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-red-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">Outcome:</h4>
                        <p className="text-sm text-gray-700">{stage.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Antibiotic Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Antibiotic Treatment
            </h2>
            <p className="text-xl text-gray-600">
              Common antibiotics used for dental abscess infections
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {antibioticInfo.map((med, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-gray-900">{med.antibiotic}</h3>
                  <Pill className="w-6 h-6 text-red-600" />
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Dosage:</span>
                      <div className="font-medium">{med.dosage}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Duration:</span>
                      <div className="font-medium">{med.duration}</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-600">Notes:</span>
                    <p className="text-sm text-gray-700">{med.notes}</p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border">
                    <span className="text-gray-600">Best for:</span>
                    <p className="text-sm text-gray-700">{med.suitability}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-800 mb-3">Important Antibiotic Information:</h3>
            <ul className="space-y-2 text-sm text-red-700">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-red-600 mt-0.5" />
                <span>Always complete the full course, even if feeling better</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-red-600 mt-0.5" />
                <span>Take with food if stomach upset occurs</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-red-600 mt-0.5" />
                <span>Contact us if allergic reactions occur</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-red-600 mt-0.5" />
                <span>Antibiotics alone won't cure - source treatment is essential</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Serious Complications */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Serious Complications
            </h2>
            <p className="text-xl text-gray-600">
              Life-threatening complications that can develop from untreated abscesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complications.map((comp, index) => (
              <Card key={index} className="border-2 border-red-600 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800">{comp.complication}</CardTitle>
                  <CardDescription className="text-gray-700">{comp.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Warning Signs:</h4>
                    <ul className="space-y-1">
                      {comp.signs.map((sign, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 text-red-600" />
                          <span className="text-sm">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-100 p-3 rounded border border-red-300">
                    <h4 className="font-semibold mb-1 text-red-800">Required Action:</h4>
                    <p className="text-sm text-red-700 font-medium">{comp.action}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-gray-900 mb-4">
              Dental Abscess Questions
            </h2>
            <p className="text-lg text-gray-600">
              Important information about dental abscess treatment
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Dental Abscess Emergency?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't suffer with severe pain or risk dangerous complications.
            Dental abscesses require immediate professional treatment. Call now for emergency care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              EMERGENCY: 0115 931 2525
            </Button>
            <WhatsAppButton
              text="Emergency WhatsApp"
              message="URGENT DENTAL ABSCESS: Severe pain/swelling. Need immediate emergency treatment!"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600"
            />
          </div>

          <div className="text-red-100 space-y-2">
            <p className="font-medium">🚨 Same-day emergency care • Immediate pain relief • Expert infection treatment</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
