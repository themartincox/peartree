import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  AlertTriangle,
  Heart,
  Zap,
  Target,
  Award,
  Activity,
  Plus,
  Minus
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppWidget";
import ServiceStructuredData, { serviceData } from "@/components/ServiceStructuredData";

export const metadata: Metadata = {
  title: "Gentle Tooth Extractions | Painless Tooth Removal Burton Joyce - Pear Tree Dental",
  description: "Gentle, pain-free tooth extractions in Burton Joyce. Expert removal techniques with minimal discomfort. Wisdom teeth, damaged teeth, emergency extractions.",
};

const extractionTypes = [
  {
    type: "Simple Extraction",
    description: "Straightforward removal of visible, accessible teeth",
    procedure: "Gentle loosening and lifting of tooth from socket",
    anaesthesia: "Local anaesthetic injection",
    duration: "15-30 minutes",
    recovery: "1-3 days",
    suitability: ["Loose teeth", "Straightforward cases", "Visible crown damage", "No complications expected"],
    cost: "From £180",
    healing: "Quick, minimal discomfort"
  },
  {
    type: "Surgical Extraction",
    description: "More complex removal requiring minor surgery",
    procedure: "Small incision, possible bone removal, sectioning if needed",
    anaesthesia: "Local anaesthetic, sedation available",
    duration: "30-60 minutes",
    recovery: "3-7 days",
    suitability: ["Broken teeth", "Impacted teeth", "Root fragments", "Complex cases"],
    cost: "From £300",
    healing: "Longer healing, manageable discomfort"
  },
  {
    type: "Wisdom Tooth Extraction",
    description: "Removal of problematic third molars",
    procedure: "May require surgical approach depending on position",
    anaesthesia: "Local anaesthetic, sedation options",
    duration: "20-45 minutes each",
    recovery: "3-7 days",
    suitability: ["Impacted wisdom teeth", "Crowding issues", "Repeated infections", "Cysts or damage"],
    cost: "From £300",
    healing: "Varies by complexity"
  },
  {
    type: "Emergency Extraction",
    description: "Urgent removal for severe pain or infection",
    procedure: "Same-day treatment with pain relief priority",
    anaesthesia: "Immediate effective numbing",
    duration: "15-45 minutes",
    recovery: "2-5 days",
    suitability: ["Severe pain", "Acute infection", "Trauma damage", "Cannot be saved"],
    cost: "From £180",
    healing: "Relief usually immediate"
  }
];

const reasonsForExtraction = [
  {
    reason: "Severe Tooth Decay",
    description: "Extensive decay that cannot be restored",
    symptoms: ["Constant severe pain", "Large visible cavity", "Tooth structure breakdown", "Failed previous treatment"],
    alternatives: "Root canal treatment may still be possible in some cases",
    urgency: "Often urgent due to pain and infection risk"
  },
  {
    reason: "Advanced Gum Disease",
    description: "Periodontal disease causing loose teeth",
    symptoms: ["Very loose teeth", "Gum recession", "Bone loss", "Chronic infection"],
    alternatives: "Deep cleaning and gum treatment if caught early",
    urgency: "Moderate - can worsen if delayed"
  },
  {
    reason: "Tooth Trauma/Fracture",
    description: "Severe damage from injury or accident",
    symptoms: ["Broken tooth", "Pain when biting", "Sharp edges", "Root fracture"],
    alternatives: "Crown or bonding if damage is not too severe",
    urgency: "Urgent if causing pain or sharp edges"
  },
  {
    reason: "Crowding/Orthodontics",
    description: "Creating space for teeth straightening",
    symptoms: ["Overcrowded teeth", "Cannot fit braces properly", "Crooked alignment"],
    alternatives: "Expansion techniques, IPR (tooth reshaping)",
    urgency: "Elective - planned as part of treatment"
  },
  {
    reason: "Impacted Wisdom Teeth",
    description: "Third molars causing problems",
    symptoms: ["Pain at back of mouth", "Swollen gums", "Difficulty opening mouth", "Bad breath"],
    alternatives: "Sometimes monitoring if not causing issues",
    urgency: "Moderate to urgent depending on symptoms"
  },
  {
    reason: "Failed Root Canal",
    description: "Endodontic treatment unsuccessful",
    symptoms: ["Persistent pain", "Swelling", "Infection", "Abscess formation"],
    alternatives: "Root canal retreatment or apicoectomy",
    urgency: "Urgent if infection present"
  }
];

const extractionProcess = [
  {
    stage: "1",
    title: "Consultation & X-rays",
    description: "Thorough examination and treatment planning",
    duration: "20-30 minutes",
    includes: ["Clinical examination", "Digital X-rays", "Medical history review", "Treatment options discussion", "Consent process"],
    outcome: "Clear diagnosis and extraction plan"
  },
  {
    stage: "2",
    title: "Anaesthesia Administration",
    description: "Comfortable numbing for pain-free procedure",
    duration: "10-15 minutes",
    includes: ["Topical anaesthetic gel", "Local anaesthetic injection", "Waiting for full numbness", "Comfort verification", "Anxiety management"],
    outcome: "Complete numbness and patient comfort"
  },
  {
    stage: "3",
    title: "Gentle Extraction",
    description: "Careful removal using gentle techniques",
    duration: "5-45 minutes",
    includes: ["Tissue preparation", "Gentle loosening", "Controlled removal", "Bleeding control", "Socket cleaning"],
    outcome: "Tooth removed with minimal trauma"
  },
  {
    stage: "4",
    title: "Healing Optimization",
    description: "Steps to promote optimal healing",
    duration: "10-15 minutes",
    includes: ["Socket inspection", "Sutures if needed", "Gauze placement", "Bleeding control", "Initial healing check"],
    outcome: "Optimal conditions for healing"
  },
  {
    stage: "5",
    title: "Recovery Instructions",
    description: "Detailed aftercare guidance",
    duration: "10 minutes",
    includes: ["Aftercare instructions", "Pain management advice", "Emergency contact info", "Follow-up scheduling", "Questions answered"],
    outcome: "Patient prepared for smooth recovery"
  }
];

const gentleTechniques = [
  {
    technique: "Atraumatic Extraction",
    description: "Minimally invasive removal preserving surrounding tissues",
    benefits: ["Less post-operative pain", "Faster healing", "Better aesthetics", "Preserved bone structure"],
    when: "Suitable for most simple extractions"
  },
  {
    technique: "Sectioning Method",
    description: "Dividing multi-rooted teeth for easier removal",
    benefits: ["Less force required", "Reduced trauma", "Safer for surrounding teeth", "Better access"],
    when: "Complex extractions, damaged teeth"
  },
  {
    technique: "Piezoelectric Surgery",
    description: "Ultrasonic technology for precise bone work",
    benefits: ["Selective cutting", "Reduced bleeding", "Faster healing", "Less swelling"],
    when: "Surgical extractions, impacted teeth"
  },
  {
    technique: "Conscious Sedation",
    description: "Relaxation options for anxious patients",
    benefits: ["Reduced anxiety", "Better comfort", "No memory of procedure", "Still responsive"],
    when: "Nervous patients, complex procedures"
  }
];

const healingTimeline = [
  {
    timeframe: "First 24 Hours",
    normalHealing: [
      "Some bleeding and oozing normal",
      "Swelling may begin to develop",
      "Mild to moderate discomfort",
      "Blood clot forms in socket"
    ],
    instructions: [
      "Bite on gauze for 30-45 minutes",
      "Take prescribed pain medication",
      "Apply ice packs (15 min on/off)",
      "Avoid rinsing, spitting, or straws",
      "Eat soft, cool foods only"
    ],
    warnings: ["Heavy bleeding that won't stop", "Severe pain", "Signs of allergic reaction"]
  },
  {
    timeframe: "Days 2-3",
    normalHealing: [
      "Swelling peaks then begins to reduce",
      "Discomfort should be manageable",
      "Socket begins initial healing",
      "Minor bruising may appear"
    ],
    instructions: [
      "Continue pain medication as needed",
      "Gentle warm salt water rinses",
      "Soft diet, avoid extraction site",
      "Keep area clean but gentle",
      "Return to light activities"
    ],
    warnings: ["Increasing pain", "Dry socket symptoms", "Signs of infection"]
  },
  {
    timeframe: "Week 1",
    normalHealing: [
      "Swelling should be reducing",
      "Pain significantly improved",
      "Socket filling with tissue",
      "Can return to normal activities"
    ],
    instructions: [
      "Graduate to normal soft foods",
      "Gentle brushing around area",
      "Continue salt water rinses",
      "Attend follow-up if scheduled",
      "Monitor healing progress"
    ],
    warnings: ["Persistent pain", "Bad taste or smell", "Delayed healing"]
  },
  {
    timeframe: "Weeks 2-4",
    normalHealing: [
      "Socket continues to fill",
      "Minimal discomfort",
      "Tissue healing well",
      "Normal function returning"
    ],
    instructions: [
      "Resume normal oral hygiene",
      "Regular diet as tolerated",
      "Consider replacement options",
      "Maintain follow-up schedule",
      "Report any concerns"
    ],
    warnings: ["Any unusual symptoms", "Delayed healing", "Problems with nearby teeth"]
  }
];

const replacementOptions = [
  {
    option: "Dental Implant",
    timeframe: "3-6 months after extraction",
    description: "Titanium post with crown - most like natural tooth",
    advantages: ["Preserves jaw bone", "Doesn't affect other teeth", "Longest lasting", "Most natural function"],
    disadvantages: ["Higher cost", "Surgical procedure", "Longer treatment time"],
    cost: "£3,000+",
    lifespan: "20+ years",
    suitability: "Most patients with adequate bone"
  },
  {
    option: "Dental Bridge",
    timeframe: "2-3 weeks after healing",
    description: "Crown supported by adjacent teeth",
    advantages: ["Fixed solution", "Relatively quick", "Good appearance", "Proven technique"],
    disadvantages: ["Affects healthy teeth", "May need replacement", "Harder to clean"],
    cost: "£750+ per unit",
    lifespan: "10-15 years",
    suitability: "Good adjacent teeth required"
  },
  {
    option: "Partial Denture",
    timeframe: "Immediate or after healing",
    description: "Removable replacement tooth",
    advantages: ["Lowest cost", "Non-surgical", "Can replace multiple teeth", "Reversible"],
    disadvantages: ["Removable", "May feel bulky", "Requires adjustment period", "Less stable"],
    cost: "£400-800",
    lifespan: "5-10 years",
    suitability: "Good option for multiple missing teeth"
  },
  {
    option: "No Replacement",
    timeframe: "Immediate decision",
    description: "Leave space where tooth was",
    advantages: ["No additional cost", "No further treatment", "Simple solution"],
    disadvantages: ["Affects chewing", "Teeth may shift", "Bone loss over time", "Aesthetic impact"],
    cost: "£0",
    lifespan: "Permanent",
    suitability: "Back teeth where function less critical"
  }
];

const complications = [
  {
    complication: "Dry Socket (Alveolar Osteitis)",
    frequency: "2-5% of extractions",
    description: "Blood clot dislodges, exposing bone",
    symptoms: ["Severe throbbing pain", "Bad taste/smell", "Empty-looking socket", "Pain radiating to ear"],
    treatment: "Professional cleaning and medicated dressing",
    prevention: "Follow aftercare instructions, avoid smoking/straws"
  },
  {
    complication: "Infection",
    frequency: "1-3% of extractions",
    description: "Bacterial infection in socket",
    symptoms: ["Increasing pain", "Swelling", "Fever", "Pus discharge"],
    treatment: "Antibiotics and professional cleaning",
    prevention: "Good oral hygiene, follow medication instructions"
  },
  {
    complication: "Nerve Damage",
    frequency: "<1% of extractions",
    description: "Temporary or permanent numbness",
    symptoms: ["Numbness in lip/tongue", "Altered sensation", "Tingling"],
    treatment: "Usually resolves naturally, monitoring",
    prevention: "Careful surgical technique, pre-surgical planning"
  },
  {
    complication: "Sinus Opening",
    frequency: "1-2% of upper extractions",
    description: "Communication between mouth and sinus",
    symptoms: ["Air/liquid through nose", "Nasal congestion", "Unusual sensations"],
    treatment: "Usually heals naturally, sometimes needs closure",
    prevention: "Gentle technique, proper case selection"
  }
];

const faqs = [
  {
    question: "How painful is tooth extraction?",
    answer: "Modern tooth extraction is not painful during the procedure due to effective local anaesthetic. You may feel pressure but no pain. Afterward, most patients experience mild to moderate discomfort for 2-3 days, easily managed with over-the-counter pain medication."
  },
  {
    question: "How much does tooth extraction cost?",
    answer: "Simple extractions cost from £180, surgical extractions from £300, and wisdom teeth from £300. Emergency extractions start from £180. Costs vary based on complexity. Our membership plans include 20% discounts on all treatments."
  },
  {
    question: "How long does it take to recover from tooth extraction?",
    answer: "Most patients feel significantly better within 2-3 days. Initial healing takes about a week, while complete socket healing takes 3-4 weeks. You can usually return to work the next day, avoiding strenuous activity for 24-48 hours."
  },
  {
    question: "What can I eat after tooth extraction?",
    answer: "Start with soft, cool foods like yogurt, smoothies, mashed potatoes, and soup. Avoid hot foods, alcohol, and anything requiring vigorous chewing for the first few days. Gradually return to normal diet as comfort allows, usually within a week."
  },
  {
    question: "Do I need to replace an extracted tooth?",
    answer: "It depends on which tooth and your circumstances. Front teeth almost always need replacement for aesthetics and function. Back teeth may need replacement to prevent shifting and bite problems. We'll discuss your options during consultation."
  },
  {
    question: "What is dry socket and how can I prevent it?",
    answer: "Dry socket occurs when the blood clot dislodges, exposing bone and causing severe pain. Prevent it by following aftercare instructions: no smoking, straws, or vigorous rinsing for 24-48 hours. It affects 2-5% of extractions and is treatable if it occurs."
  }
];

export default function ToothExtractionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <ServiceStructuredData {...serviceData.toothExtractions} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-dental-green-50 via-white to-soft-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-dental-green text-white">
                <Shield className="w-4 h-4 mr-2" />
                Gentle Extraction Techniques
              </Badge>

              <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Gentle Tooth
                <span className="block text-dental-green">Extractions</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                When tooth removal is necessary, we use the gentlest techniques for minimal discomfort
                and optimal healing. Expert care for simple and complex extractions.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-blue-800">GENTLE APPROACH</div>
                    <div className="text-blue-700 text-sm">Minimally invasive techniques for comfortable healing</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white">
                  Call 0115 931 2525
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-dental-green">£180</div>
                  <div className="text-sm text-gray-600">From</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">Pain-Free</div>
                  <div className="text-sm text-gray-600">Procedure</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">Same Day</div>
                  <div className="text-sm text-gray-600">Treatment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dental-green">Gentle</div>
                  <div className="text-sm text-gray-600">Techniques</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-dental-green-100 to-soft-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-dental-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">GENTLE EXTRACTIONS</h3>
                    <p className="text-gray-600">Minimal discomfort, optimal healing</p>
                  </div>
                </div>
              </Card>

              {/* Gentle badge */}
              <Card className="absolute -top-4 -right-4 bg-dental-green text-white p-3 shadow-lg">
                <div className="text-center">
                  <Heart className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">GENTLE</p>
                  <p className="text-xs">CARE</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Extractions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Types of Tooth Extraction
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different extraction methods tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {extractionTypes.map((extraction, index) => (
              <Card key={index} className="border-l-4 border-dental-green bg-dental-green-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-dental-green">{extraction.type}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dental-green">{extraction.cost}</div>
                      <div className="text-sm text-gray-500">{extraction.duration}</div>
                    </div>
                  </div>
                  <CardDescription>{extraction.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Procedure:</span>
                      <div className="font-medium">{extraction.procedure}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Recovery:</span>
                      <div className="font-medium">{extraction.recovery}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Suitable for:</h4>
                    <ul className="space-y-1">
                      {extraction.suitability.map((suit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-dental-green" />
                          <span className="text-sm">{suit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded border border-dental-green-200">
                    <h4 className="font-semibold mb-1">Healing:</h4>
                    <p className="text-sm text-gray-700">{extraction.healing}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons for Extraction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              When Tooth Extraction is Needed
            </h2>
            <p className="text-xl text-gray-600">
              Understanding when extraction is the best treatment option
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasonsForExtraction.map((reason, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-dental-green text-lg mb-3">{reason.reason}</h3>
                <p className="text-gray-600 mb-4">{reason.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                    <ul className="space-y-1">
                      {reason.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-dental-green" />
                          <span className="text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Alternatives:</h4>
                    <p className="text-sm text-gray-700">{reason.alternatives}</p>
                  </div>

                  <div className="bg-orange-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Urgency:</h4>
                    <p className="text-sm text-gray-700">{reason.urgency}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extraction Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Gentle Extraction Process
            </h2>
            <p className="text-xl text-gray-600">
              Step-by-step comfortable extraction procedure
            </p>
          </div>

          <div className="space-y-8">
            {extractionProcess.map((stage, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex">
                  <div className="w-20 bg-dental-green flex items-center justify-center">
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
                              <CheckCircle className="w-4 h-4 text-dental-green" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-dental-green-50 p-4 rounded">
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

      {/* Gentle Techniques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Gentle Techniques
            </h2>
            <p className="text-xl text-gray-600">
              Advanced methods for comfortable, minimally invasive extractions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gentleTechniques.map((technique, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-dental-green text-lg mb-3">{technique.technique}</h3>
                <p className="text-gray-600 mb-4">{technique.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {technique.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Plus className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-dental-green-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">When Used:</h4>
                    <p className="text-sm text-gray-700">{technique.when}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Healing Timeline & Care
            </h2>
            <p className="text-xl text-gray-600">
              What to expect during recovery and how to optimize healing
            </p>
          </div>

          <div className="space-y-8">
            {healingTimeline.map((period, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-dental-green text-white">
                  <CardTitle className="text-xl">{period.timeframe}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700">Normal Healing:</h4>
                      <ul className="space-y-2">
                        {period.normalHealing.map((healing, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{healing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700">Care Instructions:</h4>
                      <ul className="space-y-2">
                        {period.instructions.map((instruction, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{instruction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-red-700">Warning Signs:</h4>
                      <ul className="space-y-2">
                        {period.warnings.map((warning, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{warning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Replacement Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tooth Replacement Options
            </h2>
            <p className="text-xl text-gray-600">
              Consider your options for replacing extracted teeth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {replacementOptions.map((option, index) => (
              <Card key={index} className={`${option.option === 'Dental Implant' ? 'ring-2 ring-dental-green' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{option.option}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-dental-green">{option.cost}</div>
                      <div className="text-sm text-gray-500">{option.timeframe}</div>
                    </div>
                  </div>
                  <CardDescription>
                    <strong>Lifespan:</strong> {option.lifespan} | <strong>Timeline:</strong> {option.timeframe}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{option.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-700">Advantages:</h4>
                      <ul className="space-y-1">
                        {option.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Plus className="w-4 h-4 text-green-600" />
                            <span className="text-sm">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-orange-700">Disadvantages:</h4>
                      <ul className="space-y-1">
                        {option.disadvantages.map((disadvantage, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Minus className="w-4 h-4 text-orange-600" />
                            <span className="text-sm">{disadvantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border">
                    <h4 className="font-semibold mb-1">Best for:</h4>
                    <p className="text-sm text-gray-700">{option.suitability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Complications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Potential Complications
            </h2>
            <p className="text-xl text-gray-600">
              Understanding and preventing rare complications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complications.map((complication, index) => (
              <Card key={index} className="border-l-4 border-orange-600 bg-orange-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-orange-800">{complication.complication}</CardTitle>
                    <Badge className="bg-orange-600 text-white">{complication.frequency}</Badge>
                  </div>
                  <CardDescription>{complication.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Symptoms:</h4>
                    <ul className="space-y-1">
                      {complication.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded border border-orange-200">
                    <h4 className="font-semibold mb-1">Treatment:</h4>
                    <p className="text-sm text-gray-700">{complication.treatment}</p>
                  </div>

                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h4 className="font-semibold mb-1">Prevention:</h4>
                    <p className="text-sm text-gray-700">{complication.prevention}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-3xl font-bold text-gray-900 mb-4">
              Extraction Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about tooth extraction procedures
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dental-green to-soft-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Gentle Tooth Extraction?
          </h2>
          <p className="text-xl text-dental-green-100 mb-8 max-w-2xl mx-auto">
            When extraction is necessary, trust our gentle techniques for minimal discomfort
            and optimal healing. Same-day treatment available for emergency cases.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-dental-green hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-green">
              Call 0115 931 2525
            </Button>
          </div>

          <div className="text-dental-green-100 space-y-2">
            <p className="font-medium">💚 Gentle techniques • Pain-free procedure • Same-day treatment • 20% membership discount</p>
            <p className="text-sm">The Old School House, Main Street, Burton Joyce, Nottinghamshire NG14 5DP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
