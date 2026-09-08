"use client";

import React from "react";
import PlaxLayout from "@/layouts/PlaxLayout";
import { PageBanner } from "@/components/Banner";

export default function DisclosuresPage() {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        pageName="Disclosures"
        title="Disclosures & Regulatory Information"
      />

      <div className="mil-blog-list mil-shell">
        <div className="container">
          {/* Compliance badge */}
          <div className="row">
            <div className="col-12 mil-mb-20">
              <div className="mil-badge">
                Published in line with SEBI guidelines • Updated Jun 2, 2025
              </div>
            </div>
          </div>

          {/* Registration Details */}
          <div className="row">
            <div className="col-12 mil-mb-10"><h5 className="mil-up">Registration Details</h5></div>

            <div className="col-12 col-lg-6 mil-mb-20">
              <div className="mil-card">
                <div className="mil-reg-grid">
                  <div><span className="mil-label">Name</span><strong>Murali Krishna</strong></div>
                  <div><span className="mil-label">SEBI Reg. No. (IA)</span><strong>INA000021261</strong></div>
                  <div><span className="mil-label">SEBI Reg. No. (RA)</span><strong>INH000023667</strong></div>
                  <div><span className="mil-label">Mode of Advisory</span><strong>Non-execution, fee-only</strong></div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 mil-mb-20">
              <div className="mil-card">
                <h6 className="mil-mb-10">Standard Disclaimer</h6>
                <p className="mil-text-m mil-soft mil-mb-10">
                  “Investments in securities markets are subject to market risks. Read all documents carefully before investing.”
                </p>
                <p className="mil-text-m mil-soft">
                  Advisory services are provided in good faith, based on research, without guarantees. The adviser shall not be liable for losses arising from the use of advice or information.
                </p>
              </div>
            </div>
          </div>

          {/* Affiliation Disclosure */}
          <div className="row">
            <div className="col-12 mil-mb-10"><h5>Affiliation Disclosure</h5></div>
            <div className="col-12 mil-mb-20">
              <div className="mil-card">
                <p className="mil-text-m mil-soft mil-mb-15">
                  I operate as an independent SEBI-registered IA & RA with no affiliations that impair objectivity or create conflicts of interest.
                </p>
                <ul className="mil-list">
                  <li>Not associated with brokers, distributors, AMCs, PMS, insurers, banks, NBFCs, or fintechs.</li>
                  <li>Do not receive commissions, referral fees, or incentives.</li>
                  <li>Do not offer execution or distribution services.</li>
                  <li>Services are 100% fee-only and conflict-free.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conflict of Interest Disclosure */}
          <div className="row">
            <div className="col-12 mil-mb-10"><h5>Conflict of Interest Disclosure</h5></div>
            <div className="col-12 mil-mb-20">
              <div className="mil-card">
                <p className="mil-text-m mil-soft mil-mb-15">
                  I have no conflicts of interest that compromise advice. Neither I, nor my family:
                </p>
                <ul className="mil-list">
                  <li>Hold 1%+ in any company I cover.</li>
                  <li>Have material financial interests in covered securities.</li>
                  <li>Serve as promoters, directors, or employees in covered firms.</li>
                  <li>Engage in market-making for recommended securities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compensation (RA) + Fee (IA) */}
          <div className="row">
            <div className="col-12 col-lg-6 mil-mb-20">
              <div className="mil-card">
                <h6 className="mil-mb-10">Compensation Disclosure (RA)</h6>
                <p className="mil-text-m mil-soft">
                  I have not received, nor expect to receive, compensation from companies covered in my reports. All research is self-funded, unbiased, and free from sponsorship.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mil-mb-20">
              <div className="mil-card">
                <h6 className="mil-mb-10">Fee Disclosure (IA)</h6>
                <ul className="mil-list">
                  <li>No commissions or incentives from any 3rd party.</li>
                  <li>No referral fees or brokerage sharing.</li>
                  <li>Fees pre-disclosed, collected only via banking channels.</li>
                  <li>Clients receive a signed agreement with fee schedule.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk & Privacy */}
          <div className="row">
            <div className="col-12 col-lg-6 mil-mb-20">
              <div className="mil-card">
                <h6 className="mil-mb-10">Risk Disclosure</h6>
                <ul className="mil-list">
                  <li>Investing involves risks, including loss of capital.</li>
                  <li>Markets fluctuate based on economic, political, and sentiment factors.</li>
                  <li>No guaranteed returns. Past performance ≠ future results.</li>
                  <li>Product-specific risks exist (equity, debt, global, etc.).</li>
                  <li>Client risk profiling is mandatory before advice.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 mil-mb-20">
              <div className="mil-card">
                <h6 className="mil-mb-10">Data Privacy Statement</h6>
                <p className="mil-text-m mil-soft">
                  I ensure confidentiality, secure storage, and consent-based usage of client data. No data is shared without explicit permission.
                </p>
              </div>
            </div>
          </div>

          {/* Grievance Redressal */}
          <div className="row" id="grievance">
            <div className="col-12 mil-mb-10"><h5>Grievance Redressal</h5></div>

            <div className="col-12 col-md-4 mil-mb-20">
              <a className="mil-cta" href="mailto:info@growsin.com">
                <span className="mil-cta-title">Direct Complaint</span>
                <span className="mil-cta-sub">Write to Compliance Officer: info@growsin.com</span>
              </a>
            </div>
            <div className="col-12 col-md-4 mil-mb-20">
              <a className="mil-cta" href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">
                <span className="mil-cta-title">SEBI SCORES</span>
                <span className="mil-cta-sub">If not resolved, lodge at scores.sebi.gov.in</span>
              </a>
            </div>
            <div className="col-12 col-md-4 mil-mb-20">
              <a className="mil-cta" href="https://smartodr.in" target="_blank" rel="noreferrer">
                <span className="mil-cta-title">SMART ODR</span>
                <span className="mil-cta-sub">For further dispute resolution, use smartodr.in</span>
              </a>
            </div>
          </div>

          {/* Footer note */}
          <div className="row">
            <div className="col-12 mil-mt-20">
              <p className="mil-text-xs mil-soft">Note: Disclosures updated periodically in line with regulations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page-scoped styles (keeps your UI) */}
      <style jsx>{`
        .mil-shell { padding-left: clamp(16px, 5vw, 160px); padding-right: clamp(16px, 5vw, 160px); }

        .mil-badge {
          display:inline-block; padding:8px 12px; border-radius:999px;
          background: linear-gradient(90deg, #175ee2 0%, #7d2ae8 100%);
          color:#fff; font-size:12px; font-weight:600; white-space:nowrap;
        }

        .mil-card {
          background:#fff; border:1px solid #e9ecef; border-radius:12px; padding:24px;
          transition: box-shadow .3s ease, transform .3s ease;
        }
        .mil-card:hover { box-shadow:0 8px 24px rgba(0,0,0,.06); transform: translateY(-2px); }

        .mil-reg-grid {
          display:grid; grid-template-columns: 1fr; gap:12px;
        }
        .mil-label { display:block; font-size:12px; color:#64748b; margin-bottom:4px; }

        .mil-list { padding-left: 18px; }
        .mil-list li { margin-bottom:8px; }

        .mil-cta {
          display:block; border:1px solid #e5e7eb; border-radius:12px; padding:16px 18px;
          background: linear-gradient(0deg, rgba(23,94,226,0.04), rgba(125,42,232,0.04));
          transition: transform .2s ease, box-shadow .2s ease;
          text-decoration:none; color:#0f172a;
        }
        .mil-cta:hover { transform: translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,.06); background:#fff; }
        .mil-cta-title { display:block; font-weight:700; }
        .mil-cta-sub { display:block; font-size:14px; color:#475569; margin-top:4px; }

        .mil-text-m { font-size:16px; line-height:1.6; }
        .mil-text-xs { font-size:12px; line-height:1.5; }
        .mil-soft { color:#666; opacity:.85; }
        .mil-mb-10 { margin-bottom:10px; }
        .mil-mb-20 { margin-bottom:20px; }
        .mil-mt-20 { margin-top:20px; }

        @media (min-width: 768px) {
          .mil-reg-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </PlaxLayout>
  );
}
