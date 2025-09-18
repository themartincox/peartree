"use client";

import Link from "next/link";

interface Service {
  title: string;
  href: string;
  description: string;
  theme: string;
  isEmergency?: boolean;
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

const LazyNavigationItems = ({ services, about, onItemClick }: LazyNavigationItemsProps) => {
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
                {service.isEmergency ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    {service.title}
                  </span>
                ) : (
                  service.title
                )}
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
      </nav>
    </div>
  );
};

export default LazyNavigationItems;
