"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FAQStructuredData from "@/components/seo/FAQStructuredData";
import { practiceInfo } from "@/data/practiceInfo";
import {
  Shield,
  Sparkles,
  Crown,
  Star,
  Heart,
  Users,
  Plus,
  Minus,
  HelpCircle,
  CalendarDays,
  ChevronRight,
  ArrowRight,
  MapPin,
  Clock,
  Phone
} from "lucide-react";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqCategories = {
    location: {
      name: "Location & Hours",
      icon: MapPin,
      color: "dental-green",
      questions: [
        {
          id: "loc1",
          question: "Where is the nearest dentist to me?",
          answer: "Pear Tree Dental Centre is conveniently located at 22 Nottingham Road, Burton Joyce, Nottingham NG14 5AL. We're in the heart of Burton Joyce village, just 2 minutes from the main shops and easily accessible from Colwick, Lowdham, and East Bridgford. Free parking available, 5 minutes from A612, with bus routes 100 and 200 nearby."
        },
        {
          id: "loc2",
          question: "What time is the dentist open today?",
          answer: `We're open ${practiceInfo.openingHoursDisplay.weekdays} and ${practiceInfo.openingHoursDisplay.friday}. ${practiceInfo.openingHoursDisplay.weekend}. ${practiceInfo.openingHoursDisplay.emergency} to book your appointment or check our current availability.`
        },
        {
          id: "loc3",
          question: "How do I get to your dental practice?",
          answer: "We're located on Nottingham Road (A612) in Burton Joyce village center. Free parking is available directly outside the practice. Public transport options include buses 100 and 200, and we're easily accessible from Nottingham city center, Colwick, Carlton, and surrounding areas."
        },
        {
          id: "loc4",
          question: "Do you have parking available?",
          answer: "Yes, we provide free parking directly outside the practice for all our patients. The car park is easily accessible and we have spaces available throughout the day. No need to worry about parking fees or time limits."
        }
      ]
    },
    general: {
      name: "General Dentistry",
      icon: Shield,
      color: "dental-green",
      questions: [
        {
          id: "gen1",
          question: "How often should I visit the dentist for a check-up?",
          answer: "We recommend dental check-ups every 6 months for most patients. This allows us to detect any issues early and maintain optimal oral health. Some patients with specific conditions may need more frequent visits, which we'll discuss during your consultation."
        },
        {
          id: "gen2",
          question: "What's included in a routine dental examination?",
          answer: "A comprehensive examination includes checking your teeth and gums, digital X-rays when needed, oral cancer screening, bite assessment, and a thorough cleaning. We also provide personalized oral health advice and discuss any treatment recommendations."
        },
        {
          id: "gen3",
          question: "Are your treatments painful?",
          answer: "We prioritise patient comfort and use modern pain management techniques. Most routine treatments are completely painless, and for more complex procedures, we offer various anesthesia options to ensure your comfort throughout the treatment."
        },
        {
          id: "gen4",
          question: "Do you accept NHS patients?",
          answer: "Yes, we accept NHS patients, though availability may be limited due to high demand. We also offer private treatment options and membership plans that provide more flexibility and shorter waiting times."
        },
        {
          id: "gen5",
          question: "How do I book an emergency dental appointment?",
          answer: "Call us immediately at 0115 931 2935 for dental emergencies. We reserve same-day appointments for urgent problems including severe pain, swelling, trauma, or knocked-out teeth. Our emergency line provides immediate guidance and we'll get you seen as quickly as possible."
        },
        {
          id: "gen6",
          question: "How do I maintain good oral hygiene at home?",
          answer: "Brush twice daily with fluoride toothpaste, floss daily, use an antimicrobial mouthwash, and maintain a healthy diet. Avoid sugary snacks between meals and don't use your teeth as tools. Regular professional cleanings complement your home care routine."
        },
        {
          id: "gen7",
          question: "What's the difference between a filling and a crown?",
          answer: "Fillings repair small to medium cavities using tooth-colored materials. Crowns are recommended for severely damaged teeth, covering the entire visible portion. Crowns provide more protection and are necessary when there isn't enough healthy tooth structure for a filling."
        },
        {
          id: "gen8",
          question: "How long do dental treatments typically last?",
          answer: "Treatment duration varies: routine cleanings take 30-45 minutes, fillings 30-60 minutes, and crowns require 2-3 appointments. We'll always provide an estimated timeline during your consultation and keep you informed throughout the process."
        }
      ]
    },
    orthodontics: {
      name: "Orthodontics",
      icon: Star,
      color: "soft-pink",
      questions: [
        {
          id: "orth1",
          question: "What's the difference between Invisalign and traditional braces?",
          answer: "Invisalign uses clear, removable aligners that are virtually invisible and can be taken out for eating and cleaning. Traditional braces use metal brackets and wires. Invisalign is more comfortable and convenient for most adults, while braces may be better for complex cases."
        },
        {
          id: "orth2",
          question: "How long does orthodontic treatment take?",
          answer: "Treatment duration varies from 6-24 months depending on the complexity of your case. Minor corrections may take 6-12 months, while more complex alignment issues can take 18-24 months. We'll provide a personalized timeline during your consultation."
        },
        {
          id: "orth3",
          question: "Am I too old for orthodontic treatment?",
          answer: "You're never too old for orthodontic treatment! Many of our patients are adults who want to improve their smile. Modern options like Invisalign are discreet and comfortable, making treatment suitable for professional and social settings."
        },
        {
          id: "orth4",
          question: "How much do Invisalign aligners cost?",
          answer: "Invisalign treatment typically ranges from £2,800-£4,500 depending on the complexity of your case. We offer flexible payment plans to spread the cost, and our membership plans provide 10% discounts on all treatments."
        },
        {
          id: "orth5",
          question: "Do I need to wear retainers after treatment?",
          answer: "Yes, retainers are essential to maintain your new smile. We typically recommend wearing them full-time initially, then nightly long-term. This prevents your teeth from gradually shifting back to their original positions."
        },
        {
          id: "orth6",
          question: "Can Invisalign fix all orthodontic problems?",
          answer: "Invisalign can treat most common orthodontic issues including crowding, spacing, overbites, underbites, and crossbites. However, very complex cases may require traditional braces. We'll assess your specific needs during consultation."
        },
        {
          id: "orth7",
          question: "How often do I need to change my Invisalign aligners?",
          answer: "Most patients change to new aligners every 1-2 weeks as prescribed. Each set of aligners gradually moves your teeth closer to the desired position. We'll monitor your progress with regular check-ups every 6-8 weeks."
        },
        {
          id: "orth8",
          question: "Will orthodontic treatment affect my speech?",
          answer: "There may be a slight adjustment period with any orthodontic treatment. With Invisalign, most patients adapt within a few days. Traditional braces may cause temporary changes, but speech typically returns to normal within 1-2 weeks."
        },
        {
          id: "orth9",
          question: "Can I eat normally during Invisalign treatment?",
          answer: "Yes! One of Invisalign's biggest advantages is that you remove the aligners for eating and drinking. You can enjoy all your favorite foods without restrictions, unlike traditional braces which limit certain foods."
        }
      ]
    },
    veneers: {
      name: "Veneers",
      icon: Crown,
      color: "pear-gold",
      questions: [
        {
          id: "ven1",
          question: "What are dental veneers and how do they work?",
          answer: "Veneers are ultra-thin shells of porcelain or composite bonded to the front of your teeth. They're custom-made to match your desired shape, size, and color, instantly transforming your smile by covering imperfections like chips, stains, or gaps."
        },
        {
          id: "ven2",
          question: "How long do porcelain veneers last?",
          answer: "High-quality porcelain veneers typically last 10-15 years with proper care. They're stain-resistant and durable, but like natural teeth, they require good oral hygiene and regular dental check-ups to maintain their longevity."
        },
        {
          id: "ven3",
          question: "Do veneers damage your natural teeth?",
          answer: "Modern veneer techniques are minimally invasive. We remove only a thin layer of enamel (0.5mm) to accommodate the veneer. This is a conservative approach that preserves most of your natural tooth structure while dramatically improving appearance."
        },
        {
          id: "ven4",
          question: "What's the difference between porcelain and composite veneers?",
          answer: "Porcelain veneers are more durable, stain-resistant, and natural-looking but cost more and require multiple visits. Composite veneers can be completed in one visit, cost less, but may need replacement sooner and are more prone to staining."
        },
        {
          id: "ven5",
          question: "How much do veneers cost?",
          answer: "Porcelain veneers typically cost £450-£800 per tooth, while composite veneers range from £180-£350 per tooth. The exact cost depends on the number of veneers needed and complexity of your case. We offer payment plans to help manage costs."
        },
        {
          id: "ven6",
          question: "Can veneers fix all orthodontic problems?",
          answer: "Veneers can improve the appearance of mildly crooked or misaligned teeth by creating the illusion of straight teeth. For significant misalignment, we may recommend orthodontic treatment first for the best long-term results."
        },
        {
          id: "ven7",
          question: "What's the veneer treatment process like?",
          answer: "The process typically involves 2-3 visits: consultation and planning, tooth preparation and temporary veneers, then final placement. We use digital imaging to show you the expected results before beginning treatment."
        },
        {
          id: "ven8",
          question: "Are veneers reversible?",
          answer: "Because we remove a small amount of enamel during preparation, veneers are considered irreversible. However, they can be replaced if needed. This is why we take great care in planning and use temporary veneers to preview your new smile."
        },
        {
          id: "ven9",
          question: "How do I care for my veneers?",
          answer: "Care for veneers like natural teeth: brush twice daily, floss regularly, and attend routine check-ups. Avoid biting hard objects, excessive force, and teeth grinding. A night guard may be recommended if you grind your teeth."
        }
      ]
    },
    whitening: {
      name: "Teeth Whitening",
      icon: Sparkles,
      color: "pear-primary",
      questions: [
        {
          id: "whit1",
          question: "How effective is professional teeth whitening?",
          answer: "Professional whitening can lighten teeth by 6-8 shades in just one session. Our treatments are much more effective than over-the-counter products, using higher concentration gels safely applied under professional supervision for optimal results."
        },
        {
          id: "whit2",
          question: "Is teeth whitening safe?",
          answer: "Yes, professional teeth whitening is completely safe when performed by qualified dental professionals. We use clinically proven methods and protect your gums during treatment. Some temporary sensitivity is normal but subsides quickly."
        },
        {
          id: "whit3",
          question: "How long do whitening results last?",
          answer: "Professional whitening results typically last 1-3 years, depending on your diet and habits. Avoiding staining substances like coffee, red wine, and tobacco helps maintain results longer. Touch-up treatments can extend the effects."
        },
        {
          id: "whit4",
          question: "What causes teeth to become stained or yellow?",
          answer: "Teeth naturally yellow with age as enamel thins. Common staining causes include coffee, tea, red wine, tobacco, certain medications, and genetics. Some stains are surface-level while others penetrate deeper into the tooth structure."
        },
        {
          id: "whit5",
          question: "Can everyone have their teeth whitened?",
          answer: "Most people are suitable candidates for whitening. However, it's not recommended during pregnancy, for children under 16, or those with certain dental conditions. We'll assess your suitability during consultation and recommend alternatives if needed."
        },
        {
          id: "whit6",
          question: "What's the difference between in-practice and take-home whitening?",
          answer: "In-practice whitening provides immediate results in one hour using stronger gels and special lights. Take-home kits use custom trays with milder gels worn for several hours daily over 2-3 weeks. Both are effective with different timelines."
        },
        {
          id: "whit7",
          question: "Will whitening work on crowns, veneers, or fillings?",
          answer: "Whitening only affects natural tooth enamel, not artificial materials like crowns, veneers, or fillings. If you have visible restorations, we may recommend replacing them after whitening to match your new tooth color."
        },
        {
          id: "whit8",
          question: "How much does professional teeth whitening cost?",
          answer: "Our professional whitening treatments start from £400 for take-home kits and £650 for in-practice treatments. This includes consultation, custom trays (for take-home), and follow-up care. These prescription-only solutions are much more effective than over-the-counter or online alternatives."
        },
        {
          id: "whit9",
          question: "What should I expect during whitening treatment?",
          answer: "For in-practice treatment, we protect your gums, apply whitening gel, and may use a special light. The process takes about an hour. Some patients experience mild sensitivity during or after treatment, which is temporary and normal."
        }
      ]
    },
    cosmetic: {
      name: "Cosmetic Dentistry",
      icon: Heart,
      color: "soft-lavender",
      questions: [
        {
          id: "cos1",
          question: "What cosmetic dental treatments do you offer?",
          answer: "We offer comprehensive cosmetic treatments including teeth whitening, veneers, bonding, smile makeovers, Invisalign, crowns, and gum contouring. Each treatment is customized to enhance your unique smile and boost your confidence."
        },
        {
          id: "cos2",
          question: "How do I know which cosmetic treatment is right for me?",
          answer: "During your consultation, we'll discuss your goals, examine your teeth, and use digital imaging to show potential outcomes. We'll recommend the most suitable treatments based on your needs, budget, and desired timeline."
        },
        {
          id: "cos3",
          question: "Can you show me what my new smile will look like?",
          answer: "Yes! We use advanced digital smile design technology to preview your results before treatment begins. This allows you to see potential outcomes and make informed decisions about your cosmetic treatment options."
        },
        {
          id: "cos4",
          question: "How much does a complete smile makeover cost?",
          answer: "Smile makeover costs vary greatly depending on treatments needed, typically ranging from £2,500-£15,000. We'll provide a detailed treatment plan with costs during consultation and offer flexible payment options to make treatment affordable."
        },
        {
          id: "cos5",
          question: "Do cosmetic dental procedures hurt?",
          answer: "Most cosmetic procedures are minimally invasive and comfortable. We use local anesthesia when needed and prioritize your comfort throughout treatment. Many patients are pleasantly surprised by how comfortable cosmetic dentistry can be."
        },
        {
          id: "cos6",
          question: "How long does a smile makeover take?",
          answer: "Timeline depends on treatments involved. Simple procedures like whitening take one session, while comprehensive makeovers may take 4-8 weeks. We'll provide a detailed timeline during planning and coordinate treatments efficiently."
        },
        {
          id: "cos7",
          question: "Are cosmetic dental results permanent?",
          answer: "Many cosmetic treatments provide long-lasting results: veneers last 10-15 years, bonding 5-8 years, and whitening 1-3 years. Proper care and maintenance help maximize the lifespan of your cosmetic dental investment."
        },
        {
          id: "cos8",
          question: "Will my cosmetic dental work look natural?",
          answer: "Absolutely! We pride ourselves on creating natural-looking results that enhance your unique features. Our cosmetic treatments are designed to look like beautiful, healthy natural teeth - not obviously artificial."
        },
        {
          id: "cos9",
          question: "Can cosmetic dentistry improve my oral health too?",
          answer: "Yes! Many cosmetic treatments also provide health benefits. Straightening teeth improves cleaning ability, crowns protect damaged teeth, and replacing missing teeth maintains proper bite function and prevents bone loss."
        }
      ]
    },
    about: {
      name: "About Us",
      icon: Users,
      color: "pear-primary",
      questions: [
        {
          id: "about1",
          question: "What's the best dentist in Burton Joyce?",
          answer: "Pear Tree Dental Centre is Burton Joyce's highest-rated dental practice with a 4.9-star rating from over 400 patient reviews. We're CQC rated and offer both NHS and private care with flexible membership plans. Our experienced team has been serving the community for over 15 years with modern technology and personalized care."
        },
        {
          id: "about2",
          question: "How much does it cost to see a private dentist?",
          answer: "Our membership plans start at just £10.95 per month (36p per day) and include checkups, cleaning, and 10% off all treatments. This is often more affordable than NHS charges with no waiting lists. NHS checkups cost £25.80, while our Plan A includes checkups plus 10% off treatments and same-day emergency access."
        },
        {
          id: "about3",
          question: "How long has Pear Tree Dental been serving the community?",
          answer: "We've been proudly serving Burton Joyce and the surrounding Nottinghamshire communities for over 15 years, building lasting relationships with patients and families through quality dental care and personalized service."
        },
        {
          id: "about4",
          question: "What makes Pear Tree Dental different from other practices?",
          answer: "We combine modern technology with a personal touch, offering both NHS and private care options. Our membership plans provide affordable access to premium dentistry, and we focus on preventive care to keep you healthy long-term."
        },
        {
          id: "about5",
          question: "Are your dentists qualified and registered?",
          answer: "All our dentists are fully qualified, GDC (General Dental Council) registered, and regularly undertake continuing professional development. We maintain the highest standards of clinical excellence and patient safety."
        },
        {
          id: "about6",
          question: "What areas do you serve?",
          answer: "We're based in Burton Joyce and serve patients from Nottingham, Colwick, Carlton, Gedling, Southwell, Lowdham, and surrounding areas. We welcome patients from across Nottinghamshire seeking quality dental care."
        },
        {
          id: "about7",
          question: "Do you offer payment plans or financing options?",
          answer: "Yes, we offer various payment options including membership plans, payment plans for larger treatments, and financing options. Our goal is to make quality dental care accessible and affordable for everyone."
        },
        {
          id: "about8",
          question: "What safety measures do you have in place?",
          answer: "We follow strict infection control protocols, use modern sterilization equipment, and maintain the highest hygiene standards. Our practice is regularly inspected and meets all CQC (Care Quality Commission) requirements."
        },
        {
          id: "about9",
          question: "How do I register as a new patient?",
          answer: "Simply call us at 0115 931 2935 or book online. We'll arrange a consultation to discuss your needs and medical history. New patient appointments include a comprehensive examination and treatment planning discussion."
        },
        {
          id: "about10",
          question: "Do you treat nervous or anxious patients?",
          answer: "Absolutely! We specialise in caring for nervous patients with gentle techniques, clear communication, and sedation options when appropriate. Many anxious patients become comfortable and confident with our caring approach."
        },
        {
          id: "about11",
          question: "How can I contact the practice?",
          answer: "You can call us at 0115 931 2935, email info@peartree.dental, or visit us at 22 Nottingham Road, Burton Joyce, Nottingham NG14 5AL. We also offer online booking for your convenience."
        }
      ]
    }
  };

  const currentCategory = faqCategories[activeTab as keyof typeof faqCategories];
  const CategoryIcon = currentCategory.icon;

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      {/* Add FAQ Structured Data for current category */}
      <FAQStructuredData
        faqs={currentCategory.questions.map(q => ({
          question: q.question,
          answer: q.answer
        }))}
        category={currentCategory.name}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4 bg-pear-background text-pear-primary text-xs sm:text-sm">
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pear-primary mb-4 sm:mb-6">
            Your Questions Answered
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our dental services, treatments, and practice.
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Container */}
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-xl border border-pear-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-4">

            {/* Category Tabs Sidebar */}
            <div className="lg:col-span-1 bg-gradient-to-b from-pear-primary to-pear-primary/90 p-4 sm:p-6">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Choose Category</h3>

              <div className="space-y-2">
                {Object.entries(faqCategories).map(([key, category]) => {
                  const TabIcon = category.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveTab(key);
                        setOpenQuestion(null); // Close any open questions when switching tabs
                      }}
                      className={`w-full text-left p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                        activeTab === key
                          ? 'bg-white text-pear-primary shadow-lg'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <TabIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="font-medium text-xs sm:text-sm">{category.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                <h4 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Still have questions?</h4>
                <div className="text-xs sm:text-sm text-white/90 space-y-1 sm:space-y-2">
                  <p>Call us: <span className="font-semibold">0115 931 2935</span></p>
                  <p>Email: <span className="font-semibold">info@peartree.dental</span></p>
                </div>
              </div>
            </div>

            {/* Questions Content */}
            <div className="lg:col-span-3 p-4 sm:p-6 lg:p-8">
              <div className="space-y-4 sm:space-y-6">

                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg ${
                    currentCategory.color === 'dental-green' ? 'bg-dental-green' :
                    currentCategory.color === 'soft-pink' ? 'bg-soft-pink' :
                    currentCategory.color === 'pear-gold' ? 'bg-pear-gold' :
                    currentCategory.color === 'pear-primary' ? 'bg-pear-primary' :
                    currentCategory.color === 'soft-lavender' ? 'bg-soft-lavender' :
                    'bg-pear-primary'
                  }`}>
                    <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-pear-primary">{currentCategory.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{currentCategory.questions.length} frequently asked questions</p>
                  </div>
                </div>

                {/* Questions List */}
                <div className="space-y-4">
                  {currentCategory.questions.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:border-pear-primary/30 transition-colors"
                    >
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full p-3 sm:p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-pear-primary pr-3 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
                        {openQuestion === faq.id ? (
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-pear-gold flex-shrink-0" />
                        ) : (
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-pear-gold flex-shrink-0" />
                        )}
                      </button>

                      {openQuestion === faq.id && (
                        <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                          <div className="text-gray-700 leading-relaxed pl-0 text-sm sm:text-base">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA Buttons Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-pear-primary mb-3 sm:mb-4">
              Ready to Start Your Dental Journey?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Book your appointment today or discover our membership plans for ongoing care and savings.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/services/general">
                <Button size="lg" className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold group w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base">
                  <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Book Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/membership">
                <Button size="lg" className="btn-gold text-white font-semibold group w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Join Membership Plan
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
