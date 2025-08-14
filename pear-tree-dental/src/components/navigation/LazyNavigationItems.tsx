"use client";

import Link from "next/link";

interface Service {
  title: string;
  href: string;
  description: string;
  theme: string;
}

interface AboutItem {
  title: string;
  href: string;
  description: string;
}

interface LazyNavigationItemsProps {
  services: Service[];
  about: AboutItem[];
  onItemClick: () => void;
}

const LazyNavigationItems = ({
  services,
  about,
  onItemClick,
}: LazyNavigationItemsProps) => {
  return (
    <div className="pt-4 border-t border-gray-200">
      <nav className="flex flex-col space-y-4">
        <div className="space-y-2">
          <div className="text-pear-primary font-semibold">Services</div>
          <div className="ml-4 space-y-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="block text-sm text-muted-foreground hover:text-pear-gold transition-colors"
                onClick={onItemClick}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-pear-primary font-semibold">About</div>
          <div className="ml-4 space-y-2">
            {about.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-pear-gold transition-colors"
                onClick={onItemClick}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/new-patients"
          className="text-pear-primary hover:text-pear-gold transition-colors font-medium"
          onClick={onItemClick}
        >
          New Patients
        </Link>
        <Link
          href="/contact"
          className="text-pear-primary hover:text-pear-gold transition-colors font-medium"
          onClick={onItemClick}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default LazyNavigationItems;
