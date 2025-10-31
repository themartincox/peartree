"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useConversionTracking } from "@/hooks/useConversionTracking";

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  position?: "bottom-right" | "bottom-left";
  className?: string;
}

export default function WhatsAppWidget({
  phoneNumber = "447494111881", // WhatsApp number (E.164 without +)
  position = "bottom-right",
  className = ""
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { trackConversion, trackPhoneClick } = useConversionTracking();

  useEffect(() => {
    // Get current page path for context-aware messaging
    setCurrentPage(window.location.pathname);

    // Show widget after page loads (5s delay)
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const getContextualMessage = () => {
    const baseMessage = "Hello! I'm interested in dental services at Pear Tree Dental.";

    if (currentPage.includes("/services/emergency") || currentPage.includes("/urgent")) {
      return `🚨 URGENT: I need emergency dental care at Pear Tree Dental. Can you help me?`;
    }

    if (currentPage.includes("/services/implants")) {
      return `${baseMessage} I'd like to know more about dental implants and pricing.`;
    }

    if (currentPage.includes("/services/cosmetic")) {
      return `${baseMessage} I'm interested in cosmetic dentistry options like veneers or teeth whitening.`;
    }

    if (currentPage.includes("/services/orthodontics") || currentPage.includes("/invisalign")) {
      return `${baseMessage} I'd like information about teeth straightening with Invisalign or clear aligners.`;
    }

    if (currentPage.includes("/services/")) {
      const service = currentPage.split("/services/")[1]?.replace(/\//g, " ").replace(/-/g, " ");
      return `${baseMessage} I'd like to know more about ${service}.`;
    }

    if (currentPage.includes("/membership")) {
      return `${baseMessage} I'd like to learn about your dental membership plans starting from £10.95/month.`;
    }

    if (currentPage.includes("/testimonials")) {
      return `${baseMessage} I saw your excellent patient reviews and would like to book a consultation.`;
    }

    if (currentPage.includes("/new-patients")) {
      return `${baseMessage} I'm a new patient and would like to register and book my first appointment.`;
    }

    if (currentPage.includes("/contact") || currentPage.includes("/booking")) {
      return `${baseMessage} I'd like to book an appointment at your Burton Joyce practice.`;
    }

    if (currentPage.includes("/pricing")) {
      return `${baseMessage} I'd like to discuss treatment costs and payment options.`;
    }

    return baseMessage;
  };

  const openWhatsApp = (message: string, promptType: "quick" | "custom" = "quick", promptTitle?: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Track conversation start by prompt type
    try {
      trackConversion('whatsapp_chat_start', {
        prompt_type: promptType,
        quick_title: promptTitle || null,
        page_path: currentPage,
      });
    } catch (e) {
      // non-blocking
    }
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const quickMessages = [
    {
      icon: Calendar,
      title: "Book Appointment",
      message: "Hi! I'd like to book a dental appointment at Pear Tree Dental. When's your next available slot?"
    },
    {
      icon: Phone,
      title: "Emergency Care",
      message: "🚨 EMERGENCY: I need urgent dental care. I'm experiencing severe dental pain and need immediate assistance."
    },
    {
      icon: MapPin,
      title: "New Patient",
      message: "Hello! I'm a new patient interested in registering with Pear Tree Dental. Can you help me get started?"
    },
    {
      icon: Clock,
      title: "Membership Plans",
      message: "Hi! I'd like to learn about your dental membership plans starting from £10.95/month and what's included."
    }
  ];

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6"
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${className}`}>
      {/* Chat Widget */}
      {isOpen && (
        <Card className="mb-4 w-80 shadow-2xl border-2 border-green-200 animate-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Pear Tree Dental</CardTitle>
                  <p className="text-sm text-green-100">Usually replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-green-100 hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-4 space-y-3">
            <div className="text-sm text-gray-600 mb-4">
              👋 Hi! How can we help you today? Choose a quick option or send a custom message:
            </div>

            {/* Quick Message Options */}
            <div className="space-y-2">
              {quickMessages.map((msg, index) => {
                const Icon = msg.icon;
                return (
                  <button
                    key={index}
                    onClick={() => openWhatsApp(msg.message, "quick", msg.title)}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <Icon className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-gray-900">{msg.title}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Message Button */}
            <Button
              onClick={() => openWhatsApp(getContextualMessage(), "custom")}
              className="w-full bg-green-500 hover:bg-green-600 text-white mt-4"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Send Custom Message
            </Button>

            {/* Practice Info */}
            <div className="text-xs text-gray-500 text-center mt-3 pt-3 border-t">
              📍 Burton Joyce, Nottinghamshire<br />
              📞 <a
                href="tel:+441159312935"
                className="text-green-600 hover:underline"
                onClick={() => trackPhoneClick('whatsapp_widget_footer', '+441159312935')}
              >
                0115 931 2935
              </a><br />
              🕒 Mon-Fri: 8AM-6PM, Sat/Sun: Closed
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating WhatsApp Button */}
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl border-4 border-white transition-all duration-300 hover:scale-110"
          size="lg"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>

        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">!</span>
          </div>
        )}

        {/* WhatsApp Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity">
            <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
              Chat with us on WhatsApp
              <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}
      </div>


    </div>
  );
}
