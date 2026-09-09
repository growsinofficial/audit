import React, { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export const metadata = {
  title: "Thank You — Your Goal-Mapping Session is Requested | Growsin",
  description:
    "Thank you for requesting a Goal-Mapping Session with Growsin. Our SEBI-registered advisory team will connect with you shortly.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.growsin.com/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#167a27",
            fontWeight: 600,
          }}
        >
          Loading confirmation...
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
