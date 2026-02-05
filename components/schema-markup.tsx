export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Apsara Makeover",
    description:
      "Apsara Makeover is one of the best beauty parlours in Madurai, offering professional makeup and beauty services near Kanpalayam.",
    image: "https://deepakchandh.github.io/apsara-makeover-website/images/hero-beauty.jpg",
    "@id": "https://deepakchandh.github.io/apsara-makeover-website",
    url: "https://deepakchandh.github.io/apsara-makeover-website",
    telephone: "+919865459229",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "78-A, 1st Floor, Kamrajar Salai, Opposite Alankar and Harish Restaurant, Near Black and White",
      addressLocality: "Kanpalayam, Madurai",
      addressRegion: "Tamil Nadu",
      postalCode: "625009",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.93,
      longitude: 77.95,
    },
    openingHoursSpecification: {
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
      opens: "11:30",
      closes: "21:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      reviewCount: "44",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridal Makeup",
            description:
              "Complete bridal packages including makeup, hairstyling, and draping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Party Makeup",
            description:
              "Glamorous looks for parties, events, and special occasions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hair Services",
            description:
              "Expert haircuts, styling, treatments, and coloring",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Facial Treatments",
            description:
              "Rejuvenating facials and skincare treatments",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mehendi & Nail Art",
            description: "Beautiful henna designs and creative nail art",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Grooming Services",
            description:
              "Threading, waxing, and complete grooming packages",
          },
        },
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best beauty parlour in Madurai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apsara Makeover is widely recognized as one of the best beauty parlours in Madurai. With over 10 years of experience, a 4.1★ Google rating from 44+ reviews, and a commitment to hygiene and quality, we have earned the trust of thousands of customers in Madurai and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Apsara Makeover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apsara Makeover stands out as the best beauty parlour in Madurai for several reasons: professional and certified beauty experts, hygienic and sanitized equipment, premium quality products, personalized consultations, and a welcoming ambiance.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Apsara Makeover located in Madurai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apsara Makeover is conveniently located at 78-A, 1st Floor, Kamrajar Salai, Opposite Alankar and Harish Restaurant, Near Black and White, Kanpalayam, Madurai, Tamil Nadu – 625009.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Apsara Makeover offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As a leading ladies beauty parlour in Madurai, we offer comprehensive services including bridal makeup, party makeup, hair services, facial treatments, mehendi and nail art, and grooming services.",
        },
      },
      {
        "@type": "Question",
        name: "What are the business hours of Apsara Makeover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apsara Makeover opens daily at 11:30 AM. For appointments and inquiries, you can call us at 098654 59229.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}
