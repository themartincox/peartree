import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Star, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pear-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Practice Information */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="brand-logo text-xl sm:text-2xl text-white">
                PEAR TREE
              </div>
              <div className="brand-subtitle text-xs sm:text-sm text-white/80 mt-4px">
                DENTAL
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Premium dental care in Burton Joyce, Nottinghamshire.
              Modern dentistry with a personal touch, serving the local
              community with excellence since our establishment.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center text-pear-gold">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              </div>
              <span className="text-xs sm:text-sm text-white/80">400+ Google Reviews</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white">Contact Us</h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-white/80">
                  <div>22 Nottingham Road</div>
                  <div>Burton Joyce, Nottingham</div>
                  <div>UK NG14 5AL</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pear-gold flex-shrink-0" />
                <a href="tel:01159312935" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors">
                  0115 931 2935
                </a>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-pear-gold flex-shrink-0" />
                <a href="mailto:hello@peartree.dental" className="text-xs sm:text-sm text-white/80 hover:text-white transition-colors break-all">
                  hello@peartree.dental
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white">Opening Hours</h3>

            <div className="space-y-1 sm:space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-white/80">Monday</span>
                <span className="text-white">8:45 am - 5 pm</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-white/80">Tuesday</span>
                <span className="text-white">8:45 am - 5 pm</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-white/80">Wednesday</span>
                <span className="text-white">8:45 am - 5 pm</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-white/80">Thursday</span>
                <span className="text-white">8:45 am - 5 pm</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-white/80">Friday</span>
                <span className="text-white">8 am - 3:30 pm</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-white/80">Saturday</span>
                <span className="text-white">Closed</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-white/80">Sunday</span>
                <span className="text-white">Closed</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs sm:text-sm text-pear-gold">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Emergencies and out of hours by arrangement</span>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-white">Quick Links</h3>

            <div className="space-y-2 sm:space-y-3">
              <Link href="/urgent-dental-pain" className="block text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-3 py-2 text-center transition-colors">
                🚨 Dental Pain?
              </Link>
              <Button className="btn-gold text-white w-full font-semibold h-10 sm:h-auto text-sm">
                Join Membership Plan
              </Button>
              <Button variant="outline" className="w-full border-white bg-white text-pear-primary h-10 sm:h-auto text-sm">
                Book Consultation
              </Button>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Link href="/new-patients" className="block text-xs sm:text-sm text-white/80 hover:text-pear-gold transition-colors">
                New Patient Information
              </Link>
              <Link href="/about/practice" className="block text-xs sm:text-sm text-white/80 hover:text-pear-gold transition-colors">
                Our Practice
              </Link>
              <Link href="/testimonials" className="block text-xs sm:text-sm text-white/80 hover:text-pear-gold transition-colors">
                Patient Reviews
              </Link>
              <Link href="/pricing" className="block text-xs sm:text-sm text-white/80 hover:text-pear-gold transition-colors">
                Pricing
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-white/60 hover:text-pear-gold transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-pear-gold transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-pear-gold transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs sm:text-sm text-white/60">
            <span>© 2025 Pear Tree Dental. All rights reserved.</span>
            <div className="flex flex-wrap justify-center space-x-3 sm:space-x-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/complaints" className="hover:text-white transition-colors">
                Complaints Procedure
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-white/60">
            <span>Regulated by the General Dental Council</span>
            <span>Website delivered by <a href="https://www.postino.cc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Postino</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
