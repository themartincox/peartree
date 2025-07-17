"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import NavigationErrorBoundary from "@/components/navigation/NavigationErrorBoundary";

// Lazy load non-critical navigation components
const LazyNavigationItems = lazy(() =>
  import("@/components/navigation/LazyNavigationItems").then(module => {
    // Performance tracking for lazy loading
    if (typeof window !== 'undefined' && window.performance) {
      const loadTime = performance.now();
      console.log(`[Nav Performance] Lazy navigation loaded in ${loadTime.toFixed(2)}ms`);
    }
    return module;
  })
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldLoadSecondaryNav, setShouldLoadSecondaryNav] = useState(false);
  const { startTiming, endTiming } = usePerformanceMonitor();

  // Function to close mobile menu when navigation links are clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle mobile menu opening with lazy loading
  const handleMobileMenuChange = (open: boolean) => {
    setIsMobileMenuOpen(open);
    // Load secondary navigation items only when menu is opened for the first time
    if (open && !shouldLoadSecondaryNav) {
      startTiming('lazy-nav-load');
      setShouldLoadSecondaryNav(true);
    }
  };

  // Track when lazy navigation has loaded
  useEffect(() => {
    if (shouldLoadSecondaryNav) {
      const timer = setTimeout(() => {
        endTiming('lazy-nav-load');
      }, 100); // Small delay to ensure component is fully rendered

      return () => clearTimeout(timer);
    }
  }, [shouldLoadSecondaryNav, endTiming]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "General Dentistry",
      href: "/services/general",
      description: "Comprehensive dental care for your everyday needs",
      theme: "medical"
    },
    {
      title: "Restorative Dentistry",
      href: "/services/restorative",
      description: "Repair and restore your teeth to optimal health",
      theme: "medical"
    },
    {
      title: "Cosmetic Dentistry",
      href: "/services/cosmetic",
      description: "Transform your smile with aesthetic treatments",
      theme: "cosmetic"
    },
    {
      title: "Implant Dentistry",
      href: "/services/implants",
      description: "Permanent tooth replacement solutions",
      theme: "cosmetic"
    },
    {
      title: "Orthodontics",
      href: "/services/orthodontics",
      description: "Invisalign and ClearCorrect aligners",
      theme: "cosmetic"
    },
    {
      title: "Emergency Dentistry",
      href: "/services/emergency",
      description: "Urgent dental care when you need it most",
      theme: "medical"
    },
  ];

  const about = [
    {
      title: "Our Team",
      href: "/about/team",
      description: "Meet our experienced dental professionals"
    },
    {
      title: "Our Practice",
      href: "/about/practice",
      description: "State-of-the-art facilities in Burton Joyce"
    },
    {
      title: "Patient Reviews",
      href: "/testimonials",
      description: "Real testimonials from our satisfied patients"
    },
    {
      title: "Smile Gallery",
      href: "/smile-gallery",
      description: "Before & after smile transformations"
    },
    {
      title: "Dental Education",
      href: "/patient-education",
      description: "Helpful guides and oral health resources"
    },
    {
      title: "Pricing",
      href: "/pricing",
      description: "Transparent dental treatment pricing"
    },
  ];

  return (
    <>
      {/* Main Navigation - Full menu when not scrolled */}
      <header
        id="navigation"
        role="banner"
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500 ease-in-out",
          isScrolled
            ? "transform -translate-y-full opacity-0 pointer-events-none"
            : "transform translate-y-0 opacity-100 bg-white shadow-lg"
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
              <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14">
                <Image
                  src="/images/dental-motif-logo.png"
                  alt="Pear Tree Dental Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(54%) saturate(1200%) hue-rotate(165deg) brightness(90%) contrast(95%)' }}
                />
              </div>
              <div className="flex flex-col">
                <div className="brand-logo text-3xl text-pear-primary xl:text-left lg:text-center">PEAR TREE DENTAL
                </div>
                <div className="brand-subtitle text-xs text-pear-primary/90 mt-1 xl:text-center">
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex" role="navigation" aria-label="Main site navigation">
              <NavigationMenuList className="space-x-6">
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="hover:text-pear-gold focus:outline-none focus:ring-2 focus:ring-pear-primary focus:rounded-md text-pear-primary text-sm"
                    aria-label="Services menu"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent role="menu" aria-label="Dental services">
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-3" role="none">
                      {/* Top Row: Restorative, General, Cosmetic */}
                      {[services[2], services[0], services[1]].map((service) => (
                        <li key={service.title} role="none">
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              role="menuitem"
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:ring-2 focus:ring-pear-gold",
                                service.theme === "medical" ? "border-l-4 border-dental-green" : "border-l-4 border-soft-pink"
                              )}
                              aria-describedby={`service-desc-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                            >
                              <div className="text-sm font-medium leading-none text-pear-primary">
                                {service.title}
                              </div>
                              <p
                                id={`service-desc-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                                className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                              >
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      {/* Bottom Row: Implants, Orthodontics, Emergency */}
                      {[services[3], services[4], services[5]].map((service) => (
                        <li key={service.title} role="none">
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              role="menuitem"
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:ring-2 focus:ring-pear-gold",
                                service.theme === "medical" ? "border-l-4 border-dental-green" : "border-l-4 border-soft-pink"
                              )}
                              aria-describedby={`service-desc-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                            >
                              <div className="text-sm font-medium leading-none text-pear-primary">
                                {service.title}
                              </div>
                              <p
                                id={`service-desc-${service.title.replace(/\s+/g, '-').toLowerCase()}`}
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

                <NavigationMenuItem>
                  <Link href="/membership" className="text-pear-gold hover:bg-pear-gold hover:text-white transition-all px-3 py-1 rounded font-semibold text-sm">
                    Membership Plan
                  </Link>
                </NavigationMenuItem>

                {/* About Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-pear-gold text-pear-primary text-sm">
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
                              <div className="text-sm font-medium leading-none text-pear-primary">
                                {item.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/new-patients" className="text-pear-primary hover:text-pear-gold transition-colors font-medium text-sm">
                    New Patients
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" className="text-pear-primary hover:text-pear-gold transition-colors font-medium text-sm">
                    Contact
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/services/emergency">
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-4 py-2 ml-4"
                    >
                      Dental Pain?
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-pear-primary focus:outline-none focus:ring-2 focus:ring-pear-primary focus:rounded-md hover:bg-pear-primary/10"
                  aria-label="Open mobile navigation menu"
                  aria-expanded="false"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 sm:w-96"
                role="dialog"
                aria-label="Mobile navigation menu"
              >
                <div className="flex flex-col space-y-6 mt-6" role="navigation" aria-label="Mobile site navigation">
                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-pear-gold focus:rounded-md"
                    aria-label="Pear Tree Dental - Return to homepage"
                  >
                    <div className="flex flex-col">
                      <div className="brand-logo text-lg text-pear-primary">
                        PEAR TREE
                      </div>
                      <div className="brand-subtitle text-xs text-pear-primary mt-4px">
                        DENTAL
                      </div>
                    </div>
                  </Link>

                  {/* Mobile CTAs */}
                  <div className="flex flex-col space-y-3">
                    <Link href="/services/emergency">
                      <Button className="bg-red-600 hover:bg-red-700 text-white w-full h-12 text-sm font-bold rounded-full">
                        🚨 Dental Pain? Call Now
                      </Button>
                    </Link>
                    <Link href="/book">
                      <Button className="bg-gradient-to-r from-dental-green to-soft-blue text-white w-full h-12 text-sm">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                    <Link href="/smile-design">
                      <Button className="bg-gradient-to-r from-soft-pink to-soft-lavender text-white w-full h-12 font-semibold text-sm">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Smile Design Service
                      </Button>
                    </Link>
                    <Link href="/membership">
                      <Button className="btn-gold text-white w-full h-12 font-semibold text-sm">
                        <Star className="w-4 h-4 mr-2" />
                        Join Membership
                      </Button>
                    </Link>
                    <a href="tel:01159312935">
                      <Button variant="outline" className="text-pear-primary border-pear-primary w-full h-12 text-sm">
                        <Phone className="w-4 h-4 mr-2" />
                        0115 931 2935
                      </Button>
                    </a>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-4">
                    <div className="space-y-2">
                      <div className="text-pear-primary font-semibold">Services</div>
                      <div className="ml-4 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="block text-sm text-muted-foreground hover:text-pear-gold transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link href="/membership" className="text-pear-gold hover:bg-pear-gold hover:text-white transition-all px-3 py-1 rounded font-semibold text-sm">
                      Membership Plan
                    </Link>

                    <div className="space-y-2">
                      <div className="text-pear-primary font-semibold">About</div>
                      <div className="ml-4 space-y-2">
                        {about.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-pear-gold transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link href="/new-patients" className="text-pear-primary hover:text-pear-gold transition-colors font-medium text-sm">
                      New Patients
                    </Link>
                    <Link href="/contact" className="text-pear-primary hover:text-pear-gold transition-colors font-medium text-sm">
                      Contact
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Simplified Navigation - Shows on scroll */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out",
          isScrolled
            ? "transform translate-y-0 opacity-100 bg-pear-primary shadow-lg"
            : "transform -translate-y-full opacity-0 pointer-events-none"
        )}
        aria-label="Simplified navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
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
                <div className="brand-logo text-2xl" style={{ fontSize: 25, color: "#fff" }}>PEAR TREE DENTAL
                </div>
                <div className="brand-subtitle text-xs text-white/80 mt-1 xl:text-center">
                </div>
              </div>
            </Link>

            {/* Centralized CTAs */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:flex items-center space-x-4">
              <Link href="/book">
                <Button
                  size="sm"
                  className="relative bg-white text-pear-primary font-medium px-4 py-2 h-10 border border-pink-200/40 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-200/60 via-pink-100/30 to-transparent"></div>
                  <div className="relative z-10 flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2 hidden sm:block" />Book
                  </div>
                </Button>
              </Link>
              <Link href="/membership">
                <Button
                  size="sm"
                  className="bg-white text-pear-gold hover:bg-white/90 font-semibold px-4 py-2 h-10"
                >
                  Membership
                </Button>
              </Link>
            </div>

            {/* Mobile CTAs - Right aligned */}
            <div className="flex sm:hidden items-center space-x-2">
              <Link href="/book">
                <Button
                  size="sm"
                  className="relative bg-white text-pear-primary font-medium px-3 py-2 h-9 text-xs border border-pink-200/40 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-200/60 via-pink-100/30 to-transparent"></div>
                  <div className="relative z-10">Book</div>
                </Button>
              </Link>
              <Link href="/membership">
                <Button
                  size="sm"
                  className="bg-white text-pear-gold hover:bg-white/90 font-semibold px-3 py-2 h-9 text-xs"
                >
                  Membership
                </Button>
              </Link>
            </div>

            {/* Hamburger Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={handleMobileMenuChange}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:rounded-md"
                  aria-label="Open mobile navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 sm:w-96 bg-white/95 backdrop-blur-md border-l border-gray-200/50 shadow-2xl"
                onInteractOutside={() => setIsMobileMenuOpen(false)}
                aria-label="Mobile navigation menu"
              >
                <div className="flex flex-col space-y-6 mt-6">
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
                      <div className="brand-logo text-lg text-pear-primary">
                        PEAR TREE
                      </div>
                      <div className="brand-subtitle text-xs text-pear-primary mt-4px">
                        DENTAL
                      </div>
                    </div>
                  </Link>

                  <div className="flex flex-col space-y-3">
                    <Link href="/book" onClick={closeMobileMenu}>
                      <Button className="bg-soft-pink text-pear-primary w-full h-12">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                    <Link href="/membership" onClick={closeMobileMenu}>
                      <Button variant="outline" className="text-pear-primary border-pear-primary w-full h-12 text-sm">
                        <Star className="w-4 h-4 mr-2" />
                        Membership Plans
                      </Button>
                    </Link>
                  </div>

                  {/* Enhanced Navigation using Lazy Loading */}
                  {shouldLoadSecondaryNav && (
                    <Suspense fallback={
                      <div className="space-y-4">
                        <div className="text-pear-primary font-semibold">Services</div>
                        <div className="animate-pulse space-y-2">
                          {[1,2,3].map(i => (
                            <div key={i} className="h-4 bg-gray-200 rounded w-3/4"></div>
                          ))}
                        </div>
                      </div>
                    }>
                      <LazyNavigationItems
                        services={services}
                        about={about}
                        onItemClick={closeMobileMenu}
                      />
                    </Suspense>
                  )}

                  <div className="space-y-2">
                    <Link href="/new-patients" className="text-pear-primary hover:text-pear-gold transition-colors font-medium">
                      New Patients
                    </Link>
                    <Link href="/contact" className="text-pear-primary hover:text-pear-gold transition-colors font-medium">
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
