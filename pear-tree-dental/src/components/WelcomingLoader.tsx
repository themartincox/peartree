"use client";

import Image from "next/image";

interface WelcomingLoaderProps {
  height?: string;
  className?: string;
  message?: string;
  variant?:
    | "happy-patient"
    | "diverse-smiles"
    | "dental-team"
    | "family-care"
    | "gentle-care";
}

const loaderVariants = {
  "happy-patient": {
    image:
      "https://edia.istockphoto.com/id/1388931724/photo/shot-of-a-young-woman-checking-her-results-in-the-dentists-office.jpg",
    alt: "Happy patient admiring her smile",
    message: "Loading your smile journey...",
  },
  "diverse-smiles": {
    image:
      "https://humbs.dreamstime.com/b/portrait-beautiful-happy-woman-white-teeth-smiling-beauty-attractive-healthy-girl-perfect-smile-blonde-hair-fresh-face-76138238.jpg",
    alt: "Beautiful woman with perfect smile",
    message: "Preparing your dental experience...",
  },
  "dental-team": {
    image:
      "https://edia.istockphoto.com/id/1370641643/photo/shot-of-a-patient-and-assistant-interacting-in-a-dentist-office.jpg",
    alt: "Friendly dental assistant with patient",
    message: "Setting up your appointment...",
  },
  "family-care": {
    image:
      "https://zdentist.com/wp-content/uploads24/07/AZ-Dentist-Header.png",
    alt: "Happy woman with beautiful smile",
    message: "Creating your perfect smile...",
  },
  "gentle-care": {
    image:
      "https://edia.istockphoto.com/id/1719539154/photo/home-care-healthcare-professional-hugging-senior-patient.jpg",
    alt: "Caring healthcare professional with senior patient",
    message: "Preparing your care experience...",
  },
};

export default function WelcomingLoader({
  height = "h-96",
  className = "",
  message,
  variant = "happy-patient",
}: WelcomingLoaderProps) {
  const selectedVariant = loaderVariants[variant];
  const displayMessage = message || selectedVariant.message;

  return (
    <div
      className={`${height} ${className} relative overflow-hidden rounded-lg mx-4 bg-gradient-to-br from-pear-background to-soft-pink shadow-sm border border-gray-100`}
    >
      {/* Beautiful background image of smiling people */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={selectedVariant.image}
          alt={selectedVariant.alt}
          fill
          className="object-cover object-center"
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />

      {/* Animated shimmer effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"
        style={{ animationDuration: "2s" }}
      />

      {/* Loading content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        {/* Animated smile icon */}
        <div
          className="mb-4 animate-bounce"
          style={{ animationDuration: "1.5s" }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-pear-primary to-pear-gold rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl">😊</span>
          </div>
        </div>

        {/* Loading message */}
        <h3 className="text-pear-primary font-semibold text-lg mb-1">
          {displayMessage}
        </h3>
        <p className="text-gray-700 text-sm font-medium">
          Creating an amazing experience for you
        </p>

        {/* Loading dots animation */}
        <div className="flex space-x-2 mt-4">
          <div
            className="w-2.5 h-2.5 bg-pear-primary rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2.5 h-2.5 bg-pear-primary rounded-full animate-bounce"
            style={{ animationDelay: "200ms" }}
          ></div>
          <div
            className="w-2.5 h-2.5 bg-pear-primary rounded-full animate-bounce"
            style={{ animationDelay: "400ms" }}
          ></div>
        </div>

        {/* Subtle encouraging text */}
        <div className="mt-4 text-xs text-gray-600 opacity-75">
          Your perfect smile awaits...
        </div>
      </div>
    </div>
  );
}

//  Export specific variants for easy use
export const HappyPatientLoader = (
  props: Omit<WelcomingLoaderProps, "variant">,
) => <WelcomingLoader {...props} variant="happy-patient" />;

export const DiverseSmilesLoader = (
  props: Omit<WelcomingLoaderProps, "variant">,
) => <WelcomingLoader {...props} variant="diverse-smiles" />;

export const DentalTeamLoader = (
  props: Omit<WelcomingLoaderProps, "variant">,
) => <WelcomingLoader {...props} variant="dental-team" />;

export const FamilyCareLoader = (
  props: Omit<WelcomingLoaderProps, "variant">,
) => <WelcomingLoader {...props} variant="family-care" />;

export const GentleCareLoader = (
  props: Omit<WelcomingLoaderProps, "variant">,
) => <WelcomingLoader {...props} variant="gentle-care" />;
