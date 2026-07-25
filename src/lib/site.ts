/**
 * Single source of truth for business constants.
 * Keeps marketing copy, SEO, and CTAs consistent across the app.
 */

export const SITE = {
  name: "Total Fitness Studio",
  tagline: "Raw power. Refined coaching.",
  phoneDisplay: "+91 99419 42942",
  phoneTel: "+919941942942",
  whatsapp: "919941942942",
  rating: "4.9",
  reviewCount: 755,
  addressShort: "Hasthinapuram, Chromepet, Chennai",
  addressFull:
    "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road, Gayathri Nagar (above Axis Bank), Hasthinapuram, Chromepet, Chennai, Tamil Nadu 600044",
  mapsUrl: "https://maps.app.goo.gl/M1VcPF2LMbexLFuE9",
  coords: { lat: 12.9524, lng: 80.1381, label: "12.9524° N, 80.1381° E" },
  hours: { open: "04:30", close: "21:30", label: "4:30 AM – 9:30 PM" },
  brand: "#E2FF00",
  dark: "#0F0F0F",
} as const;

export const WHATSAPP_MESSAGES = {
  inquiry: encodeURIComponent(
    "Hi Total Fitness Studio, I have a question about your gym in Chromepet. Can you help?",
  ),
  trial: encodeURIComponent(
    "Hi, I'd like to book my free trial session at Total Fitness Studio Chromepet.",
  ),
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${message}`;
}

export function telUrl() {
  return `tel:${SITE.phoneTel}`;
}

/** Schema.org GymAndFitnessClub — update `url` / `image` after production deploy */
export function localBusinessJsonLd(siteUrl: string, imageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GymAndFitnessClub",
    name: SITE.name,
    image: imageUrl,
    telephone: SITE.phoneDisplay,
    url: siteUrl,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road, Gayathri Nagar (above Axis Bank)",
      addressLocality: "Chromepet",
      addressRegion: "Tamil Nadu",
      postalCode: "600044",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coords.lat,
      longitude: SITE.coords.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: SITE.hours.open,
        closes: SITE.hours.close,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
  };
}
