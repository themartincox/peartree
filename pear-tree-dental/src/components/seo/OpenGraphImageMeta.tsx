import Head from "next/head";

interface OpenGraphImageMetaProps {
  title: string;
  description: string;
  pageType: "service" | "location" | "about" | "general";
  serviceName?: string;
  locationName?: string;
  url: string;
}

export default function OpenGraphImageMeta({
  title,
  description,
  pageType,
  serviceName,
  locationName,
  url,
}: OpenGraphImageMetaProps) {
  // Generate dynamic image URL based on page type
  const getImageUrl = () => {
    const baseUrl = "https://peartree.dental/api/og";
    const params = new URLSearchParams({
      title: title,
      type: pageType,
      ...(serviceName && { service: serviceName }),
      ...(locationName && { location: locationName }),
    });

    return `${baseUrl}?${params.toString()}`;
  };

  // Fallback images for different page types
  const getFallbackImage = () => {
    switch (pageType) {
      case "service":
        return "https://peartree.dental/images/og/service-default.jpg";
      case "location":
        return "https://peartree.dental/images/og/location-default.jpg";
      case "about":
        return "https://peartree.dental/images/og/team-default.jpg";
      default:
        return "https://peartree.dental/images/og/practice-default.jpg";
    }
  };

  const imageUrl = getImageUrl();
  const fallbackImageUrl = getFallbackImage();

  return (
    <Head>
      {/* Primary OpenGraph Image */}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${title} - Pear Tree Dental`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Fallback Image */}
      <meta property="og:image" content={fallbackImageUrl} />
      <meta
        property="og:image:alt"
        content={`${title} - Pear Tree Dental Burton Joyce`}
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@PearTreeDental" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${title} - Pear Tree Dental`} />

      {/* Additional Meta */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pear Tree Dental" />
      <meta property="og:locale" content="en_GB" />

      {/* Rich Link Preview */}
      <link rel="image_src" href={imageUrl} />
    </Head>
  );
}

// Service-specific image configurations
export const serviceImageConfigs = {
  "teeth-whitening": {
    color: "#FFD700",
    icon: "✨",
    background: "gradient-gold",
  },
  "dental-implants": {
    color: "#2C5AA0",
    icon: "🦷",
    background: "gradient-blue",
  },
  veneers: {
    color: "#E91E63",
    icon: "💎",
    background: "gradient-pink",
  },
  orthodontics: {
    color: "#9C27B0",
    icon: "😊",
    background: "gradient-purple",
  },
  "general-dentistry": {
    color: "#4CAF50",
    icon: "🏥",
    background: "gradient-green",
  },
  emergency: {
    color: "#F44336",
    icon: "🚨",
    background: "gradient-red",
  },
  cosmetic: {
    color: "#FF6B9D",
    icon: "✨",
    background: "gradient-pink",
  },
};
