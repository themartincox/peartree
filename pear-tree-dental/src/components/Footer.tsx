import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Star, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pear-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Information */}
          <div className="space-y-6">
            <div>
              <div className="brand-logo text-2xl text-white">
                PEAR<span className="ml-25px">TREE</span>
              </div>
              <div className="brand-subtitle text-sm text-white/80 mt-4px">
                DENTAL
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Premium dental care in Burton Joyce, Nottinghamshire.
              Modern dentistry with a personal touch, serving the local
              community with excellence since our establishment.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center text-pear-gold">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-white/80">400+ Google Reviews</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pear-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <div>The Old School House</div>
                  <div>Main Street, Burton Joyce</div>
                  <div>Nottinghamshire NG14 5DP</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pear-gold flex-shrink-0" />
                <a href="tel:01159312525" className="text-sm text-white/80 hover:text-white transition-colors">
                  0115 931 2525
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pear-gold flex-shrink-0" />
                <a href="mailto:info@peartreedental.co.uk" className="text-sm text-white/80 hover:text-white transition-colors">
                  info@peartreedental.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Opening Hours</h3>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Monday</span>
                <span className="text-white">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Tuesday</span>
                <span className="text-white">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Wednesday</span>
                <span className="text-white">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Thursday</span>
                <span className="text-white">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Friday</span>
                <span className="text-white">8:00 - 17:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Saturday</span>
                <span className="text-white">Closed</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Sunday</span>
                <span className="text-white">Closed</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-pear-gold">
              <Clock className="w-4 h-4" />
              <span>Emergency appointments available</span>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <div className="space-y-3">
              <Link href="/membership" className="block text-sm text-white/80 hover:text-pear-gold transition-colors">
                Membership Plans
              </Link>
              <Link href="/services/emergency" className="block text-sm text-white/80 hover:text-pear-gold transition-colors">
                Emergency Dentistry
              </Link>
              <Link href="/new-patients" className="block text-sm text-white/80 hover:text-pear-gold transition-colors">
                New Patient Information
              </Link>
              <Link href="/testimonials" className="block text-sm text-white/80 hover:text-pear-gold transition-colors">
                Patient Reviews
              </Link>
              <Link href="/about/practice" className="block text-sm text-white/80 hover:text-pear-gold transition-colors">
                Our Practice
              </Link>
            </div>

            <div className="space-y-3">
              <Button className="btn-gold text-white w-full font-semibold">
                Join Membership Plan
              </Button>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-pear-primary">
                Book Consultation
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-pear-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-pear-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-pear-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/60">
            <span>© 2025 Pear Tree Dental. All rights reserved.</span>
            <div className="flex space-x-4">
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

          <div className="flex items-center space-x-4 text-sm text-white/60">
            <span>Regulated by the General Dental Council</span>
            <span>GDC Registration: 123456</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
