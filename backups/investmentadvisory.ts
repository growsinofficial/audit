"use client";

import Link from "next/link";
import { useState } from "react";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";

/* ---------- Pricing component ---------- */
const Pricing = () => {
  const [time] = useState("month");

  return (
    <div className="row justify-content-center">
      <div className="row mil-price-row">
        {/* Comprehensive Planning */}
        <div className="col-md-4 col-sm-6 price-col">
          <div className="mil-price-card mil-up mil-mb-30 w-100">
            <div className="mil-card-body">
              <h6 className="mil-mb-15">Comprehensive Planning</h6>
              <p className="mil-text-s mil-soft mil-mb-20">
                A complete financial roadmap for individuals and families.
              </p>

              <h4 className="mil-mb-20">
                ₹ <span className="mil-pricing-table-price">34,999</span>
                <span className="mil-sup-text mil-soft"> / one-time</span>
              </h4>

              {/* Buttons inline (bottom style but show near top on small) */}
              {/* <div className="pricing-buttons">
                <Link href="#plan-1" className="btn-flat no-anchor">
                  View Details
                </Link>
                <Link href="/register" className="btn-outline no-anchor">
                  Get Your Plan
                </Link>
              </div> */}

              <ul className="mil-text-mist mil-type-2 mil-check mil-text-s mil-soft mil-mb-30">
                <li>Financial Health Check</li>
                <li>Goal-Based Financial Planning</li>
                <li>Risk Management Planning</li>
                <li>Investment Planning</li>
                <li>Retirement &amp; Pension Planning</li>
                <li>Debt &amp; Credit Advisory</li>
              </ul>

              {/* View all features button - now solid green */}
              <a href="#." className="mil-cta-bottom mil-cta-green">
                View all features
              </a>
            </div>
          </div>
        </div>

        {/* Featured — Exclusive Wealth Management */}
        <div className="col-md-4 col-sm-6 price-col">
          <div className="mil-price-card mil-featured mil-up mil-mb-30 w-100">
            <div className="mil-ribbon">Recommended</div>

            <div className="mil-card-body featured-body">
              <h6 className="mil-light mil-mb-8">Exclusive Wealth Management</h6>
              <p className="mil-text-s mil-light mil-mb-8">Most Popular</p>
              <p className="mil-text-s mil-light mil-mb-20">
                Bespoke strategies for high-net-worth clients.
              </p>

              <h3 className="featured-title">Customized</h3>
              <p className="featured-sub">Preferred for &gt; ₹1 Cr Net Worth</p>

              {/* Single prominent CTA (green) */}
              {/* <div className="featured-cta-wrap">
                <Link href="/contact" className="btn-featured-cta no-anchor">
                  Talk to an Adviser
                </Link>
              </div> */}

              <ul className="mil-text-mist mil-type-2 mil-check mil-text-s mil-light mil-mb-30 featured-list">
                <li>Strategic Wealth Structuring</li>
                <li>Tactical Capital Growth &amp; Investment</li>
                <li>Global Diversification &amp; Offshore Planning</li>
                <li>Advanced Tax Planning &amp; Exit Strategy</li>
                <li>Legacy & Succession Planning</li>
                <li>Alternative &amp; Private Market Advisory</li>
                <li>Lifestyle, Concierge &amp; Philanthropy</li>
              </ul>

              <a href="#." className="mil-cta-bottom mil-cta-green featured-cta-small">
                View all features
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Rebalancing */}
        <div className="col-md-4 col-sm-6 price-col">
          <div className="mil-price-card mil-up mil-mb-30 w-100">
            <div className="mil-card-body">
              <h6 className="mil-mb-15">Portfolio Rebalancing</h6>
              <p className="mil-text-s mil-soft mil-mb-10">
                A one-time service to align your portfolio.
              </p>
              <p className="mil-text-s mil-soft mil-mb-10">
                ₹14,999 (up to ₹50L) / ₹24,999 (&gt; ₹50L)
              </p>
              <h4 className="mil-mb-20">
                ₹ <span className="mil-pricing-table-price">14,999</span>
                <span className="mil-sup-text mil-soft"> / one-time</span>
              </h4>

              {/* <div className="pricing-buttons">
                <Link href="#plan-3" className="btn-flat no-anchor">
                  View Details
                </Link>
                <Link href="/register" className="btn-outline no-anchor">
                  Rebalance My Portfolio
                </Link>
              </div> */}

              <ul className="mil-text-mist mil-type-2 mil-check mil-text-s mil-soft mil-mb-30">
                <li>In-depth Portfolio Analysis &amp; Risk Profiling</li>
                <li>Intrinsic Value Analysis (DCF Modeling)</li>
                <li>Asset Allocation using MPT</li>
                <li>Portfolio Optimization &amp; Gap Analysis</li>
                <li>Actionable Rebalancing Report</li>
                <li>Execution Guidance &amp; Support</li>
              </ul>

              <a href="#." className="mil-cta-bottom mil-cta-green">
                View all features
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .mil-price-row {
          align-items: stretch;
        }
        .price-col {
          display: flex;
        }

        .mil-price-card {
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: #fff;
        }
        .mil-card-body {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 28px 26px;
          color: #0f1724; /* default text color */
        }
        .mil-cta-bottom {
          margin-top: auto;
          display: inline-block;
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
        }

        /* Growsin green gradient for all "View all features" buttons */
        .mil-cta-green {
          background: linear-gradient(90deg,#2db34a,#12a64a);
          color: #ffffff !important;
          box-shadow: 0 10px 30px rgba(18,166,74,0.08);
        }
        .featured-cta-small {
          margin-top: 14px;
        }

        /* Buttons row used in left/right cards */
        .pricing-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 18px;
        }
        .btn-flat {
          background: transparent;
          border: none;
          color: #0f1724;
          padding: 8px 12px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
        }
        .btn-outline {
          background: transparent;
          border: 1px solid rgba(0,0,0,0.06);
          color: inherit;
          padding: 8px 12px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
        }
        .btn-flat:hover,
        .btn-outline:hover {
          opacity: 0.95;
        }

        /* list + check styling used everywhere */
        .mil-type-2 {
          margin: 0;
          padding: 0;
          list-style: none;
          text-align: left; /* ensure left alignment */
        }
        .mil-type-2 li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 10px;
          line-height: 1.35;
          display: block;
        }
        /* green check icon aligned nicely */
        .mil-type-2 li::before {
          content: "✔";
          position: absolute;
          left: 0;
          top: 0;
          transform: translateY(2px);
          color: #12a64a; /* Growsin green */
          font-weight: 800;
          font-size: 14px;
          line-height: 1;
        }

        /* ------------------ FEATURED CARD ------------------ */
        .mil-featured {
          /* purple outline + subtle ring */
          border: 2px solid rgba(125,42,232,0.12);
          border-radius: 18px;
          background: linear-gradient(180deg, #002f6d 0%, #013a84 30%, #023b6f 100%);
          color: #fff;
          box-shadow: 0 18px 50px rgba(0,41,142,0.12);
        }

        /* make all featured card text white and lists lighten */
        .mil-featured .mil-card-body {
          color: #fff !important;
        }
        .mil-featured .mil-type-2 li {
          color: rgba(255,255,255,0.95);
        }
        .mil-featured .mil-type-2 li::before {
          color: #4ade80; /* lighter green for checks on dark bg */
        }

        /* angled ribbon in corner */
        .mil-ribbon {
          position: absolute;
          right: -42px;
          top: 8px;
          transform: rotate(45deg);
          background: linear-gradient(90deg, #7d2ae8, #175ee2);
          color: #fff;
          padding: 6px 64px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.6px;
          border-radius: 6px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.14);
        }

        /* featured content */
        .featured-body {
          color: #e9f1ff;
          align-items: center;
          text-align: center;
        }
        .featured-body h6,
        .featured-body p { margin: 0; }
        .featured-title {
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
          margin: 14px 0 6px 0;
        }
        .featured-sub {
          color: rgba(255,255,255,0.85);
          margin-bottom: 18px;
        }

        .featured-cta-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .btn-featured-cta {
          background: linear-gradient(90deg,#2db34a,#12a64a); /* Growsin green gradient for main CTA */
          color: #fff;
          padding: 12px 22px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(18,166,74,0.14);
          display: inline-block;
        }
        .btn-featured-cta:hover {
          transform: translateY(-2px);
        }

        .featured-list {
          color: rgba(255,255,255,0.9);
          margin-top: 6px;
          line-height: 1.8;
          text-align: left; /* keep list left-aligned on featured card */
        }
        .featured-view {
          color: #7ee38a;
          font-weight: 700;
          text-decoration: none;
          margin-top: 10px;
          display: inline-block;
        }

        /* tighten vertical spacing (you requested decreased gaps) */
        .mil-mb-30 { margin-bottom: 18px !important; }
        .mil-mb-20 { margin-bottom: 12px !important; }
        .mil-mb-15 { margin-bottom: 10px !important; }

        /* small helper: ensure Link doesn't render anchor conflicts in older Next versions */
        .no-anchor { display: inline-block; text-decoration: none; }

        @media (max-width: 991.98px) {
          .price-col { flex: 1 1 50%; }
        }
        @media (max-width: 575.98px) {
          .price-col { flex: 1 1 100%; }
          .mil-card-body { padding: 20px; }
          .mil-ribbon { right: -36px; padding: 6px 44px; }
          .featured-title { font-size: 22px; }
          .pricing-buttons { justify-content: space-between; gap: 8px; }
        }
      `}</style>
    </div>
  );
};

/* ---------- Page Shell ---------- */
const Page = () => {
  return (
    <PlaxLayout bg={false}>
      {/* banner */}
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">Investment Advisory</div>

                <h1 className="mil-mb-20">
                  Every Rupee You Earn Deserves a Clear Plan and a Confident Future.
                </h1>

                <p className="mil-text-m mil-soft mil-mb-30">
                  At <strong>Growsin</strong>, we believe financial planning is more than charts
                  and calculations — it’s about creating a meaningful, sustainable life.
                </p>

                <div className="mil-badge mil-up">
                  SEBI Registered • Fee-Only Advice • Personalized Plans • Backed by Research & Ethics
                </div>

                <ul className="mil-breadcrumbs mil-pub-info mil-center mil-mt-40">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/price">Pricing</Link></li>
                </ul>
              </div>
            </div>
          </div>  
        </div>
      </div>

      {/* pricing section */}
      <div className="mil-blog-list mil-p-0-130">
        <div className="container">
          <Pricing />
        </div>
      </div>

      <CallToAction2 />
    </PlaxLayout>
  );
};

export default Page;
