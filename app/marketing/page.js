import MarketingLanding from "./MarketingLanding";

export const metadata = {
  title: "Growsin — Learn to Invest with Discipline | Guided by SEBI-Registered Research",
  description:
    "Growsin helps Indian investors understand goal-based investing through research-backed education, transparent methodology, and mentor-style guidance. No hype. No stock tips. Just process.",
  alternates: {
    canonical: "https://www.growsin.com/marketing",
  },
  openGraph: {
    title: "Growsin — Learn to Invest with Discipline | Guided by SEBI-Registered Research",
    description:
      "Growsin helps Indian investors understand goal-based investing through research-backed education, transparent methodology, and mentor-style guidance. No hype. No stock tips. Just process.",
    url: "https://www.growsin.com/marketing",
    siteName: "Growsin",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.growsin.com/img/logo.png",
        width: 800,
        height: 600,
        alt: "Growsin Investment Advisory & Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growsin — Learn to Invest with Discipline | Guided by SEBI-Registered Research",
    description:
      "Growsin helps Indian investors understand goal-based investing through research-backed education, transparent methodology, and mentor-style guidance. No hype. No stock tips. Just process.",
    images: ["https://www.growsin.com/img/logo.png"],
  },
};

export default function MarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Growsin",
    description:
      "SEBI-Registered Investment Advisory and Research Analyst firm delivering disciplined, goal-based investment planning and investor education.",
    url: "https://www.growsin.com/marketing",
    telephone: "+91-85006-60421",
    email: "info@growsin.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    areaServed: "IN",
    identifier: [
      {
        "@type": "PropertyValue",
        name: "SEBI IA Registration",
        value: "INA000021261",
      },
      {
        "@type": "PropertyValue",
        name: "SEBI RA Registration",
        value: "INH000023667",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingLanding />
    </>
  );
}
