"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/layouts/Footer";
import "./marketing.css";

export default function MarketingLanding() {
  const router = useRouter();

  // 3-Tier Case Study Tab State
  const [activeTier, setActiveTier] = useState("conservative");

  // Instalment Visualizer State
  const [sipAmount, setSipAmount] = useState(15000);
  const [horizonIndex, setHorizonIndex] = useState(1);
  const horizonYears = [3, 5, 10];
  const horizonLabels = ["3 Years", "5 Years", "10+ Years"];

  const currentYears = horizonYears[horizonIndex];
  const currentHorizonLabel = horizonLabels[horizonIndex];
  const totalCapital = sipAmount * 12 * currentYears;

  const formatINR = (val) => "₹" + val.toLocaleString("en-IN");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Form State - all fields mandatory
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    horizon: "",
    riskComfort: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your Full Name.");
      return;
    }
    if (!formData.email.trim()) {
      alert("Please enter your Email Address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number (10 digits only, no +91).");
      return;
    }
    if (!formData.horizon) {
      alert("Please select your Primary Goal Horizon.");
      return;
    }
    if (!formData.riskComfort) {
      alert("Please select your Risk Comfort.");
      return;
    }
    setLoading(true);

    // Save lead in sessionStorage for thank-you page display
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("growsin_lead", JSON.stringify(formData));
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "lead_form_submitted",
            lead_source: "marketing_landing",
            lead_horizon: formData.horizon,
            lead_risk: formData.riskComfort,
          });
        }
      } catch (err) {
        // ignore
      }
    }

    const leadPayload = {
      name: formData.name.trim(),
      phone: "+91 " + formData.phone.trim(),
      email: formData.email.trim(),
      horizon: formData.horizon,
      riskComfort: formData.riskComfort,
      "Full Name": formData.name.trim(),
      "Mobile Number": "+91 " + formData.phone.trim(),
      "Email Address": formData.email.trim(),
      "Primary Goal Horizon": formData.horizon,
      "Risk Comfort": formData.riskComfort,
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      _subject: `New Goal-Mapping Lead: ${formData.name.trim()} (${formData.phone.trim()})`,
      _template: "table",
      _captcha: "false",
    };

    // Parallel dispatch: FormSubmit + Google Sheets Webhook
    const sheetWebhook =
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbxj3JFcjw6ZYQ-kgAOUPUyYMfGq90jMVhV97DTLunS1rKe_5qgFnHynG8nWugG3Sk5s/exec";
    const dispatchPromises = [
      fetch("https://formsubmit.co/ajax/growsinofficial@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(leadPayload),
      }),
    ];

    if (sheetWebhook) {
      dispatchPromises.push(
        fetch(sheetWebhook, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(leadPayload),
        })
      );
    }

    try {
      await Promise.allSettled(dispatchPromises);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
      const targetUrl = "/thank-you";
      if (router && typeof router.push === "function") {
        router.push(targetUrl);
      } else if (typeof window !== "undefined") {
        window.location.href = targetUrl;
      }
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      horizon: "",
      riskComfort: "",
    });
  };

  return (
    <>
      <div className="mkt-page">
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
          <a href="#session" className="btn btn-primary">
            Schedule a Session
          </a>
        </div>
        <div className="reg-banner">
          <strong>SEBI Registered Investment Adviser (IA: INA000021261)</strong>
          <span className="sep">|</span>
          <strong>Research Analyst (RA: INH000023667)</strong>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">
              📘 Investor Education &bull; Monthly SIP Frameworks
            </span>
            <h1>How Goal-Based Model Portfolios Are Built for Monthly SIP Investing</h1>
            <p className="sub">
              Explore the asset allocation logic behind professionally constructed,
              goal-based model portfolios — risk parameters, time horizons, and
              rebalancing discipline — presented strictly as educational case
              studies by a SEBI-registered Investment Adviser &amp; Research Analyst.
            </p>
            <div className="cta-row">
              <a href="#case-studies" className="btn btn-primary">
                Explore the Case Studies
              </a>
              <a href="#session" className="btn btn-outline on-dark">
                Schedule a Goal-Mapping Session
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <h3>What this page will teach you</h3>
            <div className="hero-teach-item">
              <span className="ic">✓</span>
              <span className="hero-teach-text">
                How asset allocation shifts across Conservative, Moderate &amp; Aggressive risk profiles
              </span>
            </div>
            <div className="hero-teach-item">
              <span className="ic">✓</span>
              <span className="hero-teach-text">
                Why time horizon (3–5 vs 5–10 vs 10+ years) changes the equity–debt mix
              </span>
            </div>
            <div className="hero-teach-item">
              <span className="ic">✓</span>
              <span className="hero-teach-text">
                How monthly SIP instalments apply rupee-cost averaging inside a structured framework
              </span>
            </div>
            <div className="hero-teach-item">
              <span className="ic">✓</span>
              <span className="hero-teach-text">
                What rebalancing rules keep a model portfolio aligned with its risk mandate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATIONAL CASE STUDY MODULE (3-TIER TOGGLE) ===== */}
      <section className="soft" id="case-studies">
        <div className="wrap">
          <div className="sec-head">
            <span className="module-tag">📊 Educational Model Portfolio Case Studies</span>
            <h2>See How Allocation Logic Shifts Across Risk Profiles</h2>
          </div>
          <p className="case-note">
            These illustrative models demonstrate how asset allocation logic dynamically
            shifts across broad risk parameters and time horizons. For example, a{" "}
            <strong>Moderate</strong> profile typically balances short-duration debt and
            large-cap equity over a 5–10 year timeline, while Conservative and Aggressive
            profiles tilt the same building blocks toward stability or growth. All
            allocations below are hypothetical educational illustrations — not
            investment recommendations or return expectations.
          </p>

          <div className="tier-tabs" role="tablist" aria-label="Risk profile selection">
            <button
              type="button"
              className={`tier-tab ${activeTier === "conservative" ? "active" : ""}`}
              onClick={() => setActiveTier("conservative")}
              role="tab"
              aria-selected={activeTier === "conservative"}
            >
              🛡️ Conservative
            </button>
            <button
              type="button"
              className={`tier-tab ${activeTier === "moderate" ? "active" : ""}`}
              onClick={() => setActiveTier("moderate")}
              role="tab"
              aria-selected={activeTier === "moderate"}
            >
              ⚖️ Moderate
            </button>
            <button
              type="button"
              className={`tier-tab ${activeTier === "aggressive" ? "active" : ""}`}
              onClick={() => setActiveTier("aggressive")}
              role="tab"
              aria-selected={activeTier === "aggressive"}
            >
              📈 Aggressive
            </button>
          </div>

          {/* CONSERVATIVE */}
          <div
            className={`tier-panel ${activeTier === "conservative" ? "active" : ""}`}
            id="tier-conservative"
          >
            <div className="tier-card">
              <div className="tier-head">
                <h3>Conservative Profile</h3>
                <span className="pill">
                  Illustrative horizon: 3–5 years &bull; Priority: capital stability
                </span>
              </div>
              <div className="tier-body">
                <div className="tier-col">
                  <h4>Illustrative Allocation Mix</h4>
                  <div className="alloc-row">
                    <span>Short-duration &amp; liquid debt funds</span>
                    <span className="amt">65%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "65%" }}></i>
                  </div>
                  <div className="alloc-row">
                    <span>Large-cap equity index funds</span>
                    <span className="amt">25%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "25%" }}></i>
                  </div>
                  <div className="alloc-row">
                    <span>Gold (via regulated instruments)</span>
                    <span className="amt">10%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "10%" }}></i>
                  </div>
                </div>
                <div className="tier-col">
                  <h4>Why It&apos;s Built This Way</h4>
                  <ul className="logic-list">
                    <li>
                      <span className="ck">✓</span>
                      <span>Shorter horizons leave little room to recover from equity drawdowns, so debt anchors the mix.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>A modest large-cap allocation introduces growth exposure without dominating risk.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>Monthly SIP instalments smooth entry points — particularly valuable for the equity sleeve.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>Rebalancing trigger: reviewed when any sleeve drifts &plusmn;5% from its target weight.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tier-foot">
                <strong>Educational note:</strong> This case study illustrates
                allocation logic only. Actual recommendations require individual risk
                profiling and are made only under our SEBI IA framework. No past,
                present, or future performance is stated or implied.
              </div>
            </div>
          </div>

          {/* MODERATE */}
          <div
            className={`tier-panel ${activeTier === "moderate" ? "active" : ""}`}
            id="tier-moderate"
          >
            <div className="tier-card">
              <div className="tier-head">
                <h3>Moderate Profile</h3>
                <span className="pill">
                  Illustrative horizon: 5–10 years &bull; Priority: balanced growth
                </span>
              </div>
              <div className="tier-body">
                <div className="tier-col">
                  <h4>Illustrative Allocation Mix</h4>
                  <div className="alloc-row">
                    <span>Large-cap &amp; flexi-cap equity funds</span>
                    <span className="amt">55%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "55%" }}></i>
                  </div>
                  <div className="alloc-row">
                    <span>Short-duration &amp; corporate debt funds</span>
                    <span className="amt">35%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "35%" }}></i>
                  </div>
                  <div className="alloc-row">
                    <span>Gold (via regulated instruments)</span>
                    <span className="amt">10%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "10%" }}></i>
                  </div>
                </div>
                <div className="tier-col">
                  <h4>Why It&apos;s Built This Way</h4>
                  <ul className="logic-list">
                    <li>
                      <span className="ck">✓</span>
                      <span>A 5–10 year window lets equity compound while the debt sleeve cushions interim volatility.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>Short-duration debt is preferred over long-duration to limit interest-rate sensitivity.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>Monthly SIPs distribute equity purchases across market levels — no timing decisions required.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>Rebalancing trigger: semi-annual review, or &plusmn;7.5% drift, whichever comes first.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tier-foot">
                <strong>Educational note:</strong> This case study illustrates
                allocation logic only. Actual recommendations require individual risk
                profiling and are made only under our SEBI IA framework. No past,
                present, or future performance is stated or implied.
              </div>
            </div>
          </div>

          {/* AGGRESSIVE */}
          <div
            className={`tier-panel ${activeTier === "aggressive" ? "active" : ""}`}
            id="tier-aggressive"
          >
            <div className="tier-card">
              <div className="tier-head">
                <h3>Aggressive Profile</h3>
                <span className="pill">
                  Illustrative horizon: 10+ years &bull; Priority: long-term growth
                </span>
              </div>
              <div className="tier-body">
                <div className="tier-col">
                  <h4>Illustrative Allocation Mix</h4>
                  <div className="alloc-row">
                    <span>Diversified equity (large, mid &amp; flexi-cap funds)</span>
                    <span className="amt">80%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "80%" }}></i>
                  </div>
                  <div className="alloc-row">
                    <span>Debt funds (stability sleeve)</span>
                    <span className="amt">12%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "12%" }}></i>
                  </div>
                  <div className="alloc-row">
                    <span>Gold (via regulated instruments)</span>
                    <span className="amt">8%</span>
                  </div>
                  <div className="bar">
                    <i style={{ width: "8%" }}></i>
                  </div>
                </div>
                <div className="tier-col">
                  <h4>Why It&apos;s Built This Way</h4>
                  <ul className="logic-list">
                    <li>
                      <span className="ck">✓</span>
                      <span>Decade-plus horizons historically allow investors to ride out full market cycles.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>A small debt sleeve exists for rebalancing — buying equity when markets fall.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>SIP discipline matters most here: consistent instalments through downturns define the outcome.</span>
                    </li>
                    <li>
                      <span className="ck">✓</span>
                      <span>Rebalancing trigger: annual review, or &plusmn;10% drift — wider bands suit longer horizons.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tier-foot">
                <strong>Educational note:</strong> This case study illustrates
                allocation logic only. Actual recommendations require individual risk
                profiling and are made only under our SEBI IA framework. No past,
                present, or future performance is stated or implied.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW MONTHLY SIP FITS THE FRAMEWORK ===== */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Why Monthly SIPs Pair Naturally with Model Frameworks</h2>
            <p>
              A systematic instalment plan is an execution discipline — the framework
              decides <em>where</em> each instalment goes.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="icon-badge">🧮</div>
              <h3>Rupee-Cost Averaging, Explained</h3>
              <p>
                Fixed monthly instalments automatically buy more units when prices fall
                and fewer when they rise — removing the impossible task of timing
                markets.
              </p>
            </div>
            <div className="card">
              <div className="icon-badge">🧭</div>
              <h3>Allocation Does the Heavy Lifting</h3>
              <p>
                Research on portfolio behaviour consistently attributes most outcome
                variation to the asset mix — not to fund-picking or entry timing.
              </p>
            </div>
            <div className="card">
              <div className="icon-badge">🔁</div>
              <h3>Rebalancing Keeps Risk Honest</h3>
              <p>
                Without periodic rebalancing, a growing equity sleeve quietly turns a
                Moderate plan into an Aggressive one. Frameworks prevent that drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTALMENT DISCIPLINE VISUALIZER ===== */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="module-tag">🧮 Interactive Learning Tool</span>
            <h2>The Instalment Discipline Visualizer</h2>
            <p>
              See what disciplined execution looks like in its simplest form — the
              capital you commit, on a schedule you control. No projections, no
              promises: just the arithmetic of consistency.
            </p>
          </div>
          <div className="viz-card">
            <div className="viz-sliders">
              <div className="viz-field">
                <label htmlFor="sipAmt">
                  <span>Monthly Instalment Amount</span>
                  <span className="val">{formatINR(sipAmount)}</span>
                </label>
                <input
                  type="range"
                  id="sipAmt"
                  min="5000"
                  max="50000"
                  step="1000"
                  value={sipAmount}
                  onChange={(e) => setSipAmount(parseInt(e.target.value, 10))}
                  aria-label="Monthly Instalment Amount"
                />
                <div className="viz-ticks">
                  <span>₹5,000</span>
                  <span>₹50,000</span>
                </div>
              </div>
              <div className="viz-field">
                <label htmlFor="sipHz">
                  <span>Time Horizon</span>
                  <span className="val">{currentHorizonLabel}</span>
                </label>
                <input
                  type="range"
                  id="sipHz"
                  min="0"
                  max="2"
                  step="1"
                  value={horizonIndex}
                  onChange={(e) => setHorizonIndex(parseInt(e.target.value, 10))}
                  aria-label="Time Horizon"
                />
                <div className="viz-ticks">
                  <span>3 Years</span>
                  <span>5 Years</span>
                  <span>10+ Years</span>
                </div>
              </div>
            </div>
            <div className="viz-result">
              <div className="cap">Total Invested Capital Over Selected Horizon</div>
              <div className="amt">{formatINR(totalCapital)}</div>
              <div className="viz-formula">
                {formatINR(sipAmount)} &times; 12 months &times; {currentYears} years —
                capital only, before any market movement
              </div>
            </div>
            <div className="viz-edu">
              💡 <strong>Disciplined Execution:</strong> Instead of trying to guess
              market peaks or bottoms, fixed monthly instalments utilize Rupee-Cost
              Averaging. This mechanical framework automatically accumulates more units
              when asset prices dip and fewer when they rise — smoothing out volatility
              within your chosen time horizon.
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOAL-MAPPING SESSION FORM ===== */}
      <section className="session" id="session">
        <div className="wrap session-grid">
          <div>
            <span className="eyebrow">🤝 A Collaborative Educational Exercise</span>
            <h2>Schedule a Structured 30-Minute Goal-Mapping Session</h2>
            <p className="lead">
              This is not an investment sign-up. It&apos;s a guided exercise where we help
              you map your individual risk boundaries, time horizons, and life goals — so
              you can see which educational framework resembles your situation, and why.
            </p>
            <ul className="check-list">
              <li className="check-item">
                <span className="ck">✓</span>
                <span className="check-text">
                  Map your risk comfort zone using a structured profiling exercise
                </span>
              </li>
              <li className="check-item">
                <span className="ck">✓</span>
                <span className="check-text">
                  Define your time horizons — short, medium, and long-term goals
                </span>
              </li>
              <li className="check-item">
                <span className="ck">✓</span>
                <span className="check-text">
                  Understand which case-study logic applies to your profile, and why
                </span>
              </li>
              <li className="check-item">
                <span className="ck">✓</span>
                <span className="check-text">
                  Ask anything — the session is educational, with zero obligation
                </span>
              </li>
            </ul>
          </div>
          <div className="form-card">
            <h3>Your Goal-Mapping Exercise Starts Here</h3>
            <p className="fs">
              Tell us how to reach you and what you&apos;d like to explore. No financial
              details needed — we&apos;ll map those together during the session.
            </p>

            {submitted ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h4>Thank You! Your Session Is Requested.</h4>
                <p>
                  We have received your details ({formData.email}, {formData.phone}). A Growsin advisor
                  will reach out to you shortly to schedule your personalized
                  goal-mapping session.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleReset}
                  style={{ fontSize: "14px", padding: "10px 20px" }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="nm">Full Name *</label>
                  <input
                    id="nm"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="field-row">
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
                    <label htmlFor="ph">Mobile Number (10 digits only) *</label>
                    <input
                      id="ph"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => {
                        let numericOnly = e.target.value.replace(/\D/g, "");
                        if (numericOnly.length === 12 && numericOnly.startsWith("91")) {
                          numericOnly = numericOnly.slice(2);
                        } else if (numericOnly.length === 11 && numericOnly.startsWith("0")) {
                          numericOnly = numericOnly.slice(1);
                        }
                        setFormData({ ...formData, phone: numericOnly.slice(0, 10) });
                      }}
                      required
                    />
                    <span className="field-hint">10 digits only (no +91)</span>
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="hz">Primary Goal Horizon *</label>
                    <select
                      id="hz"
                      value={formData.horizon}
                      onChange={(e) =>
                        setFormData({ ...formData, horizon: e.target.value })
                      }
                      required
                    >
                      <option value="" disabled>-- Select Goal Horizon --</option>
                      <option value="Short term (under 3 years)">Short term (under 3 years)</option>
                      <option value="Medium term (3–7 years)">Medium term (3–7 years)</option>
                      <option value="Long term (7+ years)">Long term (7+ years)</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="rk">Risk Comfort *</label>
                    <select
                      id="rk"
                      value={formData.riskComfort}
                      onChange={(e) =>
                        setFormData({ ...formData, riskComfort: e.target.value })
                      }
                      required
                    >
                      <option value="" disabled>-- Select Risk Comfort --</option>
                      <option value="Conservative (prefer capital stability)">Conservative (prefer capital stability)</option>
                      <option value="Moderate (balanced growth & stability)">Moderate (balanced growth & stability)</option>
                      <option value="Aggressive (higher growth, accepts volatility)">Aggressive (higher growth, accepts volatility)</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary" type="submit" disabled={loading}>
                  {loading ? "Scheduling..." : "Schedule My Goal-Mapping Session"}
                </button>
                {/* Anchored risk clause directly under submit button */}
                <div className="risk-anchor">
                  <strong>Important:</strong> Investment in the securities market is
                  subject to market risks. All model frameworks are displayed strictly
                  for educational case-study analysis.
                </div>
              </form>
            )}
            <p className="microcopy">
              No spam. No sales pressure. Your details are used only to schedule your session.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ FRAMEWORK ===== */}
      <section className="soft">
        <div className="wrap">
          <div className="sec-head">
            <h2>📋 Frequently Asked Questions</h2>
            <p>Straight answers — no fine print.</p>
          </div>
          <div className="faq">
            <div className={`faq-item ${openFaq === 0 ? "open" : ""}`}>
              <button
                className="faq-q"
                type="button"
                onClick={() => toggleFaq(0)}
                aria-expanded={openFaq === 0}
              >
                <span>Is this a mutual fund distribution platform or a robo-advisor?</span>
                <span className="pm">+</span>
              </button>
              <div className="faq-a">
                <div className="inner">
                  Neither. Growsin is a dual-registered SEBI Investment Adviser &amp;
                  Research Analyst. We do not sell mutual funds, distribute third-party
                  schemes, or collect hidden trail commissions from asset managers. We
                  provide unbiased, data-backed asset allocation logic and research
                  reports tailored entirely to your personal goals.
                </div>
              </div>
            </div>

            <div className={`faq-item ${openFaq === 1 ? "open" : ""}`}>
              <button
                className="faq-q"
                type="button"
                onClick={() => toggleFaq(1)}
                aria-expanded={openFaq === 1}
              >
                <span>
                  Will you tell me exactly which mutual fund schemes to buy during the
                  Goal-Mapping session?
                </span>
                <span className="pm">+</span>
              </button>
              <div className="faq-a">
                <div className="inner">
                  No. The 30-minute session is a collaborative educational exercise to
                  map your risk boundaries and time horizons. Specific scheme
                  recommendations and formal advisory portfolios are exclusively
                  executed under our comprehensive SEBI Investment Advisory framework
                  after a full, separate client onboarding process.
                </div>
              </div>
            </div>

            <div className={`faq-item ${openFaq === 2 ? "open" : ""}`}>
              <button
                className="faq-q"
                type="button"
                onClick={() => toggleFaq(2)}
                aria-expanded={openFaq === 2}
              >
                <span>
                  Why do your model portfolios use broad categories instead of specific
                  stock or fund tips?
                </span>
                <span className="pm">+</span>
              </button>
              <div className="faq-a">
                <div className="inner">
                  Independent financial research proves that over 90% of a portfolio’s
                  long-term performance variation is driven by broad asset allocation —
                  not by chasing short-term fund managers or trying to time entry points.
                  We focus on building robust category frameworks that keep your risk
                  controlled across market cycles.
                </div>
              </div>
            </div>

            <div className={`faq-item ${openFaq === 3 ? "open" : ""}`}>
              <button
                className="faq-q"
                type="button"
                onClick={() => toggleFaq(3)}
                aria-expanded={openFaq === 3}
              >
                <span>Are there any hidden fees or charges for scheduling this session?</span>
                <span className="pm">+</span>
              </button>
              <div className="faq-a">
                <div className="inner">
                  No. The introductory goal-mapping session is 100% educational with
                  zero commercial obligation. Any future engagement with our research
                  or advisory services is fully transparent, flat fee-based, and
                  strictly documented via bank transfer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <h2>Regulated. Transparent. Client-First.</h2>
            <p>
              Growsin operates under SEBI&apos;s regulatory framework — with documented
              processes, a formal grievance path, and complete fee transparency.
            </p>
          </div>
          <div className="trust-grid">
            <div className="trust-item">
              <strong>Dual SEBI Registration</strong>
              Investment Adviser (INA000021261) &amp; Research Analyst (INH000023667)
            </div>
            <div className="trust-item">
              <strong>Formal Grievance Path</strong>
              SEBI SCORES &amp; SMART ODR escalation, with a designated Compliance Officer
            </div>
            <div className="trust-item">
              <strong>Documented Payments Only</strong>
              Fees via bank transfer / UPI only — never cash or third-party transfers
            </div>
            <div className="trust-item">
              <strong>Data Protection</strong>
              Encrypted in transit and at rest — we never ask for your login credentials
            </div>
          </div>
        </div>
      </section>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="sticky-cta">
        <a href="#session" className="btn btn-primary">
          Schedule My Goal-Mapping Session
        </a>
      </div>
    </div>

    {/* ===== WEBSITE FOOTER (Rendered outside mkt-page with natural site styles) ===== */}
    <div className="mkt-footer-area">
      <Footer bg={true} margin={160} />
    </div>
  </>
);
}
