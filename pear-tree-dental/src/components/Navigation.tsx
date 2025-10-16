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

// Lazy load non-critical navigation components (mobile sheet content)
const LazyNavigationItems = lazy(() =>
  import("@/components/navigation/LazyNavigationItems").then((m) => m)
);

const SCROLL_THRESHOLD = 100; // px

const Navigation = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // State
  const [isScrolled, setIsScrolled] = useState(false);     // >100px
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldLoadSecondaryNav, setShouldLoadSecondaryNav] = useState(false);
  const [isSwipeIndicatorVisible, setIsSwipeIndicatorVisible] = useState(false);
  const [inJourney, setInJourney] = useState(false);       // journey active?

  // Touch (mobile sheet)
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
    if (deltaX > 50 && deltaY < 50) setIsSwipeIndicatorVisible(true);
    else if (deltaX < -20) setIsSwipeIndicatorVisible(false);
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) {
      setIsSwipeIndicatorVisible(false);
      return;
    }
    const currentX = e.changedTouches[0].clientX;
    const currentY = e.changedTouches[0].clientY;
    const deltaX = currentX - (touchStartX.current ?? 0);
    const deltaY = Math.abs(currentY - (touchStartY.current ?? 0));
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

  // Close menu on link click
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

  // Scroll flag (>100px)
  useEffect(() => {
    let last = false;
    let ticking = false;
    const measure = () => {
      ticking = false;
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      if (scrolled !== last) {
        last = scrolled;
        setIsScrolled(scrolled);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial measure
    measure();
    return () => window.removeEventListener("scroll", onScroll as any);
  }, []);

  // Respond to reviews widget sticky state to coordinate nav (mobile only)
  useEffect(() => {
    const onSticky = (event: Event) => {
      if (typeof window === "undefined" || window.innerWidth >= 1024) return;
      const detail = (event as CustomEvent).detail ?? {};
      if (detail.position === "top") {
        setInJourney(true);
      } else {
        setInJourney(false);
      }
    };
    const onUnsticky = () => {
      if (typeof window === "undefined" || window.innerWidth >= 1024) return;
      setInJourney(false);
    };

    window.addEventListener("reviews:sticky", onSticky as EventListener);
    window.addEventListener("reviews:unsticky", onUnsticky);
    return () => {
      window.removeEventListener("reviews:sticky", onSticky as EventListener);
      window.removeEventListener("reviews:unsticky", onUnsticky);
    };
  }, []);

  // Load extra nav in mobile sheet
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    setShouldLoadSecondaryNav(true);
    setIsSwipeIndicatorVisible(true);
    const t = setTimeout(() => setIsSwipeIndicatorVisible(false), 3000);
    return () => clearTimeout(t);
  }, [isMobileMenuOpen]);

  // Visibility rules (same on home & non-home now)
  const primaryVisible = !isScrolled;                // hide after 100px
  const secondaryVisible = isScrolled && !inJourney; // show after 100px, but hide while Journey active

  // Menu data
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
      {/* Primary / main navigation */}
      <header
        data-role="primary-header"
        id="navigation"
        role="banner"
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out pt-[3px] sm:pt-0",
          primaryVisible
            ? isHomePage
              ? "transform translate-y-0 opacity-100 bg-transparent"
              : "transform translate-y-0 opacity-100 bg-white shadow-lg"
            : "transform -translate-y-full opacity-0 pointer-events-none"
        )}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-white focus:rounded-md"
              aria-label="Pear Tree Dental - Return to homepage"
            >
              <div className="hidden sm:block w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14">
                <Image
                  src="/images/dental-motif-logo.png"
                  alt="Pear Tree Dental Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(20%) sepia(54%) saturate(1200%) hue-rotate(165deg) brightness(90%) contrast(95%)",
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div
                  className="brand-logo text-pear-primary xl:text-left lg:text-center whitespace-nowrap"
                  style={{ fontSize: 25, lineHeight: "1.125" }}
                >
                  <span>PEAR TREE</span>
                  <span className="ml-2">DENTAL</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex" role="navigation" aria-label="Main site navigation">
              <NavigationMenuList className="items-center space-x-3">
                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    aria-label="Services menu"
                    className="inline-flex h-10 items-center rounded-md bg-pear-primary px-3 text-sm font-medium text-white shadow hover:text-pear-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-pear-primary/40"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent role="menu" aria-label="Dental services">
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-3" role="none">
                      {[services[2], services[0], services[1]].map((service) => (
                        <li key={service.title} role="none">
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              role="menuitem"
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:ring-2 focus:ring-pear-gold",
                                service.theme === "medical" ? "border-l-4 border-pear-primary" : "border-l-4 border-soft-pink"
                              )}
                              aria-describedby={`service-desc-${service.title.replace(/\s+/g, "-").toLowerCase()}`}
                            >
                              <div className="text-sm font-medium leading-none text-pear-primary">{service.title}</div>
                              <p
                                id={`service-desc-${service.title.replace(/\s+/g, "-").toLowerCase()}`}
                                className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                              >
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      {[services[3], services[4], services[5]].map((service) => (
                        <li key={service.title} role="none">
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              role="menuitem"
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:ring-2 focus:ring-pear-gold",
                                service.theme === "emergency" || service.isEmergency
                                  ? "border-l-4 border-red-600"
                                  : service.theme === "medical"
                                  ? "border-l-4 border-dental-green"
                                  : "border-l-4 border-soft-pink"
                              )}
                              aria-describedby={`service-desc-${service.title.replace(/\s+/g, "-").toLowerCase()}`}
                            >
                              <div className="text-sm font-medium leading-none text-pear-primary">{service.title}</div>
                              <p
                                id={`service-desc-${service.title.replace(/\s+/g, "-").toLowerCase()}`}
                                className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                              >
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Membership */}
                <NavigationMenuItem>
                  <Link
                    href="/membership"
                    className="inline-flex h-10 items-center rounded-md bg-pear-gold px-3 text-sm font-semibold text-white shadow hover:bg-white hover:text-pear-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-pear-gold/40 transition-colors"
                  >
                    Membership Plan
                  </Link>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="inline-flex h-10 items-center rounded-md bg-pear-primary px-3 text-sm font-medium text-white shadow hover:text-pear-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-pear-primary/40">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-80 gap-3 p-4">
                      {about.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none text-pear-primary">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* New Patients */}
                <NavigationMenuItem>
                  <Link
                    href="/new-patients"
                    className="inline-flex h-10 items-center rounded-md bg-pear-primary px-3 text-sm font-medium text-white shadow hover:text-pear-gold"
                  >
                    New Patients
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center rounded-md bg-pear-primary px-3 text-sm font-medium text-white shadow hover:text-pear-gold"
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>

                {/* Dental Pain */}
                <NavigationMenuItem>
                  <Link href="/services/emergency">
                    <Button className="ml-2 h-10 rounded-full bg-red-600 px-4 text-sm font-semibold text-white hover:bg-red-700">
                      Dental Pain?
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-pear-primary focus:outline-none focus:ring-2 focus:ring-pear-primary focus:rounded-md hover:bg-pear-primary/10"
                    aria-label="Open mobile navigation menu"
                    aria-expanded={isMobileMenuOpen}
                  >
                    <Menu className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-80 sm:w-96 overflow-y-auto bg-white border-l-0 shadow-2xl flex flex-col"
                  role="dialog"
                  aria-label="Mobile navigation menu"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Swipe Indicator */}
                  <div className={cn("swipe-indicator", isSwipeIndicatorVisible && "active")}>
                    <div className="flex items-center text-pear-primary/60 text-sm">
                      <span className="mr-1">→</span>
                      <span>Swipe</span>
                    </div>
                  </div>

                  <div
                    className="flex flex-col h-full mobile-nav-content overflow-y-auto pb-8"
                    role="navigation"
                    aria-label="Mobile site navigation"
                  >
                    {/* Mobile Logo */}
                    <Link
                      href="/"
                      className="flex items-center focus:outline-none focus:ring-2 focus:ring-pear-gold focus:rounded-md mb-6"
                      aria-label="Pear Tree Dental - Return to homepage"
                      onClick={closeMobileMenu}
                    >
                      <div className="w-8 h-8 mr-3">
                        <Image
                          src="/images/dental-motif-logo.png"
                          alt="Pear Tree Dental Logo"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="brand-logo text-lg text-pear-primary leading-tight font-garamond">
                          PEAR TREE DENTAL
                        </div>
                      </div>
                    </Link>

                    {/* Mobile CTAs */}
                    <div className="flex flex-col space-y-3">
                      <Link href="/services/emergency" onClick={closeMobileMenu} className="nav-item-enter">
                        <Button className="bg-red-600 hover:bg-red-700 text-white w-full h-10 text-sm font-bold rounded-full px-4 py-1 nav-button">
                          🚨 Dental Pain? Call Now
                        </Button>
                      </Link>
                      <Link href="/book" onClick={closeMobileMenu} className="nav-item-enter">
                        <Button className="bg-gradient-to-r from-dental-green to-soft-blue text-white w-full h-10 text-sm px-4 py-1 nav-button">
                          <CalendarDays className="w-4 h-4 mr-2" />
                          Book Appointment
                        </Button>
                      </Link>
                      <Link href="/smile-design" onClick={closeMobileMenu} className="nav-item-enter">
                        <Button className="pink-haze text-white w-full h-10 font-semibold text-sm px-4 py-1 nav-button">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Smile Design Service
                        </Button>
                      </Link>
                      <Link href="/membership" onClick={closeMobileMenu} className="nav-item-enter">
                        <Button className="btn-gold text-white w-full h-10 font-semibold text-sm px-4 py-1 nav-button">
                          <Star className="w-4 h-4 mr-2" />
                          Join Membership
                        </Button>
                      </Link>
                      <a href="tel:01159312935" onClick={closeMobileMenu} className="nav-item-enter">
                        <Button variant="outline" className="text-pear-primary border-pear-primary w-full h-10 text-sm px-4 py-1 nav-button">
                          <Phone className="w-4 h-4 mr-2" />
                          0115 931 2935
                        </Button>
                      </a>
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className="flex flex-col space-y-3 overflow-y-auto flex-grow mt-4">
                      <div className="space-y-2">
                        <div className="text-pear-primary font-semibold">Services</div>
                        <div className="ml-4 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              className="block text-sm text-muted-foreground hover:text-pear-gold transition-colors py-1"
                              onClick={closeMobileMenu}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/membership"
                        className="text-pear-gold hover:bg-pear-gold hover:text-white transition-all px-2 py-1 rounded font-semibold text-sm"
                        onClick={closeMobileMenu}
                      >
                        Membership Plan
                      </Link>

                      <div className="space-y-2">
                        <div className="text-pear-primary font-semibold">About</div>
                        <div className="ml-4 space-y-1">
                          {about.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-sm text-muted-foreground hover:text-pear-gold transition-colors py-1"
                              onClick={closeMobileMenu}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 mt-2">
                        <Link
                          href="/new-patients"
                          className="block text-pear-primary hover:text-pear-gold transition-colors font-medium text-sm py-1"
                          onClick={closeMobileMenu}
                        >
                          New Patients
                        </Link>
                        <Link
                          href="/contact"
                          className="block text-pear-primary hover:text-pear-gold transition-colors font-medium text-sm py-1"
                          onClick={closeMobileMenu}
                        >
                          Contact
                        </Link>
                      </div>
                    </nav>

                    {/* Optional extra links/cards */}
                    {shouldLoadSecondaryNav && (
                      <Suspense
                        fallback={
                          <div className="space-y-4 p-4">
                            <div className="text-center">
                              <div className="w-10 h-10 bg-gradient-to-br from-pear-primary to-pear-gold rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                                <span className="text-white text-lg">😊</span>
                              </div>
                              <p className="text-pear-primary font-medium text-sm">Loading navigation...</p>
                              <p className="text-gray-600 text-xs mt-1">Finding the perfect page for you</p>
                            </div>
                            <div className="animate-pulse space-y-3">
                              <div className="h-3 bg-gradient-to-r from-pear-background/30 to-soft-pink/20 rounded w-3/4 mx-auto"></div>
                              <div className="h-3 bg-gradient-to-r from-pear-background/30 to-soft-pink/20 rounded w-1/2 mx-auto"></div>
                              <div className="h-3 bg-gradient-to-r from-pear-background/30 to-soft-pink/20 rounded w-2/3 mx-auto"></div>
                            </div>
                          </div>
                        }
                      >
                        <LazyNavigationItems services={services} about={about} onItemClick={closeMobileMenu} />
                      </Suspense>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary / simplified navigation */}
      <header
        data-role="secondary-header"
        id="secondary-nav"
        className={cn(
          "secondary-nav fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out pt-[3px] sm:pt-0",
          secondaryVisible
            ? "transform translate-y-0 opacity-100 bg-pear-primary shadow-lg"
            : "transform -translate-y-full opacity-0 pointer-events-none"
        )}
        aria-label="Simplified navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between py-2 my-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-9 sm:h-9 text-white">
                <Image
                  src="/images/dental-motif-logo.png"
                  alt="Pear Tree Dental Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <div className="brand-logo text-2xl p-0 sm:p-1" style={{ fontSize: 25, color: "#fff" }}>
                  <span className="block sm:inline">PEAR TREE</span>
                  <span className="block sm:inline sm:ml-2">DENTAL</span>
                </div>
              </div>
            </Link>

            {/* Centralized CTAs */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:flex items-center space-x-4">
              <Link href="/book">
                <Button
                  size="sm"
                  className="bg-pear-primary text-white font-bold px-4 py-2 h-10 border-2 border-white hover:bg-pear-primary/90"
                >
                  <CalendarDays className="w-4 h-4 mr-2 hidden sm:block" />
                  Book Appointment
                </Button>
              </Link>
              <Link href="/membership">
                <Button size="sm" className="bg-white text-pear-gold hover:bg-white/90 font-semibold px-4 py-2 h-10">
                 Explore Membership
                </Button>
              </Link>
            </div>

            {/* Mobile CTAs */}
            <div className="flex sm:hidden flex-col items-end space-y-2">
              <Link href="/book">
                <Button className="bg-pear-primary text-white font-bold px-3 py-2 h-9 text-xs border-2 border-white hover:bg-pear-primary/90">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/membership">
                <Button className="bg-white text-pear-gold hover:bg-white/90 font-semibold px-3 py-2 h-9 text-xs">
                  Explore Membership
                </Button>
              </Link>
            </div>

            {/* Hamburger (secondary) */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-pear-gold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:rounded-md"
                  aria-label="Open mobile navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 sm:w-96 bg-white border-l-0 shadow-2xl"
                aria-label="Mobile navigation menu"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Swipe Indicator */}
                <div className={cn("swipe-indicator", isSwipeIndicatorVisible && "active")}>
                  <div className="flex items-center text-pear-primary/60 text-sm">
                    <span className="mr-1">→</span>
                    <span>Swipe</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-6 mt-6 mobile-nav-content overflow-y-auto pb-8">
                  <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
                    <div className="w-8 h-8 text-pear-primary">
                      <Image
                        src="/images/dental-motif-logo.png"
                        alt="Pear Tree Dental Logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="brand-logo text-lg text-pear-primary font-garamond">PEAR TREE DENTAL</div>
                    </div>
                  </Link>

                  {shouldLoadSecondaryNav && (
                    <Suspense
                      fallback={
                        <div className="space-y-4 p-4">
                          <div className="text-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-pear-primary to-pear-gold rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                              <span className="text-white text-lg">😊</span>
                            </div>
                            <p className="text-pear-primary font-medium text-sm">Loading navigation...</p>
                            <p className="text-gray-600 text-xs mt-1">Finding the perfect page for you</p>
                          </div>
                          <div className="animate-pulse space-y-3">
                            <div className="h-3 bg-gradient-to-r from-pear-background/30 to-soft-pink/20 rounded w-3/4 mx-auto"></div>
                            <div className="h-3 bg-gradient-to-r from-pear-background/30 to-soft-pink/20 rounded w-1/2 mx-auto"></div>
                            <div className="h-3 bg-gradient-to-r from-pear-background/30 to-soft-pink/20 rounded w-2/3 mx-auto"></div>
                          </div>
                        </div>
                      }
                    >
                      <LazyNavigationItems services={services} about={about} onItemClick={closeMobileMenu} />
                    </Suspense>
                  )}

                  <div className="space-y-2 mt-2">
                    <Link
                      href="/new-patients"
                      className="block text-pear-primary hover:text-pear-gold transition-colors font-medium py-1"
                      onClick={closeMobileMenu}
                    >
                      New Patients
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-pear-primary hover:text-pear-gold transition-colors font-medium py-1"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
