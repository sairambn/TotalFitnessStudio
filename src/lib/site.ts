/**
 * Business data aligned to public listings:
 * - Justdial: 4.9★ · ~798 reviews · Above Axis Bank, Hasthinapuram–Chitlapakkam
 * - Address directories: No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road,
 *   Gayathri Nagar, above Axis Bank, Chromepet, Chennai 600044
 * - Category: Unisex gym / fitness studio
 *
 * Phone kept from existing site operations (+91 99419 42942).
 * Hours kept as previously configured (verify on Google Business Profile).
 */

export const SITE = {
  name: "Total Fitness Studio",
  tagline: "Chromepet's highest-rated unisex gym",
  phoneDisplay: "+91 99419 42942",
  phoneTel: "+919941942942",
  whatsapp: "919941942942",
  /** Public aggregate from Justdial-area listings (~794–798) */
  rating: "4.9",
  reviewCount: 798,
  /** Short line for footer / nav */
  addressShort: "Hasthinapuram, Chromepet, Chennai",
  /** Full line matching public business directories */
  addressFull:
    "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road, Gayathri Nagar (above Axis Bank), Hasthinapuram, Chromepet, Chennai, Tamil Nadu 600044",
  /** Landmark helpers for SEO + FAQ */
  landmarks: [
    "Above Axis Bank",
    "Gayathri Nagar",
    "Rajendra Prasad Road",
    "Near Gayathri Nagar bus stop",
  ] as const,
  areasServed: [
    "Chromepet",
    "Hasthinapuram",
    "Chitlapakkam",
    "Tambaram",
    "Pallavaram",
    "Selaiyur",
  ] as const,
  mapsUrl: "https://maps.app.goo.gl/M1VcPF2LMbexLFuE9",
  coords: { lat: 12.9524, lng: 80.1381, label: "12.9524° N, 80.1381° E" },
  postalCode: "600044",
  hours: { open: "04:30", close: "21:30", label: "4:30 AM – 9:30 PM" },
  category: "Unisex Gym & Fitness Studio",
  brand: "#E2FF00",
  dark: "#0F0F0F",
  keywords: [
    "Total Fitness Studio",
    "gym in Chromepet",
    "best gym Chromepet",
    "gym Hasthinapuram",
    "gym Chitlapakkam",
    "unisex gym Chromepet",
    "personal trainer Chromepet",
    "fitness studio above Axis Bank",
  ],
} as const;

export const WHATSAPP_MESSAGES = {
  inquiry: encodeURIComponent(
    "Hi Total Fitness Studio, I have a question about your gym in Chromepet (Hasthinapuram). Can you help?",
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

/** Schema.org — set siteUrl to your production domain after deploy */
export function localBusinessJsonLd(siteUrl: string, imageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GymAndFitnessClub",
    "@id": `${siteUrl}/#gym`,
    name: SITE.name,
    alternateName: [
      "Total Fitness Studio Chromepet",
      "Total Fitness Studio Hasthinapuram",
      "Total Fitness Studio Chitlapakkam",
    ],
    description:
      "Unisex gym and fitness studio in Hasthinapuram, Chromepet (above Axis Bank). Rated 4.9★ across hundreds of public reviews. Strength training, HIIT, and personal coaching. Open daily early morning to night.",
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
      postalCode: SITE.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coords.lat,
      longitude: SITE.coords.lng,
    },
    areaServed: [...SITE.areasServed],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: SITE.hours.open,
        closes: SITE.hours.close,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Unisex facility", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free weights", value: true },
      { "@type": "LocationFeatureSpecification", name: "Personal training", value: true },
      { "@type": "LocationFeatureSpecification", name: "Locker rooms", value: true },
    ],
  };
}
