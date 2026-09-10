"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import Footer from "@/layouts/Footer";
import "../marketing/marketing.css";

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const queryName = searchParams.get("name") || "";
  const [leadData, setLeadData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem("growsin_lead");
        if (saved) {
          setLeadData(JSON.parse(saved));
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const displayName = leadData?.name || queryName;

  return (
    <>
      {/* ===== META PIXEL ===== */}
      <Script
        id="meta-pixel-thank-you"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1914876929163844');
            fbq('track', 'PageView');
            fbq('track', 'Lead');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1914876929163844&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="mkt-page thank-you-page">
        {/* ===== HEADER + REGULATORY BANNER ===== */}
        <header className="mkt-header">
          <div className="wrap nav">
            <Link href="/" aria-label="Growsin Homepage">
              <Image
                className="logo"
                src="/img/logo.png"
                alt="Growsin — Investment Advisory & Research"
                width={160}
                height={42}
                priority
              />
            </Link>
            <Link href="/" className="btn btn-outline">
              ← Return to Home
            </Link>
          </div>
          <div className="reg-banner">
            <strong>SEBI Registered Investment Adviser (IA: INA000021261)</strong>
            <span className="sep">|</span>
            <strong>Research Analyst (RA: INH000023667)</strong>
          </div>
        </header>

        {/* ===== HERO / CONFIRMATION CARD ===== */}
        <main className="wrap thank-you-wrap">
          <div className="thank-you-card">
            <div className="thank-you-badge">
              <span className="badge-icon">✓</span>
            </div>

            <span className="eyebrow thank-you-eyebrow">
              SESSION REQUEST RECEIVED
            </span>

            <h1 className="thank-you-title">
              Thank You{displayName ? `, ${displayName}` : ""}!
            </h1>

            <p className="thank-you-subtitle">
              Your request for a <strong>Goal-Mapping Educational Session</strong> has been
              received. A Growsin advisor will connect with you within 24 business hours
              to schedule your personalized 30-minute discussion.
            </p>

            {/* Submitted summary pill */}
            {leadData && (
              <div className="thank-you-summary-box">
                <h4>Your Submitted Request Details</h4>
                <div className="summary-grid">
                  {leadData.name && (
                    <div className="summary-item">
                      <span className="s-label">Name:</span>
                      <span className="s-val">{leadData.name}</span>
                    </div>
                  )}
                  {leadData.phone && (
                    <div className="summary-item">
                      <span className="s-label">Mobile:</span>
                      <span className="s-val">+91 {leadData.phone}</span>
                    </div>
                  )}
                  {leadData.email && (
                    <div className="summary-item">
                      <span className="s-label">Email:</span>
                      <span className="s-val">{leadData.email}</span>
                    </div>
                  )}
                  {leadData.horizon && (
                    <div className="summary-item">
                      <span className="s-label">Goal Horizon:</span>
                      <span className="s-val">{leadData.horizon}</span>
                    </div>
                  )}
                  {leadData.riskComfort && (
                    <div className="summary-item">
                      <span className="s-label">Risk Comfort:</span>
                      <span className="s-val">{leadData.riskComfort}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Process Timeline */}
            <div className="thank-you-steps">
              <h3>What Happens Next?</h3>
              <div className="steps-list">
                <div className="step-card">
                  <div className="step-num">1</div>
                  <div className="step-content">
                    <strong>Preliminary Review</strong>
                    <p>
                      Our SEBI-registered advisory desk reviews your stated goal horizon
                      and risk comfort parameters.
                    </p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="step-num">2</div>
                  <div className="step-content">
                    <strong>Scheduling Your Discussion</strong>
                    <p>
                      We reach out via WhatsApp or phone to confirm a 30-minute slot
                      convenient for you.
                    </p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="step-num">3</div>
                  <div className="step-content">
                    <strong>Structured Goal-Mapping Session</strong>
                    <p>
                      We map allocation frameworks and disciplined SIP strategies tailored
                      to your milestones — completely educational with zero obligation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="thank-you-connect">
              <p className="connect-text">
                Need quick answers or want to confirm your slot right away?
              </p>
              <div className="connect-buttons">
                <a
                  href="https://wa.me/918500660421?text=Hi%20Growsin%2C%20I%20just%20submitted%20a%20goal-mapping%20session%20request%20on%20your%20website%20and%20would%20like%20to%20schedule%20my%20slot."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <span className="wa-icon">💬</span> Message on WhatsApp
                </a>
                <a href="tel:+918500660421" className="btn btn-outline">
                  <span>📞</span> Call: +91 85006 60421
                </a>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="thank-you-actions">
              <Link href="/" className="btn btn-primary">
                Explore Homepage
              </Link>
              <Link href="/investment-advisory" className="btn btn-outline">
                View Advisory Services
              </Link>
              <Link href="/marketing" className="btn btn-text">
                Back to Marketing Page
              </Link>
            </div>

            {/* Regulatory Disclaimer */}
            <div className="thank-you-disclaimer">
              <p>
                <strong>SEBI Regulatory Notice:</strong> Growsin operates as a SEBI Registered
                Investment Adviser (INA000021261) and Research Analyst (INH000023667). All
                guidance is delivered under SEBI (Investment Advisers) Regulations. Investment
                in securities markets is subject to market risks; please read all related
                documents carefully before investing.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Official Website Footer */}
      <div className="mkt-footer-area">
        <Footer bg={true} margin={160} />
      </div>
    </>
  );
}
