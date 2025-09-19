"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback, Suspense, lazy } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CalendarDays, Phone, Star, Sparkles, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

// Lazy load non-critical navigation components
const LazyNavigationItems = lazy(() =>
  import("@/components/navigation/LazyNavigationItems").then((m) => m)
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldLoadSecondaryNav, setShouldLoadSecondaryNav] = useState(false);
  const [isSwipeIndicatorVisible, setIsSwipeIndicatorVisible] = useState(false);

  // Home-only flags
  const [pastTrigger, setPastTrigger] = useState(false);
  const [inJourney, setInJourney] = useState(false);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [journeyEnding, setJourneyEnding] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Touch gesture handling for swipe-to-close
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsSwipeIndicatorVisible(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartX.current;
    const deltaY = Math.abs(currentY - touchStartY.current);

    if (deltaX > 50 && deltaY < 50) {
      setIsSwipeIndicatorVisible(true);
    } else if (deltaX < -20) {
      setIsSwipeIndicatorVisible(false);
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) {
      setIsSwipeIndicatorVisible(false);
      return;
    }
    const currentX = e.changedTouches[0].clientX;
    const currentY = e.changedTouches[0].clientY;
    const deltaX = currentX - touchStartX.current;
    const deltaY = Math.abs(currentY - touchStartY.current);

    if (deltaX > 100 && deltaY < 80) {
      setIsMobileMenuOpen(false);
      setIsSwipeIndicatorVisible(false);
      const escapeEvent = new KeyboardEvent("keydown", { key: "Escape", keyCode: 27, bubbles: true });
      document.dispatchEvent(escapeEvent);
    }
    touchStartX.current = null;
    touchStartY.current = null;
    setIsSwipeIndicatorVisible(false);
  }, []);

  // Close mobile menu when a link is clicked (with tiny exit animation)
  const closeMobileMenu = useCallback(() => {
    const content = document.querySelector(".mobile-nav-content");
    if (content) content.classList.add("exiting");
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsSwipeIndicatorVisible(false);
      const escapeEvent = new KeyboardEvent("keydown", { key: "Escape", keyCode: 27, bubbles: true });
      document.dispatchEvent(escapeEvent);
    }, 150);
  }, []);

  // Load secondary nav content when mobile menu opens
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    setShouldLoadSecondaryNav(true);
    setIsSwipeIndicatorVisible(true);
    const t = setTimeout(() => setIsSwipeIndicatorVisible(false), 3000);
    return () => clearTimeout(t);
  }, [isMobileMenuOpen]);

  // Generic scroll flag (non-home pages use this for secondary)
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      
      // For mobile home page, track if we're past 100px for secondary nav content
      if (isHomePage && window.innerWidth < 768) {
        setPastTrigger(scrollY > 100);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  // Sentinel to know when we're past the hero/trigger (desktop home only)
  useEffect(() => {
    if (!isHomePage || window.innerWidth < 768) return;

    const el = document.getElementById("reviews-sticky-trigger");
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // past trigger when it leaves the top
        setPastTrigger(!e.isIntersecting && e.boundingClientRect.top <= 0);
      },
      { root: null, threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isHomePage]);

  // Journey enter/exit events coming from the TreatmentJourney component
  useEffect(() => {
    const onEnter = () => setInJourney(true);
    const onExit = () => setInJourney(false);
    const onStarting = () => setJourneyStarted(true);
    const onEnding = () => {
      setJourneyEnding(true);
      // Reset journey started flag after a delay
      setTimeout(() => {
        setJourneyStarted(false);
        setJourneyEnding(false);
      }, 500);
    };
    
    window.addEventListener("journey:enter", onEnter);
    window.addEventListener("journey:exit", onExit);
    window.addEventListener("journey:starting", onStarting);
    window.addEventListener("journey:ending", onEnding);
    
    return () => {
      window.removeEventListener("journey:enter", onEnter);
      window.removeEventListener("journey:exit", onExit);
      window.removeEventListener("journey:starting", onStarting);
      window.removeEventListener("journey:ending", onEnding);
    };
  }, []);

  // Visibility logic
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Primary nav: hide on mobile when journey starts
  const primaryVisible = isHomePage 
    ? (isMobile ? !journeyStarted && !isScrolled : !isScrolled)
    : !isScrolled;

  // Secondary nav visibility
  const secondaryVisible = isHomePage 
    ? (isMobile 
      ? (pastTrigger && !inJourney) || journeyEnding 
      : pastTrigger && !inJourney)
    : isScrolled;

  // Only show secondary content after it appears
  const showSecondaryContent = secondaryVisible;

  const services = [
    { title: "General Dentistry", href: "/services/general", description: "Comprehensive dental care for your everyday needs", theme: "medical" },
    { title: "Restorative Dentistry", href: "/services/restorative", description: "Repair and restore your teeth to optimal health", theme: "medical" },
    { title: "Cosmetic Dentistry", href: "/services/cosmetic", description: "Transform your smile with aesthetic treatments", theme: "cosmetic" },
    { title: "Implant Dentistry", href: "/services/implants", description: "Permanent tooth replacement solutions", theme: "cosmetic" },
    { title: "Orthodontics", href: "/services/orthodontics", description: "Invisalign and ClearCorrect aligners", theme: "cosmetic" },
    { title: "Emergency Dentistry", href: "/services/emergency", description: "Urgent dental care when you need it most", theme: "emergency", isEmergency: true },
  ];

  const about = [
    { title: "Our Team", href: "/about/team", description: "Meet our experienced dental professionals" },
    { title: "Our Practice", href: "/about/practice", description: "State-of-the-art facilities in Burton Joyce" },
    { title: "Patient Reviews", href: "/testimonials", description: "Real testimonials from our satisfied patients" },
    { title: "Smile Gallery", href: "/smile-gallery", description: "Before & after smile transformations" },
    { title: "Dental Education", href: "/patient-education", description: "Helpful guides and oral health resources" },
    { title: "Pricing", href: "/pricing", description: "Transparent dental treatment pricing" },
  ];

  return (
    <>
      {/* Main Navigation - Full menu when not scrolled */}
      <header
        data-role="primary-header"
        id="navigation"
        role="banner"
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out pt-[3px] sm:pt-0",
          primaryVisible
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0 pointer