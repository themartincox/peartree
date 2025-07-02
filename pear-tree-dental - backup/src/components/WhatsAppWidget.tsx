"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the widget
    const dismissed = localStorage.getItem('whatsapp-widget-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show widget after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about your industry-specific websites and revenue-sharing partnerships. Can we chat?"
    );
    const whatsappUrl = `https://wa.me/447432039801?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('whatsapp-widget-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Expanded chat bubble */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-xs animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-midnight-blue text-sm">
                  Postino Team
                </h4>
                <p className="text-xs text-gray-500">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-700 font-body">
              👋 Hi there! Ready to transform your business with a revenue-focused website?
              Let's chat about your industry-specific needs!
            </p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-heading font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Start WhatsApp Chat</span>
          </button>

          <button
            onClick={handleDismiss}
            className="w-full text-xs text-gray-500 hover:text-gray-700 mt-2 transition-colors"
          >
            Don't show this again
          </button>
        </div>
      )}

      {/* Main WhatsApp button */}
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

        {/* Main button */}
        <button
          onClick={isExpanded ? handleWhatsAppClick : () => setIsExpanded(true)}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="h-6 w-6" />

          {/* Tooltip */}
          {!isExpanded && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-midnight-blue text-white text-sm font-heading rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Let's chat!
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-midnight-blue"></div>
            </div>
          )}
        </button>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
      </div>
    </div>
  );
}
