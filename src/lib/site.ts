/**
 * Total Fitness Studio — single source of truth
 * Aligned to Google Maps + public listings
 */

export const SITE = {
  name: "Total Fitness Studio",
  nameTa: "டோட்டல் பிட்னஸ் ஸ்டுடியோ",
  tagline: "Chromepet's highest-rated unisex gym",
  taglineTa: "குரோம்பேட்டில் உயர்ந்த மதிப்பீடு பெற்ற ஜிம்",
  phoneDisplay: "+91 99419 42942",
  phoneTel: "+919941942942",
  whatsapp: "919941942942",
  rating: "4.9",
  reviewCount: 798,
  addressShort: "Hasthinapuram, Chromepet, Chennai",
  addressFull:
    "No. 35-B, Vijaya Saras Building, 3rd Floor, Rajendra Prasad Road, Gayathri Nagar (above Axis Bank), Hasthinapuram, Chromepet, Chennai, Tamil Nadu 600044",
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
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ0dvd-FVeUjoREXvNxP6xxuI",
  coords: { lat: 12.94097, lng: 80.14800, label: "12.9410° N, 80.1480° E" },
  postalCode: "600044",
  hours: { open: "04:30", close: "21:30", label: "4:30 AM – 9:30 PM" },
  category: "Unisex Gym & Fitness Studio",
  brand: "#E2FF00",
  dark: "#0F0F0F",
  womenOwned: true,
  lgbtqFriendly: true,
  trainerHighlight: "Sakthivel master",
  keywords: [
    "Total Fitness Studio",
    "gym in Chromepet",
    "best gym Chromepet",
    "gym Hasthinapuram",
    "gym Chitlapakkam",
    "unisex gym Chromepet",
    "personal trainer Chromepet",
    "fitness studio above Axis Bank",
    "டோட்டல் பிட்னஸ் ஸ்டுடியோ",
  ],
} as const;

export const WHATSAPP_MESSAGES = {
  inquiry: encodeURIComponent(
    "Hi Total Fitness Studio, I have a question about your gym in Chromepet (Hasthinapuram). Can you help?",
  ),
  trial: encodeURIComponent(
    "Hi, I'd like to book my free trial session at Total Fitness Studio Chromepet.",
  ),
  membership: encodeURIComponent(
    "Hi, I'm interested in membership at Total Fitness Studio. Please share current plans and offers.",
  ),
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${message}`;
}

export function telUrl() {
  return `tel:${SITE.phoneTel}`;
}

export function localBusinessJsonLd(siteUrl: string, imageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GymAndFitnessClub",
    "@id": `${siteUrl}/#gym`,
    name: SITE.name,
    alternateName: [
      SITE.nameTa,
      "Total Fitness Studio Chromepet",
      "Total Fitness Studio Hasthinapuram",
    ],
    description:
      "Unisex gym and fitness studio in Hasthinapuram, Chromepet (above Axis Bank). Rated 4.9★ across hundreds of public reviews. Strength training, HIIT, and personal coaching. Open daily early morning to night. Women-owned and LGBTQ+ friendly.",
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
      { "@type": "LocationFeatureSpecification", name: "Women-owned", value: true },
      { "@type": "LocationFeatureSpecification", name: "LGBTQ+ friendly", value: true },
    ],
  };
}
