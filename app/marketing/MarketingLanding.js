"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./marketing.css";

const FAQ_ITEMS = [
  {
    q: "How does Growsin differ from bank relationship managers or mutual fund agents?",
    a: "Unlike traditional distributors who earn commissions on the financial products they sell you, Growsin is a SEBI-registered investment firm operating with fee transparency and zero product commissions. Our research and advice are unbiased, client-first, and anchored to your life goals.",
  },
  {
    q: "Is Growsin registered with SEBI? How can I verify your credentials?",
    a: "Yes. Growsin is registered with the Securities and Exchange Board of India (SEBI) under Registration Numbers INA000021261 (Investment Adviser) and INH000023667 (Research Analyst). You can verify our active registration directly on SEBI's official portal (sebi.gov.in) under Recognized Intermediaries.",
  },
  {
    q: "Do you take custody of my investment funds or demand account passwords?",
    a: "Never. Your money and securities always stay 100% in your own demat and bank accounts (Zerodha, Groww, AngelOne, ICICI, etc.). Growsin never asks for your trading passwords or bank credentials, and we never handle client funds directly.",
  },
  {
    q: "What actually happens in the free 30-minute Goal-Mapping Session?",
    a: "It is a 1-on-1 structured educational conversation. We review your financial milestones (retirement, home, children's education, wealth preservation), explain how risk profiling works, and show you how to structure an asset allocation plan. There is zero pressure and zero sales pitch.",
  },
  {
    q: "Do you provide daily stock tips, intraday calls, or guaranteed returns?",
    a: "No. SEBI regulations strictly prohibit guaranteed return claims, and academic research proves that intraday trading noise destroys long-term wealth. We focus on disciplined, goal-based portfolio construction, data-backed research, and scheduled reviews.",
  },
  {
    q: "What is your fee model?",
    a: "We maintain 100% upfront fee transparency in full compliance with SEBI guidelines. There are no hidden fees, no entry/exit loads, and no product kickbacks. We explain our fee schedule clearly before you ever decide to engage our services.",
  },
];

export default function MarketingLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [utms, setUtms] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedType, setSubmittedType] = useState("session"); // 'session' or 'guide'
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openFaq, setOpenFaq] = useState(0); // first open by default

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setUtms({
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
      });
    }
  }, []);

  const triggerClarityEvent = (eventName, data = {}) => {
    if (typeof window !== "undefined" && window.clarity) {
      try {
        window.clarity("event", eventName, data);
      } catch (err) {
        console.debug("Clarity event trigger error:", err);
      }
    }
  };

  const submitLead = async (type) => {
    setErrorMsg("");
    setLoading(true);
    setSubmittedType(type);

    try {
      const newLead = {
        id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        type,
        utm_source: utms.utm_source || "direct",
        utm_medium: utms.utm_medium || "none",
        utm_campaign: utms.utm_campaign || "none",
        timestamp: new Date().toISOString(),
      };

      // Store in client-side localStorage for offline retention
      if (typeof window !== "undefined" && window.localStorage) {
        try {
          const existing = JSON.parse(localStorage.getItem("growsin_leads") || "[]");
          existing.push(newLead);
          localStorage.setItem("growsin_leads", JSON.stringify(existing));
        } catch (storageErr) {
          console.debug("localStorage write note:", storageErr);
        }
      }

      // Fire Microsoft Clarity tracking event
      triggerClarityEvent("marketing_lead_submitted", {
        type,
        source: utms.utm_source || "direct",
      });

      // Dispatch lead email notification to growsinofficial@gmail.com
      try {
        await fetch("https://formsubmit.co/ajax/growsinofficial@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Lead: ${type === "session" ? "Free 1-on-1 Consultation" : "Starter Guide Download"} - ${formData.name.trim() || formData.email.trim()}`,
            _template: "table",
            _captcha: "false",
            "Full Name": formData.name.trim() || "Not provided",
            "Email Address": formData.email.trim(),
            "Phone Number": formData.phone.trim() || "Not provided",
            "Request Type": type === "session" ? "30-Min Free Goal-Mapping Session" : "Investor Starter Guide",
            "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            "UTM Source": utms.utm_source || "direct",
            "UTM Medium": utms.utm_medium || "none",
            "UTM Campaign": utms.utm_campaign || "none",
            "Page": typeof window !== "undefined" ? window.location.href : "https://www.growsin.com/invest-with-discipline",
          }),
        });
      } catch (networkErr) {
        console.warn("Email dispatch notification notice:", networkErr);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Lead submission error:", err);
      setErrorMsg("Unable to process request. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg("Please complete all required fields.");
      return;
    }
    submitLead("session");
  };

  const handleGuideRequest = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorMsg("Please enter your email address to receive the Starter Guide.");
      const emailInput = document.getElementById("em");
      if (emailInput) {
        emailInput.focus();
        emailInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    submitLead("guide");
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMsg("");
    setFormData({ name: "", email: "", phone: "" });
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="mkt-page">
      {/* ===== HEADER ===== */}
      <header className="mkt-header">
        <div className="wrap nav">
          <Link href="/" aria-label="Growsin Homepage">
            <Image
              className="logo"
              src="/img/logo.png"
              alt="Growsin — Investment Advisory & Research"
              width={130}
              height={32}
              priority
            />
          </Link>
          <a href="#book" className="btn btn-primary">
            Book a Free Session
          </a>
        </div>
      </header>

      {/* ===== 1. HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow on-dark">
              ✓ SEBI-Registered Research &amp; Education Firm
            </span>
            <h1>Learn to Invest with Discipline — Guided by SEBI-Registered Research</h1>
            <p className="sub">
              Growsin helps Indian investors understand goal-based investing through
              research-backed education, transparent methodology, and mentor-style
              guidance. No hype. No stock tips. Just process.
            </p>
            <div className="cta-row">
              <a href="#book" className="btn btn-primary">
                Book Free Goal-Mapping Session
              </a>
              <a href="#guide" className="btn btn-outline on-dark">
                Get Free Starter Guide
              </a>
            </div>
            <div className="trust-strip">
              <div className="t">
                <span className="dot"></span>SEBI Reg: INA000021261
              </div>
              <div className="t">
                <span className="dot"></span>Education-First Approach
              </div>
              <div className="t">
                <span className="dot"></span>100% Transparent Fees
              </div>
              <div className="t">
                <span className="dot"></span>No Return Promises — Ever
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="step">
              <div className="num">1</div>
              <div>
                <h3>Understand Your Goals</h3>
                <p>Risk profiling &amp; goal mapping as a structured learning exercise.</p>
              </div>
            </div>
            <div className="step">
              <div className="num">2</div>
              <div>
                <h3>Learn the Research Process</h3>
                <p>Data, fundamental analysis, and disciplined frameworks — not market noise.</p>
              </div>
            </div>
            <div className="step">
              <div className="num">3</div>
              <div>
                <h3>Build with Discipline</h3>
                <p>Goal-based model plans, reviewed and monitored over life milestones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. THE PROBLEM ===== */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Most Investing Mistakes Come from Noise — Not Lack of Intelligence</h2>
            <p>
              Tips, hot stocks, and FOMO drive most investment decisions in India today.
              Social media &ldquo;finfluencers&rdquo; promise shortcuts; markets punish
              them. Research consistently shows that a disciplined, goal-based process
              beats prediction — and that&apos;s a skill anyone can learn.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon-badge">🧭</div>
              <h3>Process over Prediction</h3>
              <p>
                Nobody can forecast markets consistently. A repeatable, research-driven
                process works through every market cycle.
              </p>
            </div>
            <div className="card">
              <div className="icon-badge">🎯</div>
              <h3>Goals over Greed</h3>
              <p>
                Investing anchored to life goals — a home, child education, retirement —
                removes fear and greed from every decision.
              </p>
            </div>
            <div className="card">
              <div className="icon-badge">🧘</div>
              <h3>Discipline over Drama</h3>
              <p>
                Scheduled rebalancing and calm, methodical adjustments beat reacting to
                every breaking headline and unverified tip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. WHO THIS IS FOR / NOT FOR ===== */}
      <section className="soft">
        <div className="wrap">
          <div className="sec-head">
            <h2>Is Growsin Right for You?</h2>
            <p>
              We believe in complete transparency. We only work with investors where our
              philosophy creates genuine, lasting value.
            </p>
          </div>
          <div className="fit-grid">
            <div className="fit-card is-for">
              <div className="fit-header">
                <div className="fit-badge">✓</div>
                <h3>Growsin Is For You If</h3>
              </div>
              <ul className="fit-list">
                <li>
                  <span className="fit-ck">✓</span>
                  <div>
                    <strong>Long-term Wealth Builders:</strong> You want a disciplined,
                    multi-year strategy for retirement, family security, or financial freedom.
                  </div>
                </li>
                <li>
                  <span className="fit-ck">✓</span>
                  <div>
                    <strong>Tired of Tipsters &amp; Hype:</strong> You recognize that social
                    media calls and telegram groups destroy capital, and you want real research.
                  </div>
                </li>
                <li>
                  <span className="fit-ck">✓</span>
                  <div>
                    <strong>Full Custody of Your Money:</strong> You want professional advice
                    while keeping 100% control of your own demat and bank accounts.
                  </div>
                </li>
                <li>
                  <span className="fit-ck">✓</span>
                  <div>
                    <strong>Value Unbiased Guidance:</strong> You appreciate working with a
                    SEBI-registered advisor that earns no hidden product commissions.
                  </div>
                </li>
              </ul>
            </div>

            <div className="fit-card not-for">
              <div className="fit-header">
                <div className="fit-badge">✕</div>
                <h3>Growsin Is NOT For You If</h3>
              </div>
              <ul className="fit-list">
                <li>
                  <span className="fit-ck">✕</span>
                  <div>
                    <strong>Intraday &amp; F&amp;O Traders:</strong> We do not offer daily calls,
                    options buying tips, or speculative day-trading signals.
                  </div>
                </li>
                <li>
                  <span className="fit-ck">✕</span>
                  <div>
                    <strong>Guaranteed Return Seekers:</strong> Markets carry risk. Anyone promising
                    assured returns is violating SEBI regulations.
                  </div>
                </li>
                <li>
                  <span className="fit-ck">✕</span>
                  <div>
                    <strong>Get-Rich-Quick Mindset:</strong> Wealth compounding takes patience,
                    discipline, and asset allocation, not lottery tickets.
                  </div>
                </li>
                <li>
                  <span className="fit-ck">✕</span>
                  <div>
                    <strong>Passive Delegators:</strong> We believe in investor education. We want
                    you to understand the rationale behind every decision.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. WHAT WE TEACH ===== */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>What We Help You Learn &amp; Apply</h2>
            <p>
              Every engagement starts with education — so every decision you make is
              informed, disciplined, and yours.
            </p>
          </div>
          <div className="cards four">
            <div className="card">
              <div className="icon-badge">🧩</div>
              <h3>Understand Your Goals</h3>
              <p>
                Risk profiling and goal mapping taught as a structured learning
                exercise, so every plan starts with you.
              </p>
            </div>
            <div className="card">
              <div className="icon-badge">🔬</div>
              <h3>Research-Driven Methodology</h3>
              <p>
                See how professional research actually works — data, financial analysis,
                and disciplined frameworks instead of market noise.
              </p>
            </div>
            <div className="card">
              <div className="icon-badge">📊</div>
              <h3>Inside a Model Portfolio</h3>
              <p>
                Explore how a professionally constructed, goal-based model portfolio is
                built: asset allocation logic, risk controls, and rebalancing rules.
              </p>
            </div>
            <div className="card">
              <div className="icon-badge">🔁</div>
              <h3>Reviews &amp; Monitoring</h3>
              <p>
                Learn the discipline of scheduled reviews and how portfolios stay
                aligned with your life goals through bull and bear markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. MODEL PORTFOLIO FRAMEWORK ===== */}
      <section className="soft">
        <div className="wrap">
          <div className="sec-head">
            <h2>Inside Our Research Framework: The Balanced Core Case Study</h2>
            <p>
              An educational look at how a disciplined asset allocation framework manages
              downside risk while compounding long-term capital.
            </p>
          </div>
          <div className="portfolio-box">
            <p className="portfolio-desc">
              Rather than gambling on single hot picks, institutional research builds
              resilient allocation buckets where each asset class plays a specific role:
            </p>
            <div className="alloc-bar" aria-hidden="true">
              <div className="alloc-seg-1" title="Core Equity Anchor (50%)"></div>
              <div className="alloc-seg-2" title="Mid-Cap Alpha Growth (20%)"></div>
              <div className="alloc-seg-3" title="Defensive & Liquid Debt (20%)"></div>
              <div className="alloc-seg-4" title="Gold & Inflation Hedge (10%)"></div>
            </div>
            <div className="alloc-grid">
              <div className="alloc-card">
                <div className="alloc-top">
                  <span className="alloc-tag">
                    <span className="alloc-tag-dot" style={{ background: "#0a4272" }}></span>
                    Core Equity Anchor
                  </span>
                  <span className="alloc-pct">50%</span>
                </div>
                <p>High-quality leaders with strong balance sheets to compound steadily across cycles.</p>
              </div>

              <div className="alloc-card">
                <div className="alloc-top">
                  <span className="alloc-tag">
                    <span className="alloc-tag-dot" style={{ background: "#1f9a32" }}></span>
                    Quality Growth Alpha
                  </span>
                  <span className="alloc-pct">20%</span>
                </div>
                <p>Carefully screened emerging companies with high ROCE and expanding market share.</p>
              </div>

              <div className="alloc-card">
                <div className="alloc-top">
                  <span className="alloc-tag">
                    <span className="alloc-tag-dot" style={{ background: "#0284c7" }}></span>
                    Defensive &amp; Liquid
                  </span>
                  <span className="alloc-pct">20%</span>
                </div>
                <p>High-grade short duration instruments for capital stability and opportunistic rebalancing.</p>
              </div>

              <div className="alloc-card">
                <div className="alloc-top">
                  <span className="alloc-tag">
                    <span className="alloc-tag-dot" style={{ background: "#f59e0b" }}></span>
                    Gold &amp; Hedge
                  </span>
                  <span className="alloc-pct">10%</span>
                </div>
                <p>Sovereign gold and tactical hedges to protect purchasing power during macroeconomic volatility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. TRUST & COMPLIANCE ===== */}
      <section>
        <div className="wrap">
          <div className="compliance">
            <span className="eyebrow on-dark">
              Regulated · Transparent · Accountable
            </span>
            <h2>Compliance Isn&apos;t Our Fine Print. It&apos;s Our Foundation.</h2>
            <p className="lead">
              In an industry crowded with unregistered tip sellers, Growsin operates under
              SEBI&apos;s regulatory framework — with documented processes, a formal
              grievance path, and complete fee transparency.
            </p>
            <div className="sebi-number">
              SEBI Reg. No: INA000021261 (IA) &bull; INH000023667 (RA)
            </div>
            <div className="comp-grid">
              <div className="comp-item">
                <strong>SEBI-Compliant Operations</strong>
                We follow SEBI regulations and circulars for Investor Charters, fair
                practices, and transparency in every engagement.
              </div>
              <div className="comp-item">
                <strong>Formal Grievance Redressal</strong>
                Escalate any unresolved concern via SEBI SCORES (
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  scores.sebi.gov.in
                </a>
                ) or SMART ODR (
                <a
                  href="https://smartodr.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  smartodr.in
                </a>
                ). Compliance officer:{" "}
                <a href="mailto:info@growsin.com">info@growsin.com</a>.
              </div>
              <div className="comp-item">
                <strong>Secure, Documented Payments Only</strong>
                Fees are accepted only via bank transfer, UPI, or documented banking
                channels. Never cash, never third-party transfers.
              </div>
              <div className="comp-item">
                <strong>Your Data, Protected</strong>
                Sensitive data is encrypted in transit and at rest. We never ask for your
                trading or banking login credentials.
              </div>
            </div>
            <div className="disclaimer-box">
              <strong style={{ color: "#fff" }}>Important Disclosure:</strong>{" "}
              Investment in securities market are subject to market risks. Read all the
              related documents carefully before investing. Past performance is not
              indicative of future returns. Registration granted by SEBI and
              certification from NISM in no way guarantee performance of the
              intermediary or provide any assurance of returns to investors.
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. SOCIAL PROOF ===== */}
      <section className="soft">
        <div className="wrap">
          <div className="sec-head">
            <h2>What Clients Say About the Process</h2>
            <p>Clarity, discipline, and peace of mind — in their words.</p>
          </div>
          <div className="testi">
            <div className="quote">
              <div className="stars">★★★★★</div>
              &ldquo;For the first time, I actually understood what my portfolio was
              doing and why. The goal-mapping session changed my entire perspective.&rdquo;
              <div className="who">— Client Review, Bengaluru</div>
            </div>
            <div className="quote">
              <div className="stars">★★★★★</div>
              &ldquo;No tips, no pressure, and zero commissions — just a clear,
              rigorous framework I could trust and follow.&rdquo;
              <div className="who">— Client Review, Pune</div>
            </div>
            <div className="quote">
              <div className="stars">★★★★★</div>
              &ldquo;The discipline of scheduled reviews took away the anxiety of
              checking stock prices daily. Highly recommended for busy professionals.&rdquo;
              <div className="who">— Client Review, Mumbai</div>
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <div className="big">170+</div>
              <div className="lbl">Markets &amp; Geographies Researched</div>
            </div>
            <div className="stat">
              <div className="big">100%</div>
              <div className="lbl">Commitment to Client-First Advisory</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. APPROACH TIMELINE ===== */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Our Approach: How We Help You Grow Significantly</h2>
            <p>
              A simple, transparent journey from confusion to a disciplined, goal-based
              plan.
            </p>
          </div>
          <div className="timeline timeline-wrap">
            <div className="tl">
              <h3>Understand Your Goals</h3>
              <p>
                Personalized consultation, a complete financial snapshot, and risk
                profiling — so every plan is built around you.
              </p>
            </div>
            <div className="tl">
              <h3>Research-Driven Recommendations</h3>
              <p>
                Data-backed insights, SEBI-aligned practices, and a long-term lens that
                avoids short-term noise.
              </p>
            </div>
            <div className="tl">
              <h3>Customized Plans + Monitoring</h3>
              <p>
                Goal-based portfolios with risk management and tax-aware design —
                implemented, reviewed, and adjusted as your life evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. FAQ SECTION ===== */}
      <section className="soft">
        <div className="wrap">
          <div className="sec-head">
            <h2>Frequently Asked Questions</h2>
            <p>Clear answers to common questions about our research and advisory services.</p>
          </div>
          <div className="faq-wrap">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className="faq-content">{item.a}</div>}
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <p style={{ fontSize: "15px", color: "var(--muted)" }}>
              Have another question? Reach out to our research team directly at{" "}
              <a href="mailto:info@growsin.com" style={{ color: "var(--navy-2)", fontWeight: "600" }}>
                info@growsin.com
              </a>{" "}
              or call{" "}
              <a href="tel:+918500660421" style={{ color: "var(--navy-2)", fontWeight: "600" }}>
                +91 85006 60421
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 10. FINAL CTA + FORM ===== */}
      <section className="final-cta" id="book">
        <div className="wrap final-grid">
          <div>
            <h2>
              Start Your Journey Toward Financial Independence — the Disciplined Way
            </h2>
            <p className="lead">
              Book a free 30-minute Goal-Mapping Session with our team, or start with the
              free Investor Starter Guide.
            </p>
            <ul className="check-list">
              <li>
                <span className="ck">✓</span> A structured conversation about your
                goals — not a sales pitch
              </li>
              <li>
                <span className="ck">✓</span> Learn how risk profiling and goal mapping
                actually work
              </li>
              <li>
                <span className="ck">✓</span> Understand our transparent fee structure
                upfront
              </li>
              <li>
                <span className="ck">✓</span> Zero obligation — the session is
                educational, always
              </li>
              <li>
                <span className="ck">✓</span> Your contact information is never shared or spammed
              </li>
            </ul>
          </div>
          <div className="form-card" id="guide">
            <h3>Book Your Free Session</h3>
            <p className="fs">30 minutes. No documents needed. Just bring your questions.</p>

            {errorMsg && <div className="form-error">{errorMsg}</div>}

            {submitted ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h4>
                  {submittedType === "session"
                    ? "Thank You! Your Session Is Requested."
                    : "Your Starter Guide Is On Its Way!"}
                </h4>
                <p>
                  {submittedType === "session"
                    ? `We have received your details (${formData.email}). A Growsin research advisor will reach out to you shortly to confirm your preferred time slot.`
                    : `We will email the Investor Starter Guide to ${formData.email} shortly.`}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleReset}
                    style={{ fontSize: "14px", padding: "12px 20px" }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="nm">Full Name *</label>
                  <input
                    id="nm"
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="em">Email Address *</label>
                  <input
                    id="em"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="ph">Phone Number *</label>
                  <input
                    id="ph"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <button className="btn btn-primary" type="submit" disabled={loading}>
                  {loading
                    ? "Submitting..."
                    : "Book My Free 30-Min Goal-Mapping Session"}
                </button>
                <button
                  type="button"
                  className="form-alt"
                  onClick={handleGuideRequest}
                  disabled={loading}
                  style={{ width: "100%" }}
                >
                  or Send Me the Free Investor Starter Guide →
                </button>
                <p className="microcopy">
                  Strictly no spam. No sales pressure. All consultation is confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mkt-footer">
        <div className="wrap">
          <div className="f-grid">
            <div>
              <Image
                className="logo"
                src="/img/logo.png"
                alt="Growsin"
                width={140}
                height={36}
              />
              <p>
                Growsin is a SEBI-registered investment research and financial
                education firm. We provide risk profiling, goal-based financial
                planning, investment advice, portfolio review, research &amp;
                financial education, and bespoke wealth management.
              </p>
            </div>
            <div>
              <h4>Compliance &amp; Contact</h4>
              <p>
                SEBI Registration No: INA000021261 (IA) &bull; INH000023667 (RA)
                <br />
                Registered Address: Visakhapatnam, Andhra Pradesh, India
                <br />
                Compliance Officer: Murali Sivvala (
                <a href="mailto:info@growsin.com">info@growsin.com</a>)
                <br />
                Support: <a href="mailto:support@growsin.com">support@growsin.com</a>
                <br />
                Phone: <a href="tel:+918500660421">+91 85006 60421</a>
                <br />
                Grievance Redressal:{" "}
                <a
                  href="https://scores.sebi.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEBI SCORES
                </a>{" "}
                &bull;{" "}
                <a
                  href="https://smartodr.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SMART ODR
                </a>
              </p>
              <p style={{ marginTop: "12px" }}>
                <Link href="/privacy-policy">Privacy Policy</Link> &bull;{" "}
                <Link href="/terms-conditions">Terms of Use</Link> &bull;{" "}
                <Link href="/disclosure">Disclosures</Link>
              </p>
            </div>
          </div>
          <div className="f-disc">
            Investment in securities market are subject to market risks. Read all the
            related documents carefully before investing. Past performance is not
            indicative of future returns. Registration granted by SEBI and
            certification from NISM in no way guarantee performance of the
            intermediary or provide any assurance of returns to investors. Growsin does
            not offer guaranteed returns, stock tips, or assured-profit schemes of any
            kind. All content on this page is for investor education and awareness
            purposes.
          </div>
        </div>
      </footer>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="sticky-cta">
        <a href="#book" className="btn btn-primary">
          Book Free Session
        </a>
        <a href="#guide" className="btn btn-outline">
          Investor Guide
        </a>
      </div>
    </div>
  );
}
