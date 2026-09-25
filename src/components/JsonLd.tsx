import { siteConfig } from "@/data/site-config";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.clinicName,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    openingHoursSpecification: siteConfig.workingHours
      .filter((wh) => wh.hours !== "Kapalı")
      .map((wh) => {
        // Map Turkish days to Schema.org days
        const daysMap: Record<string, string> = {
          Pazartesi: "Monday",
          Salı: "Tuesday",
          Çarşamba: "Wednesday",
          Perşembe: "Thursday",
          Cuma: "Friday",
          Cumartesi: "Saturday",
          Pazar: "Sunday",
        };
        const day = daysMap[wh.day];
        const [opens, closes] = wh.hours.split(" - ");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day,
          opens,
          closes,
        };
      }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.doctor.rating,
      reviewCount: siteConfig.doctor.patientsCount,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
