"use client";

import { Maximize2, MessageCircle, Minimize2, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

 Avatar component not used to avoid import issues

interface Message {
  id: string;
  sender: "user" | "agent";
  message: string;
  timestamp: Date;
  type?: "text" | "system" | "quick-reply";
}

interface LiveChatWidgetProps {
  position?: "bottom-left" | "bottom-right";
  className?: string;
}

export default function LiveChatWidget({
  position = "bottom-left",
  className = "",
}: LiveChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [chatStage, setChatStage] = useState<"welcome" | "info" | "chat">(
    "welcome",
  );
  const [currentPage, setCurrentPage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPage(window.location.pathname);

     Show widget after page loads
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (
    message: string,
    sender: "user" | "agent",
    type: "text" | "system" | "quick-reply" = "text",
  ) => {
    const newMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      sender,
      message,
      timestamp: new Date(),
      type,
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const handleWelcomeStart = () => {
    setChatStage("info");
    addMessage(
      "Welcome to Pear Tree Dental! I'm here to help you. To get started, could you please share your details?",
      "agent",
      "system",
    );
  };

  const handleInfoSubmit = () => {
    if (userInfo.name && userInfo.email) {
      setChatStage("chat");
      addMessage(
        `Thank you ${userInfo.name}! I'm Jav, your virtual dental assistant. How can I help you today?`,
        "agent",
        "system",
      );

       Add context-aware quick replies based on current page
      setTimeout(() => {
        const quickReplies = getContextualQuickReplies();
        quickReplies.forEach((reply, index) => {
          setTimeout(() => {
            addMessage(reply, "agent", "quick-reply");
          }, index * 500);
        });
      }, 1000);
    }
  };

  const getContextualQuickReplies = () => {
    if (
      currentPage.includes("/services/emergency") ||
      currentPage.includes("/urgent")
    ) {
      return [
        "I need emergency dental care",
        "I have severe tooth pain",
        "I broke a tooth",
      ];
    }

    if (currentPage.includes("/services/cosmetic")) {
      return [
        "Tell me about teeth whitening",
        "I want information about veneers",
        "What cosmetic treatments do you offer?",
      ];
    }

    if (currentPage.includes("/services/implants")) {
      return [
        "How much do dental implants cost?",
        "Am I suitable for implants?",
        "What's the implant process?",
      ];
    }

    if (currentPage.includes("/membership")) {
      return [
        "Tell me about membership plans",
        "What's included in the £10.95 plan?",
        "How do I sign up for membership?",
      ];
    }

    return [
      "I'd like to book an appointment",
      "I'm a new patient",
      "What are your opening hours?",
      "Do you accept NHS patients?",
    ];
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      addMessage(newMessage, "user");
      setNewMessage("");

       Simulate agent typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        handleAgentResponse(newMessage);
      }, 1500);
    }
  };

  const handleQuickReply = (reply: string) => {
    addMessage(reply, "user");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      handleAgentResponse(reply);
    }, 1500);
  };

  const handleAgentResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes("emergency") ||
      lowerMessage.includes("pain") ||
      lowerMessage.includes("urgent")
    ) {
      addMessage(
        "I understand you need urgent care. Please call our emergency line immediately at 0115 931 2935. If it's outside hours, we have an emergency dentist on call. Would you like me to help you with anything else while you're here?",
        "agent",
      );
    } else if (
      lowerMessage.includes("appointment") ||
      lowerMessage.includes("book")
    ) {
      addMessage(
        "I'd be happy to help you book an appointment! We have availability this week. You can call us at 0115 931 2935 or would you prefer to share your preferred day/time and I'll check our availability?",
        "agent",
      );
    } else if (
      lowerMessage.includes("cost") ||
      lowerMessage.includes("price") ||
      lowerMessage.includes("how much")
    ) {
      addMessage(
        "Our treatment costs vary depending on your specific needs. We offer free consultations to assess your requirements and provide accurate pricing. We also have membership plans starting from £10.95/month. Would you like to book a consultation?",
        "agent",
      );
    } else if (
      lowerMessage.includes("membership") ||
      lowerMessage.includes("plan")
    ) {
      addMessage(
        "Our membership plans are great value! Starting from £10.95/month, they include check-ups, hygienist visits, and discounts on treatments. Would you like me to explain the different plan options?",
        "agent",
      );
    } else if (
      lowerMessage.includes("hours") ||
      lowerMessage.includes("open")
    ) {
      addMessage(
        "We're open Monday to Friday 8:00AM-6:00PM, and Saturday 8:00AM-2:00PM. We're closed Sundays. We also offer emergency appointments outside these hours. Would you like to book an appointment?",
        "agent",
      );
    } else if (lowerMessage.includes("new patient")) {
      addMessage(
        "Welcome! As a new patient, you'll receive a comprehensive examination including X-rays and treatment planning. Your first appointment is typically 45 minutes. We accept both NHS and private patients. Would you like to register with us?",
        "agent",
      );
    } else {
      addMessage(
        "Thank you for your question! I'd love to help you with that. For detailed information about your specific needs, I'd recommend speaking with one of our dental professionals. Would you like me to arrange a call back or book you a consultation?",
        "agent",
      );
    }
  };

  const positionClasses = {
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-96",  Positioned to avoid WhatsApp widget
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-40 ${className}`}>
      {/* Chat Window */}
      {isOpen && (
        <Card
          className={`mb-4 shadow-2xl border-2 border-blue-200 transition-all duration-300 ${
            isMinimized ? "w-80 h-16" : "w-80 h-96"
          }`}
        >
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                  JV
                </div>
                <div>
                  <CardTitle className="text-sm">
                    Jav - Dental Assistant
                  </CardTitle>
                  <p className="text-xs text-blue-100">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white h-6 w-6 p-0"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-3 h-3" />
                  ) : (
                    <Minimize2 className="w-3 h-3" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white h-6 w-6 p-0"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="p-0 flex flex-col h-80">
              {chatStage === "welcome" && (
                <div className="flex-1 p-4 flex flex-col justify-center text-center space-y-4">
                  <div className="text-2xl">👋</div>
                  <h3 className="font-semibold text-gray-900">
                    Welcome to Pear Tree Dental!
                  </h3>
                  <p className="text-sm text-gray-600">
                    Our virtual dental assistant is here to help you 24/7. Get
                    instant answers about treatments, bookings, and emergency
                    care.
                  </p>
                  <Button
                    onClick={handleWelcomeStart}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Start Chat
                  </Button>
                </div>
              )}

              {chatStage === "info" && (
                <div className="flex-1 p-4 space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-gray-900">
                      Let's get started!
                    </h3>
                    <p className="text-xs text-gray-600">
                      Please share your details for a personalized experience
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Input
                      placeholder="Your name"
                      value={userInfo.name}
                      onChange={(e) =>
                        setUserInfo((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={userInfo.email}
                      onChange={(e) =>
                        setUserInfo((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number (optional)"
                      value={userInfo.phone}
                      onChange={(e) =>
                        setUserInfo((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                    <Button
                      onClick={handleInfoSubmit}
                      disabled={!userInfo.name || !userInfo.email}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Continue to Chat
                    </Button>
                  </div>
                </div>
              )}

              {chatStage === "chat" && (
                <>
                  {/* Messages Area */}
                  <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.type === "quick-reply" ? (
                          <button
                            onClick={() => handleQuickReply(message.message)}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs px-3 py-2 rounded-full border border-blue-300 transition-colors"
                          >
                            {message.message}
                          </button>
                        ) : (
                          <div
                            className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                              message.sender === "user"
                                ? "bg-blue-600 text-white rounded-br-none"
                                : message.type === "system"
                                  ? "bg-gray-200 text-gray-800 border"
                                  : "bg-white text-gray-800 border rounded-bl-none"
                            }`}
                          >
                            {message.message}
                          </div>
                        )}
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white text-gray-800 border px-3 py-2 rounded-lg rounded-bl-none">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="p-3 border-t bg-white">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleSendMessage()
                        }
                        className="flex-1"
                      />
                      <Button
                        onClick={handleSendMessage}
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          )}
        </Card>
      )}

      {/* Floating Chat Button */}
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl border-4 border-white transition-all duration-300 hover:scale-110"
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
            <span className="text-xs font-bold text-white">💬</span>
          </div>
        )}

        {/* Live Chat Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full left-0 mb-2 opacity-0 hover:opacity-100 transition-opacity">
            <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
              Live Chat Support
              <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
